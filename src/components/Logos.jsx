import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/* Logos reales de empresas colaboradoras */
const logos = [
  { src: '/images/logos/logo-sgl.webp',    alt: 'ServiGenLi SURL' },
  { src: '/images/logos/logo-1.webp',      alt: 'Colaborador' },
  { src: '/images/logos/logo-2.webp',      alt: 'Colaborador' },
  { src: '/images/logos/logo-3.webp',      alt: 'Colaborador' },
  { src: '/images/logos/logo-5.webp',      alt: 'Colaborador' },
  { src: '/images/logos/logo-noslen.webp', alt: 'Noslen Vázquez' },
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

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="relative"
      >
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, rgb(var(--bg-surface)), transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, rgb(var(--bg-surface)), transparent)' }}
        />

        {/* Scrolling track */}
        <div className="flex overflow-hidden">
          <div
            className="flex gap-6 items-center"
            style={{ animation: 'marquee-logos 30s linear infinite', width: 'max-content' }}
          >
            {marqueeItems.map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 h-14 w-32 flex items-center justify-center
                           rounded-xl border border-theme bg-base px-4
                           hover:border-brand/30 transition-colors duration-200"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-9 max-w-full object-contain"
                  style={{ filter: 'grayscale(1) brightness(0.9) contrast(1.1)', opacity: 0.7 }}
                  onMouseEnter={e => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.opacity = '1' }}
                  onMouseLeave={e => { e.currentTarget.style.filter = 'grayscale(1) brightness(0.9) contrast(1.1)'; e.currentTarget.style.opacity = '0.7' }}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <style>{`
        @keyframes marquee-logos {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
