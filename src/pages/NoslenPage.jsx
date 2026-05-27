import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Stats from '../components/Stats'
import Services from '../components/Services'
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
        <About />
        <Services />
        <Stats />
        <AlmaTeaser />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
