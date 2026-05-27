import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, MapPin, MessageCircle, CheckCircle2, ArrowUpRight } from 'lucide-react'

const IgIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)
const FbIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const reasons = ['Invitación a conferencia', 'Círculo Fénix', 'Diario Motivacional', 'Otro']

const inputCls = 'w-full px-4 py-3 text-sm bg-muted-theme text-primary-theme border border-theme rounded-xl outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand/50 transition-all placeholder:text-muted-theme'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [selected, setSelected] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contacto" ref={ref} className="section-padding bg-base relative overflow-hidden">
      {/* Subtle mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-brand/[0.05] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header — centered */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="label mb-4"
          >
            Contacto
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="text-h1 text-primary-theme"
          >
            Hablemos y hagamos<br />
            <span className="gradient-text">algo grande</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-secondary-theme text-lead mt-4"
          >
            Escríbeme y te respondo personalmente en menos de 24 horas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* ── Left column — channels ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {[
              {
                icon: IgIcon,
                label: 'Instagram',
                value: '@noslen_vazquez',
                href: 'https://www.instagram.com/noslen_vazquez',
                bg: 'bg-gradient-to-br from-purple-500 to-rose-500',
              },
              {
                icon: FbIcon,
                label: 'Facebook',
                value: 'Noslen Vázquez',
                href: 'https://www.facebook.com/noslen.vazquez.9',
                bg: 'bg-blue-600',
              },
              {
                icon: MessageCircle,
                label: 'WhatsApp',
                value: 'Escríbeme directo',
                href: '#',
                bg: 'bg-green-500',
              },
              {
                icon: MapPin,
                label: 'Ubicación',
                value: 'Cuba · Internacional',
                href: null,
                bg: 'bg-muted-theme',
              },
            ].map(({ icon: Icon, label, value, href, bg }) => (
              <div
                key={label}
                className="card group flex items-center gap-4 p-4 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
              >
                <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center flex-shrink-0 text-white`}>
                  <Icon />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-theme font-medium">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href !== '#' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-primary-theme hover:text-brand transition-colors flex items-center gap-1 group/link"
                    >
                      {value}
                      {href !== '#' && <ArrowUpRight size={11} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-primary-theme">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* ── Right column — form ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="card h-full flex flex-col items-center justify-center text-center gap-6 p-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                  className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center"
                >
                  <CheckCircle2 size={28} className="text-brand" />
                </motion.div>
                <div>
                  <h3 className="text-h3 text-primary-theme">¡Mensaje enviado!</h3>
                  <p className="text-secondary-theme mt-2 text-[15px]">Gracias. Te respondo en menos de 24 horas.</p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
                className="card p-7 sm:p-8 flex flex-col gap-5"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-primary-theme">Nombre</label>
                    <input type="text" required placeholder="Tu nombre" className={inputCls} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-primary-theme">Apellido</label>
                    <input type="text" placeholder="Tu apellido" className={inputCls} />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-primary-theme">Email</label>
                  <input type="email" required placeholder="tu@email.com" className={inputCls} />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-primary-theme">¿En qué puedo ayudarte?</label>
                  <div className="grid grid-cols-2 gap-2">
                    {reasons.map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setSelected(r)}
                        className={`px-3 py-2.5 text-xs font-semibold rounded-xl border transition-all text-left ${
                          selected === r
                            ? 'bg-brand/10 border-brand/40 text-brand'
                            : 'bg-muted-theme border-theme text-secondary-theme hover:border-brand/25'
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-primary-theme">Mensaje</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Cuéntame más sobre lo que necesitas..."
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary justify-center w-full"
                >
                  Enviar mensaje
                  <Send size={14} />
                </button>

                <p className="text-xs text-muted-theme text-center">
                  Tu información es privada. Respondo en menos de 24 horas.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
