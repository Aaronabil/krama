import React, { useState, useEffect } from 'react'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import { GameProvider } from './contexts/GameContext'
import { Navigation } from './components/layout/Navigation'
import { AuthPage } from './pages/AuthPage'
import { DashboardPage } from './pages/DashboardPage'
import { LearnPage } from './pages/LearnPage'
import { GamesPage } from './pages/GamesPage'
import { ProfilePage } from './pages/ProfilePage'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

type PageType = 'dashboard' | 'learn' | 'games' | 'profile'

const AppContent: React.FC = () => {
  const { user, loading } = useAuth()
  const [currentPage, setCurrentPage] = useState<PageType>('dashboard')
  const [pageData, setPageData] = useState<any>(null)

  const handleNavigate = (page: string, data?: any) => {
    setCurrentPage(page as PageType)
    setPageData(data)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce">
          <DotLottieReact
      src="https://lottie.host/5c990c19-1437-49c7-87c9-c5d85384257a/MvpCI9te9M.lottie"
      loop
      autoplay
    />
          </div>
          <div className="text-xl font-semibold text-gray-700">Loading Basakrama...</div>
        </div>
      </div>
    )
  }

  if (!user) {
    return <AuthPage />
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage onNavigate={handleNavigate} />
      case 'learn':
        return <LearnPage initialData={pageData} onNavigate={handleNavigate} />
      case 'games':
        return <GamesPage onNavigate={handleNavigate} />
      case 'profile':
        return <ProfilePage onNavigate={handleNavigate} />
      default:
        return <DashboardPage onNavigate={handleNavigate} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation activeTab={currentPage} onTabChange={handleNavigate} />
      <main>
        {renderPage()}
      </main>
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <GameProvider>
        <AppContent />
      </GameProvider>
    </AuthProvider>
  )
}

export default App