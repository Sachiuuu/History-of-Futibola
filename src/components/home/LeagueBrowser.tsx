'use client'

import { useMemo, useState } from 'react'
import type { Club } from '@/types/club'
import ClubCard from './ClubCard'

interface LeagueBrowserProps {
  clubs: Club[]
}

const LEAGUE_TABS: Array<{ id: string; label: string }> = [
  { id: 'all', label: 'All Leagues' },
  { id: 'premier-league', label: 'Premier League' },
  { id: 'la-liga', label: 'La Liga' },
  { id: 'serie-a', label: 'Serie A' },
  { id: 'bundesliga', label: 'Bundesliga' },
  { id: 'ligue-1', label: 'Ligue 1' },
]

export default function LeagueBrowser({ clubs }: LeagueBrowserProps) {
  const [active, setActive] = useState<string>('all')

  const filtered = useMemo(() => {
    if (active === 'all') return clubs
    return clubs.filter((c) => c.leagueId === active)
  }, [clubs, active])

  return (
    <section style={{ maxWidth: 1280, margin: '0 auto', padding: '48px 32px 96px' }}>
      {/* Tabs */}
      <div
        className="flex flex-wrap gap-0"
        style={{ borderBottom: '1px solid var(--rule)', marginBottom: 0 }}
      >
        {LEAGUE_TABS.map((t) => {
          const isActive = active === t.id
          return (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                padding: '14px 18px',
                color: isActive ? 'var(--accent)' : 'var(--muted)',
                borderBottom: isActive ? '2px solid var(--accent)' : '2px solid transparent',
                background: 'none',
                cursor: 'pointer',
                marginBottom: -1,
              }}
            >
              {t.label}
            </button>
          )
        })}
      </div>

      {filtered.length > 0 ? (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{
            borderTop: '1px solid var(--rule)',
            borderLeft: '1px solid var(--rule)',
          }}
        >
          {filtered.map((club) => (
            <ClubCard key={club.id} club={club} />
          ))}
        </div>
      ) : (
        <p
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 12,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            padding: '48px 0',
          }}
        >
          No clubs in this league yet.
        </p>
      )}
    </section>
  )
}
