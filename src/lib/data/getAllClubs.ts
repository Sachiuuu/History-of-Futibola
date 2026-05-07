import type { Club } from '@/types/club'

const CLUB_IDS = ['liverpool']

export async function getAllClubs(): Promise<Club[]> {
  const clubs = await Promise.all(
    CLUB_IDS.map(async (id) => {
      try {
        const data = await import(`@/data/clubs/${id}.json`)
        return data.default as Club
      } catch {
        return null
      }
    })
  )
  return clubs.filter((c: Club | null): c is Club => c !== null)
}

export { CLUB_IDS }
