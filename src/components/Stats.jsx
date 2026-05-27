import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis,
  ResponsiveContainer, Tooltip,
} from 'recharts'
import { TrendingUp } from 'lucide-react'

const stats = [
  { value: 10, suffix: '+', label: 'Años de experiencia', desc: 'Transformando vidas desde 2014' },
  { value: 500, suffix: '+', label: 'Personas impactadas', desc: 'Mujeres, adolescentes y familias' },
  { value: 3, suffix: '', label: 'Países alcanzados', desc: 'Cuba, España y más' },
  { value: 17, suffix: '', label: 'Peleadores Adolescentes', desc: 'En el programa inaugural 2025' },
]

const TARGET_DATA = [
  { area: 'Conferencias', value: 95 },
  { area: 'Talleres', value: 88 },
  { area: 'Bienestar', value: 92 },
  { area: 'Adolescentes', value: 85 },
  { area: 'Familias', value: 78 },
  { area: 'Empresas', value: 72 },
]

const ZERO_DATA = TARGET_DATA.map(d => ({ ...d, value: 0 }))

function Counter({ target, suffix, inView }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const timer = setInterval(() => {
      start += Math.ceil(target / (1600 / 16))
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(start)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])
  return <span>{count}{suffix}</span>
}

function useAnimatedRadarData(inView) {
  const [data, setData] = useState(ZERO_DATA)
  const frameRef = useRef(null)

  useEffect(() => {
    if (!inView) return

    // delay start slightly so card fade-in plays first
    const startDelay = setTimeout(() => {
      const duration = 1200
      const startTime = performance.now()

      const tick = (now) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        // ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3)

        setData(TARGET_DATA.map(d => ({
          ...d,
          value: Math.round(d.value * eased),
        })))

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(tick)
        }
      }

      frameRef.current = requestAnimationFrame(tick)
    }, 500)

    return () => {
      clearTimeout(startDelay)
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [inView])

  return data
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload?.length) {
    return (
      <div className="glass rounded-xl px-3 py-2 text-sm font-semibold text-primary-theme shadow-lg">
        {payload[0].payload.area}: {payload[0].value}%
      </div>
    )
  }
  return null
}


export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const animatedData = useAnimatedRadarData(inView)

  return (
    <section id="impacto" ref={ref} className="section-padding bg-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-xs font-bold uppercase tracking-widest text-brand"
          >
            Impacto real
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-extrabold text-primary-theme mt-3 tracking-tight"
          >
            Números que hablan por sí solos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-secondary-theme mt-4 text-lg"
          >
            Más de una década de trabajo consistente deja huella en personas, comunidades y organizaciones.
          </motion.p>
        </div>

        {/* Stats + Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Counters */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="bg-surface border border-theme rounded-2xl p-5 sm:p-6 flex flex-col gap-2 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="text-4xl sm:text-5xl font-extrabold gradient-text leading-none tracking-tight">
                  <Counter target={s.value} suffix={s.suffix} inView={inView} />
                </div>
                <p className="text-sm font-bold text-primary-theme">{s.label}</p>
                <p className="text-xs text-muted-theme leading-snug">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-surface border border-theme rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <motion.div
                initial={{ rotate: -30, opacity: 0 }}
                animate={inView ? { rotate: 0, opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5, ease: 'backOut' }}
                className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center"
              >
                <TrendingUp size={15} className="text-brand" />
              </motion.div>
              <div>
                <p className="text-sm font-bold text-primary-theme">Áreas de Impacto</p>
                <p className="text-xs text-muted-theme">Cobertura por especialidad</p>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={260}>
              <RadarChart
                data={animatedData}
                margin={{ top: 5, right: 20, bottom: 5, left: 20 }}
              >
                <PolarGrid stroke="rgb(var(--border))" />
                <PolarAngleAxis
                  dataKey="area"
                  tick={{ fontSize: 11, fill: 'rgb(var(--text-muted))', fontWeight: 600 }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Radar
                  name="Impacto"
                  dataKey="value"
                  stroke="rgb(var(--brand))"
                  fill="rgb(var(--brand))"
                  fillOpacity={0.18}
                  strokeWidth={2}
                  isAnimationActive={false}
                  dot={{ fill: 'rgb(var(--brand))', r: 4, strokeWidth: 2, stroke: 'rgb(var(--bg-surface))' }}
                />
              </RadarChart>
            </ResponsiveContainer>

            {/* Legend */}
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4 justify-center">
              {TARGET_DATA.map((d, i) => (
                <motion.div
                  key={d.area}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.9 + i * 0.06 }}
                  className="flex items-center gap-1.5 text-xs text-muted-theme"
                >
                  <span className="w-2 h-2 rounded-full bg-brand inline-block" />
                  {d.area} <span className="font-semibold text-primary-theme">{d.value}%</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quote bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 bg-brand/10 border border-brand/20 rounded-2xl p-6 text-center"
        >
          <p className="text-lg font-semibold text-primary-theme italic">
            "Si lo sueñas lo creas, si lo crees lo logras."
          </p>
          <p className="text-sm text-brand font-medium mt-2">— Noslen Vázquez</p>
        </motion.div>
      </div>
    </section>
  )
}
