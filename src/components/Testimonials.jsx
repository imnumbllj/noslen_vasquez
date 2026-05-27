import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const IgIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="9" height="9">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const testimonials = [
  {
    name: 'Francesco B.',
    handle: '@francesco.bernoulli221543',
    role: 'Seguidor · Instagram',
    text: 'La gente me pregunta por qué quiero y admiro tanto a esa mujer. Es que todavía no la conocen — sino también lo harían. Ella solo habla con la verdad.',
    initial: 'F',
    color: 'bg-violet-500',
    real: true,
  },
  {
    name: 'Idian Ch.',
    handle: '@idianchavezfernandez',
    role: 'Participante · Peleadores Cuba',
    text: 'Un proyecto maravilloso. Feliz de formar parte de #Peleadores. Una experiencia que te cambia la perspectiva sobre el emprendimiento y la vida.',
    initial: 'I',
    color: 'bg-brand',
    real: true,
  },
  {
    name: 'La Castillo V.',
    handle: '@lacastillov',
    role: 'Participante · Círculo Fénix',
    text: '100% la experiencia que toda persona necesita ❤️✏️',
    initial: 'L',
    color: 'bg-orange-500',
    real: true,
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="testimonios" ref={ref} className="section-padding bg-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-xs font-bold uppercase tracking-widest text-brand"
          >
            Testimonios
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-extrabold text-primary-theme mt-3 tracking-tight"
          >
            Lo que dicen quienes me conocen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-secondary-theme mt-4 text-lg"
          >
            Historias reales de personas que tomaron la decisión de ser felices.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-surface border border-theme rounded-2xl p-5 sm:p-6 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                {t.real && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-brand bg-brand/10 px-2 py-0.5 rounded-full">
                    <IgIcon />
                    Real
                  </span>
                )}
              </div>

              <Quote size={16} className="text-muted-theme" />

              <p className="text-secondary-theme text-sm leading-relaxed flex-1">"{t.text}"</p>

              <div className="flex items-center gap-3 pt-3 border-t border-theme">
                <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-xs font-bold">{t.initial}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-primary-theme">{t.name}</p>
                  <p className="text-xs text-muted-theme truncate">{t.handle || t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.65 }}
          className="text-center text-xs text-muted-theme mt-8"
        >
          ✦ Todos los testimonios son comentarios públicos reales de redes sociales verificados.
        </motion.p>
      </div>
    </section>
  )
}
