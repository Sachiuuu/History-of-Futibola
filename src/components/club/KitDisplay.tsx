import Image from 'next/image'
import type { Kit } from '@/types/season'
import GlassCard from '@/components/ui/GlassCard'

interface KitDisplayProps {
  home: Kit
  away: Kit
  third: Kit
}

const kits = [
  { key: 'home', label: 'Home' },
  { key: 'away', label: 'Away' },
  { key: 'third', label: 'Third' },
] as const

export default function KitDisplay({ home, away, third }: KitDisplayProps) {
  const kitMap = { home, away, third }

  return (
    <div className="grid grid-cols-3 gap-3">
      {kits.map(({ key, label }) => {
        const kit = kitMap[key]
        return (
          <GlassCard
            key={key}
            className="p-4 flex flex-col items-center gap-3 hover:scale-[1.03] hover:shadow-lg transition-all duration-200 cursor-default"
          >
            <div
              className="relative w-full aspect-[3/4] rounded-lg overflow-hidden"
              style={{ backgroundColor: kit.primaryColor + '22' }}
            >
              <Image
                src={kit.image}
                alt={`${label} kit`}
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 30vw, 200px"
              />
            </div>
            <div className="text-center">
              <div
                className="w-4 h-4 rounded-full mx-auto mb-1 border border-gray-300"
                style={{ backgroundColor: kit.primaryColor }}
              />
              <p className="text-xs font-semibold text-gray-700 uppercase tracking-widest">{label}</p>
              <p className="text-[11px] text-gray-500 mt-0.5">{kit.description}</p>
            </div>
          </GlassCard>
        )
      })}
    </div>
  )
}
