'use client'

import Link from 'next/link'
import { useTheme } from '@/contexts/ThemeContext'

const LEAGUES: Array<{ id: string; name: string }> = [
  { id: 'premier-league', name: 'Premier League' },
  { id: 'la-liga', name: 'La Liga' },
  { id: 'serie-a', name: 'Serie A' },
  { id: 'bundesliga', name: 'Bundesliga' },
  { id: 'ligue-1', name: 'Ligue 1' },
]

export default function Footer() {
  const { isDark } = useTheme()
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: isDark
          ? 'color-mix(in srgb, var(--accent) 10%, #0c0a09)'
          : 'color-mix(in srgb, var(--accent) 8%, #f7f3ed)',
        borderTop: '1px solid var(--rule)',
        transition: 'background 0.25s',
      }}
    >
      <div
        className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12"
        style={{ padding: '64px 32px' }}
      >
        {/* Col 1 — Brand */}
        <div>
          <div
            style={{
              fontFamily: 'var(--display)',
              fontWeight: 800,
              fontSize: 22,
              letterSpacing: '-0.01em',
              color: 'var(--ink)',
            }}
          >
            Story of Futiball
          </div>
          <div
            style={{
              fontFamily: 'var(--display)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 16,
              color: 'var(--muted)',
              marginTop: 8,
            }}
          >
            Editorial profiles of the great clubs.
          </div>
          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginTop: 24,
            }}
          >
            © {year}
          </div>
        </div>

        {/* Col 2 — Leagues */}
        <div>
          <div className="label-mono" style={{ marginBottom: 16 }}>Leagues</div>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, listStyle: 'none', padding: 0, margin: 0 }}>
            {LEAGUES.map((l) => (
              <li key={l.id}>
                <Link
                  href={`/leagues/${l.id}`}
                  style={{
                    fontFamily: 'var(--body)',
                    fontSize: 14,
                    color: 'var(--ink)',
                  }}
                  className="hover:opacity-70 transition-opacity"
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Credits */}
        <div>
          <div className="label-mono" style={{ marginBottom: 16 }}>Credits</div>
          <p
            style={{
              fontFamily: 'var(--body)',
              fontSize: 14,
              color: 'var(--muted)',
              margin: '0 0 16px',
              lineHeight: 1.6,
            }}
          >
            Built for football lovers worldwide.
          </p>
          <Link
            href="/"
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}
            className="hover:opacity-80 transition-opacity"
          >
            Home →
          </Link>
        </div>
      </div>
    </footer>
  )
}
