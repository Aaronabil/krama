import React from 'react'
import { motion } from 'framer-motion'
import { Play, CheckCircle, Lock, Star } from 'lucide-react'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { Lesson } from '../../types'

interface LessonCardProps {
  lesson: Lesson
  isLocked: boolean
  onStart: (lesson: Lesson) => void
}

export const LessonCard: React.FC<LessonCardProps> = ({ lesson, isLocked, onStart }) => {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-800'
      case 'intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getDifficultyIcon = (level: string) => {
    switch (level) {
      case 'beginner': return '🌱'
      case 'intermediate': return '🌿'
      case 'advanced': return '🌳'
      default: return '📚'
    }
  }

  return (
    <Card 
      hover={!isLocked} 
      className={`p-6 ${isLocked ? 'opacity-60' : ''} relative overflow-hidden`}
    >
      <div className="absolute top-4 right-4">
        {lesson.is_completed ? (
          <CheckCircle className="h-6 w-6 text-green-500" />
        ) : isLocked ? (
          <Lock className="h-6 w-6 text-gray-400" />
        ) : (
          <div className="text-lg">{getDifficultyIcon(lesson.level)}</div>
        )}
      </div>

      <div className="mb-4">
        <div className="flex items-center mb-2">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(lesson.level)}`}>
            {lesson.level}
          </span>
          <div className="ml-2 flex items-center text-yellow-500">
            <Star className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">{lesson.xp_reward} XP</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{lesson.title}</h3>
        <p className="text-gray-600 text-sm">{lesson.description}</p>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">
          {lesson.questions.length} questions
        </span>
        <Button
          variant={lesson.is_completed ? "secondary" : "primary"}
          size="sm"
          onClick={() => onStart(lesson)}
          disabled={isLocked}
          className="flex items-center"
        >
          <Play className="h-4 w-4 mr-1" />
          {lesson.is_completed ? 'Review' : 'Start'}
        </Button>
      </div>
    </Card>
  )
}