import { Camera } from 'lucide-react'

export default function PhotoPlaceholder({ label = 'Foto profesional', className = '', aspectRatio = 'aspect-[4/5]' }) {
  return (
    <div className={`relative flex flex-col items-center justify-center rounded-2xl overflow-hidden border-2 border-dashed border-theme bg-muted-theme ${aspectRatio} ${className}`}>
      <div className="flex flex-col items-center gap-3 select-none pointer-events-none z-10">
        <div className="w-14 h-14 rounded-full bg-brand/10 flex items-center justify-center">
          <Camera className="w-6 h-6 text-brand" />
        </div>
        <div className="text-center px-4">
          <p className="text-sm font-medium text-brand">{label}</p>
          <p className="text-xs text-muted-theme mt-1">Próximamente</p>
        </div>
      </div>
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />
    </div>
  )
}
