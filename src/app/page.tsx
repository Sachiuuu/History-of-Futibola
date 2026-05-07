import { getLeague } from '@/lib/data/getLeague'
import { getClub } from '@/lib/data/getClub'
import type { League } from '@/types/league'
import type { Club } from '@/types/club'
import LeagueBrowser from '@/components/home/LeagueBrowser'
import Footer from '@/components/layout/Footer'

const LEAGUE_IDS = ['premier-league']

export default async function HomePage() {
  const leagueData: Array<{ league: League; clubs: Club[] }> = []

  for (const leagueId of LEAGUE_IDS) {
    const league = await getLeague(leagueId)
    if (!league) continue

    const clubs = (
      await Promise.all(league.clubIds.map((id: string) => getClub(id)))
    ).filter((c: Club | null): c is Club => c !== null)

    leagueData.push({ league, clubs })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Story of Futiball
          </h1>
          <p className="mt-3 text-base md:text-lg text-gray-500 max-w-xl mx-auto">
            Explore the history, kits, legends and glory of the world&apos;s greatest football clubs.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <LeagueBrowser leagues={leagueData} />
      </main>

      <Footer />
    </div>
  )
}
