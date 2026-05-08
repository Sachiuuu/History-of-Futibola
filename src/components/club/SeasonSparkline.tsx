import type { SeasonData } from '@/types/season'

interface SparklineProps {
  seasons: SeasonData[]
}

export default function SeasonSparkline({ seasons }: SparklineProps) {
  if (seasons.length < 2) return null
  const positions = seasons.map((s) => s.leaguePosition)
  const max = Math.max(...positions)
  const min = Math.min(...positions)
  const range = Math.max(1, max - min)
  const W = 100
  const H = 30
  const stepX = W / (positions.length - 1)
  const points = positions
    .map((p, i) => `${i * stepX},${((p - min) / range) * H}`)
    .join(' ')
  return (
    <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--rule)', background: 'var(--paper-2)' }}>
      <div className="label-mono" style={{ marginBottom: 8 }}>Position over time</div>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{ width: '100%', height: 30 }}>
        <polyline fill="none" stroke="var(--accent)" strokeWidth="1" points={points} />
        {positions.map((p, i) => (
          <circle key={i} cx={i * stepX} cy={((p - min) / range) * H} r="1.5" fill="var(--accent)" />
        ))}
      </svg>
    </div>
  )
}
