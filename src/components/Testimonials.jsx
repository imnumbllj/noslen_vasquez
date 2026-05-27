import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const IgIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="11" height="11">
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
    size: 'large',
  },
  {
    name: 'Idian Ch.',
    handle: '@idianchavezfernandez',
    role: 'Participante · Peleadores Cuba',
    text: 'Un proyecto maravilloso. Feliz de formar parte de #Peleadores. Una experiencia que te cambia la perspectiva sobre el emprendimiento y la vida.',
    initial: 'I',
    color: 'bg-brand',
    size: 'medium',
  },
  {
    name: 'La Castillo V.',
    handle: '@lacastillov',
    role: 'Participante · Círculo Fénix',
    text: '100% la experiencia que toda persona necesita ❤️✏️',
    initial: 'L',
    color: 'bg-orange-500',
    size: 'small',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="testimonios" ref={ref} className="section-padding bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="label mb-4"
            >
              Testimonios
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="text-h1 text-primary-theme"
            >
              Lo que dicen<br />
              <span className="gradient-text">quienes me conocen</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-xs text-muted-theme max-w-[180px] text-right hidden sm:block"
          >
            Comentarios reales verificados de redes sociales
          </motion.p>
        </div>

        {/* Testimonial bento */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              className="card group flex flex-col gap-5 p-7 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 cursor-default"
            >
              {/* Large decorative quote */}
              <div
                className="text-7xl leading-none font-black select-none"
                style={{ color: 'rgb(var(--brand) / 0.12)', lineHeight: 0.8 }}
              >
                "
              </div>

              {/* Quote text */}
              <p className={`text-primary-theme leading-relaxed flex-1 ${t.size === 'large' ? 'text-[16px]' : t.size === 'medium' ? 'text-[15px]' : 'text-[17px] font-medium'}`}>
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-theme">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white text-xs font-bold">{t.initial}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary-theme">{t.name}</p>
                    <p className="text-xs text-muted-theme truncate max-w-[140px]">{t.handle}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-brand bg-brand/10 px-2 py-1 rounded-full border border-brand/20">
                  <IgIcon />
                  Real
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.65 }}
          className="text-center text-xs text-muted-theme mt-8"
        >
          ✦ Todos los testimonios son comentarios públicos verificados de redes sociales.
        </motion.p>
      </div>
    </section>
  )
}
