import type { TacticalIdentity } from '@/types/club'
import SectionHeader from '@/components/ui/SectionHeader'

function FormationDots({ formation }: { formation: string }) {
  const lines = formation.split('-').map(Number).reverse()
  const allLines = [1, ...lines]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center', padding: '32px 0' }}>
      {allLines.map((count, rowIdx) => (
        <div key={rowIdx} style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
          {Array.from({ length: count }).map((_, i) => (
            <div
              key={i}
              style={{
                width: 16,
                height: 16,
                borderRadius: '50%',
                background: rowIdx === 0 ? 'var(--muted)' : 'var(--accent)',
                opacity: rowIdx === 0 ? 0.4 : 0.85,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default function TacticalSection({ tactical }: { tactical: TacticalIdentity }) {
  return (
    <section id="tactical">
      <SectionHeader kicker="Playing Style" title="Tactical Identity" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', borderTop: '1px solid var(--rule)', gap: 0 }}>
        <div style={{ borderRight: '1px solid var(--rule)', padding: '40px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8 }}>Formation</div>
          <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 48, color: 'var(--accent)', letterSpacing: '-0.03em', lineHeight: 1 }}>{tactical.formation}</div>
          <FormationDots formation={tactical.formation} />
        </div>
        <div style={{ padding: '40px 32px' }}>
          <p style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontWeight: 400, fontSize: 22, lineHeight: 1.4, color: 'var(--ink)', margin: '0 0 28px', letterSpacing: '-0.005em' }}>
            {tactical.style}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {tactical.attributes.map((attr) => (
              <span
                key={attr}
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '6px 14px',
                  border: '1px solid var(--accent)',
                  color: 'var(--accent)',
                }}
              >
                {attr}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
