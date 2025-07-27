import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { gameWords } from '../../data/mockData'

interface Bubble {
  id: string
  word: string
  translation: string
  x: number
  y: number
  isCorrect: boolean
}

interface BubbleWordGameProps {
  language: string
  onGameComplete: (score: number) => void
}

export const BubbleWordGame: React.FC<BubbleWordGameProps> = ({ language, onGameComplete }) => {
  const [bubbles, setBubbles] = useState<Bubble[]>([])
  const [currentTarget, setCurrentTarget] = useState('')
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(45)
  const [gameActive, setGameActive] = useState(true)
  const [feedback, setFeedback] = useState<string | null>(null)

  const words = gameWords[language as keyof typeof gameWords] || gameWords.javanese

  useEffect(() => {
    generateBubbles()
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

  const generateBubbles = () => {
    const targetWord = words[Math.floor(Math.random() * words.length)]
    setCurrentTarget(targetWord.translation)
    
    // Create bubbles with correct answer and decoys
    const correctBubble: Bubble = {
      id: '1',
      word: targetWord.word,
      translation: targetWord.translation,
      x: Math.random() * 300 + 50,
      y: Math.random() * 200 + 50,
      isCorrect: true
    }

    const decoyBubbles: Bubble[] = words
      .filter(w => w.word !== targetWord.word)
      .slice(0, 3)
      .map((word, index) => ({
        id: `${index + 2}`,
        word: word.word,
        translation: word.translation,
        x: Math.random() * 300 + 50,
        y: Math.random() * 200 + 50,
        isCorrect: false
      }))

    setBubbles([correctBubble, ...decoyBubbles].sort(() => Math.random() - 0.5))
    setFeedback(null)
  }

  const handleBubbleClick = (bubble: Bubble) => {
    if (!gameActive) return

    if (bubble.isCorrect) {
      setScore(score + 15)
      setFeedback('Correct! +15 points')
      setTimeout(() => {
        generateBubbles()
      }, 1000)
    } else {
      setFeedback(`Wrong! That means "${bubble.translation}"`)
      setTimeout(() => {
        setFeedback(null)
      }, 2000)
    }
  }

  return (
    <Card className="p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Bubble Word</h2>
        <p className="text-gray-600">Pop the bubble with the correct word!</p>
        
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
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4">
              <p className="text-lg text-gray-700">
                Find the word for: <span className="font-bold text-purple-700 text-xl">"{currentTarget}"</span>
              </p>
            </div>
          </div>

          <div className="relative bg-gradient-to-b from-blue-100 to-blue-200 rounded-xl h-80 overflow-hidden mb-6">
            <AnimatePresence>
              {bubbles.map((bubble) => (
                <motion.button
                  key={bubble.id}
                  onClick={() => handleBubbleClick(bubble)}
                  className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 text-white font-bold shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center text-sm"
                  style={{ left: bubble.x, top: bubble.y }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1,
                    y: [0, -10, 0, -5, 0]
                  }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ 
                    duration: 0.5,
                    y: { 
                      duration: 3, 
                      repeat: Infinity, 
                      repeatType: "reverse" 
                    }
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {bubble.word}
                </motion.button>
              ))}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {feedback && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`text-center p-4 rounded-lg ${
                  feedback.includes('Correct') 
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
          <div className="text-6xl mb-4">🎈</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Game Over!</h3>
          <p className="text-xl text-gray-700 mb-4">Final Score: {score} points</p>
          <Button
            variant="primary"
            onClick={() => {
              setScore(0)
              setTimeLeft(45)
              setGameActive(true)
              generateBubbles()
            }}
          >
            Play Again
          </Button>
        </div>
      )}
    </Card>
  )
}