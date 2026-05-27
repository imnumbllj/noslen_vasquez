import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X, Leaf } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Impacto', href: '#impacto' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const { dark, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center shadow-sm">
              <Leaf size={15} className="text-white" />
            </div>
            <span className="font-bold text-primary-theme text-sm tracking-tight">
              Noslen <span className="text-brand">Vázquez</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="px-3 py-1.5 text-sm text-secondary-theme hover:text-primary-theme hover:bg-muted-theme rounded-lg transition-all duration-150 font-medium"
              >
                {l.label}
              </a>
            ))}
            <Link
              to="/alma"
              className="px-3 py-1.5 text-sm font-semibold text-brand hover:bg-brand/10 rounded-lg transition-all duration-150"
            >
              Alma ✦
            </Link>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="w-9 h-9 rounded-xl bg-muted-theme flex items-center justify-center text-secondary-theme hover:text-brand transition-colors"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={dark ? 'sun' : 'moon'}
                  initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  {dark ? <Sun size={16} /> : <Moon size={16} />}
                </motion.div>
              </AnimatePresence>
            </button>

            <a
              href="#contacto"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-xl bg-brand text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
            >
              Conversemos
            </a>

            <button
              onClick={() => setOpen(o => !o)}
              className="md:hidden w-9 h-9 rounded-xl bg-muted-theme flex items-center justify-center text-secondary-theme"
              aria-label="Menú"
            >
              {open ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/30 md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-surface shadow-2xl md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-theme">
                <span className="font-bold text-primary-theme">Menú</span>
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-lg bg-muted-theme flex items-center justify-center text-secondary-theme"
                >
                  <X size={16} />
                </button>
              </div>
              <nav className="flex flex-col p-4 gap-1 flex-1">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-xl text-base font-medium text-primary-theme hover:bg-muted-theme transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
                <Link
                  to="/alma"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-semibold text-brand hover:bg-brand/10 transition-colors"
                >
                  Alma ✦
                </Link>
              </nav>
              <div className="p-4 border-t border-theme">
                <a
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className="block w-full py-3 text-center font-semibold bg-brand text-white rounded-xl hover:opacity-90 transition-opacity"
                >
                  Conversemos
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
