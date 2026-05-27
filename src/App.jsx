import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import ScrollToTop from './components/ScrollToTop'
import NoslenPage from './pages/NoslenPage'
import AlmaPage from './pages/AlmaPage'

export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<NoslenPage />} />
        <Route path="/alma" element={<AlmaPage />} />
      </Routes>
    </ThemeProvider>
  )
}
