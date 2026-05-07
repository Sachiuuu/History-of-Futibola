import type { SeasonData } from '@/types/season'
import GlassCard from '@/components/ui/GlassCard'

interface LeagueStandingProps {
  season: SeasonData
}

const ordinals: Record<number, string> = { 1: 'st', 2: 'nd', 3: 'rd' }
function ordinal(n: number) {
  return ordinals[n] ?? 'th'
}

export default function LeagueStanding({ season }: LeagueStandingProps) {
  const pos = season.leaguePosition

  return (
    <GlassCard className="p-5">
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">League Standing</p>
      <div className="flex items-end gap-4 mb-4">
        <p className="text-7xl font-black leading-none" style={{ color: 'var(--club-primary)' }}>
          {pos}
          <sup className="text-2xl">{ordinal(pos)}</sup>
        </p>
        <p className="text-sm text-gray-500 leading-snug mb-1">
          {season.leaguePoints} pts<br />
          {season.leagueGoalsFor} scored · {season.leagueGoalsAgainst} conceded
        </p>
      </div>
      <div className="grid grid-cols-3 gap-2 text-center border-t border-gray-200 pt-3">
        {[
          { label: 'W', value: season.leagueWins },
          { label: 'D', value: season.leagueDraws },
          { label: 'L', value: season.leagueLosses },
        ].map(({ label, value }) => (
          <div key={label}>
            <p className="text-xl font-black text-gray-800">{value}</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest">{label}</p>
          </div>
        ))}
      </div>
    </GlassCard>
  )
}
