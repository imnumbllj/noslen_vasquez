import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mic, Flame, Tv, BookHeart, ArrowUpRight } from 'lucide-react'

/* ── Data ─────────────────────────────────────────── */
const services = [
  {
    id: 'conferencias',
    icon: Mic,
    tag: 'Conferencias',
    title: 'Conferencista Motivacional',
    desc: 'Presentaciones de alto impacto para empresas, universidades y eventos que inspiran a través del manejo emocional, liderazgo personal y resiliencia. Desde el Aula Magna de la U. de La Habana hasta escenarios internacionales.',
    bullets: ['Presenciales y virtuales', 'Adaptadas a tu audiencia', 'Altamente participativas'],
    cta: 'Invítame a tu evento',
    featured: true,
    accent: 'green',
    gridClass: 'lg:col-span-2 lg:row-span-2',
  },
  {
    id: 'fenix',
    icon: Flame,
    tag: 'Programa · 21 días',
    title: 'Círculo Fénix 🔥',
    desc: 'Un programa de transformación profunda para renacer desde adentro con herramientas de inteligencia emocional.',
    bullets: ['21 días de transformación', 'Comunidad de mujeres', 'Inteligencia emocional'],
    cta: 'Únete al Círculo',
    featured: false,
    accent: 'orange',
    gridClass: 'lg:col-span-2',
  },
  {
    id: 'peleadores',
    icon: Tv,
    tag: 'Reality Show',
    title: 'Peleadores Cuba',
    desc: 'El primer reality de emprendimiento adolescente. 18 participantes, 3 ganadores con financiamiento. En YouTube @gladiuscinema.',
    bullets: ['18 participantes', '3 ganadores con funding', '@gladiuscinema'],
    cta: 'Ver el show',
    featured: false,
    accent: 'gold',
    gridClass: 'lg:col-span-1',
  },
  {
    id: 'diario',
    icon: BookHeart,
    tag: 'Producto',
    title: 'Diario Alma de Mujer',
    desc: 'Reflexiones diarias, ejercicios y afirmaciones que transforman pequeños momentos en grandes cambios.',
    bullets: ['Reflexiones guiadas', 'Ejercicios emocionales', 'Diseño premium'],
    cta: 'Quiero mi diario',
    featured: false,
    accent: 'rose',
    gridClass: 'lg:col-span-1',
  },
]

const accentMap = {
  green:  { icon: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10', badge: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/25', bullet: 'bg-emerald-500', bar: 'from-emerald-500 to-emerald-400' },
  orange: { icon: 'text-orange-600 dark:text-orange-400 bg-orange-500/10',   badge: 'text-orange-600 dark:text-orange-400 bg-orange-500/10 border-orange-500/25',  bullet: 'bg-orange-500',  bar: 'from-orange-500 to-amber-400'   },
  gold:   { icon: 'text-amber-600 dark:text-amber-400 bg-amber-500/10',      badge: 'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/25',     bullet: 'bg-amber-500',   bar: 'from-amber-500 to-yellow-400'   },
  rose:   { icon: 'text-rose-600 dark:text-rose-400 bg-rose-500/10',         badge: 'text-rose-600 dark:text-rose-400 bg-rose-500/10 border-rose-500/25',         bullet: 'bg-rose-500',    bar: 'from-rose-500 to-pink-400'      },
}

/* ── Component ─────────────────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const cardItem = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="servicios" ref={ref} className="section-padding bg-base relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="label mb-4"
            >
              Servicios
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="text-h1 text-primary-theme"
            >
              Todo lo que necesitas<br />
              <span className="gradient-text">para crecer</span>
            </motion.h2>
          </div>
          <motion.a
            href="#contacto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="btn-ghost self-start sm:self-end whitespace-nowrap"
          >
            Hablemos
            <ArrowUpRight size={15} />
          </motion.a>
        </div>

        {/* Bento grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 auto-rows-auto"
        >
          {services.map((s) => {
            const c = accentMap[s.accent]
            const Icon = s.icon

            return (
              <motion.div
                key={s.id}
                variants={cardItem}
                className={`card group flex flex-col hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 overflow-hidden ${s.gridClass}`}
              >
                {/* Top accent bar */}
                <div className={`h-0.5 bg-gradient-to-r ${c.bar} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className={`flex flex-col flex-1 p-6 ${s.featured ? 'sm:p-8 gap-6' : 'gap-5'}`}>
                  {/* Icon + badge */}
                  <div className="flex items-center justify-between">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${c.icon}`}>
                      <Icon size={20} />
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border uppercase tracking-wider ${c.badge}`}>
                      {s.tag}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-2 flex-1">
                    <h3 className={`text-primary-theme font-bold tracking-tight ${s.featured ? 'text-h3' : 'text-[15px]'}`}>
                      {s.title}
                    </h3>
                    <p className={`text-secondary-theme leading-relaxed ${s.featured ? 'text-[15px]' : 'text-[13px]'}`}>
                      {s.desc}
                    </p>
                  </div>

                  {/* Bullets */}
                  <ul className="flex flex-col gap-1.5">
                    {s.bullets.map(b => (
                      <li key={b} className="flex items-center gap-2 text-[13px] text-secondary-theme">
                        <span className={`w-1 h-1 rounded-full flex-shrink-0 ${c.bullet}`} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="pt-4 border-t border-theme mt-auto">
                    <a
                      href="#contacto"
                      className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary-theme hover:text-brand transition-colors group/link"
                    >
                      {s.cta}
                      <ArrowUpRight size={13} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
