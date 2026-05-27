import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const testimonials = [
  {
    name: 'Lena',
    role: 'Emprendedora y madre',
    company: null,
    initial: 'L',
    color: 'bg-violet-500',
    size: 'large',
    quote:
      'Llegué a un momento difícil de mi vida creyendo que estaba haciendo lo correcto, aunque algo dentro de mí decía lo contrario. Con Noslen aprendí a enfrentar obstáculos sin que me dañen, y a brillar desde quien realmente soy.',
    service: 'Raíz Propia',
  },
  {
    name: 'Divan',
    role: 'CEO',
    company: 'Divan Tours',
    initial: 'D',
    color: 'bg-brand',
    size: 'medium',
    quote:
      'Lo que más me sorprendió fue la profundidad que alcanzamos incluso en sesiones online. Noslen integra lo empresarial y lo emocional de una forma que no había experimentado antes. Las herramientas que me dio siguen siendo parte de mi día a día.',
    service: 'Raíz Propia',
  },
  {
    name: 'Yadira Corrales Ur',
    role: 'Presidenta',
    company: 'ServiGenLi SURL',
    initial: 'Y',
    color: 'bg-amber-500',
    size: 'medium',
    quote:
      'Llegué en un momento crítico como madre y como empresaria. Noslen me ayudó a cerrar ciclos que seguía cargando, a cambiar creencias que me limitaban y a reconectarme con mi propósito. Tomé las decisiones más importantes de mi vida con una claridad que no creía posible.',
    service: 'Raíz Común',
  },
  {
    name: 'Lilibel',
    role: 'Estudiante · 5to año',
    company: 'Ciencias de la Información',
    initial: 'Li',
    color: 'bg-rose-500',
    size: 'small',
    quote:
      'Encontré un espacio seguro donde pude sanar sin juicios. Noslen me ayudó a recuperar el protagonismo de mi propia historia. Salí sintiéndome dueña de mi vida otra vez.',
    service: 'Coaching Emocional',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
}
/* Alternating: odd cards slide from left, even from right — Framer gallery style */
const itemLeft = {
  hidden: { opacity: 0, x: -32, scale: 0.95 },
  show:   { opacity: 1, x: 0,   scale: 1,
            transition: { type: 'spring', stiffness: 100, damping: 18, mass: 0.8 } },
}
const itemRight = {
  hidden: { opacity: 0, x: 32,  scale: 0.95 },
  show:   { opacity: 1, x: 0,   scale: 1,
            transition: { type: 'spring', stiffness: 100, damping: 18, mass: 0.8 } },
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="testimonios" ref={ref} className="section-padding bg-base relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

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
              Historias que<br />
              <span className="gradient-text">hablan solas</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-xs text-muted-theme max-w-[180px] text-right hidden sm:block"
          >
            Experiencias reales de personas que pasaron por el proceso
          </motion.p>
        </div>

        {/* Grid 2×2 en desktop, 1 col en móvil */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={i % 2 === 0 ? itemLeft : itemRight}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="card group flex flex-col gap-5 p-7 sm:p-8 cursor-default"
            >
              {/* Large quote mark */}
              <div
                className="text-8xl font-black select-none leading-none"
                style={{ color: 'rgb(var(--brand) / 0.10)', lineHeight: 0.75 }}
              >
                "
              </div>

              {/* Quote */}
              <p className="text-primary-theme leading-relaxed flex-1 text-[15px] sm:text-[16px]">
                "{t.quote}"
              </p>

              {/* Service tag */}
              <span className="self-start text-[10px] font-bold uppercase tracking-widest text-brand bg-brand/8 border border-brand/20 px-2.5 py-1 rounded-full">
                {t.service}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-theme">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-xs font-bold">{t.initial}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-primary-theme">{t.name}</p>
                  <p className="text-xs text-muted-theme leading-snug">
                    {t.role}{t.company ? ` · ${t.company}` : ''}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center text-xs text-muted-theme mt-8"
        >
          ✦ Testimonios reales de personas que pasaron por el proceso de coaching.
        </motion.p>
      </div>
    </section>
  )
}
