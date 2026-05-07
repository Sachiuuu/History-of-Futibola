import type { League } from '@/types/league'
import type { Club } from '@/types/club'
import ClubCard from './ClubCard'

interface LeagueBrowserProps {
  leagues: Array<{ league: League; clubs: Club[] }>
}

export default function LeagueBrowser({ leagues }: LeagueBrowserProps) {
  return (
    <div className="space-y-14">
      {leagues.map(({ league, clubs }) => (
        <section key={league.id}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 rounded-full" style={{ backgroundColor: league.primaryColor }} />
            <div>
              <h2 className="text-xl font-bold text-gray-900">{league.name}</h2>
              <p className="text-sm text-gray-500">{league.country}</p>
            </div>
          </div>

          {clubs.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {clubs.map((club) => (
                <ClubCard key={club.id} club={club} />
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-400 italic">Clubs coming soon...</p>
          )}
        </section>
      ))}
    </div>
  )
}
