import React from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = false, onClick }) => {
  const baseClasses = 'bg-white rounded-xl shadow-lg border border-gray-100'
  const hoverClasses = hover ? 'hover:shadow-xl transition-all duration-300 cursor-pointer' : ''
  const classes = `${baseClasses} ${hoverClasses} ${className}`
  
  const MotionDiv = onClick ? motion.div : 'div'
  
  return (
    <MotionDiv
      className={classes}
      onClick={onClick}
      whileHover={hover ? { scale: 1.02, y: -2 } : {}}
      whileTap={hover ? { scale: 0.98 } : {}}
    >
      {children}
    </MotionDiv>
  )
}