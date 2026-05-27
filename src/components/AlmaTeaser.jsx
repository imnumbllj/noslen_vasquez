import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Leaf, ArrowRight, Heart, Sparkles } from 'lucide-react'

const pillars = [
  { icon: Leaf, label: 'Crecimiento Personal' },
  { icon: Heart, label: 'Bienestar Emocional' },
  { icon: Sparkles, label: 'Propósito de Vida' },
]

export default function AlmaTeaser() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-padding bg-surface overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden border border-brand/20"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-brand/5" />
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center p-8 sm:p-12 lg:p-16">
            {/* Left */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-brand flex items-center justify-center shadow-lg shadow-brand/30">
                  <Leaf size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-primary-theme tracking-tight leading-none">alma</p>
                  <p className="text-xs text-brand font-semibold mt-0.5">Crecimiento</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-theme tracking-tight leading-tight">
                  Un proyecto que nació del{' '}
                  <span className="gradient-text">corazón</span>
                </h2>
                <p className="mt-4 text-secondary-theme leading-relaxed">
                  Alma Crecimiento es el espacio donde la transformación personal se convierte en un estilo de vida. Programas, herramientas y comunidad para mujeres que eligen ser dueñas de su tiempo y su bienestar.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {pillars.map(({ icon: Icon, label }) => (
                  <span key={label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-semibold">
                    <Icon size={12} />
                    {label}
                  </span>
                ))}
              </div>

              <Link
                to="/alma"
                className="group inline-flex items-center gap-2 self-start px-6 py-3 bg-brand text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-brand/25 text-sm"
              >
                Descubrir Alma
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Right — quote */}
            <div className="lg:pl-16 flex flex-col gap-4">
              <div className="bg-surface/70 backdrop-blur-sm rounded-2xl p-6 border border-theme">
                <p className="text-lg sm:text-xl font-semibold text-primary-theme italic leading-snug">
                  "Si lo sueñas lo creas, si lo crees lo logras. La receta es ser felices, no perfectas."
                </p>
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-theme">
                  <div className="w-9 h-9 rounded-full bg-brand flex items-center justify-center text-white text-xs font-bold flex-shrink-0">NV</div>
                  <div>
                    <p className="text-sm font-bold text-primary-theme">Noslen Vázquez</p>
                    <p className="text-xs text-brand">CEO, Alma Crecimiento</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Diario Motivacional', sub: 'Alma de Mujer' },
                  { label: 'Programa Peleadores', sub: 'Adolescentes 2025' },
                ].map(item => (
                  <div key={item.label} className="bg-surface/60 backdrop-blur-sm rounded-xl p-4 border border-theme">
                    <p className="text-xs font-bold text-primary-theme">{item.label}</p>
                    <p className="text-xs text-brand mt-0.5">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
