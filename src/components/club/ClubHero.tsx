import Image from 'next/image'
import type { Club } from '@/types/club'

interface ClubHeroProps {
  club: Club
}

function ordinal(n: number): string {
  const s = ['th', 'st', 'nd', 'rd']
  const v = n % 100
  return s[(v - 20) % 10] || s[v] || s[0]
}

export default function ClubHero({ club }: ClubHeroProps) {
  const leagueLabel = club.leagueId
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c: string) => c.toUpperCase())

  const nameParts = club.name.split(' ')
  const titleLine1 = nameParts.slice(0, -1).join(' ') || club.name
  const titleLine2 = nameParts.length > 1 ? nameParts[nameParts.length - 1] : ''

  return (
    <section
      id="overview"
      className="relative overflow-hidden flex items-end"
      style={{ minHeight: '86vh', background: '#0c0a09' }}
    >
      {/* Stadium background */}
      <div className="absolute inset-0">
        <Image
          src={club.stadium.image}
          alt={club.stadium.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.08) 55%, rgba(0,0,0,0.48) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10 w-full max-w-[1280px] mx-auto"
        style={{ padding: '56px 32px 48px' }}
      >
        {/* Meta top row */}
        <div
          className="flex items-center gap-2 mb-7"
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '0.16em',
            color: 'rgba(255,255,255,0.85)',
          }}
        >
          <span>CLUB PROFILE</span>
          <span style={{ color: 'rgba(255,255,255,0.4)' }}>·</span>
          <span>{club.country.toUpperCase()} · {leagueLabel.toUpperCase()}</span>
          <span style={{ color: 'rgba(255,255,255,0.4)' }}>·</span>
          <span>EST. {club.foundedYear}</span>
        </div>

        {/* Big display title */}
        <h1 className="hero-title">
          <span className="block" style={{ color: '#fff' }}>{titleLine1}</span>
          {titleLine2 && (
            <span
              className="block italic"
              style={{
                fontWeight: 400,
                color: 'var(--accent)',
              }}
            >
              {titleLine2}
            </span>
          )}
        </h1>

        {/* Bottom strip — divider + crest + meta items */}
        <div
          className="flex items-end gap-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.18)', paddingTop: 28 }}
        >
          {/* Club badge */}
          <div className="relative flex-shrink-0 w-[72px] h-[72px]">
            <Image
              src={club.badge}
              alt={`${club.name} badge`}
              fill
              className="object-contain"
              sizes="72px"
            />
          </div>

          {/* Meta strip */}
          <div
            className="grid gap-8 flex-1"
            style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}
          >
            {[
              { label: 'Nickname', value: club.nickname },
              { label: 'Founded', value: club.foundedYear },
              { label: 'Ground', value: club.stadium.name },
              { label: 'Capacity', value: club.stadium.capacity.toLocaleString() },
              { label: 'City', value: club.city },
            ].map(({ label, value }) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 10,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.6)',
                    marginBottom: 6,
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--display)',
                    fontWeight: 'var(--display-weight)' as 'bold',
                    fontSize: 20,
                    letterSpacing: '-0.01em',
                    color: '#fff',
                    lineHeight: 1.1,
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
