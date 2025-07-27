import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '../ui/Card'

interface StatsCardProps {
  title: string
  value: string | number
  icon: React.ReactNode
  color: 'green' | 'blue' | 'orange' | 'purple'
  trend?: {
    value: number
    label: string
  }
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, color, trend }) => {
  const colorClasses = {
    green: 'bg-green-100 text-green-600',
    blue: 'bg-blue-100 text-blue-600',
    orange: 'bg-orange-100 text-orange-600',
    purple: 'bg-purple-100 text-purple-600'
  }

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <motion.p 
            className="text-3xl font-bold text-gray-900 mt-1"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {value}
          </motion.p>
          {trend && (
            <p className="text-sm text-gray-500 mt-1">{trend.label}</p>
          )}
        </div>
        <motion.div
          className={`p-3 rounded-full ${colorClasses[color]}`}
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ duration: 0.2 }}
        >
          {icon}
        </motion.div>
      </div>
    </Card>
  )
}