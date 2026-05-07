import Image from 'next/image'
import type { Legend } from '@/types/club'

interface LegendCardProps {
  legend: Legend
}

export default function LegendCard({ legend }: LegendCardProps) {
  const hasStats = legend.careerAppearances > 0

  return (
    <article style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--rule)', paddingTop: 18 }}>
      {/* Portrait */}
      <div className="relative w-full mb-4 overflow-hidden" style={{ aspectRatio: '3 / 4', background: 'var(--paper-2)' }}>
        <Image
          src={legend.image}
          alt={legend.name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Era / years active */}
      <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 6 }}>
        {legend.yearsActive}
      </div>

      {/* Name */}
      <h3 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 28, letterSpacing: '-0.02em', lineHeight: 1, margin: '0 0 8px', color: 'var(--ink)' }}>
        {legend.name}
      </h3>

      {/* Position · Nationality */}
      <div className="flex gap-1 flex-wrap mb-3" style={{ fontFamily: 'var(--mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted)' }}>
        <span>{legend.position}</span>
        <span>·</span>
        <span>{legend.nationality}</span>
      </div>

      {/* Stats */}
      {hasStats && (
        <div className="flex gap-6 mb-3" style={{ padding: '12px 0', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
          <div>
            <span style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 24, letterSpacing: '-0.01em', color: 'var(--ink)' }}>{legend.careerAppearances}</span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginLeft: 6 }}>apps</span>
          </div>
          <div>
            <span style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 24, letterSpacing: '-0.01em', color: 'var(--ink)' }}>{legend.careerGoals}</span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginLeft: 6 }}>goals</span>
          </div>
        </div>
      )}

      {/* Bio */}
      <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--ink)', margin: 0 }}>{legend.bio}</p>
    </article>
  )
}
