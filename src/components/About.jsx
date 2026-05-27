import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, Heart, Mic2, BookOpen, Leaf, ArrowRight } from 'lucide-react'
import MagneticButton from './MagneticButton'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
}

const credentials = [
  { icon: Mic2,         text: '10+ años en escena' },
  { icon: BookOpen,     text: 'Autora: Diario Alma de Mujer' },
  { icon: Leaf,         text: 'CEO de Alma Crecimiento' },
  { icon: CheckCircle2, text: 'Aula Magna, U. de La Habana' },
  { icon: Heart,        text: 'Círculo Fénix & Peleadores' },
]

/* ── Word-mask for section headings ─────────────────────────
   Same technique as Hero but triggered by useInView.           */
function SectionMaskLine({ text, color, delay, inView, italic = false }) {
  const words = text.split(' ')
  return (
    <span style={{ display: 'block' }}>
      {words.map((word, i) => (
        <span key={i}
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom',
                   paddingBottom: '0.06em', marginBottom: '-0.06em',
                   marginRight: i < words.length - 1 ? '0.28em' : 0 }}
        >
          <motion.span
            initial={{ y: '108%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ delay: delay + i * 0.07, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'inline-block', color,
                     fontStyle: italic ? 'italic' : 'normal' }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

export default function About() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="sobre-mi" ref={ref} className="bg-base relative overflow-hidden">

      {/* ════════════════════════════════════════════
          EDITORIAL BANNER — clip-path curtain wipe
          The photo rises from behind an invisible
          bottom edge, exactly like Awwwards winners.
      ════════════════════════════════════════════ */}
      <div className="relative h-[55vh] min-h-[380px] max-h-[580px] overflow-hidden">

        {/* Photo with clip-path wipe from bottom */}
        <motion.div
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          animate={inView ? { clipPath: 'inset(0 0 0% 0)' } : {}}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          className="absolute inset-0"
        >
          <img
            src="/images/noslen-pro-2.webp"
            alt="Noslen Vázquez"
            className="w-full h-full object-cover object-[center_12%]"
            style={{ filter: 'brightness(0.72) contrast(1.06) saturate(1.05)' }}
          />
        </motion.div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 pointer-events-none"
             style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 55%, transparent 100%)' }} />
        <div className="absolute inset-0 pointer-events-none"
             style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)' }} />

        {/* Floating heading — slides in from left after photo reveals */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.95, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex flex-col justify-center px-8 lg:px-16 max-w-3xl"
        >
          <p className="label mb-5" style={{ color: 'rgb(var(--brand))' }}>Sobre mí</p>

          <h2
            className="font-black text-white leading-[0.9] tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 5.5rem)', fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            <SectionMaskLine text="Una voz que mueve"
              color="white" delay={0.55} inView={inView} italic />
            <SectionMaskLine text="corazones."
              color="rgb(var(--brand))" delay={0.72} inView={inView} italic />
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.95, duration: 0.7 }}
            className="text-white/70 text-lg font-light max-w-[420px] leading-relaxed"
          >
            Soy <strong className="text-white font-semibold">Noslen Vázquez</strong> — Conferencista Motivacional y Asesora Emocional cubana.
          </motion.p>
        </motion.div>
      </div>

      {/* ════════════════════════════════════════════
          CONTENT GRID
      ════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5"
        >

          {/* Bio — 2 cols */}
          <motion.div variants={item} className="card p-8 lg:col-span-2 flex flex-col gap-6">
            <p className="text-secondary-theme leading-relaxed text-[15px] lg:text-base">
              Desde las primeras conferencias en Cuba hasta el Aula Magna de la Universidad de La Habana y escenarios internacionales, aprendí que la felicidad no es un destino —es una decisión. Fundé{' '}
              <strong className="text-primary-theme">Alma Crecimiento</strong> para llevar esas herramientas a quienes más las necesitan.
            </p>
            <p className="text-secondary-theme leading-relaxed text-[15px] lg:text-base">
              Más de una década acompañando a personas —especialmente mujeres— a reconectar con su bienestar emocional, su propósito y su poder interior. Cada proceso es único, como cada historia.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-5 border-t border-theme">
              {credentials.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2.5 text-sm text-secondary-theme font-medium">
                  <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                       style={{ background: 'rgb(var(--brand) / 0.12)' }}>
                    <Icon size={12} style={{ color: 'rgb(var(--brand))' }} />
                  </div>
                  {text}
                </li>
              ))}
            </ul>

            <MagneticButton strength={0.2} style={{ alignSelf: 'flex-start' }}>
              <a
                href="#servicios"
                className="inline-flex items-center gap-1.5 text-sm font-semibold pb-0.5 transition-colors group"
                style={{ color: 'rgb(var(--brand))', borderBottom: '1px solid rgb(var(--brand) / 0.3)' }}
                onMouseEnter={e => { e.currentTarget.style.borderBottomColor = 'rgb(var(--brand))' }}
                onMouseLeave={e => { e.currentTarget.style.borderBottomColor = 'rgb(var(--brand) / 0.3)' }}
              >
                Ver mis servicios
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </MagneticButton>
          </motion.div>

          {/* Right column */}
          <div className="flex flex-col gap-5">

            {/* 10+ accent card */}
            <motion.div
              variants={item}
              className="card p-7 flex flex-col justify-between min-h-[160px]"
              style={{ background: 'linear-gradient(135deg, rgb(22 163 74), rgb(16 120 60))' }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <p className="text-5xl font-black text-white leading-none tracking-tight">10+</p>
              <div>
                <p className="text-white/90 font-semibold text-sm">Años</p>
                <p className="text-white/60 text-xs mt-0.5 leading-snug">transformando vidas en Cuba y el mundo</p>
              </div>
            </motion.div>

            {/* Event photo card — clip-path wipe from bottom too */}
            <motion.div variants={item} className="card overflow-hidden relative flex-1 min-h-[220px]">
              <motion.div
                initial={{ clipPath: 'inset(0 0 100% 0)' }}
                animate={inView ? { clipPath: 'inset(0 0 0% 0)' } : {}}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="absolute inset-0"
              >
                <img
                  src="/images/noslen-event-1.jpg"
                  alt="Noslen Vázquez — evento"
                  className="w-full h-full object-cover object-center"
                  style={{ filter: 'brightness(0.82) contrast(1.07) saturate(1.1)' }}
                />
              </motion.div>
              <div className="absolute inset-0 pointer-events-none"
                   style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-semibold text-sm leading-snug"
                   style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic' }}>
                  "Elige ser dueña de tu tiempo."
                </p>
                <p className="text-white/50 text-xs mt-1.5">— Noslen Vázquez</p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>

    </section>
  )
}
