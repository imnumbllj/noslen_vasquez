import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Heart, Leaf, Sparkles } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AlmaPage() {
  return (
    <div className="min-h-screen bg-base">
      <Navbar />
      <main className="pt-24 section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Logo Alma */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-2xl gradient-brand flex items-center justify-center shadow-lg">
                <Leaf size={36} className="text-white" />
              </div>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-theme mb-6">
              alma
            </h1>
            <p className="text-xl text-secondary-theme mb-4 font-medium">
              Crecimiento · Bienestar · Propósito
            </p>
            <p className="text-base-secondary text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              Alma es el espacio donde la transformación personal se convierte en un estilo de vida.
              Próximamente, esta página contará toda la historia.
            </p>

            {/* Placeholder visual */}
            <div className="bg-surface border border-theme rounded-3xl p-16 mb-12 flex flex-col items-center gap-6">
              <div className="flex gap-4">
                <Sparkles className="text-brand" size={28} />
                <Heart className="text-gold" size={28} />
                <Leaf className="text-brand" size={28} />
              </div>
              <p className="text-muted-theme text-lg italic">
                "Si lo sueñas lo creas, si lo crees lo logras."
              </p>
              <span className="text-sm text-muted-theme">— Noslen Vázquez, Alma Crecimiento</span>
            </div>

            <Link
              to="/"
              className="inline-flex items-center gap-2 text-brand hover:opacity-80 transition-opacity font-medium"
            >
              <ArrowLeft size={18} />
              Volver a Noslen Vázquez
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
