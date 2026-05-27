import { motion } from 'framer-motion'
import { ArrowRight, Mic, Sparkles, ExternalLink } from 'lucide-react'
import PhotoPlaceholder from './PhotoPlaceholder'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] } },
})

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-base">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-brand/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand/[0.03] blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* ── Text ── */}
        <div className="flex flex-col gap-6 order-2 lg:order-1">
          {/* Badge */}
          <motion.div variants={fadeUp(0)} initial="hidden" animate="show">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-semibold uppercase tracking-wider">
              <Mic size={12} />
              Conferencista Motivacional · Cuba & Internacional
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp(0.1)}
            initial="hidden"
            animate="show"
            className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-primary-theme leading-[1.05] tracking-tight"
          >
            Domina tus emociones.{' '}
            <span className="relative inline-block">
              <span className="gradient-text">Sé feliz.</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-brand/40 origin-left"
              />
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={fadeUp(0.2)}
            initial="hidden"
            animate="show"
            className="text-lg text-secondary-theme max-w-lg leading-relaxed"
          >
            Te ayudo a convertir el estrés en claridad, las emociones en fortaleza y cada día en una decisión consciente de vivir mejor.{' '}
            <strong className="text-primary-theme font-semibold">Ser felices, no perfectas.</strong>
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp(0.3)}
            initial="hidden"
            animate="show"
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-brand/20 text-sm"
            >
              Trabajemos juntos
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#sobre-mi"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-surface text-primary-theme font-semibold rounded-xl border border-theme hover:bg-muted-theme transition-all text-sm"
            >
              Conoce mi historia
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            variants={fadeUp(0.4)}
            initial="hidden"
            animate="show"
            className="flex items-center gap-8 pt-4 border-t border-theme"
          >
            {[
              { value: '10+', label: 'Años de experiencia' },
              { value: '500+', label: 'Vidas transformadas' },
              { value: '3', label: 'Países alcanzados' },
            ].map((s) => (
              <div key={s.label}>
                <span className="text-2xl font-bold text-primary-theme tracking-tight">{s.value}</span>
                <p className="text-xs text-muted-theme font-medium mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-1 lg:order-2"
        >
          <div className="pb-6 pl-6 sm:pb-8 sm:pl-8">
            <PhotoPlaceholder
              label="Foto principal — Noslen Vázquez"
              aspectRatio="aspect-[3/4]"
              className="w-full max-w-sm mx-auto lg:max-w-full shadow-2xl shadow-brand/10"
            />
          </div>

          {/* Floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-0 left-0 sm:bottom-1 sm:left-1 bg-surface rounded-2xl shadow-xl border border-theme p-3.5 flex items-center gap-3 max-w-[190px]"
          >
            <div className="w-9 h-9 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
              <Sparkles size={16} className="text-brand" />
            </div>
            <div>
              <p className="text-xs font-bold text-primary-theme leading-tight">CEO & Fundadora</p>
              <p className="text-xs text-brand font-semibold mt-0.5">Alma Crecimiento</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-brand text-white text-[11px] font-bold px-3.5 py-2 rounded-full shadow-lg shadow-brand/30"
          >
            🇨🇺 Internacional
          </motion.div>

          {/* Decorative ring */}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-brand/10 pointer-events-none" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-theme flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-brand" />
        </motion.div>
      </motion.div>
    </section>
  )
}
