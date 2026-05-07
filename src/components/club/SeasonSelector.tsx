'use client'

interface SeasonSelectorProps {
  seasons: string[]
  selected: string | null
  onSelect: (season: string) => void
}

export default function SeasonSelector({ seasons, selected, onSelect }: SeasonSelectorProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
      {seasons.map((season) => {
        const isActive = selected === season
        return (
          <button
            key={season}
            onClick={() => onSelect(season)}
            className="flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all duration-200 focus:outline-none"
            style={{
              backgroundColor: isActive ? 'var(--club-primary)' : 'white',
              borderColor: 'var(--club-primary)',
              color: isActive ? 'white' : 'var(--club-primary)',
            }}
          >
            {season.replace('-', '/')}
          </button>
        )
      })}
    </div>
  )
}
