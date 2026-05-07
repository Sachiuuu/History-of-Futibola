import type { Tournament } from '@/types/season'
import GlassCard from '@/components/ui/GlassCard'

interface TournamentResultsProps {
  tournaments: Tournament[]
}

function resultColor(stage: string): string {
  const lower = stage.toLowerCase()
  if (lower.includes('winner') || lower === 'final' && lower.includes('winner')) return '#16a34a'
  if (lower.includes('final')) return '#d97706'
  if (lower.includes('semi')) return '#2563eb'
  return '#6b7280'
}

export default function TournamentResults({ tournaments }: TournamentResultsProps) {
  if (tournaments.length === 0) return null

  return (
    <GlassCard className="p-5">
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">European & International</p>
      <div className="space-y-3">
        {tournaments.map((t, i) => (
          <div key={i} className="flex items-start gap-3">
            <div
              className="flex-shrink-0 mt-0.5 w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: resultColor(t.stage), marginTop: '5px' }}
            />
            <div>
              <p className="text-sm font-semibold text-gray-800">{t.competition}</p>
              <p className="text-xs font-medium" style={{ color: resultColor(t.stage) }}>{t.stage}</p>
              <p className="text-xs text-gray-500 mt-0.5">{t.result}</p>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  )
}
