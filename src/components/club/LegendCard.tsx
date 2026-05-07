import Image from 'next/image'
import type { Legend } from '@/types/club'
import GlassCard from '@/components/ui/GlassCard'

interface LegendCardProps {
  legend: Legend
}

export default function LegendCard({ legend }: LegendCardProps) {
  return (
    <GlassCard className="p-5 flex flex-col gap-3 hover:shadow-lg hover:scale-[1.02] transition-all duration-200">
      <div className="flex items-center gap-4">
        <div
          className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 bg-gray-100"
          style={{ borderColor: 'var(--club-primary)' }}
        >
          <Image
            src={legend.image}
            alt={legend.name}
            fill
            className="object-cover object-top"
            sizes="64px"
          />
        </div>
        <div className="min-w-0">
          <p className="font-bold text-gray-900 leading-tight">{legend.name}</p>
          <p className="text-xs text-gray-500 mt-0.5">{legend.position}</p>
          <p className="text-xs" style={{ color: 'var(--club-primary)' }}>{legend.nationality} · {legend.yearsActive}</p>
        </div>
      </div>

      <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">{legend.bio}</p>

      <div className="flex gap-4 pt-2 border-t border-gray-100">
        <div className="text-center">
          <p className="text-xl font-black" style={{ color: 'var(--club-primary)' }}>{legend.careerGoals}</p>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest">Goals</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-black text-gray-700">{legend.careerAppearances}</p>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest">Apps</p>
        </div>
        <div className="flex-1 flex flex-wrap gap-1 items-start justify-end">
          {legend.trophies.slice(0, 3).map((t: string) => (
            <span
              key={t}
              className="text-[10px] px-1.5 py-0.5 rounded-full text-white font-medium"
              style={{ backgroundColor: 'var(--club-primary)', opacity: 0.75 }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </GlassCard>
  )
}
