import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Leaf, Target, Globe, ArrowRight } from 'lucide-react'
import PhotoPlaceholder from './PhotoPlaceholder'

const pillars = [
  { icon: Leaf, title: 'Crecimiento auténtico', desc: 'Sin recetas mágicas ni promesas vacías — solo herramientas reales para vivir mejor.' },
  { icon: Target, title: 'Propósito con dirección', desc: 'Ayudamos a cada persona a identificar su propósito y avanzar con claridad.' },
  { icon: Globe, title: 'Comunidad que crece junta', desc: 'Una red de mujeres y jóvenes que se apoyan en su camino al bienestar.' },
]

export default function Alma() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="alma" ref={ref} className="py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2"
            >
              {/* Alma logo mark */}
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center shadow-sm">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-zinc-900 tracking-tight">alma</span>
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">crecimiento</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight text-balance"
            >
              El proyecto que nació del corazón
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-zinc-500 text-lg leading-relaxed"
            >
              <strong className="text-zinc-800">Alma Crecimiento</strong> es el ecosistema que construí para llevar el bienestar emocional y el crecimiento personal a cada rincón posible. Un espacio donde las personas aprenden que ser felices no es un lujo — es un derecho que se trabaja con herramientas concretas.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 }}
              className="text-zinc-500 leading-relaxed"
            >
              Desde talleres presenciales hasta recursos digitales, Alma Crecimiento es el lugar donde la transformación personal se vuelve colectiva.
            </motion.p>

            {/* Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 }}
              className="flex flex-col gap-4 mt-2"
            >
              {pillars.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-800">{title}</p>
                    <p className="text-sm text-zinc-500 mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.45 }}
            >
              <a
                href="https://www.instagram.com/noslen_vazquez"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white text-sm font-semibold rounded-xl hover:bg-zinc-800 transition-colors"
              >
                Seguir a Alma
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right — photos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <PhotoPlaceholder
              label="Evento Alma Crecimiento"
              aspectRatio="aspect-video"
              className="w-full shadow-lg"
            />
            <div className="grid grid-cols-2 gap-4">
              <PhotoPlaceholder
                label="Comunidad de mujeres"
                aspectRatio="aspect-square"
              />
              <PhotoPlaceholder
                label="Taller grupal"
                aspectRatio="aspect-square"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom quote card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-20 bg-emerald-600 rounded-3xl p-10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none opacity-20"
            style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
          />
          <blockquote className="relative text-2xl md:text-3xl font-serif italic text-white leading-relaxed max-w-3xl mx-auto">
            "La receta es ser felices, no perfectas."
          </blockquote>
          <p className="relative text-emerald-200 text-sm font-semibold mt-4">Alma Crecimiento · @_alma_crecimiento</p>
        </motion.div>
      </div>
    </section>
  )
}
