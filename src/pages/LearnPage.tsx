import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import { LessonCard } from '../components/learning/LessonCard'
import { QuestionCard } from '../components/learning/QuestionCard'
import { Button } from '../components/ui/Button'
import { ProgressBar } from '../components/ui/ProgressBar'
import { useGame } from '../contexts/GameContext'
import { languages, javaneseBasicLessons } from '../data/mockData'
import { Lesson, Question } from '../types'

interface LearnPageProps {
  initialData?: { languageId: string }
  onNavigate: (page: string) => void
}

export const LearnPage: React.FC<LearnPageProps> = ({ initialData, onNavigate }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(initialData?.languageId || '1')
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)
  const [lessonComplete, setLessonComplete] = useState(false)
  const [score, setScore] = useState(0)

  const { userStats, completeLesson } = useGame()

  const currentLanguageData = languages.find(l => l.id === selectedLanguage)
  const lessons = javaneseBasicLessons // In real app, filter by language

  const handleStartLesson = (lesson: Lesson) => {
    setCurrentLesson(lesson)
    setCurrentQuestionIndex(0)
    setUserAnswers([])
    setShowResult(false)
    setLessonComplete(false)
    setScore(0)
  }

  const handleAnswer = (answer: string, isCorrect: boolean) => {
    if (showResult) return

    const newAnswers = [...userAnswers, answer]
    setUserAnswers(newAnswers)
    setShowResult(true)
    
    if (isCorrect) {
      setScore(score + 1)
    }

    // Auto advance after showing result
    setTimeout(() => {
      if (currentQuestionIndex < currentLesson!.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setShowResult(false)
      } else {
        // Lesson complete
        const finalScore = isCorrect ? score + 1 : score
        completeLesson(currentLesson!.id, finalScore)
        setLessonComplete(true)
      }
    }, 2000)
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentLesson!.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setShowResult(false)
    }
  }

  const handleReturnToLessons = () => {
    setCurrentLesson(null)
    setCurrentQuestionIndex(0)
    setUserAnswers([])
    setShowResult(false)
    setLessonComplete(false)
    setScore(0)
  }

  const isLessonLocked = (lessonOrder: number) => {
    if (lessonOrder === 1) return false
    return !userStats.completedLessons.includes(`${selectedLanguage}-${lessonOrder - 1}`)
  }

  if (currentLesson && !lessonComplete) {
    const currentQuestion = currentLesson.questions[currentQuestionIndex]
    const progress = ((currentQuestionIndex + 1) / currentLesson.questions.length) * 100

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Button
              variant="ghost"
              onClick={handleReturnToLessons}
              className="flex items-center"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Lessons
            </Button>
            
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900">{currentLesson.title}</h1>
              <p className="text-gray-600">Question {currentQuestionIndex + 1} of {currentLesson.questions.length}</p>
            </div>
            
            <div className="text-right">
              <div className="text-sm text-gray-600">Score</div>
              <div className="text-2xl font-bold text-green-600">{score}/{currentLesson.questions.length}</div>
            </div>
          </div>

          {/* Progress Bar */}
          <ProgressBar progress={progress} className="mb-8" color="blue" />

          {/* Question */}
          <QuestionCard
            question={currentQuestion}
            onAnswer={handleAnswer}
            showResult={showResult}
            userAnswer={userAnswers[currentQuestionIndex] || ''}
          />
        </div>
      </div>
    )
  }

  if (lessonComplete) {
    const percentage = Math.round((score / currentLesson!.questions.length) * 100)
    const xpEarned = Math.round(percentage * 0.1 * currentLesson!.xp_reward)

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-4 text-center"
        >
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Lesson Complete!</h2>
          <p className="text-gray-600 mb-6">Great job completing "{currentLesson!.title}"</p>
          
          <div className="space-y-4 mb-8">
            <div className="bg-green-100 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-800">{percentage}%</div>
              <div className="text-green-600">Accuracy</div>
            </div>
            
            <div className="bg-yellow-100 rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-800">+{xpEarned} XP</div>
              <div className="text-yellow-600">Experience Earned</div>
            </div>
          </div>
          
          <div className="space-y-3">
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={handleReturnToLessons}
            >
              Continue Learning
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => onNavigate('dashboard')}
            >
              Back to Dashboard
            </Button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Learn {currentLanguageData?.name}</h1>
          <p className="text-xl text-gray-600">{currentLanguageData?.description}</p>
        </div>

        {/* Language Selection */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-2 shadow-lg flex space-x-2">
            {languages.map((language) => (
              <button
                key={language.id}
                onClick={() => setSelectedLanguage(language.id)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedLanguage === language.id
                    ? 'bg-green-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {language.flag} {language.name}
              </button>
            ))}
          </div>
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson, index) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <LessonCard
                lesson={lesson}
                isLocked={isLessonLocked(lesson.order)}
                onStart={handleStartLesson}
              />
            </motion.div>
          ))}
        </div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12 p-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl"
        >
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">More Lessons Coming Soon!</h3>
          <p className="text-gray-600">We're working on adding more content to help you master {currentLanguageData?.name}</p>
        </motion.div>
      </motion.div>
    </div>
  )
}