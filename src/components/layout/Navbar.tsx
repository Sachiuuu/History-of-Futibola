'use client'

import Link from 'next/link'
import { useTheme } from '@/contexts/ThemeContext'

interface NavbarProps {
  clubName?: string
  leagueName?: string
  leagueId?: string
}

const NAV_LINKS = [
  { href: '#overview', label: 'Overview' },
  { href: '#trophies', label: 'Trophies' },
  { href: '#history', label: 'History' },
  { href: '#seasons', label: 'Seasons' },
  { href: '#kits', label: 'Kits' },
  { href: '#legends', label: 'Legends' },
]

export default function Navbar({ clubName, leagueName, leagueId }: NavbarProps) {
  const { isDark, toggle } = useTheme()

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: isDark
          ? 'color-mix(in srgb, var(--paper) 88%, transparent)'
          : 'color-mix(in srgb, var(--paper) 88%, transparent)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--rule)',
      }}
    >
      <div
        className="max-w-[1280px] mx-auto px-8 flex justify-between items-center gap-6"
        style={{ padding: '14px 32px' }}
      >
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div>
            <div className="kicker" style={{ fontSize: 10 }}>Story of Futiball</div>
            <div
              style={{
                fontFamily: 'var(--display)',
                fontWeight: 'var(--display-weight)',
                fontSize: 14,
                letterSpacing: '0.04em',
                color: 'var(--ink)',
              }}
            >
              {clubName ? (
                <>
                  {leagueId && leagueName && (
                    <Link href={`/leagues/${leagueId}`} className="opacity-50 hover:opacity-80 transition-opacity mr-1">
                      {leagueName}
                    </Link>
                  )}
                  {leagueId && <span className="opacity-30 mr-1">/</span>}
                  <span style={{ color: 'var(--accent)' }}>{clubName}</span>
                </>
              ) : (
                <Link href="/" className="hover:opacity-70 transition-opacity">FOOTBALL · PROFILE</Link>
              )}
            </div>
          </div>
        </div>

        {/* Section nav — desktop only */}
        {clubName && (
          <nav
            className="hidden md:flex gap-5"
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: 'var(--muted)',
            }}
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:opacity-100 transition-opacity"
                style={{ opacity: 0.7 }}
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}

        {/* Dark/light toggle */}
        <button
          onClick={toggle}
          aria-label="Toggle dark mode"
          className="flex items-center justify-center w-8 h-8 rounded-full transition-all hover:scale-110 flex-shrink-0"
          style={{
            background: 'var(--paper-2)',
            border: '1px solid var(--rule)',
            color: 'var(--ink)',
          }}
        >
          {isDark ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  )
}
