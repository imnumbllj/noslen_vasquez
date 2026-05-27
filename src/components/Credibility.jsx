import { motion } from 'framer-motion'

const items = [
  { label: 'Aula Magna',         sub: 'Universidad de La Habana' },
  { label: 'Cuba',               sub: 'Internacional' },
  { label: 'Alma Crecimiento',   sub: 'CEO & Fundadora' },
  { label: 'Peleadores Cuba',    sub: 'Reality YouTube' },
  { label: 'Diario Alma',        sub: 'Autora publicada' },
  { label: '500+ personas',      sub: 'Vidas transformadas' },
]

export default function Credibility() {
  return (
    <div className="relative overflow-hidden" style={{ background: 'rgb(var(--bg-surface))', borderBottom: '1px solid rgb(var(--border))' }}>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
           style={{ background: 'linear-gradient(to right, rgb(var(--bg-surface)), transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
           style={{ background: 'linear-gradient(to left, rgb(var(--bg-surface)), transparent)' }} />

      <div className="flex overflow-hidden py-5">
        <div
          className="flex items-center gap-0 flex-shrink-0"
          style={{ animation: 'cred-scroll 28s linear infinite', width: 'max-content' }}
        >
          {[...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center flex-shrink-0">
              {/* Item */}
              <div className="flex flex-col items-center px-10">
                <span className="text-[11px] font-black uppercase tracking-[0.14em] text-primary-theme opacity-80">
                  {item.label}
                </span>
                <span className="text-[10px] text-muted-theme font-medium mt-0.5 uppercase tracking-wider">
                  {item.sub}
                </span>
              </div>
              {/* Separator */}
              <div className="w-px h-7 flex-shrink-0" style={{ background: 'rgb(var(--border))' }} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes cred-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
