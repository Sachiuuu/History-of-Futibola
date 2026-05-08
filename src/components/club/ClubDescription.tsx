import type { Club } from '@/types/club'

interface ClubDescriptionProps {
  club: Club
  season?: string
}

export default function ClubDescription({ club, season }: ClubDescriptionProps) {
  return (
    <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '96px 32px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 32 }}>
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

        {/* Right: lede + blockquote */}
        <div>
          <p className="lede">{club.description}</p>

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
            <span style={{ fontFamily: 'var(--display)', color: 'var(--accent)', fontSize: 28, marginRight: 4, lineHeight: 0 }}>&ldquo;</span>
            {club.differentiator}
            <span style={{ fontFamily: 'var(--display)', color: 'var(--accent)', fontSize: 28, marginLeft: 4, lineHeight: 0 }}>&rdquo;</span>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
