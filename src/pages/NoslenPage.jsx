import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Credibility from '../components/Credibility'
import About from '../components/About'
import Services from '../components/Services'
import Stats from '../components/Stats'
import Logos from '../components/Logos'
import AlmaTeaser from '../components/AlmaTeaser'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function NoslenPage() {
  return (
    <div className="min-h-screen bg-base">
      <Navbar />
      <main>
        <Hero />
        <Credibility />
        <About />
        <Services />
        <Stats />
        <Logos />
        <Testimonials />
        <AlmaTeaser />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
