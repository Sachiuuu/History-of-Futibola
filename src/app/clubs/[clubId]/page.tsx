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
import SectionNav, { type SectionItem } from '@/components/club/SectionNav'
import ClubDescription from '@/components/club/ClubDescription'
import ClubDivider from '@/components/club/ClubDivider'
import BackToTop from '@/components/ui/BackToTop'
import ClubRecords from '@/components/club/ClubRecords'
import TrophyDisplay from '@/components/club/TrophyDisplay'
import HistoricalTimeline from '@/components/club/HistoricalTimeline'
import SeasonSection from '@/components/club/SeasonSection'
import LegendsSection from '@/components/club/LegendsSection'
import ManagerRow from '@/components/club/ManagerRow'
import RivalriesSection from '@/components/club/RivalriesSection'
import TacticalSection from '@/components/club/TacticalSection'
import TransfersTimeline from '@/components/club/TransfersTimeline'

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

      <ClubHero club={club} />

      {(() => {
        const sections: SectionItem[] = [
          { id: 'overview', label: 'Overview' },
          { id: 'trophies', label: 'Trophies' },
          { id: 'records', label: 'Records' },
          { id: 'history', label: 'History' },
          ...(club.rivalries ? [{ id: 'rivalries', label: 'Rivalries' }] : []),
          ...(club.tacticalIdentity ? [{ id: 'tactical', label: 'Tactical' }] : []),
          ...(club.notableTransfers ? [{ id: 'transfers', label: 'Transfers' }] : []),
          { id: 'seasons', label: 'Seasons' },
          { id: 'legends', label: 'Legends' },
        ]
        return <SectionNav sections={sections} />
      })()}

      <ClubDescription club={club} />
      {club.manager && <ManagerRow manager={club.manager} />}
      <ClubDivider />

      <main>
        {/* Trophies */}
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 32px' }}>
          <TrophyDisplay trophies={club.trophies} />
        </div>
        <ClubDivider />

        {/* Records */}
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 32px 96px' }}>
          <ClubRecords records={club.records} />
        </div>

        {/* History */}
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 32px' }}>
          <HistoricalTimeline events={club.historicalTimeline} />
        </div>
        <ClubDivider />

        {/* Rivalries */}
        {club.rivalries && (
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 32px' }}>
            <RivalriesSection rivalries={club.rivalries} />
          </div>
        )}

        {/* Tactical Identity */}
        {club.tacticalIdentity && (
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 32px' }}>
            <TacticalSection tactical={club.tacticalIdentity} />
          </div>
        )}

        {/* Notable Transfers */}
        {club.notableTransfers && (
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 32px' }}>
            <TransfersTimeline transfers={club.notableTransfers} />
          </div>
        )}
        {/* TODO: requires date field in TimelineEvent — "this day in history" card skipped */}

        {/* Seasons */}
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 32px' }}>
          <SeasonSection availableSeasons={club.availableSeasons} seasonsData={seasonsData} />
        </div>
        <ClubDivider />

        {/* Legends */}
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 32px' }}>
          <LegendsSection legends={club.legends} />
        </div>
      </main>
      <BackToTop />

      <Footer />
    </PageWrapper>
  )
}
