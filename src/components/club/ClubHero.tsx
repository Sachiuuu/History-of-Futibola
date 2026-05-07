import Image from 'next/image'
import type { Club } from '@/types/club'

interface ClubHeroProps {
  club: Club
}

export default function ClubHero({ club }: ClubHeroProps) {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
      {/* Stadium background */}
      <div className="absolute inset-0">
        <Image
          src={club.stadium.image}
          alt={club.stadium.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay using club dark color */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom,
              color-mix(in srgb, var(--club-dark) 30%, transparent) 0%,
              transparent 40%,
              color-mix(in srgb, var(--club-dark) 85%, transparent) 100%
            )`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex items-end gap-6">
          {/* Badge */}
          <div className="relative w-20 h-20 md:w-28 md:h-28 flex-shrink-0 drop-shadow-2xl">
            <Image
              src={club.badge}
              alt={`${club.name} badge`}
              fill
              className="object-contain"
              sizes="112px"
            />
          </div>

          {/* Text */}
          <div className="animate-fade-up">
            <p className="text-sm font-medium uppercase tracking-widest mb-1" style={{ color: 'var(--club-accent)' }}>
              {club.country} · {club.leagueId.replace(/-/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase())}
            </p>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-none tracking-tight">
              {club.name}
            </h1>
            <p className="mt-2 text-lg text-white/70 font-medium italic">&ldquo;{club.nickname}&rdquo;</p>
          </div>
        </div>
      </div>
    </section>
  )
}
