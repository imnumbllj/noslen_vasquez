import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Mic } from 'lucide-react'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const photoY    = useTransform(scrollY, [0, 800], [0, -120])
  const contentOp = useTransform(scrollY, [0, 420], [1, 0])
  const contentY  = useTransform(scrollY, [0, 420], [0, -55])

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      {/* ── Full-bleed photo with parallax ── */}
      <motion.div
        style={{ y: photoY, scale: 1.08, transformOrigin: 'center top' }}
        className="absolute inset-0"
      >
        <img
          src="/images/noslen-pro-1.webp"
          alt="Noslen Vázquez — Conferencista Motivacional"
          className="w-full h-full object-cover object-[center_18%]"
        />
      </motion.div>

      {/* ── Cinematic gradient layers ── */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.22) 70%, rgba(0,0,0,0.18) 100%)' }} />
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.38) 0%, transparent 60%)' }} />

      {/* ── Top brand accent line ── */}
      <div className="absolute top-0 inset-x-0 h-px pointer-events-none"
           style={{ background: 'linear-gradient(to right, transparent, rgb(var(--brand) / 0.45), transparent)' }} />

      {/* ── Content — bottom-anchored ── */}
      <motion.div
        style={{ opacity: contentOp, y: contentY }}
        className="relative z-10 w-full"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-28 pt-44">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-5xl"
          >
            {/* Badge */}
            <motion.div variants={item} className="mb-8">
              <span
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-white/75 text-[11px] font-bold uppercase tracking-[0.15em]"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'rgb(var(--brand))' }} />
                <Mic size={10} />
                Conferencista · Asesora Emocional · Cuba
              </span>
            </motion.div>

            {/* Mega headline */}
            <motion.h1
              variants={item}
              className="font-black text-white leading-[0.88] tracking-[-0.025em] mb-8"
              style={{ fontSize: 'clamp(3.6rem, 12vw, 9.5rem)' }}
            >
              <span style={{ color: 'rgb(var(--brand))' }}>Sé feliz,</span>
              <br />
              no perfecta.
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={item}
              className="text-white/60 text-lg lg:text-xl max-w-[480px] mb-11 leading-relaxed font-light"
            >
              Porque tu historia no se guarda — se construye. Más de una década acompañando personas en su transformación emocional.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-3.5 mb-14">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-200 shadow-xl"
                style={{
                  background: 'rgb(var(--brand))',
                  boxShadow: '0 8px 32px rgba(var(--brand), 0.35)',
                }}
                onMouseEnter={e => { e.currentTarget.style.filter = 'brightness(1.12)' }}
                onMouseLeave={e => { e.currentTarget.style.filter = '' }}
              >
                Trabajemos juntos
                <ArrowRight size={15} />
              </a>
              <a
                href="#sobre-mi"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white/75 transition-all duration-200"
                style={{
                  border: '1px solid rgba(255,255,255,0.18)',
                  backdropFilter: 'blur(8px)',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.38)'; e.currentTarget.style.color = 'white' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }}
              >
                Mi historia
              </a>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              variants={item}
              className="flex items-center gap-10 pt-8"
              style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
            >
              {[
                { value: '10+',  label: 'Años de experiencia' },
                { value: '500+', label: 'Vidas transformadas' },
                { value: '3',    label: 'Países alcanzados' },
              ].map(s => (
                <div key={s.label} className="flex flex-col gap-0.5">
                  <span className="text-3xl font-black text-white leading-none tracking-tight">{s.value}</span>
                  <span className="text-[11px] text-white/42 font-medium uppercase tracking-wide">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.7 }}
        className="absolute bottom-8 right-8 lg:right-14 z-10"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{ border: '1.5px solid rgba(255,255,255,0.25)' }}
        >
          <div className="w-1 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.45)' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
