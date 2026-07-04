import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import LibraryCard from './pages/LibraryCard'
import LibraryWaterfall from './pages/LibraryWaterfall'
import Mirror from './pages/Mirror'
import Mall from './pages/Mall'
import Chat from './pages/Chat'
import Profile from './pages/Profile'

function ScrollToTopOnNav() {
  const { pathname } = useLocation()
  useEffect(() => {
    const el = document.querySelector('.device-scroll')
    if (el) el.scrollTo({ top: 0 })
    else window.scrollTo({ top: 0 })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTopOnNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library/card" element={<LibraryCard />} />
        <Route path="/library/waterfall" element={<LibraryWaterfall />} />
        <Route path="/library" element={<Navigate to="/library/card" replace />} />
        <Route path="/mirror" element={<Mirror />} />
        <Route path="/mall" element={<Mall />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
