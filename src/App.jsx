import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import NoslenPage from './pages/NoslenPage'
import AlmaPage from './pages/AlmaPage'

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<NoslenPage />} />
        <Route path="/alma" element={<AlmaPage />} />
      </Routes>
    </ThemeProvider>
  )
}
