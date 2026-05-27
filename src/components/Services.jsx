import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Leaf, Users, Mic, Flame, Tv, BookHeart, ArrowUpRight } from 'lucide-react'

/* ── Data ─────────────────────────────────────────── */
const services = [
  {
    id: 'raiz-propia',
    icon: Leaf,
    tag: 'Coaching Individual',
    title: 'Raíz Propia',
    tagline: 'Tu historia merece ser escuchada. Tu visión merece florecer.',
    desc: 'Un proceso de acompañamiento personalizado donde lo emocional y lo profesional se integran. Comenzamos con una sesión de diagnóstico que define el camino.',
    bullets: [
      'Coaching Emocional · sanación y autoestima',
      'Coaching Empresarial · claridad estratégica',
      'Coaching Combinado · integración total',
    ],
    cta: 'Iniciar mi proceso',
    featured: true,
    accent: 'green',
    gridClass: 'lg:col-span-2 lg:row-span-2',
  },
  {
    id: 'raiz-comun',
    icon: Users,
    tag: 'Coaching Corporativo',
    title: 'Raíz Común',
    tagline: 'Cuando las raíces se fortalecen, la empresa florece.',
    desc: 'Bienestar emocional y liderazgo consciente para equipos. Invertir en tu gente es sembrar futuro.',
    bullets: [
      'Clima laboral saludable',
      'Prevención del desgaste emocional',
      'Liderazgo y creatividad',
    ],
    cta: 'Para mi empresa',
    featured: false,
    accent: 'amber',
    gridClass: 'lg:col-span-2',
  },
  {
    id: 'conferencias',
    icon: Mic,
    tag: 'Presencial · Virtual',
    title: 'Conferencias',
    desc: 'Presentaciones de alto impacto para empresas, universidades y eventos internacionales desde el Aula Magna de la U. de La Habana.',
    bullets: ['Adaptadas a tu audiencia', 'Participativas e inspiradoras'],
    cta: 'Invítame a tu evento',
    featured: false,
    accent: 'blue',
    gridClass: 'lg:col-span-1',
  },
  {
    id: 'fenix',
    icon: Flame,
    tag: 'Programa · 21 días',
    title: 'Círculo Fénix 🔥',
    desc: 'Transformación profunda para renacer desde adentro con herramientas de inteligencia emocional.',
    bullets: ['21 días', 'Comunidad de mujeres'],
    cta: 'Únete al Círculo',
    featured: false,
    accent: 'orange',
    gridClass: 'lg:col-span-1',
  },
  {
    id: 'peleadores',
    icon: Tv,
    tag: 'Reality Show · YouTube',
    title: 'Peleadores Cuba',
    desc: 'El primer reality de emprendimiento adolescente. 18 jóvenes compiten por mentoría y financiamiento en @gladiuscinema.',
    bullets: ['18 participantes', '3 ganadores con funding'],
    cta: 'Ver el show',
    featured: false,
    accent: 'gold',
    gridClass: 'lg:col-span-2',
  },
  {
    id: 'diario',
    icon: BookHeart,
    tag: 'Producto Editorial',
    title: 'Diario Alma de Mujer',
    desc: 'Reflexiones diarias, ejercicios y afirmaciones que transforman pequeños momentos en grandes cambios de vida.',
    bullets: ['Reflexiones guiadas', 'Diseño premium'],
    cta: 'Quiero mi diario',
    featured: false,
    accent: 'rose',
    gridClass: 'lg:col-span-2',
  },
]

const accentMap = {
  green:  {
    icon:   'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10',
    badge:  'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
    bullet: 'bg-emerald-500',
    bar:    'from-emerald-500 to-emerald-400',
    quote:  'text-emerald-600/40 dark:text-emerald-400/20',
  },
  amber:  {
    icon:   'text-amber-600 dark:text-amber-400 bg-amber-500/10',
    badge:  'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/25',
    bullet: 'bg-amber-500',
    bar:    'from-amber-500 to-yellow-400',
    quote:  'text-amber-600/40 dark:text-amber-400/20',
  },
  blue:   {
    icon:   'text-blue-600 dark:text-blue-400 bg-blue-500/10',
    badge:  'text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/25',
    bullet: 'bg-blue-500',
    bar:    'from-blue-500 to-indigo-400',
    quote:  'text-blue-600/40 dark:text-blue-400/20',
  },
  orange: {
    icon:   'text-orange-600 dark:text-orange-400 bg-orange-500/10',
    badge:  'text-orange-600 dark:text-orange-400 bg-orange-500/10 border-orange-500/25',
    bullet: 'bg-orange-500',
    bar:    'from-orange-500 to-amber-400',
    quote:  'text-orange-600/40 dark:text-orange-400/20',
  },
  gold:   {
    icon:   'text-yellow-600 dark:text-yellow-400 bg-yellow-500/10',
    badge:  'text-yellow-600 dark:text-yellow-400 bg-yellow-500/10 border-yellow-500/25',
    bullet: 'bg-yellow-500',
    bar:    'from-yellow-500 to-amber-400',
    quote:  'text-yellow-600/40 dark:text-yellow-400/20',
  },
  rose:   {
    icon:   'text-rose-600 dark:text-rose-400 bg-rose-500/10',
    badge:  'text-rose-600 dark:text-rose-400 bg-rose-500/10 border-rose-500/25',
    bullet: 'bg-rose-500',
    bar:    'from-rose-500 to-pink-400',
    quote:  'text-rose-600/40 dark:text-rose-400/20',
  },
}

/* ── Animation ─────────────────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}
const cardItem = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

/* ── Component ─────────────────────────────────────── */
export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="servicios" ref={ref} className="section-padding bg-surface relative overflow-hidden">
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
              Un proceso para cada<br />
              <span className="gradient-text">etapa del camino</span>
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

                <div className={`flex flex-col flex-1 p-6 ${s.featured ? 'sm:p-9 gap-7' : 'gap-5'}`}>

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
                    <h3 className={`text-primary-theme font-bold tracking-tight ${s.featured ? 'text-h2' : 'text-[15px]'}`}>
                      {s.title}
                    </h3>

                    {/* Tagline — only for featured or secondary featured */}
                    {s.tagline && (
                      <p className={`text-xs italic font-medium leading-snug ${c.icon.split(' ')[0]} opacity-80`}>
                        "{s.tagline}"
                      </p>
                    )}

                    <p className={`text-secondary-theme leading-relaxed mt-1 ${s.featured ? 'text-[15px]' : 'text-[13px]'}`}>
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

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center text-xs text-muted-theme mt-8"
        >
          ✦ Todos los procesos inician con una sesión de diagnóstico personalizada.
        </motion.p>
      </div>
    </section>
  )
}
