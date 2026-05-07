import type { SeasonData } from '@/types/season'

export async function getSeason(clubId: string, season: string): Promise<SeasonData | null> {
  try {
    const data = await import(`@/data/seasons/${clubId}/${season}.json`)
    return data.default as SeasonData
  } catch {
    return null
  }
}
