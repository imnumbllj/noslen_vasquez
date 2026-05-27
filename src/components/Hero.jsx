import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
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

/* ─── Count-up ─────────────────────────────────────────── */
function CountUp({ to, suffix = '', duration = 1600 }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10px' })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    const tick  = (now) => {
      const t     = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setVal(Math.round(eased * to))
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, to, duration])
  return <span ref={ref}>{val}{suffix}</span>
}

/* ─── Fade-up helper (static object, NOT a hook) ───────── */
const fadeUp = (delay) => ({
  initial:    { opacity: 0, y: 22, filter: 'blur(3px)' },
  animate:    { opacity: 1, y: 0,  filter: 'blur(0px)' },
  transition: { delay, duration: 0.85, ease: [0.16, 1, 0.3, 1] },
})

/* ═══════════════════════════════════════════════════════════
   HERO — Cleo-style scroll-driven zoom
   Container is 220vh. Sticky child stays pinned at top-0
   while user scrolls through the extra 120vh, driving the
   photo scale from tiny (0.28) → full-bleed (1.05) → past
   camera (1.75).
═══════════════════════════════════════════════════════════ */
export default function Hero() {
  const containerRef = useRef(null)

  /* All useScroll / useTransform calls MUST be at top level — no hooks inside JSX */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 25, restDelta: 0.001 })

  /* Photo zoom: tiny → full-bleed → flies past camera */
  const photoScale  = useTransform(smooth, [0, 0.42, 0.62, 1.0], [0.28, 1.04, 1.04, 1.75])
  const photoRadius = useTransform(smooth, [0, 0.38],             ['24px', '0px'])

  /* Overlay gradient: fades in as photo fills screen */
  const overlayOp   = useTransform(smooth, [0.18, 0.44],          [0, 1])

  /* Text content: always visible, fades out at mid-scroll */
  const textOp      = useTransform(smooth, [0, 0.50, 0.68],       [1, 1, 0])
  const textY       = useTransform(smooth, [0.50, 0.82],          [0, -55])

  /* Section: fades to dark at the very end for smooth handoff */
  const sectionOp   = useTransform(smooth, [0.84, 1.0],           [1, 0])

  /* Scroll hint: visible immediately, fades once user scrolls */
  const hintOp      = useTransform(smooth, [0, 0.16],             [1, 0])

  return (
    <section
      ref={containerRef}
      id="inicio"
      style={{ height: '220vh' }}
    >
      {/* ── STICKY VIEWPORT ── */}
      <motion.div
        style={{ opacity: sectionOp, background: '#030804' }}
        className="sticky top-0 h-screen overflow-hidden flex items-end"
      >

        {/* ── ZOOM PHOTO ── */}
        <motion.div
          style={{
            scale:        photoScale,
            borderRadius: photoRadius,
            position:     'absolute',
            inset:         0,
            overflow:     'hidden',
          }}
        >
          <img
            src="/images/noslen-pro-2.webp"
            alt="Noslen Vázquez — Conferencista Motivacional"
            className="w-full h-full object-cover object-[center_10%]"
            style={{ willChange: 'transform' }}
          />

          {/* Dark overlay — appears as photo reaches full-bleed */}
          <motion.div
            style={{ opacity: overlayOp }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute inset-0"
                 style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.48) 40%, rgba(0,0,0,0.15) 72%, rgba(0,0,0,0.10) 100%)' }} />
            <div className="absolute inset-0"
                 style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.32) 0%, transparent 58%)' }} />
          </motion.div>
        </motion.div>

        {/* ── Ambient glow (shows around photo while it's tiny) ── */}
        <div className="absolute inset-0 pointer-events-none"
             style={{ background: 'radial-gradient(ellipse 50% 50% at 50% 48%, rgb(22 163 74 / 0.10) 0%, transparent 70%)' }} />

        {/* ── Brand accent line top ── */}
        <div className="absolute top-0 inset-x-0 h-px pointer-events-none z-10"
             style={{ background: 'linear-gradient(to right, transparent, rgb(var(--brand) / 0.45), transparent)' }} />

        {/* ── TEXT CONTENT ── pinned bottom, fades at mid-scroll */}
        <motion.div style={{ opacity: textOp, y: textY }} className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-28">

            {/* Badge */}
            <motion.div {...fadeUp(0.08)} className="mb-8">
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
                <MaskWord delay={0.20} color="rgb(var(--brand))">Sé</MaskWord>
                {' '}
                <MaskWord delay={0.30} color="rgb(var(--brand))">feliz,</MaskWord>
              </div>
              <div>
                <MaskWord delay={0.40} color="white">no</MaskWord>
                {' '}
                <MaskWord delay={0.50} color="white">perfecta.</MaskWord>
              </div>
            </h1>

            {/* Sub */}
            <motion.p
              {...fadeUp(0.65)}
              className="text-lg lg:text-xl max-w-[460px] mb-10 leading-relaxed font-light"
              style={{ color: 'rgba(255,255,255,0.58)' }}
            >
              Porque tu historia no se guarda — se construye. Más de una década acompañando personas en su transformación emocional.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.78)} className="flex flex-wrap items-center gap-3.5 mb-12">
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

            {/* Stats — count-up */}
            <motion.div
              {...fadeUp(0.92)}
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

        {/* ── SCROLL HINT — fades on first scroll interaction */}
        <motion.div
          style={{ opacity: hintOp }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 pointer-events-none"
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.22em]"
                style={{ color: 'rgba(255,255,255,0.38)' }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={15} style={{ color: 'rgba(255,255,255,0.32)' }} />
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  )
}
