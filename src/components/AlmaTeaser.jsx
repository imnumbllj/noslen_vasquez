import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Leaf, ArrowRight, Tent, Tv, Heart } from 'lucide-react'

const programs = [
  { icon: Tent, label: 'Campamento Alma',  sub: '3 días · 30 adolescentes' },
  { icon: Tv,   label: 'Peleadores Cuba',  sub: 'Reality show @gladiuscinema' },
  { icon: Heart, label: 'SOMOS ALMA',      sub: 'Jornadas para familias' },
]

export default function AlmaTeaser() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  return (
    <section ref={ref} className="section-padding bg-base relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgb(6 30 16) 0%, rgb(10 40 22) 50%, rgb(4 20 12) 100%)' }}
        >
          {/* Animated mesh inside */}
          <motion.div
            style={{ y: bgY }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-amber-500/12 blur-3xl" />
          </motion.div>

          {/* Dot grid overlay */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(rgb(34 197 94 / 0.25) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
          />

          {/* Top border line */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 sm:p-12 lg:p-16 items-center">

            {/* Left */}
            <div className="flex flex-col gap-7">
              {/* Logo mark */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/40">
                  <Leaf size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-white tracking-tight leading-none">alma</p>
                  <p className="text-xs text-emerald-400 font-semibold mt-0.5 uppercase tracking-widest">Crecimiento</p>
                </div>
              </div>

              <div>
                <h2 className="text-h1 text-white leading-tight">
                  Un proyecto que nació<br />
                  del{' '}
                  <span
                    style={{
                      background: 'linear-gradient(120deg, #4ade80, #fbbf24)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    corazón
                  </span>
                </h2>
                <p className="text-white/60 mt-4 text-[15px] leading-relaxed max-w-sm">
                  Comunidad dedicada al crecimiento personal de adolescentes y sus familias. Educación financiera, liderazgo y bienestar desde adentro. 💚🧡
                </p>
              </div>

              <Link
                to="/alma"
                className="group self-start inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/30 text-sm"
              >
                Descubrir Alma
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Right — programs + quote */}
            <div className="flex flex-col gap-4">
              {/* Programs */}
              <div className="grid grid-cols-1 gap-3">
                {programs.map(({ icon: Icon, label, sub }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{label}</p>
                      <p className="text-xs text-white/45 mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="p-5 rounded-xl border border-white/10 bg-white/[0.04] mt-1">
                <p className="text-white/80 text-sm italic leading-relaxed">
                  "Si lo sueñas lo creas, si lo crees lo logras. La receta es ser felices, no perfectas."
                </p>
                <div className="flex items-center gap-2.5 mt-3 pt-3 border-t border-white/10">
                  <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center text-white text-[10px] font-bold">NV</div>
                  <div>
                    <p className="text-white text-xs font-semibold">Noslen Vázquez</p>
                    <p className="text-emerald-400 text-[10px]">CEO · Alma Crecimiento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
