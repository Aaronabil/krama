import React from 'react'
import { motion } from 'framer-motion'

interface ProgressBarProps {
  progress: number
  className?: string
  color?: 'green' | 'blue' | 'orange' | 'purple'
  showPercentage?: boolean
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress, 
  className = '', 
  color = 'green',
  showPercentage = false 
}) => {
  const colors = {
    green: 'bg-green-500',
    blue: 'bg-blue-500',
    orange: 'bg-orange-500',
    purple: 'bg-purple-500'
  }
  
  return (
    <div className={`relative ${className}`}>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <motion.div
          className={`h-full ${colors[color]} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
      {showPercentage && (
        <span className="absolute right-0 top-4 text-sm text-gray-600">
          {Math.round(progress)}%
        </span>
      )}
    </div>
  )
}