import type { Legend } from '@/types/club'
import SectionHeader from '@/components/ui/SectionHeader'
import LegendCard from './LegendCard'

interface LegendsSectionProps {
  legends: Legend[]
}

export default function LegendsSection({ legends }: LegendsSectionProps) {
  return (
    <section id="legends">
      <SectionHeader kicker="Hall of Fame" title="Legends of the Club" />
      {/* Skipped: cursor follower (too playful for editorial tone) */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        style={{ gap: '36px 28px' }}
      >
        {legends.map((legend) => (
          <LegendCard key={legend.id} legend={legend} />
        ))}
      </div>
    </section>
  )
}
