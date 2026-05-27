import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, Heart, Mic2, BookOpen, Leaf, ArrowRight } from 'lucide-react'
import PhotoPlaceholder from './PhotoPlaceholder'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

const credentials = [
  { icon: Mic2,        text: '10+ años en escena' },
  { icon: BookOpen,    text: 'Autora: Diario Alma de Mujer' },
  { icon: Leaf,        text: 'CEO de Alma Crecimiento' },
  { icon: CheckCircle2,text: 'Aula Magna, U. de La Habana' },
  { icon: Heart,       text: 'Círculo Fénix & Peleadores' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="sobre-mi" ref={ref} className="section-padding bg-base relative overflow-hidden">
      {/* Subtle accent */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full bg-brand/[0.05] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="label mb-10"
        >
          Sobre mí
        </motion.p>

        {/* Bento grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 auto-rows-auto"
        >

          {/* ── Photo — tall, spans 2 rows on desktop ── */}
          <motion.div
            variants={item}
            className="card overflow-hidden lg:row-span-2 min-h-[300px] lg:min-h-0"
          >
            <PhotoPlaceholder
              label="Noslen Vázquez"
              aspectRatio="aspect-[3/4]"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* ── Intro text ── 2 cols */}
          <motion.div
            variants={item}
            className="card p-7 lg:col-span-2 flex flex-col justify-between gap-6"
          >
            <div>
              <h2 className="text-h2 text-primary-theme leading-tight">
                Una voz que mueve{' '}
                <span className="gradient-text">corazones</span>
                {' '}y transforma mentes
              </h2>
            </div>
            <p className="text-lead text-secondary-theme leading-relaxed">
              Soy <strong className="text-primary-theme font-semibold">Noslen Vázquez</strong>, Conferencista Motivacional y Asesora Emocional cubana. Más de una década acompañando a personas —especialmente mujeres— a reconectar con su bienestar emocional.
            </p>
          </motion.div>

          {/* ── 10+ badge ── accent card */}
          <motion.div
            variants={item}
            className="card bg-brand p-7 flex flex-col justify-between"
            style={{ background: 'linear-gradient(135deg, rgb(22 163 74), rgb(16 120 60))' }}
          >
            <p className="text-5xl font-black text-white leading-none tracking-tight">10+</p>
            <div>
              <p className="text-white/90 font-semibold text-sm">Años</p>
              <p className="text-white/65 text-xs mt-0.5 leading-snug">transformando vidas en Cuba y el mundo</p>
            </div>
          </motion.div>

          {/* ── Bio paragraph ── 2 cols */}
          <motion.div
            variants={item}
            className="card p-7 lg:col-span-2 flex flex-col gap-5"
          >
            <p className="text-secondary-theme leading-relaxed text-[15px]">
              Desde las primeras conferencias en Cuba hasta el Aula Magna de la Universidad de La Habana y escenarios internacionales, aprendí que la felicidad no es un destino —es una decisión. Fundé{' '}
              <strong className="text-primary-theme">Alma Crecimiento</strong> para llevar esas herramientas a quienes más las necesitan.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-theme">
              {credentials.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2.5 text-sm text-secondary-theme font-medium">
                  <div className="w-6 h-6 rounded-md bg-brand/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={12} className="text-brand" />
                  </div>
                  {text}
                </li>
              ))}
            </ul>

            <a
              href="#servicios"
              className="self-start inline-flex items-center gap-1.5 text-sm font-semibold text-brand border-b border-brand/30 hover:border-brand pb-0.5 transition-colors group"
            >
              Ver mis servicios
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* ── Quote card ── */}
          <motion.div
            variants={item}
            className="card p-7 flex flex-col justify-between gap-4 bg-muted-theme"
          >
            <span className="text-5xl leading-none text-brand/30 font-serif select-none">"</span>
            <p className="text-primary-theme font-semibold text-sm leading-relaxed italic flex-1">
              Ser felices, no perfectas. La receta es simple, pero el camino es transformador.
            </p>
            <p className="text-xs text-muted-theme font-medium">— Noslen Vázquez</p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
