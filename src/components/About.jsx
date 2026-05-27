import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, Heart, Mic2, BookOpen, Leaf } from 'lucide-react'
import PhotoPlaceholder from './PhotoPlaceholder'

const values = [
  { icon: Heart, text: 'Asesora Emocional y Conferencista Motivacional' },
  { icon: Mic2, text: 'Más de 10 años transformando vidas en escena' },
  { icon: BookOpen, text: 'Autora del Diario Motivacional Alma de Mujer' },
  { icon: Leaf, text: 'Fundadora y CEO de Alma Crecimiento' },
  { icon: CheckCircle2, text: 'Creadora del Círculo Fénix y Peleadores' },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] } },
})

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="sobre-mi" ref={ref} className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Photo grid */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 gap-3 sm:gap-4"
        >
          <PhotoPlaceholder
            label="Noslen en conferencia"
            aspectRatio="aspect-[3/4]"
            className="col-span-1 row-span-2"
          />
          <PhotoPlaceholder
            label="Con la audiencia"
            aspectRatio="aspect-square"
            className="col-span-1"
          />

          {/* Badge as a grid cell — no overlap */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-1 bg-brand text-white rounded-2xl px-4 py-5 shadow-xl shadow-brand/25 flex flex-col justify-center"
          >
            <p className="text-4xl font-extrabold leading-none">10+</p>
            <p className="text-xs font-medium opacity-90 mt-1.5 leading-snug">Años transformando vidas</p>
          </motion.div>
        </motion.div>

        {/* Text content */}
        <div className="flex flex-col gap-5 lg:gap-6">
          <motion.span
            variants={fadeUp(0)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="text-xs font-bold uppercase tracking-widest text-brand"
          >
            Sobre mí
          </motion.span>

          <motion.h2
            variants={fadeUp(0.08)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="text-4xl md:text-5xl font-extrabold text-primary-theme leading-tight tracking-tight"
          >
            Una voz que mueve corazones y transforma mentes
          </motion.h2>

          <motion.p
            variants={fadeUp(0.16)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="text-secondary-theme text-base sm:text-lg leading-relaxed"
          >
            Soy <strong className="text-primary-theme font-semibold">Noslen Vázquez</strong>, Conferencista Motivacional y Asesora Emocional cubana con más de una década acompañando a personas —especialmente mujeres— a reconectar con su bienestar emocional. Mi misión:{' '}
            <strong className="text-primary-theme font-semibold">ayudarte a dominar tus emociones, convertir el estrés en fortaleza y elegir ser feliz cada día.</strong>
          </motion.p>

          <motion.p
            variants={fadeUp(0.24)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="text-secondary-theme leading-relaxed"
          >
            Desde las primeras conferencias en Cuba hasta escenarios internacionales —incluyendo el Aula Magna de la Universidad de La Habana— he aprendido que la felicidad no es un destino, es una decisión. Fundé{' '}
            <strong className="text-primary-theme font-semibold">Alma Crecimiento</strong> para llevar esas herramientas a quienes más las necesitan, a través del Círculo Fénix, el programa Peleadores y mucho más.
          </motion.p>

          {/* Value list */}
          <motion.ul
            variants={fadeUp(0.32)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="flex flex-col gap-2.5 mt-1"
          >
            {values.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-sm text-secondary-theme font-medium">
                <div className="w-7 h-7 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={13} className="text-brand" />
                </div>
                {text}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp(0.4)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
            <a
              href="#servicios"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:opacity-80 border-b border-brand/30 hover:border-brand pb-0.5 transition-all"
            >
              Ver mis servicios →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
