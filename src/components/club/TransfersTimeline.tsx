import type { Transfer } from '@/types/club'
import SectionHeader from '@/components/ui/SectionHeader'

export default function TransfersTimeline({ transfers }: { transfers: Transfer[] }) {
  const sorted = [...transfers].sort((a, b) => b.year - a.year)
  return (
    <section id="transfers">
      <SectionHeader kicker="Transfer History" title="Notable Transfers" />
      <div style={{ borderTop: '1px solid var(--rule)' }}>
        {sorted.map((t) => (
          <div
            key={`${t.player}-${t.year}`}
            className="grid grid-cols-[80px_1fr] md:grid-cols-[80px_1fr_auto_auto]"
            style={{
              gap: 16,
              alignItems: 'center',
              padding: '18px 0',
              borderBottom: '1px solid var(--rule)',
            }}
          >
            <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 28, lineHeight: 1, color: 'var(--muted)', letterSpacing: '-0.02em' }}>{t.year}</div>
            <div>
              <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 20, letterSpacing: '-0.01em', color: 'var(--ink)' }}>{t.player}</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 3 }}>{t.club}</div>
            </div>
            <div
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '4px 10px',
                border: `1px solid ${t.type === 'in' ? 'var(--accent)' : 'var(--muted)'}`,
                color: t.type === 'in' ? 'var(--accent)' : 'var(--muted)',
              }}
            >
              {t.type === 'in' ? '→ IN' : 'OUT →'}
            </div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 500, color: 'var(--ink)', textAlign: 'right' }}>{t.fee}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
