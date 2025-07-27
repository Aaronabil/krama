import React from 'react'
import { motion } from 'framer-motion'
import { Home, BookOpen, Trophy, Settings, LogOut, User } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { useGame } from '../../contexts/GameContext'

interface NavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const { signOut, user } = useAuth()
  const { userStats } = useGame()

  const navItems = [
    { id: 'dashboard', label: 'Home', icon: Home },
    { id: 'learn', label: 'Learn', icon: BookOpen },
    { id: 'games', label: 'Games', icon: Trophy },
    { id: 'profile', label: 'Profile', icon: User },
  ]

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="text-2xl font-bold text-green-600">🦜 Basakrama</div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  activeTab === item.id
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="h-5 w-5 mr-2" />
                {item.label}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-semibold">
                {userStats.xp} XP
              </div>
              <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-semibold">
                Lv. {userStats.level}
              </div>
              <div className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full font-semibold">
                🔥 {userStats.streak}
              </div>
            </div>
            
            <motion.button
              onClick={signOut}
              className="flex items-center px-3 py-2 text-gray-600 hover:text-red-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LogOut className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="md:hidden border-t border-gray-200">
        <div className="flex justify-around py-2">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg ${
                activeTab === item.id
                  ? 'text-green-600'
                  : 'text-gray-600'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs mt-1">{item.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </nav>
  )
}