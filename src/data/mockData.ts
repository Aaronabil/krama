import { Language, Lesson, Badge } from '../types'

export const languages: Language[] = [
  {
    id: '1',
    name: 'Javanese',
    code: 'jv',
    flag: '🇮🇩',
    description: 'Learn the most widely spoken regional language in Indonesia',
    total_lessons: 25
  },
  {
    id: '2',
    name: 'Sundanese',
    code: 'su',
    flag: '🇮🇩',
    description: 'Discover the beautiful language of West Java',
    total_lessons: 20
  },
  {
    id: '3',
    name: 'Batak',
    code: 'btk',
    flag: '🇮🇩',
    description: 'Explore the rich language of North Sumatra',
    total_lessons: 18
  },
  {
    id: '4',
    name: 'Minang',
    code: 'min',
    flag: '🇮🇩',
    description: 'Learn the expressive language of West Sumatra',
    total_lessons: 22
  }
]

export const javaneseBasicLessons: Lesson[] = [
  {
    id: '1',
    language_id: '1',
    title: 'Basic Greetings',
    description: 'Learn essential Javanese greetings',
    level: 'beginner',
    order: 1,
    xp_reward: 10,
    is_completed: false,
    questions: [
      {
        id: '1',
        type: 'multiple_choice',
        question: 'How do you say "Good morning" in Javanese?',
        options: ['Sugeng enjing', 'Sugeng siang', 'Sugeng sonten', 'Sugeng dalu'],
        correct_answer: 'Sugeng enjing',
        translation: 'Good morning'
      },
      {
        id: '2',
        type: 'multiple_choice',
        question: 'What does "Piye kabare?" mean?',
        options: ['How are you?', 'What is your name?', 'Where are you from?', 'How old are you?'],
        correct_answer: 'How are you?',
        translation: 'How are you?'
      },
      {
        id: '3',
        type: 'drag_drop',
        question: 'Match the Javanese greeting with its meaning',
        options: ['Sugeng rawuh', 'Welcome'],
        correct_answer: 'Sugeng rawuh = Welcome',
        translation: 'Welcome'
      }
    ]
  },
  {
    id: '2',
    language_id: '1',
    title: 'Family Members',
    description: 'Learn Javanese words for family',
    level: 'beginner',
    order: 2,
    xp_reward: 15,
    is_completed: false,
    questions: [
      {
        id: '4',
        type: 'multiple_choice',
        question: 'How do you say "mother" in Javanese?',
        options: ['Ibu', 'Bapak', 'Mbah', 'Simbah'],
        correct_answer: 'Ibu',
        translation: 'Mother'
      },
      {
        id: '5',
        type: 'fill_blank',
        question: 'Complete: My father is "___" in Javanese',
        options: ['Bapak', 'Ibu', 'Adhik', 'Kakang'],
        correct_answer: 'Bapak',
        translation: 'Father'
      }
    ]
  }
]

export const badges: Badge[] = [
  {
    id: '1',
    name: 'First Steps',
    description: 'Complete your first lesson',
    icon: '👶',
    condition: 'complete_lesson_1',
    rarity: 'common'
  },
  {
    id: '2',
    name: 'Streak Master',
    description: 'Maintain a 7-day learning streak',
    icon: '🔥',
    condition: 'streak_7_days',
    rarity: 'rare'
  },
  {
    id: '3',
    name: 'Language Explorer',
    description: 'Try lessons in 3 different languages',
    icon: '🗺️',
    condition: 'try_3_languages',
    rarity: 'epic'
  },
  {
    id: '4',
    name: 'XP Champion',
    description: 'Earn 1000 XP points',
    icon: '👑',
    condition: 'earn_1000_xp',
    rarity: 'legendary'
  }
]

export const gameWords = {
  javanese: [
    { word: 'SEGO', translation: 'Rice', difficulty: 'easy' },
    { word: 'BANYU', translation: 'Water', difficulty: 'easy' },
    { word: 'OMAH', translation: 'House', difficulty: 'easy' },
    { word: 'SEKOLAH', translation: 'School', difficulty: 'medium' },
    { word: 'KELUARGA', translation: 'Family', difficulty: 'medium' },
    { word: 'PERSAHABATAN', translation: 'Friendship', difficulty: 'hard' }
  ],
  sundanese: [
    { word: 'BÉAS', translation: 'Rice', difficulty: 'easy' },
    { word: 'CAI', translation: 'Water', difficulty: 'easy' },
    { word: 'IMAH', translation: 'House', difficulty: 'easy' }
  ]
}