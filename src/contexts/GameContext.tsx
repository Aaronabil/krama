import React, { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { User } from '../types'
import { useAuth } from './AuthContext'
import { supabase } from '../lib/supabase'

interface GameContextType {
  userStats: UserStats
  updateXP: (amount: number) => void
  updateStreak: () => void
  completeLesson: (lessonId: string, score: number) => void
  resetStats: () => void
}

interface UserStats {
  xp: number
  level: number
  streak: number
  completedLessons: string[]
  badges: string[]
  lastActiveDate: string
}

const GameContext = createContext<GameContextType | undefined>(undefined)

const calculateLevel = (xp: number): number => {
  return Math.floor(xp / 100) + 1
}

// Perbaiki loadFromDatabase dengan logging lebih detail
const loadFromDatabase = async (userId: string): Promise<UserStats> => {
  try {
    console.log('🔍 Loading from database for user:', userId)
    
    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(1)

    console.log('📊 Database query result:', { data, error, dataLength: data?.length })

    if (error) {
      console.error('❌ Database error:', error)
    }

    if (!data || data.length === 0) {
      console.log('🆕 No data in database, creating new record')
      const initialStats: UserStats = {
        xp: 0,
        level: 1,
        streak: 0,
        completedLessons: [],
        badges: [],
        lastActiveDate: new Date().toISOString().split('T')[0]
      }
      
      // Create new record in database
      const { error: insertError } = await supabase
        .from('user_progress')
        .insert({
          user_id: userId,
          xp: initialStats.xp,
          level: initialStats.level,
          streak: initialStats.streak,
          completed_lessons: initialStats.completedLessons,
          badges: initialStats.badges,
          last_active_date: initialStats.lastActiveDate
        })

      console.log(' Insert result:', { insertError })

      if (insertError) {
        console.error('❌ Error creating user progress:', insertError)
      }
      
      return initialStats
    }

    const dbStats = data[0]
    console.log('📋 Raw database record:', dbStats)
    
    const stats: UserStats = {
      xp: dbStats.xp,
      level: dbStats.level,
      streak: dbStats.streak,
      completedLessons: dbStats.completed_lessons || [],
      badges: dbStats.badges || [],
      lastActiveDate: dbStats.last_active_date
    }

    console.log('✅ Processed stats from database:', stats)
    return stats
  } catch (error) {
    console.error('❌ Error in loadFromDatabase:', error)
    // Fallback to initial stats
    return {
      xp: 0,
      level: 1,
      streak: 0,
      completedLessons: [],
      badges: [],
      lastActiveDate: new Date().toISOString().split('T')[0]
    }
  }
}

// Perbaiki saveToDatabase untuk handle error dengan lebih baik
const saveToDatabase = async (userId: string, stats: UserStats) => {
  try {
    console.log(' Saving to database for user:', userId)
    console.log('📊 Stats to save:', stats)
    
    // Cek apakah record sudah ada
    const { data: existingData } = await supabase
      .from('user_progress')
      .select('id')
      .eq('user_id', userId)
      .limit(1)

    console.log('🔍 Existing data check:', existingData)

    if (existingData && existingData.length > 0) {
      // Update existing record
      const { data, error } = await supabase
        .from('user_progress')
        .update({
          xp: stats.xp,
          level: stats.level,
          streak: stats.streak,
          completed_lessons: stats.completedLessons,
          badges: stats.badges,
          last_active_date: stats.lastActiveDate
        })
        .eq('user_id', userId)
        .select()

      console.log(' Update result:', { data, error })

      if (error) {
        console.error('❌ Error updating database:', error)
        throw error
      } else {
        console.log('✅ Successfully updated database:', data)
      }
    } else {
      // Insert new record
      const { data, error } = await supabase
        .from('user_progress')
        .insert({
          user_id: userId,
          xp: stats.xp,
          level: stats.level,
          streak: stats.streak,
          completed_lessons: stats.completedLessons,
          badges: stats.badges,
          last_active_date: stats.lastActiveDate
        })
        .select()

      console.log(' Insert result:', { data, error })

      if (error) {
        console.error('❌ Error inserting to database:', error)
        throw error
      } else {
        console.log('✅ Successfully inserted to database:', data)
      }
    }
  } catch (error) {
    console.error('❌ Error in saveToDatabase:', error)
    // Fallback: simpan ke localStorage sebagai backup
    localStorage.setItem(`userStats_${userId}`, JSON.stringify(stats))
  }
}

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth()
  const [userStats, setUserStats] = useState<UserStats>({
    xp: 0,
    level: 1,
    streak: 0,
    completedLessons: [],
    badges: [],
    lastActiveDate: new Date().toISOString().split('T')[0]
  })

  useEffect(() => {
    if (user) {
      console.log('User logged in:', user.id)
      loadFromDatabase(user.id).then(setUserStats)
    } else {
      console.log('User logged out')
      setUserStats({
        xp: 0,
        level: 1,
        streak: 0,
        completedLessons: [],
        badges: [],
        lastActiveDate: new Date().toISOString().split('T')[0]
      })
    }
  }, [user])

  const updateXP = useCallback(async (amount: number) => {
    if (!user) return
    
    setUserStats(prev => {
      const newXP = prev.xp + amount
      const newLevel = calculateLevel(newXP)
      const newStats = { ...prev, xp: newXP, level: newLevel }
      
      // Save to database
      saveToDatabase(user.id, newStats)
      
      return newStats
    })
  }, [user])

  const updateStreak = useCallback(async () => {
    if (!user) return
    
    const today = new Date().toISOString().split('T')[0]
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
    
    setUserStats(prev => {
      let newStreak = prev.streak
      
      if (prev.lastActiveDate === yesterday) {
        newStreak = prev.streak + 1
      } else if (prev.lastActiveDate !== today) {
        newStreak = 1
      }
      
      const newStats = { ...prev, streak: newStreak, lastActiveDate: today }
      
      // Save to database
      saveToDatabase(user.id, newStats)
      
      return newStats
    })
  }, [user])

  const completeLesson = useCallback(async (lessonId: string, score: number) => {
    if (!user) return
    
    console.log('Completing lesson for user:', user.id, 'Lesson:', lessonId, 'Score:', score)
    
    setUserStats(prev => {
      const xpGain = Math.floor(score * 10)
      const newXP = prev.xp + xpGain
      const newLevel = calculateLevel(newXP)
      const completedLessons = prev.completedLessons.includes(lessonId) 
        ? prev.completedLessons 
        : [...prev.completedLessons, lessonId]
      
      const newStats = {
        ...prev,
        xp: newXP,
        level: newLevel,
        completedLessons
      }
      
      console.log('New stats after lesson completion:', newStats)
      
      // Save to database
      saveToDatabase(user.id, newStats)
      
      return newStats
    })
    
    updateStreak()
  }, [user, updateStreak])

  const resetStats = useCallback(async () => {
    if (!user) return
    
    const initialStats: UserStats = {
      xp: 0,
      level: 1,
      streak: 0,
      completedLessons: [],
      badges: [],
      lastActiveDate: new Date().toISOString().split('T')[0]
    }
    
    setUserStats(initialStats)
    saveToDatabase(user.id, initialStats)
  }, [user])

  const value = {
    userStats,
    updateXP,
    updateStreak,
    completeLesson,
    resetStats
  }

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  )
}

export const useGame = () => {
  const context = useContext(GameContext)
  if (!context) {
    throw new Error('useGame must be used within a GameProvider')
  }
  return context
}