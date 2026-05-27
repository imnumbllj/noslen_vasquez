import { useRef } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'

function Counter({ to, suffix = '', duration = 2 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration, ease: 'easeOut' })
    }
  }, [inView, to, count, duration])

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  )
}

const stats = [
  { value: 10, suffix: '+', label: 'Años de experiencia', desc: 'Transformando vidas desde las conferencias' },
  { value: 500, suffix: '+', label: 'Personas impactadas', desc: 'Mujeres, jóvenes y familias que eligieron ser felices' },
  { value: 3, suffix: '', label: 'Países alcanzados', desc: 'Llevando el mensaje más allá de las fronteras' },
  { value: 1, suffix: '', label: 'Diario publicado', desc: 'Diario Motivacional Alma de Mujer' },
]

export default function Impact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #16a34a22 0%, transparent 60%), radial-gradient(circle at 80% 20%, #16a34a11 0%, transparent 50%)' }}
      />
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #ffffff08 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-widest text-emerald-400"
          >
            Impacto real
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white mt-3 tracking-tight"
          >
            Números que cuentan historias
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 mt-4 text-lg max-w-2xl mx-auto"
          >
            Cada conferencia, cada taller, cada diario entregado es una historia de transformación. Aquí están los números detrás de ese trabajo.
          </motion.p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/8 transition-colors group"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="text-sm font-semibold text-emerald-400 mb-1">{s.label}</p>
              <p className="text-xs text-zinc-500 leading-relaxed">{s.desc}</p>
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Quote strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-serif italic text-white/80 max-w-3xl mx-auto leading-relaxed">
            "Si lo sueñas lo creas, si lo crees lo logras. La receta es ser felices, no perfectas."
          </blockquote>
          <p className="mt-4 text-emerald-400 text-sm font-semibold">— Noslen Vázquez</p>
        </motion.div>
      </div>
    </section>
  )
}
