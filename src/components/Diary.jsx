import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BookHeart, Star, CheckCircle2, ArrowRight } from 'lucide-react'
import PhotoPlaceholder from './PhotoPlaceholder'

const features = [
  'Reflexiones guiadas para cada día',
  'Ejercicios de inteligencia emocional',
  'Afirmaciones y mantras de crecimiento',
  'Espacio para tus metas y gratitud',
  'Diseño premium hecho con amor',
  'Ideal para regalar o para ti misma',
]

export default function Diary() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="diario" ref={ref} className="py-28 bg-[#FAFAF8] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <PhotoPlaceholder
              label="Diario Motivacional Alma de Mujer"
              aspectRatio="aspect-[4/5]"
              className="w-full max-w-sm mx-auto shadow-2xl shadow-zinc-200"
            />
            {/* Stars floating card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="absolute -bottom-6 right-0 lg:-right-8 bg-white rounded-2xl shadow-xl border border-zinc-100 p-4"
            >
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs font-bold text-zinc-800">Mujeres que lo amaron</p>
              <p className="text-xs text-zinc-400">"Cambió mi rutina para siempre"</p>
            </motion.div>
          </motion.div>

          {/* Right — text */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="inline-flex items-center gap-2"
            >
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 border border-rose-200 rounded-full text-rose-700 text-xs font-bold uppercase tracking-wider">
                <BookHeart className="w-3 h-3" />
                Producto destacado
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight text-balance"
            >
              Diario Motivacional{' '}
              <span className="font-serif italic text-rose-500">Alma de Mujer</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-zinc-500 text-lg leading-relaxed"
            >
              Una herramienta diaria diseñada para acompañarte en tu camino de crecimiento. Cada página te invita a reflexionar, agradecer y avanzar con intención. Porque los grandes cambios comienzan en los pequeños momentos.
            </motion.p>

            {/* Features */}
            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
            >
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-zinc-600">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <a
                href="#contacto"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-rose-500 text-white font-semibold rounded-xl hover:bg-rose-600 transition-colors text-sm shadow-md hover:shadow-rose-200 hover:shadow-lg"
              >
                Quiero mi diario
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://www.instagram.com/noslen_vazquez"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-zinc-200 text-zinc-700 font-semibold rounded-xl hover:bg-zinc-50 transition-colors text-sm"
              >
                Ver en Instagram
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
