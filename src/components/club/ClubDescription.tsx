import type { Club } from '@/types/club'
import GlassCard from '@/components/ui/GlassCard'

interface ClubDescriptionProps {
  club: Club
}

export default function ClubDescription({ club }: ClubDescriptionProps) {
  return (
    <div className="space-y-4 mt-8">
      <p className="text-gray-700 text-base md:text-lg leading-relaxed">{club.description}</p>

      <GlassCard className="p-5 border-l-4" style={{ borderLeftColor: 'var(--club-accent)' }}>
        <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--club-primary)' }}>
          What sets them apart
        </p>
        <p className="text-gray-700 leading-relaxed italic">{club.differentiator}</p>
      </GlassCard>
    </div>
  )
}
