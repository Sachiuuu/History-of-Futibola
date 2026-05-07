import type { Legend } from '@/types/club'
import SectionHeader from '@/components/ui/SectionHeader'
import LegendCard from './LegendCard'

interface LegendsSectionProps {
  legends: Legend[]
}

export default function LegendsSection({ legends }: LegendsSectionProps) {
  return (
    <section>
      <SectionHeader title="Club Legends" subtitle="The icons who defined the club's history" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {legends.map((legend) => (
          <LegendCard key={legend.id} legend={legend} />
        ))}
      </div>
    </section>
  )
}
