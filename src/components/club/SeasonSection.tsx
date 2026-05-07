'use client'

import { useState } from 'react'
import type { SeasonData } from '@/types/season'
import SectionHeader from '@/components/ui/SectionHeader'
import SeasonSelector from './SeasonSelector'
import SeasonPanel from './SeasonPanel'

interface SeasonSectionProps {
  availableSeasons: string[]
  seasonsData: Record<string, SeasonData>
}

export default function SeasonSection({ availableSeasons, seasonsData }: SeasonSectionProps) {
  const [selected, setSelected] = useState<string | null>(null)
  const seasonData = selected ? seasonsData[selected] : null

  return (
    <section>
      <SectionHeader title="Season by Season" subtitle="Select a season to explore kits, results and top performers" />
      <SeasonSelector seasons={availableSeasons} selected={selected} onSelect={setSelected} />
      {seasonData && <SeasonPanel season={seasonData} />}
      {!selected && (
        <p className="mt-4 text-sm text-gray-400 italic text-center">Pick a season above to get started</p>
      )}
    </section>
  )
}
