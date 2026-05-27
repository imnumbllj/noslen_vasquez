import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import {
  ArrowLeft, Leaf, Heart, ArrowRight, ArrowUpRight,
  TrendingUp, Zap, Tent, Tv, Users,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

/* ── Inline brand icons (not in lucide-react) ── */
const IgIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const FbIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

/* ── Animation helper ── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] } },
})

/* ── Data ── */
const pillars = [
  {
    icon: Leaf,
    label: 'Crecimiento Personal',
    desc: 'Herramientas reales para adolescentes que quieren más de la vida y están listos para trabajar por ello.',
  },
  {
    icon: TrendingUp,
    label: 'Educación Financiera y Liderazgo',
    desc: 'Finanzas y liderazgo desde temprana edad, porque el futuro se construye con decisiones de hoy.',
  },
  {
    icon: Zap,
    label: 'Herramientas y Consejos',
    desc: 'Recursos prácticos y comunidad activa para jóvenes y sus familias en el camino del crecimiento.',
  },
]

const programs = [
  {
    icon: Tent,
    tag: 'Campamento',
    emoji: '⛺',
    title: 'Campamento Alma',
    subtitle: 'Donde los adolescentes encuentran su camino',
    desc: 'Una experiencia inmersiva de 3 días donde 30 adolescentes cubanos viven una historia diferente. Entre risas, reflexión y comunidad, los jóvenes se reconectan con sus sueños, su propósito y su identidad.',
    bullets: [
      '3 días de experiencia transformadora',
      '30 adolescentes por edición',
      'Dinámicas de liderazgo y bienestar',
    ],
    accent: 'green',
  },
  {
    icon: Tv,
    tag: 'Reality Show',
    emoji: '🔥',
    title: 'Peleadores Cuba',
    subtitle: 'El primer reality de emprendimiento adolescente',
    desc: 'Un reality show en YouTube donde 18 jóvenes emprendedores compiten por mentoría, visibilidad y financiamiento para sus proyectos. Organizado junto a @peleadores_cuba y Alma Crecimiento.',
    bullets: [
      '18 participantes adolescentes',
      '3 ganadores obtienen financiamiento',
      'En YouTube @gladiuscinema',
    ],
    accent: 'orange',
  },
  {
    icon: Heart,
    tag: 'Jornadas',
    emoji: '🫀',
    title: 'SOMOS ALMA',
    subtitle: 'No es una charla. Es un viaje al alma.',
    desc: 'Una jornada donde familias y generaciones se unen para reír, sanar y reconectar. Más que un evento: emociones compartidas, silencios que se entienden y conexión real entre personas.',
    bullets: [
      'Jornadas familiares y multigeneracionales',
      'Dinámicas vivenciales y emocionales',
      'Presenciales en Cuba',
    ],
    accent: 'gold',
  },
]

const accentMap = {
  green: {
    badge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    icon: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    bullet: 'bg-emerald-500',
    hover: 'hover:border-emerald-500/40',
  },
  orange: {
    badge: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
    icon: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
    bullet: 'bg-orange-500',
    hover: 'hover:border-orange-500/40',
  },
  gold: {
    badge: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    icon: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
    bullet: 'bg-amber-500',
    hover: 'hover:border-amber-500/40',
  },
}

const highlights = ['Encuentros', 'Patrocinadores', 'Entrevistas', 'Campamento 2025', 'Comunidad']

/* ══════════════════════════════════════════════════════ */
export default function AlmaPage() {
  const missionRef = useRef(null)
  const programsRef = useRef(null)
  const connectRef = useRef(null)

  const missionInView = useInView(missionRef, { once: true, margin: '-80px' })
  const programsInView = useInView(programsRef, { once: true, margin: '-60px' })
  const connectInView = useInView(connectRef, { once: true, margin: '-60px' })

  return (
    <div className="min-h-screen bg-base">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-base">
        {/* Background orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-emerald-500/[0.07] blur-3xl" />
          <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full bg-orange-500/[0.05] blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-emerald-500/[0.03] blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text */}
          <div className="flex flex-col gap-6">
            {/* Back */}
            <motion.div variants={fadeUp(0)} initial="hidden" animate="show">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-sm text-muted-theme hover:text-primary-theme transition-colors font-medium"
              >
                <ArrowLeft size={15} />
                Noslen Vázquez
              </Link>
            </motion.div>

            {/* Badge */}
            <motion.div variants={fadeUp(0.06)} initial="hidden" animate="show">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                <Leaf size={12} />
                Comunidad · Crecimiento · Liderazgo
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp(0.12)}
              initial="hidden"
              animate="show"
              className="text-7xl md:text-8xl xl:text-9xl font-extrabold text-primary-theme leading-[0.9] tracking-tight"
            >
              alma<span className="text-emerald-500">.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp(0.2)}
              initial="hidden"
              animate="show"
              className="text-lg text-secondary-theme max-w-lg leading-relaxed"
            >
              Comunidad dedicada al crecimiento personal de adolescentes y sus familias. Inspiramos educación financiera, liderazgo y bienestar desde adentro. 💚🧡
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp(0.28)}
              initial="hidden"
              animate="show"
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#programas"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/25 text-sm"
              >
                Ver programas
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#conecta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-surface text-primary-theme font-semibold rounded-xl border border-theme hover:bg-muted-theme transition-all text-sm"
              >
                Únete a la comunidad
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp(0.35)}
              initial="hidden"
              animate="show"
              className="flex items-center gap-8 pt-4 border-t border-theme"
            >
              {[
                { value: '643+', label: 'Seguidores' },
                { value: '3', label: 'Programas activos' },
                { value: '🇨🇺', label: 'Raíces en Cuba' },
              ].map(s => (
                <div key={s.label}>
                  <span className="text-2xl font-bold text-primary-theme tracking-tight">{s.value}</span>
                  <p className="text-xs text-muted-theme font-medium mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — brand card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col gap-4"
          >
            {/* Main card */}
            <div className="bg-surface border border-theme rounded-3xl p-8 flex flex-col gap-6 shadow-2xl shadow-emerald-500/10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <Leaf size={26} className="text-white" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-primary-theme tracking-tight leading-none">alma</p>
                  <p className="text-sm text-emerald-500 font-semibold mt-0.5">Crecimiento</p>
                </div>
              </div>
              <p className="text-secondary-theme text-sm leading-relaxed italic">
                "Somos historias compartidas 🫀. Somos silencios que se entienden 🌹. Somos alma 🧡💚."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-theme">
                <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">NV</div>
                <div>
                  <p className="text-sm font-bold text-primary-theme">Noslen Vázquez</p>
                  <p className="text-xs text-emerald-500 font-medium">CEO & Fundadora</p>
                </div>
              </div>
            </div>

            {/* Mini cards */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { emoji: '⛺', label: 'Campamento Alma' },
                { emoji: '🔥', label: 'Peleadores Cuba' },
                { emoji: '🫀', label: 'SOMOS ALMA' },
              ].map(item => (
                <div key={item.label} className="bg-surface border border-theme rounded-2xl p-4 flex flex-col items-center gap-2">
                  <span className="text-2xl">{item.emoji}</span>
                  <p className="text-[11px] font-semibold text-muted-theme text-center leading-tight">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Instagram badge */}
            <div className="bg-surface border border-theme rounded-2xl p-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white flex-shrink-0">
                <IgIcon size={16} />
              </div>
              <div>
                <p className="text-sm font-bold text-primary-theme">@_alma_crecimiento</p>
                <p className="text-xs text-muted-theme">643 seguidores · Instagram</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section ref={missionRef} className="section-padding bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <motion.span
              initial={{ opacity: 0 }}
              animate={missionInView ? { opacity: 1 } : {}}
              className="text-xs font-bold uppercase tracking-widest text-emerald-500"
            >
              Nuestra misión
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-extrabold text-primary-theme mt-3 tracking-tight"
            >
              Adolescentes que lideran su futuro
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-secondary-theme mt-4 text-lg leading-relaxed"
            >
              Alma Crecimiento nació para llenar un vacío: jóvenes cubanos con sueños enormes y herramientas insuficientes. Aquí cambiamos eso.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 24 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="bg-base border border-theme rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <p.icon size={20} className="text-emerald-500" />
                </div>
                <h3 className="text-base font-bold text-primary-theme">{p.label}</h3>
                <p className="text-sm text-secondary-theme leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Quote bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 text-center"
          >
            <p className="text-lg font-semibold text-primary-theme italic">
              "Si lo sueñas lo creas, si lo crees lo logras."
            </p>
            <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium mt-2">— Noslen Vázquez, CEO Alma Crecimiento</p>
          </motion.div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section id="programas" ref={programsRef} className="section-padding bg-base">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              animate={programsInView ? { opacity: 1 } : {}}
              className="text-xs font-bold uppercase tracking-widest text-emerald-500"
            >
              Programas
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={programsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-extrabold text-primary-theme mt-3 tracking-tight"
            >
              Iniciativas que transforman
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={programsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-secondary-theme mt-4 text-lg leading-relaxed"
            >
              Cada programa de Alma está diseñado para despertar el potencial adolescente de una manera diferente —y real.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {programs.map((prog, i) => {
              const c = accentMap[prog.accent]
              const Icon = prog.icon
              return (
                <motion.div
                  key={prog.title}
                  initial={{ opacity: 0, y: 28 }}
                  animate={programsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.12, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className={`group bg-surface border border-theme rounded-2xl p-6 sm:p-7 flex flex-col gap-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${c.hover}`}
                >
                  <div className="flex items-start justify-between">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${c.icon}`}>
                      <Icon size={20} />
                    </div>
                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${c.badge}`}>
                      {prog.tag}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{prog.emoji}</span>
                      <h3 className="text-base font-bold text-primary-theme">{prog.title}</h3>
                    </div>
                    <p className="text-xs font-semibold text-muted-theme mb-3 italic">{prog.subtitle}</p>
                    <p className="text-sm text-secondary-theme leading-relaxed">{prog.desc}</p>
                  </div>

                  <ul className="flex flex-col gap-2">
                    {prog.bullets.map(b => (
                      <li key={b} className="flex items-center gap-2.5 text-sm text-secondary-theme">
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.bullet}`} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CONNECT ── */}
      <section id="conecta" ref={connectRef} className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={connectInView ? { opacity: 1 } : {}}
            className="text-xs font-bold uppercase tracking-widest text-emerald-500"
          >
            Únete
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={connectInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-extrabold text-primary-theme mt-3 tracking-tight"
          >
            Conecta con la comunidad
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={connectInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-secondary-theme mt-4 text-lg max-w-xl mx-auto leading-relaxed"
          >
            Síguenos en redes o únete a nuestra comunidad. La familia Alma está esperándote.
          </motion.p>

          {/* Social buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={connectInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center flex-wrap"
          >
            <a
              href="https://www.instagram.com/_alma_crecimiento/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg text-sm"
            >
              <IgIcon size={16} />
              @_alma_crecimiento
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61556645849975"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg text-sm"
            >
              <FbIcon size={16} />
              Facebook
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="https://linktr.ee/alma_comunidad"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition-all shadow-lg text-sm"
            >
              <Leaf size={16} />
              Linktree · Todos los links
              <ArrowUpRight size={14} />
            </a>
          </motion.div>

          {/* Highlights strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={connectInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.42 }}
            className="mt-10 flex flex-wrap gap-3 justify-center"
          >
            {highlights.map((h, i) => (
              <motion.span
                key={h}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={connectInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.06 }}
                className="px-4 py-2 bg-base border border-theme rounded-full text-xs font-semibold text-muted-theme"
              >
                {h}
              </motion.span>
            ))}
          </motion.div>

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={connectInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="mt-14"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-theme hover:text-primary-theme transition-colors font-medium"
            >
              <ArrowLeft size={15} />
              Volver a Noslen Vázquez
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
