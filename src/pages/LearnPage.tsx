import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import { LessonCard } from '../components/learning/LessonCard'
import { QuestionCard } from '../components/learning/QuestionCard'
import { Button } from '../components/ui/Button'
import { ProgressBar } from '../components/ui/ProgressBar'
import { useGame } from '../contexts/GameContext'
import { languages, javaneseBasicLessons, sundaneseBasicLessons, batakBasicLessons, minangBasicLessons } from '../data/mockData'
import { Lesson, Question } from '../types'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

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
  const [showStreakPopup, setShowStreakPopup] = useState(false)
  const [prevStreak, setPrevStreak] = useState(0)

  const { userStats, completeLesson } = useGame()

  const congratsAudio = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (lessonComplete) {
      congratsAudio.current?.play()
    }
  }, [lessonComplete])

  // 1. Deteksi streak naik
  useEffect(() => {
    if (lessonComplete && userStats.streak > prevStreak) {
      const today = new Date().toISOString().split('T')[0] // format: YYYY-MM-DD
      const lastStreakPopup = localStorage.getItem('lastStreakPopupDate')

      if (lastStreakPopup !== today) {
        setShowStreakPopup(true)
        setPrevStreak(userStats.streak)
        localStorage.setItem('lastStreakPopupDate', today)
      } else {
        setPrevStreak(userStats.streak)
      }
    }
    if (userStats.streak < prevStreak) {
      setPrevStreak(userStats.streak)
    }
    // eslint-disable-next-line
  }, [lessonComplete, userStats.streak])

  // 2. Timer untuk menghilangkan popup
  useEffect(() => {
    if (showStreakPopup) {
      const timer = setTimeout(() => setShowStreakPopup(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [showStreakPopup])

  const currentLanguageData = languages.find(l => l.id === selectedLanguage)
  
  const getLessonsByLanguage = (languageId: string) => {
    switch (languageId) {
      case '1': // Javanese
        return javaneseBasicLessons
      case '2': // Sundanese
        return sundaneseBasicLessons
      case '3':
        return batakBasicLessons
      default:
        return minangBasicLessons // fallback
    }
  }

  const lessons = getLessonsByLanguage(selectedLanguage)

  useEffect(() => {
    // Reset current lesson when language changes
    setCurrentLesson(null)
    setCurrentQuestionIndex(0)
    setUserAnswers([])
    setShowResult(false)
    setLessonComplete(false)
    setScore(0)
  }, [selectedLanguage])

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
        completeLesson(`${selectedLanguage}-${currentLesson!.order}`, finalScore)
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

  const lessonsWithCompletion = lessons.map((lesson) => ({
    ...lesson,
    is_completed: userStats.completedLessons.includes(`${selectedLanguage}-${lesson.order}`)
  }))

  const lottieAnimations = [
    "https://lottie.host/57628413-d7ca-42b2-a454-ed7145315e94/vEPVEw0nui.lottie",
    "https://lottie.host/d3a6b51e-96b8-4933-8ca5-0ca5a6d9fedb/xee0KmTJ1m.lottie"
  ]

  // Pilih random hanya saat lessonComplete berubah menjadi true
  const [selectedLottie, setSelectedLottie] = useState(lottieAnimations[0])

  useEffect(() => {
    if (lessonComplete) {
      const randomIndex = Math.floor(Math.random() * lottieAnimations.length)
      setSelectedLottie(lottieAnimations[randomIndex])
    }
  }, [lessonComplete])

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
          <div className="text-6xl mb-4 w-[250px] h-[150px] mx-auto">
          <DotLottieReact
          src={selectedLottie}
          loop
          autoplay
        />
          </div>
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
        <audio ref={congratsAudio} src="/audio/congrats.mp3" />
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
                {language.pulau} {language.name}
              </button>
            ))}
          </div>
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessonsWithCompletion.map((lesson, index) => (
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

      {/* Popup Streak Animation */}
      <AnimatePresence>
          {showStreakPopup && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.4, type: 'spring' }}
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center">
                <div className="text-6xl mb-2">
                  <DotLottieReact
                    src="https://lottie.host/9047f95e-58f5-41ed-b34b-a68488514bf8/6DxqV8CaB6.lottie"
                    loop
                    autoplay
                    style={{ width: 120, height: 120 }}
                  />
                </div>
                <div className="text-3xl font-bold text-orange-500">Streak {userStats.streak}!</div>
                <div className="text-gray-600 mt-1">Keep it up!</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </div>
  )
}