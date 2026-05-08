import type { Manager } from '@/types/club'

function Divider() {
  return <div className="hidden md:block" style={{ width: 1, background: 'var(--rule)', alignSelf: 'stretch' }} />
}

export default function ManagerRow({ manager }: { manager: Manager }) {
  const yearsInCharge = new Date().getFullYear() - manager.since

  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px 48px' }}>
      <div
        className="flex flex-col md:flex-row gap-4 md:gap-0"
        style={{
          padding: '20px 28px',
          background: 'var(--paper-2)',
          border: '1px solid var(--rule)',
          borderTop: '2px solid var(--accent)',
        }}
      >
        <div style={{ padding: '0 32px 0 0' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>Manager</div>
          <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 22, letterSpacing: '-0.01em', color: 'var(--ink)' }}>{manager.name}</div>
        </div>
        <Divider />
        <div style={{ padding: '0 32px' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>Nationality</div>
          <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 22, letterSpacing: '-0.01em', color: 'var(--ink)' }}>{manager.nationality}</div>
        </div>
        <Divider />
        <div style={{ padding: '0 0 0 32px' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>In charge since</div>
          <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 22, letterSpacing: '-0.01em', color: 'var(--ink)' }}>
            {manager.since}
            <span style={{ fontFamily: 'var(--mono)', fontWeight: 400, fontSize: 13, color: 'var(--muted)', marginLeft: 10 }}>{yearsInCharge} yr{yearsInCharge !== 1 ? 's' : ''}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
