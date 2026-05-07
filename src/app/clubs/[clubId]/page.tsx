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
import ClubMeta from '@/components/club/ClubMeta'
import ClubDescription from '@/components/club/ClubDescription'
import HistoricalTimeline from '@/components/club/HistoricalTimeline'
import TrophyDisplay from '@/components/club/TrophyDisplay'
import SeasonSection from '@/components/club/SeasonSection'
import LegendsSection from '@/components/club/LegendsSection'
import ClubRecords from '@/components/club/ClubRecords'

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

  return (
    <PageWrapper theme={club.theme}>
      <Navbar clubName={club.name} leagueName="Premier League" leagueId={club.leagueId} />

      <ClubHero club={club} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 space-y-20">
        <div>
          <ClubMeta club={club} />
          <ClubDescription club={club} />
        </div>

        <TrophyDisplay trophies={club.trophies} />

        <HistoricalTimeline events={club.historicalTimeline} />

        <SeasonSection availableSeasons={club.availableSeasons} seasonsData={seasonsData} />

        <LegendsSection legends={club.legends} />

        <ClubRecords records={club.records} />
      </main>

      <Footer />
    </PageWrapper>
  )
}
