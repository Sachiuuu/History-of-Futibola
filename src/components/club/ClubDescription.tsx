import type { Club } from '@/types/club'

interface ClubDescriptionProps {
  club: Club
  season?: string
}

export default function ClubDescription({ club, season }: ClubDescriptionProps) {
  return (
    <section id="overview" style={{ position: 'relative', overflow: 'hidden', maxWidth: '1280px', margin: '0 auto', padding: '96px 32px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '4fr 8fr', gap: 32 }}>
        {/* Left: kicker + title + byline */}
        <div>
          <div className="kicker" style={{ color: 'var(--accent)' }}>A Profile</div>
          <h2 className="section-title" style={{ marginTop: 8 }}>
            {club.name}
          </h2>
          <p style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 16 }}>
            By the editorial desk{season ? ` · ${season}` : ''}
          </p>
        </div>

        {/* Right: lede + quote */}
        <div>
          <p className="lede">{club.description}</p>

          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: -20,
              right: -20,
              left: -20,
              fontFamily: 'var(--display)',
              fontSize: 'clamp(48px, 10vw, 130px)',
              fontWeight: 800,
              fontStyle: 'italic',
              color: 'var(--ink)',
              opacity: 0.04,
              lineHeight: 1.1,
              pointerEvents: 'none',
              userSelect: 'none',
              wordBreak: 'break-word',
              transform: 'rotate(-2deg)',
              padding: '0 32px',
            }}
          >
            {club.differentiator}
          </div>

          <blockquote
            style={{
              borderLeft: '3px solid var(--accent)',
              padding: '4px 0 4px 20px',
              fontFamily: 'var(--display)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 18,
              color: 'var(--ink)',
              margin: '24px 0 0',
            }}
          >
            <span style={{ fontFamily: 'var(--display)', color: 'var(--accent)', fontSize: 28, marginRight: 4, lineHeight: 0 }}>"</span>
            {club.differentiator}
          </blockquote>
        </div>
      </div>
    </section>
  )
}
