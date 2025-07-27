import React, { createContext, useContext, useState, useCallback } from 'react'
import { User } from '../types'

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

export const useGame = () => {
  const context = useContext(GameContext)
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider')
  }
  return context
}

const calculateLevel = (xp: number): number => {
  return Math.floor(xp / 100) + 1
}

const getStoredStats = (): UserStats => {
  const stored = localStorage.getItem('userStats')
  if (stored) {
    return JSON.parse(stored)
  }
  return {
    xp: 0,
    level: 1,
    streak: 0,
    completedLessons: [],
    badges: [],
    lastActiveDate: new Date().toISOString().split('T')[0]
  }
}

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userStats, setUserStats] = useState<UserStats>(getStoredStats)

  const saveStats = useCallback((stats: UserStats) => {
    localStorage.setItem('userStats', JSON.stringify(stats))
    setUserStats(stats)
  }, [])

  const updateXP = useCallback((amount: number) => {
    setUserStats(prev => {
      const newXP = prev.xp + amount
      const newLevel = calculateLevel(newXP)
      const newStats = { ...prev, xp: newXP, level: newLevel }
      localStorage.setItem('userStats', JSON.stringify(newStats))
      return newStats
    })
  }, [])

  const updateStreak = useCallback(() => {
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
      localStorage.setItem('userStats', JSON.stringify(newStats))
      return newStats
    })
  }, [])

  const completeLesson = useCallback((lessonId: string, score: number) => {
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
      
      localStorage.setItem('userStats', JSON.stringify(newStats))
      return newStats
    })
    updateStreak()
  }, [updateStreak])

  const resetStats = useCallback(() => {
    const initialStats: UserStats = {
      xp: 0,
      level: 1,
      streak: 0,
      completedLessons: [],
      badges: [],
      lastActiveDate: new Date().toISOString().split('T')[0]
    }
    saveStats(initialStats)
  }, [saveStats])

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