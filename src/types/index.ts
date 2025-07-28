export interface User {
  id: string
  email: string
  full_name: string
  xp: number
  level: number
  streak: number
  current_language: string
  created_at: string
  updated_at: string
}

export interface Language {
  id: string
  name: string
  code: string
  flag: string
  description: string
  total_lessons: number
}

export interface Lesson {
  id: string
  language_id: string
  title: string
  description: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  order: number
  xp_reward: number
  questions: Question[]
  is_completed: boolean
}

export interface Question {
  id: string
  type: 'multiple_choice' | 'drag_drop' | 'fill_blank' | 'audio_listen' | 'audio_speak'
  question: string
  options?: string[]
  correct_answer: string
  audio_url?: string
  image_url?: string
  translation: string
}

export interface UserProgress {
  user_id: string
  language_id: string
  lesson_id: string
  completed_at: string
  score: number
  attempts: number
}

export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  condition: string
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
}

export interface GameSession {
  id: string
  user_id: string
  game_type: 'word_connect' | 'bubble_word' | 'sound_guessing'
  score: number
  duration: number
  completed_at: string
}