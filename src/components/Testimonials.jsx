import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'María L.',
    role: 'Asistente a conferencia en La Habana',
    text: 'Noslen tiene un don especial para llegar al corazón. Salí de su conferencia con una claridad que no había tenido en años. Cambió mi forma de ver mis emociones.',
    initial: 'M',
    color: 'bg-emerald-500',
  },
  {
    name: 'Carmen R.',
    role: 'Participante del programa grupal',
    text: 'El taller de Alma fue un antes y un después en mi vida. Aprendí herramientas que uso todos los días para manejar el estrés y ser más feliz de verdad.',
    initial: 'C',
    color: 'bg-amber-500',
  },
  {
    name: 'Laura P.',
    role: 'Usuaria del Diario Motivacional',
    text: 'El Diario Alma de Mujer es lo mejor que me he regalado. Cada página me recuerda quién soy y hacia dónde quiero ir. Lo recomiendo con el alma.',
    initial: 'L',
    color: 'bg-rose-500',
  },
  {
    name: 'Andrea M.',
    role: 'Asistente a taller de adolescentes',
    text: 'Mi hija participó en uno de los talleres de Noslen y el cambio fue impresionante. Aprendió a gestionar sus emociones con una madurez que sorprende.',
    initial: 'A',
    color: 'bg-violet-500',
  },
  {
    name: 'Patricia G.',
    role: 'Organizadora de evento corporativo',
    text: 'Invitamos a Noslen a nuestra empresa y fue la mejor decisión del año. El equipo salió motivado, unido y con nuevas herramientas para el día a día.',
    initial: 'P',
    color: 'bg-sky-500',
  },
  {
    name: 'Yolanda F.',
    role: 'Seguidora de Alma Crecimiento',
    text: '"Ser felices, no perfectas" se volvió mi mantra de vida. Noslen me enseñó que la felicidad es una decisión que tomo cada mañana.',
    initial: 'Y',
    color: 'bg-teal-500',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="testimonios" ref={ref} className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-xs font-bold uppercase tracking-widest text-emerald-600"
          >
            Testimonios
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-extrabold text-zinc-900 mt-3 tracking-tight"
          >
            Lo que dicen quienes me conocen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 mt-4 text-lg"
          >
            Historias reales de personas que tomaron la decisión de ser felices.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="w-8 h-8 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center">
                <Quote className="w-4 h-4 text-zinc-400" />
              </div>

              <p className="text-zinc-600 text-sm leading-relaxed flex-1">"{t.text}"</p>

              <div className="flex items-center gap-3 pt-2 border-t border-zinc-100">
                <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-xs font-bold">{t.initial}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-800">{t.name}</p>
                  <p className="text-xs text-zinc-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note about real testimonials */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-xs text-zinc-400 mt-10"
        >
          * Los testimonios representan experiencias reales de participantes. Los nombres han sido abreviados por privacidad.
        </motion.p>
      </div>
    </section>
  )
}
