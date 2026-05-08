'use client'
import { useState } from 'react'
import Image from 'next/image'
import type { Legend } from '@/types/club'
import { useIntersectionVisible, useAnimatedCount } from '@/components/ui/AnimatedNumber'
import React from 'react'

interface LegendCardProps {
  legend: Legend
}

function AnimatedStat({ value, visible }: { value: number; visible: boolean }) {
  const count = useAnimatedCount(value, visible)
  return <>{count}</>
}

export default function LegendCard({ legend }: LegendCardProps) {
  const { ref, visible } = useIntersectionVisible(0.1)
  const hasStats = legend.careerAppearances > 0
  const [hovered, setHovered] = useState(false)

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderTop: `2px solid ${hovered ? 'var(--accent)' : 'var(--rule)'}`,
        paddingTop: 18,
        background: hovered ? 'color-mix(in srgb, var(--accent) 3%, var(--paper))' : 'transparent',
        transition: 'border-color 0.2s, background 0.2s',
        cursor: 'default',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Portrait */}
      <div className="relative w-full mb-4 overflow-hidden" style={{ aspectRatio: '3 / 4', background: 'var(--paper-2)' }}>
        <Image
          src={legend.image}
          alt={legend.name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Era / years active */}
      <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 6 }}>
        {legend.yearsActive}
      </div>

      {/* Name */}
      <h3 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 28, letterSpacing: '-0.02em', lineHeight: 1, margin: '0 0 8px', color: 'var(--ink)' }}>
        {legend.name}
      </h3>

      {/* Position · Nationality */}
      <div className="flex gap-1 flex-wrap mb-3" style={{ fontFamily: 'var(--mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted)' }}>
        <span>{legend.position}</span>
        <span>·</span>
        <span>{legend.nationality}</span>
      </div>

      {/* Stats */}
      {hasStats && (
        <div className="flex gap-6 mb-3" style={{ padding: '12px 0', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
          <div>
            <span style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 24, letterSpacing: '-0.01em', color: 'var(--ink)' }}>
              <AnimatedStat value={legend.careerAppearances} visible={visible} />
            </span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginLeft: 6 }}>apps</span>
          </div>
          <div>
            <span style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 24, letterSpacing: '-0.01em', color: 'var(--ink)' }}>
              <AnimatedStat value={legend.careerGoals} visible={visible} />
            </span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginLeft: 6 }}>goals</span>
          </div>
        </div>
      )}

      {/* Trophies */}
      {legend.trophies.length > 0 && (
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 10, lineHeight: 1.8 }}>
          {legend.trophies.join(' · ')}
        </div>
      )}

      {/* Bio */}
      <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--ink)', margin: 0 }}>{legend.bio}</p>
    </article>
  )
}
