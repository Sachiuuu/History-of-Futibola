import type { SeasonData } from '@/types/season'
import PlayerCard from '@/components/ui/PlayerCard'

interface TopPerformersProps {
  season: SeasonData
}

export default function TopPerformers({ season }: TopPerformersProps) {
  const { topScorer, topAssister } = season

  return (
    <div className="grid grid-cols-2 gap-4">
      <PlayerCard
        name={topScorer.name}
        image={topScorer.image}
        nationality={topScorer.nationality}
        position={topScorer.position}
        statValue={topScorer.goals ?? 0}
        statLabel="Goals"
      />
      <PlayerCard
        name={topAssister.name}
        image={topAssister.image}
        nationality={topAssister.nationality}
        position={topAssister.position}
        statValue={topAssister.assists ?? 0}
        statLabel="Assists"
      />
    </div>
  )
}
