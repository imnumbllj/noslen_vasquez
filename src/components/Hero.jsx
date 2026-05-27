import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Mic, Star } from 'lucide-react'

/* Stagger container */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 28, filter: 'blur(4px)' },
  show:   { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const textY   = useTransform(scrollY, [0, 600], [0, -90])
  const textOp  = useTransform(scrollY, [0, 380], [1, 0])
  const photoY  = useTransform(scrollY, [0, 600], [0, -40])
  const photoOp = useTransform(scrollY, [0, 500], [1, 0])

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-base mesh-bg"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

      {/* Edge fade lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand/25 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[rgb(var(--bg))] to-transparent" />
      </div>

      {/* ── Layout ── */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28 pb-24 lg:pt-36 lg:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        {/* TEXT */}
        <motion.div
          style={{ y: textY, opacity: textOp }}
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-7 order-2 lg:order-1"
        >
          {/* Badge */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/10 border border-brand/25 text-brand text-[11px] font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
              <Mic size={10} />
              Conferencista · Asesora Emocional
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={item} className="text-display text-primary-theme text-balance">
            Domina tus<br />
            <span className="gradient-text">emociones.</span>
            <br />
            <span style={{ opacity: 0.45 }}>Sé feliz.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p variants={item} className="text-lead text-secondary-theme max-w-md">
            Te ayudo a convertir el estrés en claridad, las emociones en fortaleza y cada día en una decisión consciente de vivir mejor.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row items-start gap-3">
            <a href="#contacto" className="btn-primary">
              Trabajemos juntos
              <ArrowRight size={15} />
            </a>
            <a href="#sobre-mi" className="btn-ghost">
              Conoce mi historia
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            variants={item}
            className="flex items-center gap-8 pt-7 mt-1 border-t border-theme"
          >
            {[
              { value: '10+', label: 'Años de experiencia' },
              { value: '500+', label: 'Vidas transformadas' },
              { value: '3', label: 'Países alcanzados' },
            ].map(s => (
              <div key={s.label} className="flex flex-col gap-0.5">
                <span className="text-2xl font-extrabold text-primary-theme tracking-tight">{s.value}</span>
                <span className="text-xs text-muted-theme font-medium leading-tight">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* PHOTO */}
        <motion.div
          style={{ y: photoY, opacity: photoOp }}
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-1 lg:order-2"
        >
          {/* Glow ring */}
          <div className="absolute -inset-4 rounded-3xl bg-brand/5 blur-2xl" />

          <div className="relative pl-4 pb-4 sm:pl-6 sm:pb-6">
            <img
              src="/images/noslen-hero.jpg"
              alt="Noslen Vázquez en Circuito Networking Cuba"
              className="w-full max-w-sm mx-auto lg:max-w-full rounded-2xl shadow-2xl shadow-black/20 object-cover object-top aspect-[3/4]"
              style={{ filter: 'brightness(1.02) contrast(1.04) saturate(1.05)' }}
            />

            {/* Floating card — bottom-left */}
            <motion.div
              initial={{ opacity: 0, y: 14, x: -8 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 left-0 card p-3.5 flex items-center gap-3 max-w-[186px]"
            >
              <div className="w-9 h-9 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                <Star size={15} className="text-brand fill-brand/30" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-primary-theme leading-tight">CEO & Fundadora</p>
                <p className="text-[11px] text-brand font-semibold mt-0.5">Alma Crecimiento</p>
              </div>
            </motion.div>

            {/* Floating pill — top-right */}
            <motion.div
              initial={{ opacity: 0, y: -10, x: 10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1.35, duration: 0.5 }}
              className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 bg-brand text-white text-[11px] font-bold px-3.5 py-2 rounded-full shadow-lg shadow-brand/35"
            >
              🇨🇺 Internacional
            </motion.div>
          </div>

          {/* Decorative corner ring */}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-brand/10 pointer-events-none" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-theme flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-brand/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
