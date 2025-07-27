import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Star, Zap, Target, Calendar, Award } from 'lucide-react'
import { Card } from '../components/ui/Card'
import { ProgressBar } from '../components/ui/ProgressBar'
import { useAuth } from '../contexts/AuthContext'
import { useGame } from '../contexts/GameContext'
import { badges } from '../data/mockData'

interface ProfilePageProps {
  onNavigate: (page: string) => void
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ onNavigate }) => {
  const { user } = useAuth()
  const { userStats } = useGame()

  const achievements = badges.slice(0, 2) // Show earned badges (demo)
  const nextLevel = userStats.level + 1
  const xpForNextLevel = nextLevel * 100
  const xpProgress = ((userStats.xp % 100) / 100) * 100

  const statsData = [
    {
      label: 'Total XP',
      value: userStats.xp,
      icon: <Zap className="h-5 w-5" />,
      color: 'text-yellow-600 bg-yellow-100'
    },
    {
      label: 'Current Level',
      value: userStats.level,
      icon: <Star className="h-5 w-5" />,
      color: 'text-blue-600 bg-blue-100'
    },
    {
      label: 'Day Streak',
      value: userStats.streak,
      icon: <Target className="h-5 w-5" />,
      color: 'text-green-600 bg-green-100'
    },
    {
      label: 'Lessons Complete',
      value: userStats.completedLessons.length,
      icon: <Trophy className="h-5 w-5" />,
      color: 'text-purple-600 bg-purple-100'
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Profile Header */}
        <div className="text-center mb-12">
          <motion.div
            className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {user?.user_metadata?.full_name?.charAt(0) || user?.email?.charAt(0) || 'U'}
          </motion.div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {user?.user_metadata?.full_name || 'Language Learner'}
          </h1>
          <p className="text-gray-600">{user?.email}</p>
          <div className="mt-4">
            <span className="bg-gradient-to-r from-green-100 to-blue-100 text-green-800 px-4 py-2 rounded-full font-semibold">
              Level {userStats.level} Explorer
            </span>
          </div>
        </div>

        {/* Level Progress */}
        <Card className="p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900">Level Progress</h3>
            <span className="text-sm text-gray-600">{userStats.xp % 100}/100 XP</span>
          </div>
          <ProgressBar progress={xpProgress} color="green" />
          <p className="text-sm text-gray-600 mt-2">
            {100 - (userStats.xp % 100)} XP to reach Level {nextLevel}
          </p>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="p-6 text-center">
                <div className={`inline-flex p-3 rounded-full ${stat.color} mb-3`}>
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((badge, index) => (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="p-6">
                  <div className="flex items-center">
                    <div className="text-3xl mr-4">{badge.icon}</div>
                    <div>
                      <h4 className="font-bold text-gray-900">{badge.name}</h4>
                      <p className="text-sm text-gray-600">{badge.description}</p>
                      <span className={`inline-block mt-2 px-2 py-1 rounded-full text-xs font-semibold ${
                        badge.rarity === 'common' ? 'bg-gray-100 text-gray-800' :
                        badge.rarity === 'rare' ? 'bg-blue-100 text-blue-800' :
                        badge.rarity === 'epic' ? 'bg-purple-100 text-purple-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {badge.rarity}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Locked Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {badges.slice(2).map((badge, index) => (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
              >
                <Card className="p-6 opacity-60">
                  <div className="flex items-center">
                    <div className="text-3xl mr-4 grayscale">🔒</div>
                    <div>
                      <h4 className="font-bold text-gray-500">{badge.name}</h4>
                      <p className="text-sm text-gray-400">{badge.description}</p>
                      <span className="inline-block mt-2 px-2 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-500">
                        Locked
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Activity Summary */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-green-500 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Daily streak maintained</p>
                  <p className="text-sm text-gray-600">Keep it up! Current streak: {userStats.streak} days</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">Today</span>
            </div>
            
            <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
              <div className="flex items-center">
                <Trophy className="h-5 w-5 text-yellow-500 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Level up achieved</p>
                  <p className="text-sm text-gray-600">Reached Level {userStats.level}</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">2 days ago</span>
            </div>
            
            <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
              <div className="flex items-center">
                <Award className="h-5 w-5 text-purple-500 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">First badge earned</p>
                  <p className="text-sm text-gray-600">Completed your first lesson</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">1 week ago</span>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}