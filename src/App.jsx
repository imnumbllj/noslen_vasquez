import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Impact from './components/Impact'
import Services from './components/Services'
import Alma from './components/Alma'
import Diary from './components/Diary'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Impact />
        <Services />
        <Alma />
        <Diary />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
