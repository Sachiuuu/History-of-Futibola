import { ImageResponse } from 'next/og'
import { getClub } from '@/lib/data/getClub'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OG({ params }: { params: Promise<{ clubId: string }> }) {
  const { clubId } = await params
  const club = await getClub(clubId)
  if (!club) {
    return new ImageResponse(<div>Not found</div>, size)
  }
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: club.theme.darkColor,
          color: '#fff',
          padding: 80,
          fontFamily: 'serif',
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 4, textTransform: 'uppercase', opacity: 0.7 }}>
          Story of Futiball · {club.country}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 120, lineHeight: 0.95, fontWeight: 800 }}>{club.shortName}</div>
          <div style={{ fontSize: 32, color: club.theme.primaryColor, fontStyle: 'italic' }}>
            {club.motto || club.nickname}
          </div>
        </div>
        <div style={{ fontSize: 22, letterSpacing: 2, textTransform: 'uppercase', opacity: 0.55 }}>
          {club.stadium.name} · Est. {club.foundedYear}
        </div>
      </div>
    ),
    size,
  )
}
