import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { CLUB_IDS } from '@/lib/data/getAllClubs'
import { getClub } from '@/lib/data/getClub'
import { getSeason } from '@/lib/data/getSeason'
import type { SeasonData } from '@/types/season'

import PageWrapper from '@/components/layout/PageWrapper'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ClubHero from '@/components/club/ClubHero'
import ClubDescription from '@/components/club/ClubDescription'
import ClubRecords from '@/components/club/ClubRecords'
import TrophyDisplay from '@/components/club/TrophyDisplay'
import HistoricalTimeline from '@/components/club/HistoricalTimeline'
import SeasonSection from '@/components/club/SeasonSection'
import LegendsSection from '@/components/club/LegendsSection'

interface PageProps {
  params: Promise<{ clubId: string }>
}

export async function generateStaticParams(): Promise<{ clubId: string }[]> {
  return CLUB_IDS.map((id: string) => ({ clubId: id }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { clubId } = await params
  const club = await getClub(clubId)
  if (!club) return {}
  return {
    title: `${club.name} — Story of Futiball`,
    description: club.description.slice(0, 160),
  }
}

export default async function ClubPage({ params }: PageProps) {
  const { clubId } = await params
  const club = await getClub(clubId)
  if (!club) notFound()

  const seasonsData: Record<string, SeasonData> = {}
  await Promise.all(
    club.availableSeasons.map(async (season: string) => {
      const data = await getSeason(clubId, season)
      if (data) seasonsData[season] = data
    })
  )

  const leagueName = club.leagueId
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c: string) => c.toUpperCase())

  return (
    <PageWrapper theme={club.theme}>
      <Navbar clubName={club.name} leagueName={leagueName} leagueId={club.leagueId} />

      {/* Hero — full bleed, no container padding */}
      <ClubHero club={club} />

      {/* Editorial intro: description + records strip */}
      <ClubDescription club={club} />
      <div className="rule-band" />

      {/* Main content sections */}
      <main>
        {/* Trophies */}
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 32px' }}>
          <TrophyDisplay trophies={club.trophies} />
        </div>
        <div className="rule-band" />

        {/* Records strip — lives inside editorial section padding */}
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          <ClubRecords records={club.records} />
        </div>
        <div className="rule-band" style={{ marginTop: 0 }} />

        {/* History */}
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 32px' }}>
          <HistoricalTimeline events={club.historicalTimeline} />
        </div>
        <div className="rule-band" />

        {/* Seasons */}
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 32px' }}>
          <SeasonSection availableSeasons={club.availableSeasons} seasonsData={seasonsData} />
        </div>
        <div className="rule-band" />

        {/* Legends */}
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 32px' }}>
          <LegendsSection legends={club.legends} />
        </div>
      </main>

      <Footer />
    </PageWrapper>
  )
}
