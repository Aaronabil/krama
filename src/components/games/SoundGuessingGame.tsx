import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, Play } from 'lucide-react'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { gameWords } from '../../data/mockData'

interface SoundGuessingGameProps {
  language: string
  onGameComplete: (score: number) => void
}

export const SoundGuessingGame: React.FC<SoundGuessingGameProps> = ({ language, onGameComplete }) => {
  const [currentWord, setCurrentWord] = useState('')
  const [options, setOptions] = useState<string[]>([])
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(60)
  const [gameActive, setGameActive] = useState(true)
  const [feedback, setFeedback] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const words = gameWords[language as keyof typeof gameWords] || gameWords.javanese

  useEffect(() => {
    generateNewQuestion()
  }, [])

  useEffect(() => {
    if (timeLeft > 0 && gameActive) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0) {
      setGameActive(false)
      onGameComplete(score)
    }
  }, [timeLeft, gameActive, score, onGameComplete])

  const generateNewQuestion = () => {
    const correctWord = words[Math.floor(Math.random() * words.length)]
    setCurrentWord(correctWord.word)
    
    // Generate options including correct answer
    const wrongOptions = words
      .filter(w => w.word !== correctWord.word)
      .slice(0, 3)
      .map(w => w.translation)
      
    const allOptions = [correctWord.translation, ...wrongOptions]
    setOptions(allOptions.sort(() => Math.random() - 0.5))
    setFeedback(null)
  }

  const playSound = () => {
    setIsPlaying(true)
    // In a real implementation, this would play the actual audio
    // For demo purposes, we'll just show a visual feedback
    setTimeout(() => {
      setIsPlaying(false)
    }, 1500)
  }

  const handleAnswer = (selectedTranslation: string) => {
    if (!gameActive) return
    
    const correctWord = words.find(w => w.word === currentWord)
    const isCorrect = selectedTranslation === correctWord?.translation
    
    if (isCorrect) {
      setScore(score + 20)
      setFeedback('Perfect! +20 points')
      setTimeout(() => {
        generateNewQuestion()
      }, 1500)
    } else {
      setFeedback(`Wrong! "${currentWord}" means "${correctWord?.translation}"`)
      setTimeout(() => {
        setFeedback(null)
      }, 2500)
    }
  }

  return (
    <Card className="p-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Sound Guessing</h2>
        <p className="text-gray-600">Listen carefully and choose the correct meaning!</p>
        
        <div className="flex justify-center items-center space-x-6 mt-4">
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
            Score: {score}
          </div>
          <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
            Time: {timeLeft}s
          </div>
        </div>
      </div>

      {gameActive ? (
        <>
          <div className="text-center mb-8">
            <motion.button
              onClick={playSound}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-full shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={isPlaying ? { scale: [1, 1.1, 1] } : {}}
              transition={isPlaying ? { duration: 0.5, repeat: 2 } : {}}
            >
              {isPlaying ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Volume2 className="h-12 w-12" />
                </motion.div>
              ) : (
                <Play className="h-12 w-12" />
              )}
            </motion.button>
            
            <p className="text-gray-600 mt-4">
              {isPlaying ? `Playing: "${currentWord}"` : 'Click to play the sound'}
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <AnimatePresence>
              {options.map((option, index) => (
                <motion.button
                  key={`${option}-${index}`}
                  onClick={() => handleAnswer(option)}
                  className="w-full p-4 text-left rounded-lg border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-lg font-medium">{option}</span>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              onClick={playSound}
              className="flex items-center mx-auto"
            >
              <Volume2 className="h-4 w-4 mr-2" />
              Play Again
            </Button>
          </div>

          <AnimatePresence>
            {feedback && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`mt-6 p-4 rounded-lg text-center ${
                  feedback.includes('Perfect') 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {feedback}
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <div className="text-center">
          <div className="text-6xl mb-4">🎵</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Game Over!</h3>
          <p className="text-xl text-gray-700 mb-4">Final Score: {score} points</p>
          <Button
            variant="primary"
            onClick={() => {
              setScore(0)
              setTimeLeft(60)
              setGameActive(true)
              generateNewQuestion()
            }}
          >
            Play Again
          </Button>
        </div>
      )}
    </Card>
  )
}