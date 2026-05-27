import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mic, Users, BookHeart, Flame, ArrowUpRight, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Mic,
    tag: 'Conferencias',
    title: 'Conferencista Motivacional',
    desc: 'Presentaciones de alto impacto para empresas, universidades y eventos —desde el Aula Magna de la Universidad de La Habana hasta escenarios internacionales— que inspiran a través del manejo emocional, liderazgo personal y resiliencia.',
    bullets: ['Charlas presenciales y virtuales', 'Adaptadas a tu audiencia y contexto', 'Dinámicas y altamente participativas'],
    cta: 'Invítame a tu evento',
    accent: 'green',
  },
  {
    icon: Flame,
    tag: 'Programa',
    title: 'Círculo Fénix 🔥',
    desc: 'Un programa de transformación de 21 días diseñado para renacer desde adentro. Herramientas de inteligencia emocional, bienestar no negociable y decisiones conscientes para ser la dueña de tu tiempo.',
    bullets: ['21 días de transformación profunda', 'Inteligencia emocional en acción', 'Comunidad de mujeres en crecimiento'],
    cta: 'Únete al Círculo',
    accent: 'orange',
  },
  {
    icon: Users,
    tag: 'Reality Show',
    title: 'Peleadores Adolescentes',
    desc: 'El primer reality show de emprendimiento adolescente en Cuba. 18 participantes compiten por mentoría, crecimiento personal y financiamiento para sus proyectos. Disponible en YouTube @gladiuscinema.',
    bullets: ['Reality show en YouTube @gladiuscinema', '18 jóvenes emprendedores', '3 ganadores obtienen financiamiento'],
    cta: 'Ver el show',
    accent: 'gold',
  },
  {
    icon: BookHeart,
    tag: 'Producto',
    title: 'Diario Motivacional Alma de Mujer',
    desc: 'Una herramienta diaria diseñada para acompañarte en tu proceso de crecimiento. Reflexiones, ejercicios y afirmaciones que transforman pequeños momentos en grandes cambios.',
    bullets: ['Reflexiones guiadas diarias', 'Ejercicios de bienestar emocional', 'Diseño premium, hecho con amor'],
    cta: 'Quiero mi diario',
    accent: 'rose',
  },
]

const accentClasses = {
  green: {
    badge: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20',
    icon: 'bg-green-500/10 text-green-600 dark:text-green-400',
    bullet: 'bg-green-500',
    link: 'text-green-600 dark:text-green-400 border-green-500/30 hover:border-green-500',
    hover: 'hover:border-green-500/30',
  },
  gold: {
    badge: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    icon: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
    bullet: 'bg-amber-500',
    link: 'text-amber-600 dark:text-amber-400 border-amber-500/30 hover:border-amber-500',
    hover: 'hover:border-amber-500/30',
  },
  rose: {
    badge: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
    icon: 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
    bullet: 'bg-rose-500',
    link: 'text-rose-600 dark:text-rose-400 border-rose-500/30 hover:border-rose-500',
    hover: 'hover:border-rose-500/30',
  },
  orange: {
    badge: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
    icon: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
    bullet: 'bg-orange-500',
    link: 'text-orange-600 dark:text-orange-400 border-orange-500/30 hover:border-orange-500',
    hover: 'hover:border-orange-500/30',
  },
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="servicios" ref={ref} className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-xs font-bold uppercase tracking-widest text-brand"
          >
            Servicios
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-extrabold text-primary-theme mt-3 tracking-tight"
          >
            Todo lo que necesitas para crecer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-secondary-theme mt-4 text-lg leading-relaxed"
          >
            Desde una conferencia que cambia perspectivas hasta un diario que transforma tu rutina.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map((s, i) => {
            const c = accentClasses[s.accent]
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className={`group card-depth rounded-2xl p-6 sm:p-7 flex flex-col gap-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 ${c.hover}`}
              >
                <div className="flex items-start justify-between">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${c.icon}`}>
                    <Icon size={20} />
                  </div>
                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${c.badge}`}>
                    {s.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-primary-theme mb-2 tracking-tight">{s.title}</h3>
                  <p className="text-sm text-secondary-theme leading-relaxed">{s.desc}</p>
                </div>

                <ul className="flex flex-col gap-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm text-secondary-theme">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.bullet}`} />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4 border-t border-theme">
                  <a
                    href="#contacto"
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold border-b pb-0.5 transition-colors ${c.link}`}
                  >
                    {s.cta}
                    <ArrowUpRight size={14} />
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
          transition={{ delay: 0.55 }}
          className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-theme"
        >
          <Sparkles size={15} className="text-brand" />
          <span>
            ¿Tienes una necesidad específica?{' '}
            <a href="#contacto" className="text-brand font-semibold hover:underline">Conversemos</a>
          </span>
        </motion.div>
      </div>
    </section>
  )
}
