import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, Heart, Mic2, BookOpen } from 'lucide-react'
import PhotoPlaceholder from './PhotoPlaceholder'

const values = [
  { icon: Heart, text: 'Bienestar emocional auténtico' },
  { icon: Mic2, text: 'Conferencista con más de 10 años en escena' },
  { icon: BookOpen, text: 'Autora del Diario Motivacional Alma de Mujer' },
  { icon: CheckCircle2, text: 'Fundadora de Alma Crecimiento' },
]

const fadeUp = (i = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  },
})

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="sobre-mi" ref={ref} className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Photos grid */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative grid grid-cols-2 gap-4"
        >
          <PhotoPlaceholder
            label="Noslen en conferencia"
            aspectRatio="aspect-[3/4]"
            className="col-span-1 row-span-2"
          />
          <PhotoPlaceholder
            label="Noslen con audiencia"
            aspectRatio="aspect-square"
            className="col-span-1"
          />
          <PhotoPlaceholder
            label="Foto personal"
            aspectRatio="aspect-square"
            className="col-span-1"
          />

          {/* Decorative badge */}
          <div className="absolute -bottom-5 -right-5 bg-emerald-600 text-white rounded-2xl px-5 py-4 shadow-xl">
            <p className="text-3xl font-extrabold leading-none">10+</p>
            <p className="text-xs font-medium opacity-90 mt-1">Años transformando vidas</p>
          </div>
        </motion.div>

        {/* Text */}
        <div className="flex flex-col gap-6">
          <motion.span
            variants={fadeUp(0)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="text-xs font-bold uppercase tracking-widest text-emerald-600"
          >
            Sobre mí
          </motion.span>

          <motion.h2
            variants={fadeUp(1)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="text-4xl md:text-5xl font-extrabold text-zinc-900 leading-tight tracking-tight text-balance"
          >
            Una voz que mueve corazones y transforma mentes
          </motion.h2>

          <motion.p
            variants={fadeUp(2)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="text-zinc-500 text-lg leading-relaxed"
          >
            Soy <strong className="text-zinc-800">Noslen Vázquez</strong>, Conferencista Motivacional Cubana con más de una década acompañando a personas —especialmente mujeres— a reconectar con su bienestar emocional. Mi misión es simple y poderosa: <strong className="text-zinc-800">ayudarte a dominar tus emociones, convertir el estrés en fortaleza y elegir ser feliz cada día.</strong>
          </motion.p>

          <motion.p
            variants={fadeUp(3)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="text-zinc-500 leading-relaxed"
          >
            Desde las primeras conferencias en Cuba hasta escenarios internacionales, he aprendido que la felicidad no es un destino —es una decisión que tomamos con herramientas reales, no con promesas vacías. Fundé <strong className="text-zinc-800">Alma Crecimiento</strong> para llevar esas herramientas a quienes más las necesitan.
          </motion.p>

          {/* Value list */}
          <motion.ul
            variants={fadeUp(4)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="flex flex-col gap-3 mt-2"
          >
            {values.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-sm text-zinc-600 font-medium">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                {text}
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={fadeUp(5)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 border-b border-emerald-200 hover:border-emerald-400 pb-0.5 transition-colors"
            >
              Ver mis servicios →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
