import type { Club } from '@/types/club'

interface ClubMetaProps {
  club: Club
}

export default function ClubMeta({ club }: ClubMetaProps) {
  const items = [
    { icon: '📍', label: `${club.city}, ${club.country}` },
    { icon: '🏟️', label: `${club.stadium.name} · ${club.stadium.capacity.toLocaleString()} seats` },
    { icon: '📅', label: `Est. ${club.foundedYear}` },
  ]

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {items.map((item) => (
        <span
          key={item.label}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium text-white"
          style={{
            background: 'rgba(255,255,255,0.18)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.35)',
          }}
        >
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </span>
      ))}
    </div>
  )
}
