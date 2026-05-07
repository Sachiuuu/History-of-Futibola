import Image from 'next/image'
import Link from 'next/link'
import type { Club } from '@/types/club'

interface ClubCardProps {
  club: Club
}

export default function ClubCard({ club }: ClubCardProps) {
  return (
    <Link href={`/clubs/${club.id}`} className="group block">
      <div
        className="relative rounded-2xl overflow-hidden border p-5 flex flex-col items-center gap-3 text-center transition-all duration-200 hover:scale-[1.03] hover:shadow-xl bg-white/70"
        style={{ borderColor: club.theme.glassStroke }}
      >
        {/* Color accent strip */}
        <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ backgroundColor: club.theme.primaryColor }} />

        <div className="relative w-16 h-16 mt-2">
          <Image
            src={club.badge}
            alt={`${club.name} badge`}
            fill
            className="object-contain drop-shadow-sm"
            sizes="64px"
          />
        </div>
        <div>
          <p className="font-bold text-gray-900 text-sm leading-tight group-hover:opacity-80 transition-opacity">{club.name}</p>
          <p className="text-xs text-gray-500 mt-0.5">{club.nickname}</p>
        </div>
        <div className="text-xs text-gray-400">{club.city}</div>
      </div>
    </Link>
  )
}
