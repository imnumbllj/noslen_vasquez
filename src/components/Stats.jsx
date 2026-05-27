import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const metrics = [
  { value: 10,  suffix: '+', label: 'Años de experiencia',    sub: 'Transformando vidas desde 2014' },
  { value: 500, suffix: '+', label: 'Personas impactadas',    sub: 'Mujeres, jóvenes y familias' },
  { value: 3,   suffix: '',  label: 'Países alcanzados',      sub: 'Cuba, España y más' },
  { value: 17,  suffix: '',  label: 'Peleadores Adolescentes', sub: 'Programa inaugural 2025' },
]

function Counter({ target, suffix, run }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!run) return
    let frame = 0
    const duration = 1600
    const tick = () => {
      frame++
      const progress = Math.min(frame / (duration / 16), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(target * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [run, target])
  return <>{count}{suffix}</>
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="impacto" ref={ref} className="section-padding bg-surface relative overflow-hidden">
      {/* Background band */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="label mb-4"
          >
            Impacto real
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="text-h1 text-primary-theme"
          >
            Números que hablan<br />
            <span className="gradient-text">por sí solos</span>
          </motion.h2>
        </div>

        {/* Metric grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              variants={item}
              className="card p-6 sm:p-8 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group cursor-default"
            >
              {/* Big number */}
              <div className="text-h1 gradient-text leading-none font-black tracking-tight">
                <Counter target={m.value} suffix={m.suffix} run={inView} />
              </div>
              <div>
                <p className="text-sm font-bold text-primary-theme leading-tight">{m.label}</p>
                <p className="text-xs text-muted-theme mt-1 leading-snug">{m.sub}</p>
              </div>
              {/* Hover accent bar */}
              <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-brand to-gold transition-all duration-500 rounded-full mt-auto" />
            </motion.div>
          ))}
        </motion.div>

        {/* Quote bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 relative card overflow-hidden p-7 sm:p-8 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand/5 via-gold/5 to-brand/5" />
          <p className="relative text-lg sm:text-xl font-semibold text-primary-theme italic">
            "Si lo sueñas lo creas, si lo crees lo logras."
          </p>
          <p className="relative text-sm text-brand font-semibold mt-2">— Noslen Vázquez</p>
        </motion.div>
      </div>
    </section>
  )
}
