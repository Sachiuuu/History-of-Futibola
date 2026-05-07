import type { Club } from '@/types/club'

export async function getClub(clubId: string): Promise<Club | null> {
  try {
    const data = await import(`@/data/clubs/${clubId}.json`)
    return data.default as Club
  } catch {
    return null
  }
}
