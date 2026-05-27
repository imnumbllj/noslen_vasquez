import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * Wraps any element with a magnetic cursor-attraction effect.
 * On hover the element softly drifts toward the cursor.
 * strength: 0–1, how far the element moves (default 0.28)
 */
export default function MagneticButton({ children, strength = 0.28, className = '', style = {} }) {
  const ref = useRef(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springCfg = { stiffness: 180, damping: 18, mass: 0.6 }
  const springX = useSpring(x, springCfg)
  const springY = useSpring(y, springCfg)

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width  / 2
    const cy = rect.top  + rect.height / 2
    x.set((e.clientX - cx) * strength)
    y.set((e.clientY - cy) * strength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY, display: 'inline-block', ...style }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
