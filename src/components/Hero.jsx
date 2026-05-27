import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowRight, Mic, ChevronDown } from 'lucide-react'
import MagneticButton from './MagneticButton'

/* ─── Word-mask reveal ─────────────────────────────────── */
function MaskWord({ children, delay, color }) {
  return (
    <span style={{
      display: 'inline-block', overflow: 'hidden',
      verticalAlign: 'bottom', paddingBottom: '0.06em', marginBottom: '-0.06em',
    }}>
      <motion.span
        initial={{ y: '110%' }}
        animate={{ y: '0%' }}
        transition={{ delay, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        style={{ display: 'inline-block', color }}
      >
        {children}
      </motion.span>
    </span>
  )
}

/* ─── Count-up ─────────────────────────────────────────── */
function CountUp({ to, suffix = '' }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    const tick  = (now) => {
      const t     = Math.min((now - start) / 1500, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setVal(Math.round(eased * to))
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, to])
  return <span ref={ref}>{val}{suffix}</span>
}

export default function Hero() {
  const ref = useRef(null)

  /* ── All hooks at top level ── */
  const { scrollY } = useScroll()
  const photoY   = useTransform(scrollY, [0, 700], [0, -100])
  const textOp   = useTransform(scrollY, [0, 380], [1, 0])
  const textY    = useTransform(scrollY, [0, 380], [0, -50])

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style={{ background: '#030804' }}
    >
      {/* ── PHOTO — entrance zoom + scroll parallax ── */}
      <motion.div style={{ y: photoY }} className="absolute inset-0">
        <motion.img
          src="/images/noslen-hero.jpg"
          alt="Noslen Vázquez — Conferencista Motivacional"
          initial={{ scale: 1.18, opacity: 0 }}
          animate={{ scale: 1.02, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover object-[center_15%]"
          style={{ willChange: 'transform' }}
        />
      </motion.div>

      {/* ── Gradient layers ── */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.93) 0%, rgba(0,0,0,0.52) 38%, rgba(0,0,0,0.18) 68%, rgba(0,0,0,0.10) 100%)' }} />
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.36) 0%, transparent 58%)' }} />

      {/* ── Top brand accent line ── */}
      <div className="absolute top-0 inset-x-0 h-px pointer-events-none z-10"
           style={{ background: 'linear-gradient(to right, transparent, rgb(var(--brand) / 0.5), transparent)' }} />

      {/* ── TEXT CONTENT ── */}
      <motion.div
        style={{ opacity: textOp, y: textY }}
        className="relative z-10 w-full"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-28">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.15em]"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.14)',
                backdropFilter: 'blur(12px)',
                color: 'rgba(255,255,255,0.75)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: 'rgb(var(--brand))' }} />
              <Mic size={10} />
              Conferencista · Asesora Emocional · Cuba
            </span>
          </motion.div>

          {/* Headline — word-mask */}
          <h1
            className="font-black leading-[0.88] tracking-[-0.025em] mb-8"
            style={{ fontSize: 'clamp(3.5rem, 11vw, 9rem)' }}
          >
            <div style={{ marginBottom: '0.04em' }}>
              <MaskWord delay={0.45} color="rgb(var(--brand))">Sé</MaskWord>
              {' '}
              <MaskWord delay={0.55} color="rgb(var(--brand))">feliz,</MaskWord>
            </div>
            <div>
              <MaskWord delay={0.65} color="white">no</MaskWord>
              {' '}
              <MaskWord delay={0.75} color="white">perfecta.</MaskWord>
            </div>
          </h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 18, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0,  filter: 'blur(0px)' }}
            transition={{ delay: 0.95, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg lg:text-xl max-w-[460px] mb-10 leading-relaxed font-light"
            style={{ color: 'rgba(255,255,255,0.58)' }}
          >
            Porque tu historia no se guarda — se construye. Más de una década acompañando personas en su transformación emocional.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3.5 mb-12"
          >
            <MagneticButton>
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white"
                style={{ background: 'rgb(var(--brand))', boxShadow: '0 8px 28px rgba(22,163,74,0.38)' }}
                onMouseEnter={e => { e.currentTarget.style.filter = 'brightness(1.12)' }}
                onMouseLeave={e => { e.currentTarget.style.filter = '' }}
              >
                Trabajemos juntos <ArrowRight size={15} />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="#sobre-mi"
                onClick={(e) => { e.preventDefault(); document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm"
                style={{
                  border: '1px solid rgba(255,255,255,0.18)',
                  backdropFilter: 'blur(8px)',
                  color: 'rgba(255,255,255,0.75)',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.40)'; e.currentTarget.style.color = 'white' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }}
              >
                Mi historia
              </a>
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.28, duration: 0.7 }}
            className="flex items-center gap-10 pt-8"
            style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}
          >
            {[
              { to: 10,  suffix: '+', label: 'Años de experiencia' },
              { to: 500, suffix: '+', label: 'Vidas transformadas' },
              { to: 3,   suffix: '',  label: 'Países alcanzados'   },
            ].map(s => (
              <div key={s.label} className="flex flex-col gap-0.5">
                <span className="text-3xl font-black text-white leading-none tracking-tight">
                  <CountUp to={s.to} suffix={s.suffix} />
                </span>
                <span className="text-[11px] font-medium uppercase tracking-wide"
                      style={{ color: 'rgba(255,255,255,0.38)' }}>
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 pointer-events-none"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.22em]"
              style={{ color: 'rgba(255,255,255,0.35)' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={14} style={{ color: 'rgba(255,255,255,0.30)' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
