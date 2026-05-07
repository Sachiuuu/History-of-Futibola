import type { Club } from '@/types/club'
import Badge from '@/components/ui/Badge'

interface ClubMetaProps {
  club: Club
}

export default function ClubMeta({ club }: ClubMetaProps) {
  const items = [
    { icon: '📍', label: `${club.city}, ${club.country}` },
    { icon: '🏟️', label: `${club.stadium.name} (${club.stadium.capacity.toLocaleString()} cap.)` },
    { icon: '📅', label: `Founded ${club.foundedYear}` },
  ]

  return (
    <div className="flex flex-wrap gap-2 mt-6">
      {items.map((item) => (
        <Badge key={item.label} variant="ghost" className="text-sm">
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </Badge>
      ))}
    </div>
  )
}
