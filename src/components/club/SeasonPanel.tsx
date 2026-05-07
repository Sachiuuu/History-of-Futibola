import type { SeasonData } from '@/types/season'
import KitDisplay from './KitDisplay'
import LeagueStanding from './LeagueStanding'
import TournamentResults from './TournamentResults'
import TopPerformers from './TopPerformers'
import GlassCard from '@/components/ui/GlassCard'

interface SeasonPanelProps {
  season: SeasonData
}

export default function SeasonPanel({ season }: SeasonPanelProps) {
  return (
    <div className="mt-6 space-y-6 animate-fade-up">
      {/* Season highlight quote */}
      <GlassCard className="p-5 border-l-4" style={{ borderLeftColor: 'var(--club-accent)' }}>
        <p className="text-sm text-gray-700 italic leading-relaxed">{season.seasonHighlight}</p>
      </GlassCard>

      {/* Kits */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">Season Kits</p>
        <KitDisplay home={season.kits.home} away={season.kits.away} third={season.kits.third} />
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <LeagueStanding season={season} />
        <TournamentResults tournaments={season.internationalTournaments} />
      </div>

      {/* Top performers */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">Top Performers</p>
        <TopPerformers season={season} />
      </div>
    </div>
  )
}
