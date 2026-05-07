import Image from 'next/image'
import type { Club } from '@/types/club'

interface ClubHeroProps {
  club: Club
}

export default function ClubHero({ club }: ClubHeroProps) {
  const leagueLabel = club.leagueId
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c: string) => c.toUpperCase())

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
      <div className="flex flex-col md:flex-row gap-6 items-stretch">

        {/* Left panel — club identity */}
        <div
          className="flex-1 rounded-2xl p-8 flex flex-col justify-center gap-5"
          style={{
            background: 'rgba(0, 0, 0, 0.55)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            border: '1.5px solid rgba(255,255,255,0.18)',
          }}
        >
          {/* Badge */}
          <div className="relative w-20 h-20 md:w-24 md:h-24 drop-shadow-2xl">
            <Image
              src={club.badge}
              alt={`${club.name} badge`}
              fill
              className="object-contain"
              sizes="96px"
              priority
            />
          </div>

          {/* Country · League label */}
          <p
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: 'var(--club-accent)' }}
          >
            {club.country} · {leagueLabel}
          </p>

          {/* Club name */}
          <h1 className="text-4xl md:text-5xl font-black text-white leading-none tracking-tight">
            {club.name}
          </h1>

          {/* Nickname */}
          <p className="text-base text-white/70 font-medium italic">
            &ldquo;{club.nickname}&rdquo;
          </p>
        </div>

        {/* Right panel — stadium photo */}
        <div
          className="flex-1 rounded-2xl overflow-hidden min-h-[280px] md:min-h-[360px]"
          style={{
            border: '1.5px solid rgba(255,255,255,0.18)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.35)',
          }}
        >
          <div className="relative w-full h-full min-h-[280px] md:min-h-[360px]">
            <Image
              src={club.stadium.image}
              alt={club.stadium.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            {/* Subtle label at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 px-5 py-3"
              style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.70) 0%, transparent 100%)',
              }}
            >
              <p className="text-white/80 text-sm font-semibold">{club.stadium.name}</p>
              <p className="text-white/50 text-xs">Cap. {club.stadium.capacity.toLocaleString()}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
