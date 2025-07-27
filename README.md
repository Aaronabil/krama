# Basakrama - Indonesian Regional Language Learning App

A comprehensive Duolingo-style web application for learning Indonesian regional languages including Javanese, Sundanese, Batak, and Minang.

## Features

### 🎓 Learning System

- **Multiple Lesson Types**: Multiple choice, drag & drop, fill-in-the-blank, and audio practice
- **Progressive Difficulty**: Beginner, intermediate, and advanced levels
- **XP & Leveling System**: Gamified progression with experience points
- **Streak Tracking**: Daily learning streaks with rewards

### 🎮 Mini Games

- **Word Connect**: Connect scattered letters to form valid words
- **Bubble Word**: Pop bubbles containing correct translations
- **Sound Guessing**: Listen to audio and choose correct meanings

### 🏆 Gamification

- **Achievement System**: Unlock badges and achievements
- **Progress Tracking**: Visual progress bars and statistics
- **Level System**: Progressive levels based on XP earned
- **Daily Goals**: Maintain learning streaks

### 🌐 Languages Supported

- Javanese (Jv)
- Sundanese (Su)
- Batak (Btk)
- Minang (Min)

### 💾 Technical Features

- **Authentication**: Secure user accounts with Supabase
- **Responsive Design**: Mobile-first, works on all devices
- **Modern UI**: Beautiful animations and micro-interactions
- **Progress Persistence**: Save progress across sessions

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Authentication**: Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **Build Tool**: Vite
- **Icons**: Lucide React

## Quick Start

1. **Clone and Install**

   ```bash
   npm install
   ```

2. **Set up Supabase**

   - Create a new Supabase project
   - Copy `.env.example` to `.env`
   - Add your Supabase URL and anon key

3. **Run Development Server**
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI components (Button, Card, etc.)
│   ├── auth/           # Authentication forms
│   ├── dashboard/      # Dashboard components
│   ├── learning/       # Learning module components
│   ├── games/          # Mini-game components
│   └── layout/         # Layout components
├── contexts/           # React contexts (Auth, Game)
├── data/              # Mock data and constants
├── lib/               # Utility libraries (Supabase client)
├── pages/             # Main page components
├── types/             # TypeScript type definitions
└── App.tsx            # Main application component
```

## Key Features

### Authentication System

- Email/password registration and login
- Secure session management with Supabase
- User profile management

### Learning Modules

- Interactive question types
- Progress tracking per lesson
- XP rewards for completion
- Visual feedback and animations

### Gamification

- XP system with level progression
- Daily streak tracking
- Badge and achievement system
- Leaderboard integration ready

### Mini Games

- **Word Connect**: Drag and drop letter tiles
- **Bubble Word**: Timed bubble-popping game
- **Sound Guessing**: Audio-based learning

### Responsive Design

- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interactions
- Smooth animations throughout

## Development

### Adding New Languages

1. Add language data to `src/data/mockData.ts`
2. Create lesson content in the same file
3. Add language-specific game words
4. Update language selection components

### Adding New Lesson Types

1. Define new question type in `src/types/index.ts`
2. Add handler in `QuestionCard.tsx`
3. Create UI components for the new type
4. Update lesson data structure

### Adding New Games

1. Create game component in `src/components/games/`
2. Add game metadata to `GamesPage.tsx`
3. Implement scoring and XP integration
4. Add game-specific UI and animations

## Database Schema (Supabase)

The app uses Supabase for user authentication and will need the following tables for full functionality:

```sql
-- Users table (handled by Supabase Auth)
-- Additional user profile data
CREATE TABLE user_profiles (
  id UUID REFERENCES auth.users(id),
  full_name TEXT,
  xp INTEGER DEFAULT 0,
  level INTEGER DEFAULT 1,
  streak INTEGER DEFAULT 0,
  current_language TEXT DEFAULT 'javanese',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User progress tracking
CREATE TABLE user_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  language_id TEXT,
  lesson_id TEXT,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  score INTEGER,
  attempts INTEGER DEFAULT 1
);

-- Game sessions
CREATE TABLE game_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  game_type TEXT,
  score INTEGER,
  duration INTEGER,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

---

Built with ❤️ for Indonesian language learners worldwide.
