import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Mic } from 'lucide-react'
import PhotoPlaceholder from './PhotoPlaceholder'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#FAFAF8]"
    >
      {/* Background subtle gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-50/60 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 w-full py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — Text */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
              <Mic className="w-3 h-3" />
              Conferencista Motivacional Cubana
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-zinc-900 leading-[1.05] tracking-tight text-balance"
          >
            Domina tus emociones.{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-emerald-600">Sé feliz.</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-1 left-0 right-0 h-3 bg-emerald-100 -z-0 origin-left"
              />
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="text-lg text-zinc-500 max-w-lg leading-relaxed"
          >
            Te ayudo a convertir el estrés en claridad, las emociones en fortaleza y cada día en una decisión consciente de vivir mejor. <strong className="text-zinc-700 font-semibold">Ser felices, no perfectas.</strong>
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="flex flex-col sm:flex-row gap-3 pt-2"
          >
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-all duration-200 shadow-md hover:shadow-emerald-200 hover:shadow-lg text-sm"
            >
              Trabajemos juntos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#sobre-mi"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-zinc-700 font-semibold rounded-xl border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition-all duration-200 text-sm"
            >
              Conoce mi historia
            </a>
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="flex items-center gap-6 pt-4 border-t border-zinc-100"
          >
            {[
              { value: '10+', label: 'Años de experiencia' },
              { value: '500+', label: 'Vidas transformadas' },
              { value: '3', label: 'Países alcanzados' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-2xl font-bold text-zinc-900 tracking-tight">{s.value}</span>
                <span className="text-xs text-zinc-400 font-medium">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <PhotoPlaceholder
            label="Foto principal — Noslen Vázquez"
            aspectRatio="aspect-[3/4]"
            className="w-full max-w-md mx-auto shadow-2xl shadow-emerald-100"
          />

          {/* Floating card */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-zinc-100 p-4 flex items-center gap-3 max-w-[200px]"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-zinc-800">CEO & Fundadora</p>
              <p className="text-xs text-emerald-600 font-semibold">Alma Crecimiento</p>
            </div>
          </motion.div>

          {/* Top tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="absolute -top-4 -right-4 bg-emerald-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg"
          >
            🇨🇺 Conferencista Internacional
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
