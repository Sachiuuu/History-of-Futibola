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
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '36px 28px',
        }}
      >
        {legends.map((legend) => (
          <LegendCard key={legend.id} legend={legend} />
        ))}
      </div>
    </section>
  )
}
