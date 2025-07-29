import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, CheckCircle, XCircle } from 'lucide-react'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { Question } from '../../types'

interface QuestionCardProps {
  question: Question
  onAnswer: (answer: string, isCorrect: boolean) => void
  showResult: boolean
  userAnswer: string
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ 
  question, 
  onAnswer, 
  showResult, 
  userAnswer 
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [draggedItems, setDraggedItems] = useState<string[]>([])

  const correctAudio = useRef<HTMLAudioElement | null>(null)
  const incorrectAudio = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (!userAnswer) return
    if (userAnswer === question.correct_answer) {
      correctAudio.current?.play()
    } else {
      incorrectAudio.current?.play()
    }
  }, [userAnswer, question.correct_answer])

  const handleMultipleChoice = (answer: string) => {
    if (showResult) return
    setSelectedAnswer(answer)
    const isCorrect = answer === question.correct_answer
    onAnswer(answer, isCorrect)
  }

  const handleDragDrop = (item: string) => {
    if (showResult) return
    const newDraggedItems = [...draggedItems, item]
    setDraggedItems(newDraggedItems)
    
    // Simple drag-drop logic for demo
    const isCorrect = question.correct_answer.includes(item)
    onAnswer(item, isCorrect)
  }

  const handleFillBlank = (answer: string) => {
    if (showResult) return
    const isCorrect = answer.toLowerCase() === question.correct_answer.toLowerCase()
    onAnswer(answer, isCorrect)
  }

  const renderQuestion = () => {
    switch (question.type) {
      case 'multiple_choice':
        return (
          <div className="space-y-3">
            {question.options?.map((option, index) => (
              <motion.button
                key={index}
                onClick={() => handleMultipleChoice(option)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  showResult
                    ? option === question.correct_answer
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : option === userAnswer && option !== question.correct_answer
                      ? 'border-red-500 bg-red-50 text-red-700'
                      : 'border-gray-200 bg-gray-50'
                    : selectedAnswer === option
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
                whileHover={!showResult ? { scale: 1.02 } : {}}
                whileTap={!showResult ? { scale: 0.98 } : {}}
                disabled={showResult}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showResult && option === question.correct_answer && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                  {showResult && option === userAnswer && option !== question.correct_answer && (
                    <XCircle className="h-5 w-5 text-red-500" />
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        )

      case 'drag_drop':
        return (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3 mb-4">
              {question.options?.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleDragDrop(item)}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={showResult || draggedItems.includes(item)}
                >
                  {item}
                </motion.button>
              ))}
            </div>
            <div className="min-h-20 border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-wrap gap-2">
              {draggedItems.map((item, index) => (
                <span key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )

      case 'fill_blank':
        return (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {question.options?.map((option, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleFillBlank(option)}
                  className={`px-4 py-2 rounded-lg border-2 transition-all ${
                    showResult
                      ? option === question.correct_answer
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-200 bg-gray-50'
                      : 'border-blue-500 bg-blue-50 hover:bg-blue-100'
                  }`}
                  whileHover={!showResult ? { scale: 1.05 } : {}}
                  whileTap={!showResult ? { scale: 0.95 } : {}}
                  disabled={showResult}
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </div>
        )

      default:
        return <div>Question type not supported yet</div>
    }
  }

  return (
    <Card className="p-8 max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{question.question}</h2>
        {question.audio_url && (
          <Button
            variant="ghost"
            size="sm"
            className="mt-2 flex items-center"
            onClick={() => {
              // Audio playback would be implemented here
              console.log('Playing audio:', question.audio_url)
            }}
          >
            <Volume2 className="h-4 w-4 mr-2" />
            Play Audio
          </Button>
        )}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderQuestion()}
        </motion.div>
      </AnimatePresence>

      {showResult && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`mt-6 p-4 rounded-lg ${
            userAnswer === question.correct_answer
              ? 'bg-green-50 border border-green-200'
              : 'bg-red-50 border border-red-200'
          }`}
        >
          <div className="flex items-center">
            {userAnswer === question.correct_answer ? (
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            ) : (
              <XCircle className="h-5 w-5 text-red-500 mr-2" />
            )}
            <span className={`font-semibold ${
              userAnswer === question.correct_answer ? 'text-green-700' : 'text-red-700'
            }`}>
              {userAnswer === question.correct_answer ? 'Correct!' : 'Incorrect'}
            </span>
          </div>
          {userAnswer !== question.correct_answer && (
            <p className="text-red-600 mt-2">
              The correct answer is: <strong>{question.correct_answer}</strong>
            </p>
          )}
        </motion.div>
      )}
      <audio ref={correctAudio} src="/audio/correctsound.mp3" />
      <audio ref={incorrectAudio} src="/audio/incorrect.mp3" />
    </Card>
  )
}