import { Camera } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function PhotoPlaceholder({ label = 'Foto profesional', className, aspectRatio = 'aspect-[4/5]' }) {
  return (
    <div className={cn(
      'relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-emerald-200 bg-emerald-50/50 overflow-hidden',
      aspectRatio,
      className
    )}>
      <div className="flex flex-col items-center gap-3 text-emerald-400 select-none pointer-events-none">
        <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center">
          <Camera className="w-6 h-6 text-emerald-500" />
        </div>
        <div className="text-center px-4">
          <p className="text-sm font-medium text-emerald-600">{label}</p>
          <p className="text-xs text-emerald-400 mt-1">Próximamente</p>
        </div>
      </div>
      {/* subtle grid overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle, #16a34a 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />
    </div>
  )
}
