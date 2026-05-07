'use client'

import Link from 'next/link'
import { useTheme } from '@/contexts/ThemeContext'

interface NavbarProps {
  clubName?: string
  leagueName?: string
  leagueId?: string
}

export default function Navbar({ clubName, leagueName, leagueId }: NavbarProps) {
  const { isDark, toggle } = useTheme()

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 shadow-md transition-colors duration-300"
      style={{
        background: isDark ? 'rgba(10,10,10,0.92)' : 'rgba(255,255,255,0.90)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: `2px solid var(--club-primary)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center gap-2 text-sm">
        {/* Brand */}
        <Link
          href="/"
          className={`font-bold transition-opacity hover:opacity-70 ${isDark ? 'text-white' : 'text-gray-900'}`}
        >
          Story of Futiball
        </Link>

        {/* Breadcrumb */}
        {leagueName && leagueId && (
          <>
            <span className={isDark ? 'text-white/40' : 'text-gray-400'}>/</span>
            <Link
              href={`/leagues/${leagueId}`}
              className={`transition-colors hover:opacity-80 ${isDark ? 'text-white/70' : 'text-gray-600'}`}
            >
              {leagueName}
            </Link>
          </>
        )}
        {clubName && (
          <>
            <span className={isDark ? 'text-white/40' : 'text-gray-400'}>/</span>
            <span className="font-semibold" style={{ color: 'var(--club-primary)' }}>{clubName}</span>
          </>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Dark/Light toggle */}
        <button
          onClick={toggle}
          aria-label="Toggle dark mode"
          className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 hover:scale-110 ${
            isDark
              ? 'bg-white/10 border-white/20 text-white hover:bg-white/20'
              : 'bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {isDark ? (
            /* Sun icon */
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            /* Moon icon */
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  )
}
