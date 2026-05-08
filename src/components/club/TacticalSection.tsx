import type { TacticalIdentity, TacticalAttribute } from '@/types/club'
import SectionHeader from '@/components/ui/SectionHeader'

function Radar({ attributes }: { attributes: TacticalAttribute[] }) {
  const data = attributes.slice(0, 5)
  const cx = 100
  const cy = 100
  const R = 80
  const angle = (i: number) => (Math.PI * 2 * i) / data.length - Math.PI / 2
  const points = data
    .map((a, i) => {
      const r = (a.intensity / 10) * R
      return `${cx + Math.cos(angle(i)) * r},${cy + Math.sin(angle(i)) * r}`
    })
    .join(' ')
  return (
    <svg viewBox="0 0 200 200" style={{ width: '100%', maxWidth: 280, margin: '24px auto 0' }}>
      {[0.25, 0.5, 0.75, 1].map((scale) => (
        <polygon
          key={scale}
          points={data
            .map((_, i) => `${cx + Math.cos(angle(i)) * R * scale},${cy + Math.sin(angle(i)) * R * scale}`)
            .join(' ')}
          fill="none"
          stroke="var(--rule)"
          strokeWidth="0.5"
        />
      ))}
      <polygon points={points} fill="var(--accent)" fillOpacity="0.25" stroke="var(--accent)" strokeWidth="1.5" />
      {data.map((a, i) => (
        <text
          key={a.name}
          x={cx + Math.cos(angle(i)) * (R + 12)}
          y={cy + Math.sin(angle(i)) * (R + 12)}
          fontSize="8"
          textAnchor="middle"
          fill="var(--muted)"
          style={{ fontFamily: 'var(--mono)' }}
        >
          {a.name.split(' ')[0]}
        </text>
      ))}
    </svg>
  )
}

const ROW_LABELS = ['GK', 'DEF', 'MID', 'ATT'] as const

function FormationDots({ formation }: { formation: string }) {
  const lines = formation.split('-').map(Number)
  const allLines = [1, ...lines]
  const labels = ROW_LABELS.slice(0, allLines.length)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18, padding: '32px 0', width: '100%' }}>
      {allLines.map((count, rowIdx) => {
        const isGK = rowIdx === 0
        return (
          <div key={rowIdx} style={{ display: 'grid', gridTemplateColumns: '36px 1fr', alignItems: 'center', gap: 12 }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', color: 'var(--muted)', textAlign: 'right' }}>
              {labels[rowIdx]}
            </div>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
              {Array.from({ length: count }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: isGK ? 18 : 16,
                    height: isGK ? 18 : 16,
                    borderRadius: '50%',
                    background: isGK ? 'transparent' : 'var(--accent)',
                    border: isGK ? '2px solid var(--ink)' : 'none',
                    opacity: isGK ? 1 : 0.85,
                  }}
                />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function AttributeBar({ name, intensity, tag }: { name: string; intensity: number; tag?: string }) {
  const filled = Math.max(0, Math.min(10, intensity))
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_140px_90px]" style={{ alignItems: 'center', gap: 16, padding: '10px 0', borderBottom: '1px solid var(--rule)' }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink)' }}>
        {name}
      </div>
      <div style={{ display: 'flex', gap: 3 }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: 8,
              background: i < filled ? 'var(--accent)' : 'var(--rule)',
              opacity: i < filled ? 1 : 0.6,
            }}
          />
        ))}
      </div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', textAlign: 'right' }}>
        {tag ?? `${filled}/10`}
      </div>
    </div>
  )
}

export default function TacticalSection({ tactical }: { tactical: TacticalIdentity }) {
  return (
    <section id="tactical">
      <SectionHeader kicker="Playing Style" title="Tactical Identity" />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr]" style={{ borderTop: '1px solid var(--rule)', gap: 0 }}>
        <div style={{ borderRight: '1px solid var(--rule)', padding: '40px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8 }}>Formation</div>
          <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 56, color: 'var(--accent)', letterSpacing: '-0.03em', lineHeight: 1 }}>{tactical.formation}</div>
          <FormationDots formation={tactical.formation} />
        </div>
        <div style={{ padding: '40px 32px' }}>
          <p style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontWeight: 400, fontSize: 22, lineHeight: 1.4, color: 'var(--ink)', margin: '0 0 20px', letterSpacing: '-0.005em' }}>
            {tactical.style}
          </p>

          {tactical.evolution && (
            <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--muted)', margin: '0 0 32px', borderLeft: '2px solid var(--accent)', paddingLeft: 16 }}>
              {tactical.evolution}
            </p>
          )}

          <div style={{ borderTop: '1px solid var(--rule)' }}>
            <div className="hidden lg:grid lg:grid-cols-[1fr_140px_90px]" style={{ gap: 16, padding: '10px 0', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', borderBottom: '1px solid var(--rule)' }}>
              <span>Attribute</span>
              <span style={{ textAlign: 'center' }}>Intensity</span>
              <span style={{ textAlign: 'right' }}>Note</span>
            </div>
            {tactical.attributes.map((attr) => (
              <AttributeBar key={attr.name} name={attr.name} intensity={attr.intensity} tag={attr.tag} />
            ))}
            {tactical.attributes.length >= 3 && <Radar attributes={tactical.attributes} />}
          </div>
        </div>
      </div>
    </section>
  )
}
