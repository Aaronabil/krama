import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Puzzle, Music, Zap } from 'lucide-react'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { WordConnectGame } from '../components/games/WordConnectGame'
import { BubbleWordGame } from '../components/games/BubbleWordGame'
import { SoundGuessingGame } from '../components/games/SoundGuessingGame'
import { useGame } from '../contexts/GameContext'
import { languages } from '../data/mockData'

interface GamesPageProps {
  onNavigate: (page: string) => void
}

type GameType = 'menu' | 'word_connect' | 'bubble_word' | 'sound_guessing'

export const GamesPage: React.FC<GamesPageProps> = ({ onNavigate }) => {
  const [currentGame, setCurrentGame] = useState<GameType>('menu')
  const [selectedLanguage, setSelectedLanguage] = useState('javanese')
  const { updateXP } = useGame()

  const games = [
    {
      id: 'word_connect',
      title: 'Word Connect',
      description: 'Connect scattered letters to form valid words',
      icon: <Puzzle className="h-8 w-8" />,
      color: 'from-blue-500 to-blue-600',
      difficulty: 'Easy'
    },
    {
      id: 'bubble_word',
      title: 'Bubble Word',
      description: 'Pop bubbles containing correct word translations',
      icon: <Zap className="h-8 w-8" />,
      color: 'from-purple-500 to-purple-600',
      difficulty: 'Medium'
    },
    {
      id: 'sound_guessing',
      title: 'Sound Guessing',
      description: 'Listen to audio and guess the correct meaning',
      icon: <Music className="h-8 w-8" />,
      color: 'from-green-500 to-green-600',
      difficulty: 'Hard'
    }
  ]

  const handleGameComplete = (score: number) => {
    updateXP(score * 2) // Double XP for games
    setTimeout(() => {
      setCurrentGame('menu')
    }, 3000)
  }

  const handleStartGame = (gameId: string) => {
    setCurrentGame(gameId as GameType)
  }

  const handleBackToMenu = () => {
    setCurrentGame('menu')
  }

  if (currentGame === 'word_connect') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <Button
              variant="ghost"
              onClick={handleBackToMenu}
              className="flex items-center"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Games
            </Button>
          </div>
          <WordConnectGame
            language={selectedLanguage}
            onGameComplete={handleGameComplete}
          />
        </div>
      </div>
    )
  }

  if (currentGame === 'bubble_word') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <Button
              variant="ghost"
              onClick={handleBackToMenu}
              className="flex items-center"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Games
            </Button>
          </div>
          <BubbleWordGame
            language={selectedLanguage}
            onGameComplete={handleGameComplete}
          />
        </div>
      </div>
    )
  }

  if (currentGame === 'sound_guessing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <Button
              variant="ghost"
              onClick={handleBackToMenu}
              className="flex items-center"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Games
            </Button>
          </div>
          <SoundGuessingGame
            language={selectedLanguage}
            onGameComplete={handleGameComplete}
          />
        </div>
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
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🎮</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Mini Games</h1>
          <p className="text-xl text-gray-600">Fun and interactive games to practice your language skills</p>
        </div>

        {/* Language Selection */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-2 shadow-lg flex space-x-2">
            {languages.map((language) => (
              <button
                key={language.id}
                onClick={() => setSelectedLanguage(language.code)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedLanguage === language.code
                    ? 'bg-purple-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {language.pulau} {language.name}
              </button>
            ))}
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card hover className="p-8 text-center relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    game.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                    game.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {game.difficulty}
                  </span>
                </div>
                
                <motion.div
                  className={`inline-flex p-4 rounded-full bg-gradient-to-r ${game.color} text-white mb-4`}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {game.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{game.title}</h3>
                <p className="text-gray-600 mb-6">{game.description}</p>
                
                <Button
                  variant="primary"
                  onClick={() => handleStartGame(game.id)}
                  className="w-full"
                >
                  Play Now
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Game Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-8"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Game Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🧠</div>
                <h4 className="font-semibold text-gray-900">Improve Memory</h4>
                <p className="text-gray-600 text-sm">Enhance vocabulary retention through interactive gameplay</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="font-semibold text-gray-900">Quick Thinking</h4>
                <p className="text-gray-600 text-sm">Develop faster word recognition and comprehension</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="font-semibold text-gray-900">Double XP</h4>
                <p className="text-gray-600 text-sm">Earn bonus experience points while having fun</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}