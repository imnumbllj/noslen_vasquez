import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowRight, Mic } from 'lucide-react'
import MagneticButton from './MagneticButton'

/* ─── Word-mask reveal ──────────────────────────────────────
   Each word slides up from inside an overflow-hidden wrapper.
   The "curtain" is invisible — the word appears to rise out of
   nothing. Seen on virtually every Awwwards SOTD winner.       */
function MaskWord({ children, delay, color, size }) {
  return (
    <span
      style={{
        display: 'inline-block',
        overflow: 'hidden',
        verticalAlign: 'bottom',
        /* tiny bottom padding so descenders don't get clipped */
        paddingBottom: '0.06em',
        marginBottom: '-0.06em',
      }}
    >
      <motion.span
        initial={{ y: '108%', opacity: 0 }}
        animate={{ y: '0%',   opacity: 1 }}
        transition={{ delay, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{ display: 'inline-block', color }}
      >
        {children}
      </motion.span>
    </span>
  )
}

/* ─── Counting number ───────────────────────────────────────
   Counts from 0 → target with cubic-ease-out when in viewport. */
function CountUp({ to, suffix = '', duration = 1600 }) {
  const ref   = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10px' })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    const tick  = (now) => {
      const t      = Math.min((now - start) / duration, 1)
      const eased  = 1 - Math.pow(1 - t, 3)        // cubic ease-out
      setVal(Math.round(eased * to))
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, to, duration])

  return <span ref={ref}>{val}{suffix}</span>
}

/* ─── Stagger badge / sub / cta ─────────────────────────── */
const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 22, filter: 'blur(3px)' },
  animate: { opacity: 1, y: 0,  filter: 'blur(0px)' },
  transition: { delay, duration: 0.85, ease: [0.16, 1, 0.3, 1] },
})

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

      {/* ── Brand accent line ── */}
      <div className="absolute top-0 inset-x-0 h-px pointer-events-none"
           style={{ background: 'linear-gradient(to right, transparent, rgb(var(--brand) / 0.45), transparent)' }} />

      {/* ── Content ── */}
      <motion.div
        style={{ opacity: contentOp, y: contentY }}
        className="relative z-10 w-full"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-28 pt-44">

          {/* Badge */}
          <motion.div {...fadeUp(0.05)} className="mb-8">
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

          {/* ── HEADLINE — word-mask reveal ── */}
          <h1
            className="font-black leading-[0.88] tracking-[-0.025em] mb-8"
            style={{ fontSize: 'clamp(3.6rem, 12vw, 9.5rem)' }}
          >
            {/* Line 1 — brand green */}
            <div style={{ marginBottom: '0.04em' }}>
              <MaskWord delay={0.18} color="rgb(var(--brand))">Sé</MaskWord>
              {' '}
              <MaskWord delay={0.27} color="rgb(var(--brand))">feliz,</MaskWord>
            </div>
            {/* Line 2 — white */}
            <div>
              <MaskWord delay={0.38} color="white">no</MaskWord>
              {' '}
              <MaskWord delay={0.46} color="white">perfecta.</MaskWord>
            </div>
          </h1>

          {/* Sub */}
          <motion.p {...fadeUp(0.6)} className="text-white/60 text-lg lg:text-xl max-w-[480px] mb-11 leading-relaxed font-light">
            Porque tu historia no se guarda — se construye. Más de una década acompañando personas en su transformación emocional.
          </motion.p>

          {/* CTAs — magnetic effect */}
          <motion.div {...fadeUp(0.72)} className="flex flex-wrap items-center gap-3.5 mb-14">
            <MagneticButton>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-200"
                style={{ background: 'rgb(var(--brand))', boxShadow: '0 8px 32px rgba(22,163,74,0.35)' }}
                onMouseEnter={e => { e.currentTarget.style.filter = 'brightness(1.12)' }}
                onMouseLeave={e => { e.currentTarget.style.filter = '' }}
              >
                Trabajemos juntos <ArrowRight size={15} />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="#sobre-mi"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white/75 transition-all duration-200"
                style={{ border: '1px solid rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.38)'; e.currentTarget.style.color = 'white' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }}
              >
                Mi historia
              </a>
            </MagneticButton>
          </motion.div>

          {/* ── Stats — counting numbers ── */}
          <motion.div
            {...fadeUp(0.88)}
            className="flex items-center gap-10 pt-8"
            style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
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
                <span className="text-[11px] text-white/42 font-medium uppercase tracking-wide">{s.label}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.7 }}
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
