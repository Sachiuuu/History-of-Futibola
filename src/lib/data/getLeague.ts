import type { League } from '@/types/league'

export async function getLeague(leagueId: string): Promise<League | null> {
  try {
    const data = await import(`@/data/leagues/${leagueId}.json`)
    return data.default as League
  } catch {
    return null
  }
}
