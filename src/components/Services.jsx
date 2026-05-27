import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mic, Users, BookHeart, ArrowUpRight, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Mic,
    tag: 'Conferencias',
    title: 'Conferencista Motivacional',
    desc: 'Presentaciones de alto impacto para empresas, universidades, eventos y organizaciones que quieran inspirar a su equipo a través del manejo emocional, el liderazgo personal y la resiliencia.',
    bullets: ['Charlas presenciales y virtuales', 'Adaptadas a tu audiencia y contexto', 'Dinámicas y participativas'],
    cta: 'Invítame a tu evento',
    color: 'emerald',
  },
  {
    icon: Users,
    tag: 'Talleres',
    title: 'Talleres y Programas Grupales',
    desc: 'Espacios de transformación colectiva donde mujeres y jóvenes aprenden herramientas prácticas para gestionar el estrés, fortalecer su autoestima y construir una vida con propósito.',
    bullets: ['Grupos reducidos para mayor impacto', 'Metodología vivencial y práctica', 'Para mujeres, adolescentes y familias'],
    cta: 'Ver programa',
    color: 'amber',
  },
  {
    icon: BookHeart,
    tag: 'Producto',
    title: 'Diario Motivacional Alma de Mujer',
    desc: 'Una herramienta diaria diseñada para acompañarte en tu proceso de crecimiento. Con reflexiones, ejercicios y afirmaciones que transforman los pequeños momentos en grandes cambios.',
    bullets: ['Reflexiones guiadas diarias', 'Ejercicios de bienestar emocional', 'Diseño premium, hecho con amor'],
    cta: 'Quiero mi diario',
    color: 'rose',
  },
]

const colorMap = {
  emerald: {
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    icon: 'bg-emerald-100 text-emerald-600',
    bullet: 'bg-emerald-500',
    cta: 'text-emerald-600 hover:text-emerald-700 border-emerald-200 hover:border-emerald-400',
    hover: 'hover:border-emerald-200',
  },
  amber: {
    badge: 'bg-amber-50 text-amber-700 border-amber-200',
    icon: 'bg-amber-100 text-amber-600',
    bullet: 'bg-amber-500',
    cta: 'text-amber-600 hover:text-amber-700 border-amber-200 hover:border-amber-400',
    hover: 'hover:border-amber-200',
  },
  rose: {
    badge: 'bg-rose-50 text-rose-700 border-rose-200',
    icon: 'bg-rose-100 text-rose-600',
    bullet: 'bg-rose-500',
    cta: 'text-rose-600 hover:text-rose-700 border-rose-200 hover:border-rose-400',
    hover: 'hover:border-rose-200',
  },
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="servicios" ref={ref} className="py-28 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-xs font-bold uppercase tracking-widest text-emerald-600"
          >
            Servicios
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-extrabold text-zinc-900 mt-3 tracking-tight"
          >
            Todo lo que necesitas para crecer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-zinc-500 mt-4 text-lg leading-relaxed"
          >
            Desde una conferencia que cambia perspectivas hasta un diario que transforma tu rutina — tengo las herramientas que necesitas.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const c = colorMap[s.color]
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative bg-white border border-zinc-200 rounded-2xl p-7 flex flex-col gap-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${c.hover}`}
              >
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${c.icon}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${c.badge}`}>
                    {s.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2 tracking-tight">{s.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{s.desc}</p>
                </div>

                <ul className="flex flex-col gap-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm text-zinc-600">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.bullet}`} />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4 border-t border-zinc-100">
                  <a
                    href="#contacto"
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold border-b pb-0.5 transition-colors ${c.cta}`}
                  >
                    {s.cta}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-2 text-sm text-zinc-400"
        >
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>¿Tienes una necesidad específica? <a href="#contacto" className="text-emerald-600 font-semibold hover:underline">Conversemos</a></span>
        </motion.div>
      </div>
    </section>
  )
}
