import Image from 'next/image'
import GlassCard from './GlassCard'

interface PlayerCardProps {
  name: string
  image: string
  nationality: string
  position: string
  statValue: number
  statLabel: string
}

export default function PlayerCard({ name, image, nationality, position, statValue, statLabel }: PlayerCardProps) {
  return (
    <GlassCard className="p-5 flex flex-col items-center text-center gap-3">
      <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 bg-gray-100" style={{ borderColor: 'var(--club-accent)' }}>
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-top"
          sizes="80px"
          onError={() => {}}
        />
      </div>
      <div>
        <p className="font-semibold text-gray-900 text-sm leading-tight">{name}</p>
        <p className="text-xs text-gray-500 mt-0.5">{position} · {nationality}</p>
      </div>
      <div className="mt-auto">
        <p className="text-3xl font-black" style={{ color: 'var(--club-primary)' }}>{statValue}</p>
        <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">{statLabel}</p>
      </div>
    </GlassCard>
  )
}
