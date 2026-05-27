import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X, Leaf } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const links = [
  { label: 'Inicio',      id: 'inicio' },
  { label: 'Sobre mí',    id: 'sobre-mi' },
  { label: 'Servicios',   id: 'servicios' },
  { label: 'Impacto',     id: 'impacto' },
  { label: 'Testimonios', id: 'testimonios' },
  { label: 'Contacto',    id: 'contacto' },
]

export default function Navbar() {
  const { dark, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Smooth-scroll to a section. Works from any route. */
  const goToSection = (id, closeMenu) => (e) => {
    e.preventDefault()
    closeMenu?.()
    const scroll = () => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
      else window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    if (pathname === '/') {
      scroll()
    } else {
      navigate('/')
      setTimeout(scroll, 200)
    }
  }

  /* Logo click: on home → scroll to top; on other page → navigate home */
  const handleLogoClick = (e) => {
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass shadow-sm border-b border-theme' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">

          {/* Logo — always goes to inicio */}
          <Link to="/" onClick={handleLogoClick} className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-brand flex items-center justify-center shadow-sm transition-transform group-hover:scale-105"
                 style={{ boxShadow: '0 2px 8px rgb(var(--brand) / 0.3)' }}>
              <Leaf size={15} className="text-white" />
            </div>
            <span className="font-bold text-sm tracking-tight hidden sm:block text-primary-theme">
              Noslen <span style={{ color: 'rgb(var(--brand))' }}>Vázquez</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {links.map((l) => (
              <a
                key={l.label}
                href={`/#${l.id}`}
                onClick={goToSection(l.id)}
                className="px-3.5 py-2 text-[13px] font-medium rounded-lg transition-all duration-150 text-secondary-theme hover:text-primary-theme hover:bg-muted-theme"
              >
                {l.label}
              </a>
            ))}
            <Link
              to="/alma"
              className="ml-1 px-3.5 py-2 text-[13px] font-semibold rounded-lg transition-all duration-150 text-brand hover:bg-brand/10"
            >
              Alma ✦
            </Link>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Dark/light toggle */}
            <button
              onClick={toggle}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all bg-muted-theme text-muted-theme hover:text-brand hover:bg-brand/10"
              aria-label="Cambiar tema"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={dark ? 'sun' : 'moon'}
                  initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0,   opacity: 1, scale: 1   }}
                  exit={{    rotate:  90, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.18 }}
                >
                  {dark ? <Sun size={15} /> : <Moon size={15} />}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* CTA */}
            <a
              href="/#contacto"
              onClick={goToSection('contacto')}
              className="hidden md:inline-flex btn-primary py-2 px-5 text-[13px] rounded-xl"
            >
              Conversemos
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(o => !o)}
              className="md:hidden w-9 h-9 rounded-xl bg-muted-theme flex items-center justify-center text-secondary-theme"
              aria-label="Menú"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
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
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 shadow-2xl md:hidden flex flex-col bg-surface border-l border-theme"
            >
              <div className="flex items-center justify-between px-5 h-16 border-b border-theme">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-brand flex items-center justify-center">
                    <Leaf size={13} className="text-white" />
                  </div>
                  <span className="font-bold text-primary-theme text-sm">Menú</span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-lg bg-muted-theme flex items-center justify-center text-secondary-theme"
                >
                  <X size={15} />
                </button>
              </div>

              <nav className="flex flex-col p-4 gap-0.5 flex-1 overflow-y-auto">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={`/#${l.id}`}
                    onClick={goToSection(l.id, () => setOpen(false))}
                    className="px-4 py-3 rounded-xl text-[15px] font-medium text-primary-theme hover:bg-muted-theme transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
                <Link
                  to="/alma"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl text-[15px] font-semibold text-brand hover:bg-brand/10 transition-colors"
                >
                  Alma ✦
                </Link>
              </nav>

              <div className="p-4 border-t border-theme">
                <a
                  href="/#contacto"
                  onClick={goToSection('contacto', () => setOpen(false))}
                  className="btn-primary w-full justify-center"
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
