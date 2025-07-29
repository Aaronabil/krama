import React from 'react'
import { motion } from 'framer-motion'
import { Play, Star } from 'lucide-react'
import { Card } from '../ui/Card'
import { ProgressBar } from '../ui/ProgressBar'
import { Button } from '../ui/Button'
import { Language } from '../../types'

interface LanguageCardProps {
  language: Language
  progress: number
  onStart: (languageId: string) => void
  isPopular?: boolean
}

export const LanguageCard: React.FC<LanguageCardProps> = ({ 
  language, 
  progress, 
  onStart, 
  isPopular = false 
}) => {
  return (
    <Card hover className="p-6 relative overflow-hidden">
      {isPopular && (
        <div className="absolute top-4 right-4">
          <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
            <Star className="h-3 w-3 mr-1" />
            Popular
          </div>
        </div>
      )}
      
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="text-3xl mb-2">{language.pulau}</div>
          <h3 className="text-xl font-bold text-gray-900">{language.name}</h3>
          <p className="text-gray-600 text-sm mt-1">{language.description}</p>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <ProgressBar progress={progress} color="green" />
      </div>
      
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">
          {language.total_lessons} lessons
        </span>
        <Button
          variant="primary"
          size="sm"
          onClick={() => onStart(language.id)}
          className="flex items-center"
        >
          <Play className="h-4 w-4 mr-1" />
          {progress > 0 ? 'Continue' : 'Start'}
        </Button>
      </div>
    </Card>
  )
}