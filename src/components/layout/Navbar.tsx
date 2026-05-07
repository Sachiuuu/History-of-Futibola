import Link from 'next/link'

interface NavbarProps {
  clubName?: string
  leagueName?: string
  leagueId?: string
}

export default function Navbar({ clubName, leagueName, leagueId }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center gap-2 text-sm">
        <Link href="/" className="font-bold text-gray-900 hover:opacity-70 transition-opacity">
          Story of Futiball
        </Link>
        {leagueName && leagueId && (
          <>
            <span className="text-gray-400">/</span>
            <Link href={`/leagues/${leagueId}`} className="text-gray-600 hover:text-gray-900 transition-colors">
              {leagueName}
            </Link>
          </>
        )}
        {clubName && (
          <>
            <span className="text-gray-400">/</span>
            <span className="font-medium" style={{ color: 'var(--club-primary)' }}>{clubName}</span>
          </>
        )}
      </div>
    </nav>
  )
}
