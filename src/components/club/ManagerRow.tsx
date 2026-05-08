import type { Manager } from '@/types/club'

export default function ManagerRow({ manager }: { manager: Manager }) {
  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px 48px' }}>
      <div
        style={{
          display: 'flex',
          gap: 48,
          padding: '20px 28px',
          background: 'var(--paper-2)',
          border: '1px solid var(--rule)',
          borderTop: '2px solid var(--accent)',
        }}
      >
        <div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>Manager</div>
          <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 22, letterSpacing: '-0.01em', color: 'var(--ink)' }}>{manager.name}</div>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>Nationality</div>
          <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 22, letterSpacing: '-0.01em', color: 'var(--ink)' }}>{manager.nationality}</div>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>In charge since</div>
          <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 22, letterSpacing: '-0.01em', color: 'var(--ink)' }}>{manager.since}</div>
        </div>
      </div>
    </div>
  )
}
