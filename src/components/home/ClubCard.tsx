import Image from 'next/image'
import Link from 'next/link'
import type { Club } from '@/types/club'

interface ClubCardProps {
  club: Club
}

function leagueLabel(id: string): string {
  return id.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

export default function ClubCard({ club }: ClubCardProps) {
  return (
    <Link
      href={`/clubs/${club.id}`}
      className="cell-hoverable"
      style={{
        display: 'block',
        padding: '28px 24px',
        borderRight: '1px solid var(--rule)',
        borderBottom: '1px solid var(--rule)',
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative" style={{ width: 44, height: 44, flexShrink: 0 }}>
            <Image src={club.badge} alt={`${club.name} badge`} fill className="object-contain" sizes="44px" />
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--display)',
                fontWeight: 800,
                fontSize: 24,
                letterSpacing: '-0.01em',
                color: 'var(--ink)',
                lineHeight: 1.05,
              }}
            >
              {club.shortName}
            </div>
            <div className="label-mono" style={{ marginTop: 6 }}>
              {leagueLabel(club.leagueId)}
            </div>
          </div>
        </div>
        <div className="label-mono" style={{ textAlign: 'right' }}>
          Est. {club.foundedYear}
        </div>
      </div>
    </Link>
  )
}
