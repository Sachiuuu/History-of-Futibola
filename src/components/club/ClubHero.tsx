'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import type { Club } from '@/types/club'

interface ClubHeroProps {
  club: Club
}

export default function ClubHero({ club }: ClubHeroProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? ['0%', '0%'] : ['0%', '40%'])

  const leagueLabel = club.leagueId
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c: string) => c.toUpperCase())

  const nameParts = club.name.split(' ')
  const isSingleWord = nameParts.length === 1
  const titleLine1 = nameParts.slice(0, -1).join(' ') || club.name
  const titleLine2 = nameParts.length > 1 ? nameParts[nameParts.length - 1] : ''

  return (
    <section
      id="overview"
      ref={sectionRef}
      className="relative overflow-hidden flex items-end"
      style={{ minHeight: '86vh', background: '#0c0a09' }}
    >
      {/* Stadium background w/ Framer-Motion parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={club.stadium.image}
          alt={club.stadium.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.08) 55%, rgba(0,0,0,0.42) 100%)',
          }}
        />
      </motion.div>

      {/* Content */}
      <div
        className="relative z-10 w-full max-w-[1280px] mx-auto"
        style={{ padding: '56px 32px 48px' }}
      >
        {/* Meta top row */}
        <div
          className="flex items-center gap-2 mb-7 flex-wrap"
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '0.16em',
            color: 'var(--ink)',
            background: 'var(--paper)',
            display: 'inline-flex',
            padding: '6px 14px',
            borderRadius: 4,
          }}
        >
          <span>CLUB PROFILE</span>
          <span style={{ color: 'var(--muted)' }}>·</span>
          <span>{club.country.toUpperCase()} · {leagueLabel.toUpperCase()}</span>
          <span style={{ color: 'var(--muted)' }}>·</span>
          <span>EST. {club.foundedYear}</span>
        </div>

        {/* Big display title */}
        <h1 className="hero-title">
          <span className="block" style={{ color: '#fff' }}>{titleLine1}</span>
          {!isSingleWord && titleLine2 && (
            <span
              className="block italic"
              style={{
                fontWeight: 400,
                color: 'var(--club-secondary, var(--accent))',
              }}
            >
              {titleLine2}
            </span>
          )}
          {isSingleWord && (
            <span
              className="block italic"
              style={{
                fontFamily: 'var(--display)',
                fontWeight: 400,
                fontStyle: 'italic',
                fontSize: 'clamp(20px, 2.5vw, 32px)',
                color: 'var(--club-secondary, var(--accent))',
                marginTop: 8,
                letterSpacing: '0.02em',
              }}
            >
              {club.motto || `${club.city} · Est. ${club.foundedYear}`}
            </span>
          )}
        </h1>

        {club.motto && (
          <p style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(14px, 2vw, 20px)', color: 'rgba(255,255,255,0.65)', marginTop: 8, letterSpacing: '0.04em' }}>
            &ldquo;{club.motto}&rdquo;
          </p>
        )}

        {/* Bottom strip — divider + crest + meta items */}
        <div
          className="flex items-end gap-8 flex-wrap"
          style={{ borderTop: '1px solid rgba(255,255,255,0.18)', paddingTop: 28 }}
        >
          {/* Club badge — Framer Motion spring stamp */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0, rotate: -15 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.2 }}
            className="relative flex-shrink-0"
            style={{ width: 112, height: 112 }}
          >
            <Image
              src={club.badge}
              alt={`${club.name} badge`}
              fill
              className="object-contain"
              sizes="112px"
            />
          </motion.div>

          {/* Meta strip */}
          <div
            className="flex flex-wrap gap-x-8 gap-y-4 flex-1"
          >
            {[
              { label: 'Nickname', value: club.nickname },
              { label: 'Founded', value: club.foundedYear },
              { label: 'Ground', value: club.stadium.name },
              { label: 'Capacity', value: club.stadium.capacity.toLocaleString() },
              { label: 'City', value: club.city },
            ].map(({ label, value }) => (
              <div key={label} style={{ minWidth: 120 }}>
                <div
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 10,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.6)',
                    marginBottom: 6,
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--display)',
                    fontWeight: 'var(--display-weight)' as 'bold',
                    fontSize: 20,
                    letterSpacing: '-0.01em',
                    color: '#fff',
                    lineHeight: 1.1,
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
