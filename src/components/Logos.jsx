import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/* Empresas y marcas que han confiado en el proceso */
const logos = [
  { name: 'Divan Tours',            initial: 'DT' },
  { name: 'ServiGenLi SURL',        initial: 'SG' },
  { name: 'Alma Crecimiento',       initial: 'AC' },
  { name: 'Peleadores Cuba',        initial: 'PC' },
  { name: 'Circuito Networking',    initial: 'CN' },
  { name: 'Gladius Cinema',         initial: 'GC' },
  { name: 'Capibario',              initial: 'CB' },
  { name: 'Aula Magna UCCM',        initial: 'AM' },
]

/* Duplicamos para el efecto marquee infinito */
const marqueeItems = [...logos, ...logos]

export default function Logos() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section ref={ref} className="py-14 bg-surface border-y border-theme relative overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 px-6"
      >
        <p className="label">Colaboradores y amigos</p>
        <p className="text-secondary-theme text-sm mt-2">
          Marcas y organizaciones que han confiado en el proceso
        </p>
      </motion.div>

      {/* Marquee container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="relative"
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, rgb(var(--bg-surface)), transparent)' }}
        />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, rgb(var(--bg-surface)), transparent)' }}
        />

        {/* Scrolling track */}
        <div className="flex overflow-hidden">
          <div
            className="flex gap-4 items-center"
            style={{
              animation: 'marquee 28s linear infinite',
              width: 'max-content',
            }}
          >
            {marqueeItems.map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-theme bg-base
                           hover:border-brand/30 hover:bg-brand/5 transition-all duration-200
                           cursor-default select-none flex-shrink-0"
              >
                <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-brand text-[10px] font-black tracking-tight">{logo.initial}</span>
                </div>
                <span className="text-sm font-semibold text-secondary-theme whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Keyframe animation */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
