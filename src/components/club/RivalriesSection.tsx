import type { Rivalry } from '@/types/club'
import SectionHeader from '@/components/ui/SectionHeader'

export default function RivalriesSection({ rivalries }: { rivalries: Rivalry[] }) {
  return (
    <section id="rivalries">
      <SectionHeader kicker="Derby Days" title="Rivalries" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '1px solid var(--rule)', borderLeft: '1px solid var(--rule)' }}>
        {rivalries.map((r) => (
          <div
            key={r.name}
            style={{
              padding: '32px 28px',
              borderRight: '1px solid var(--rule)',
              borderBottom: '1px solid var(--rule)',
            }}
          >
            <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 26, letterSpacing: '-0.01em', color: 'var(--ink)', marginBottom: 16 }}>
              {r.name}
            </div>
            <div style={{ display: 'flex', gap: 24, marginBottom: 16 }}>
              {[{ label: 'W', value: r.wins, color: 'var(--accent)' }, { label: 'D', value: r.draws, color: 'var(--muted)' }, { label: 'L', value: r.losses, color: 'var(--ink)' }].map(({ label, value, color }) => (
                <div key={label}>
                  <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 36, lineHeight: 1, color }}>{value}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 13, fontStyle: 'italic', color: 'var(--muted)', lineHeight: 1.5, margin: 0, borderTop: '1px solid var(--rule)', paddingTop: 12 }}>
              {r.iconicMatch}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
