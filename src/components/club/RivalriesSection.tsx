import Image from 'next/image'
import type { Rivalry } from '@/types/club'
import SectionHeader from '@/components/ui/SectionHeader'

export default function RivalriesSection({ rivalries }: { rivalries: Rivalry[] }) {
  return (
    <section id="rivalries">
      <SectionHeader kicker="Derby Days" title="Rivalries" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 0, borderTop: '1px solid var(--rule)', borderLeft: '1px solid var(--rule)' }}>
        {rivalries.map((r) => {
          const total = r.wins + r.draws + r.losses
          const winRate = Math.round((r.wins / total) * 100)
          return (
            <div
              key={r.name}
              style={{
                padding: '32px 28px',
                borderRight: '1px solid var(--rule)',
                borderBottom: '1px solid var(--rule)',
              }}
            >
              {/* Club name + optional badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                {r.badge && (
                  <div style={{ position: 'relative', width: 40, height: 40, flexShrink: 0 }}>
                    <Image src={r.badge} alt={r.name} fill style={{ objectFit: 'contain' }} sizes="40px" />
                  </div>
                )}
                <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 26, letterSpacing: '-0.01em', color: 'var(--ink)' }}>
                  {r.name}
                </div>
              </div>

              {/* W/D/L + win rate */}
              <div style={{ display: 'flex', gap: 24, marginBottom: 8, alignItems: 'flex-end' }}>
                {[
                  { label: 'W', value: r.wins, color: 'var(--accent)' },
                  { label: 'D', value: r.draws, color: 'var(--muted)' },
                  { label: 'L', value: r.losses, color: 'var(--muted)' },
                ].map(({ label, value, color }) => (
                  <div key={label}>
                    <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 36, lineHeight: 1, color }}>{value}</div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 4 }}>{label}</div>
                  </div>
                ))}
                <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                  <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 28, lineHeight: 1, color: 'var(--accent)' }}>{winRate}%</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 4 }}>win rate</div>
                </div>
              </div>

              <p style={{ fontSize: 13, fontStyle: 'italic', color: 'var(--muted)', lineHeight: 1.5, margin: 0, borderTop: '1px solid var(--rule)', paddingTop: 12 }}>
                {r.iconicMatch}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
