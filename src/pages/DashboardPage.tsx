import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Trophy, Zap, Target, TrendingUp, Award } from 'lucide-react'
import { StatsCard } from '../components/dashboard/StatsCard'
import { LanguageCard } from '../components/dashboard/LanguageCard'
import { useGame } from '../contexts/GameContext'
import { languages } from '../data/mockData'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface DashboardPageProps {
  onNavigate: (page: string, data?: any) => void
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ onNavigate }) => {
  const { userStats } = useGame()

  const handleStartLanguage = (languageId: string) => {
    onNavigate('learn', { languageId })
  }

  // Calculate progress for each language based on completed lessons
  const getLanguageProgress = (languageId: string) => {
    const language = languages.find(l => l.id === languageId)
    if (!language) return 0
    
    const completedCount = userStats.completedLessons.filter(l => l.startsWith(languageId)).length
    return (completedCount / language.total_lessons) * 100
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Welcome Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4 w-[200px] h-[100px] mx-auto">
          <DotLottieReact
      src="https://lottie.host/2fbea4bc-c867-4c9e-9238-3ab6bfafb291/qwrBbaSo6p.lottie"
      loop
      autoplay
    />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome back, Language Explorer!
          </h1>
          <p className="text-xl text-gray-600">
            Continue your journey learning Indonesian regional languages
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <StatsCard
              title="Total XP"
              value={userStats.xp}
              icon={<Zap className="h-6 w-6" />}
              color="orange"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <StatsCard
              title="Current Level"
              value={userStats.level}
              icon={<TrendingUp className="h-6 w-6" />}
              color="blue"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <StatsCard
              title="Day Streak"
              value={userStats.streak}
              icon={<Target className="h-6 w-6" />}
              color="green"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <StatsCard
              title="Lessons Done"
              value={userStats.completedLessons.length}
              icon={<BookOpen className="h-6 w-6" />}
              color="purple"
            />
          </motion.div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.button
            onClick={() => onNavigate('learn')}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <BookOpen className="h-8 w-8 mb-3" />
            <h3 className="text-xl font-bold mb-2">Continue Learning</h3>
            <p className="text-green-100">Pick up where you left off</p>
          </motion.button>

          <motion.button
            onClick={() => onNavigate('games')}
            className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Trophy className="h-8 w-8 mb-3" />
            <h3 className="text-xl font-bold mb-2">Play Games</h3>
            <p className="text-purple-100">Fun mini-games to practice</p>
          </motion.button>

          <motion.button
            onClick={() => onNavigate('profile')}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Award className="h-8 w-8 mb-3" />
            <h3 className="text-xl font-bold mb-2">View Achievements</h3>
            <p className="text-blue-100">Check your progress and badges</p>
          </motion.button>
        </div>

        {/* Languages Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Language</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {languages.map((language, index) => (
              <motion.div
                key={language.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <LanguageCard
                  language={language}
                  progress={getLanguageProgress(language.id)}
                  onStart={handleStartLanguage}
                  isPopular={language.id === '1'} // Javanese is popular
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Daily Goal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Daily Goal</h3>
              <p className="text-gray-600">Complete 3 lessons to maintain your streak!</p>
            </div>
            <div className="text-4xl">🎯</div>
          </div>
          <div className="mt-4 bg-white rounded-lg p-3">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Progress</span>
              <span>1/3 lessons</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '33%' }}
                transition={{ duration: 1, delay: 0.7 }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}