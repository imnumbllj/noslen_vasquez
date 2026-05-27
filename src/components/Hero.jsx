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

/* ─── Count-up number ──────────────────────────────────── */
function CountUp({ to, suffix = '', duration = 1600 }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10px' })
  const [val, setVal]  = useState(0)
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

/* ─── Fade-up helper ───────────────────────────────────── */
const fadeUp = (delay) => ({
  initial:    { opacity: 0, y: 22, filter: 'blur(3px)' },
  animate:    { opacity: 1, y: 0,  filter: 'blur(0px)' },
  transition: { delay, duration: 0.85, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  const containerRef = useRef(null)

  /* ── Scroll-driven values across the 220vh container ── */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  /* Smooth spring wrapping for buttery scroll */
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80, damping: 25, restDelta: 0.001,
  })

  /*
   * CLEO-STYLE ZOOM EFFECT
   * 0%  → 40% : photo zooms from tiny (0.26) to full-bleed (1.05) — "se acerca"
   * 40% → 60% : holds full-bleed, text visible and readable
   * 60% → 100%: photo blows up past viewport (1.05 → 1.7) — "se aleja" past camera
   */
  const photoScale        = useTransform(smoothProgress, [0, 0.40, 0.60, 1], [0.26, 1.05, 1.05, 1.72])
  const photoBorderRadius = useTransform(smoothProgress, [0, 0.35],          ['28px', '0px'])
  const photoOpacity      = useTransform(smoothProgress, [0, 0.06],          [0, 1])

  /* Gradient overlay: invisible while photo is tiny, appears when full-bleed */
  const overlayOpacity    = useTransform(smoothProgress, [0.15, 0.42],       [0, 1])

  /* Text: fades in on load (word-mask), fades out at mid-scroll */
  const textOpacity       = useTransform(smoothProgress, [0, 0.52, 0.68],    [1, 1, 0])
  const textY             = useTransform(smoothProgress, [0.52, 0.80],       [0, -55])

  /* Whole section fades to black at the very end */
  const sectionOpacity    = useTransform(smoothProgress, [0.82, 1],          [1, 0])

  return (
    /*
     * 220vh container = 100vh visible hero + 120vh of scroll space
     * The sticky child stays pinned at top-0 the entire 220vh of scroll.
     */
    <section
      ref={containerRef}
      id="inicio"
      style={{ height: '220vh' }}
    >
      <motion.div
        style={{ opacity: sectionOpacity, background: '#040905' }}
        className="sticky top-0 h-screen overflow-hidden flex items-end"
      >
        {/* ── FULL-BLEED ZOOM PHOTO ── */}
        <motion.div
          style={{
            scale: photoScale,
            borderRadius: photoBorderRadius,
            opacity: photoOpacity,
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
          }}
        >
          <img
            src="/images/noslen-pro-1.webp"
            alt="Noslen Vázquez — Conferencista Motivacional"
            className="w-full h-full object-cover object-[center_18%]"
            style={{ willChange: 'transform' }}
          />

          {/* Overlay gradient — appears as photo fills screen */}
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute inset-0"
                 style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.50) 42%, rgba(0,0,0,0.18) 75%, rgba(0,0,0,0.12) 100%)' }} />
            <div className="absolute inset-0"
                 style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.35) 0%, transparent 60%)' }} />
          </motion.div>
        </motion.div>

        {/* ── Ambient green glow behind photo (visible when photo is tiny) ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 55% 55% at 50% 48%, rgb(22 163 74 / 0.12) 0%, transparent 70%)',
          }}
        />

        {/* ── CONTENT — pinned to bottom, fades at mid-scroll ── */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="relative z-10 w-full"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-28">

            {/* Badge */}
            <motion.div {...fadeUp(0.05)} className="mb-8">
              <span
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.15em]"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  backdropFilter: 'blur(12px)',
                  color: 'rgba(255,255,255,0.75)',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'rgb(var(--brand))' }} />
                <Mic size={10} />
                Conferencista · Asesora Emocional · Cuba
              </span>
            </motion.div>

            {/* ── HEADLINE word-mask ── */}
            <h1
              className="font-black leading-[0.88] tracking-[-0.025em] mb-8"
              style={{ fontSize: 'clamp(3.6rem, 12vw, 9.5rem)' }}
            >
              <div style={{ marginBottom: '0.04em' }}>
                <MaskWord delay={0.18} color="rgb(var(--brand))">Sé</MaskWord>
                {' '}
                <MaskWord delay={0.27} color="rgb(var(--brand))">feliz,</MaskWord>
              </div>
              <div>
                <MaskWord delay={0.38} color="white">no</MaskWord>
                {' '}
                <MaskWord delay={0.46} color="white">perfecta.</MaskWord>
              </div>
            </h1>

            {/* Sub */}
            <motion.p {...fadeUp(0.62)}
              className="text-lg lg:text-xl max-w-[480px] mb-11 leading-relaxed font-light"
              style={{ color: 'rgba(255,255,255,0.60)' }}
            >
              Porque tu historia no se guarda — se construye. Más de una década acompañando personas en su transformación emocional.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.74)} className="flex flex-wrap items-center gap-3.5 mb-14">
              <MagneticButton>
                <a
                  href="#contacto"
                  onClick={(e) => { e.preventDefault(); document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }) }}
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
                  onClick={(e) => { e.preventDefault(); document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-200"
                  style={{ border: '1px solid rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)', color: 'rgba(255,255,255,0.75)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.38)'; e.currentTarget.style.color = 'white' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }}
                >
                  Mi historia
                </a>
              </MagneticButton>
            </motion.div>

            {/* Stats — counting numbers */}
            <motion.div
              {...fadeUp(0.90)}
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
                  <span className="text-[11px] font-medium uppercase tracking-wide" style={{ color: 'rgba(255,255,255,0.40)' }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>
        </motion.div>

        {/* ── SCROLL HINT ── visible at start, fades on scroll */}
        <motion.div
          style={{ opacity: useTransform(smoothProgress, [0, 0.18], [1, 0]) }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.40)' }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={16} style={{ color: 'rgba(255,255,255,0.35)' }} />
          </motion.div>
        </motion.div>

        {/* ── Top accent line ── */}
        <div className="absolute top-0 inset-x-0 h-px pointer-events-none"
             style={{ background: 'linear-gradient(to right, transparent, rgb(var(--brand) / 0.45), transparent)' }} />
      </motion.div>
    </section>
  )
}
