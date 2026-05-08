'use client'

import { useEffect, useRef, useState } from 'react'
import type { TrophyRecord, TrophyEntry } from '@/types/club'
import SectionHeader from '@/components/ui/SectionHeader'

interface TrophyDisplayProps {
  trophies: TrophyRecord
}

function TrophyGlyph({ kind }: { kind: string }) {
  if (/Champions|European Cup/.test(kind)) {
    return (
      <svg viewBox="0 0 80 80" width="100%" aria-hidden="true">
        <circle cx="40" cy="40" r="32" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="40" cy="40" r="16" fill="currentColor" opacity="0.15" />
        <circle cx="40" cy="40" r="6" fill="currentColor" />
      </svg>
    )
  }
  if (/League|Community/.test(kind)) {
    return (
      <svg viewBox="0 0 80 80" width="100%" aria-hidden="true">
        <rect x="14" y="14" width="52" height="52" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="26" y="26" width="28" height="28" fill="currentColor" opacity="0.15" />
        <rect x="36" y="36" width="8" height="8" fill="currentColor" />
      </svg>
    )
  }
  if (/Cup|Europa|Shield/.test(kind)) {
    return (
      <svg viewBox="0 0 80 80" width="100%" aria-hidden="true">
        <polygon points="40,8 72,40 40,72 8,40" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <polygon points="40,22 58,40 40,58 22,40" fill="currentColor" opacity="0.15" />
        <circle cx="40" cy="40" r="4" fill="currentColor" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 80 80" width="100%" aria-hidden="true">
      <circle cx="40" cy="40" r="30" fill="currentColor" opacity="0.12" />
      <circle cx="40" cy="40" r="6" fill="currentColor" />
    </svg>
  )
}

function AnimatedCount({ target, visible }: { target: number; visible: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!visible) return
    let current = 0
    const step = Math.max(1, Math.ceil(target / 40))
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, 30)
    return () => clearInterval(timer)
  }, [visible, target])

  return <span>×{count}</span>
}

export default function TrophyDisplay({ trophies }: TrophyDisplayProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const total = trophies.breakdown.reduce((a, t) => a + t.count, 0)

  return (
    <section id="trophies" ref={ref}>
      <SectionHeader
        kicker="Honours"
        title="The Cabinet"
        right={
          <>
            <span
              style={{
                fontFamily: 'var(--display)',
                fontWeight: 800,
                fontSize: 56,
                color: 'var(--accent)',
                lineHeight: 1,
              }}
            >
              {total}
            </span>
            <span
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                maxWidth: 120,
              }}
            >
              major trophies
            </span>
          </>
        }
      />

      {/* Trophy grid — shared borders */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          borderTop: '1px solid var(--rule)',
          borderLeft: '1px solid var(--rule)',
        }}
      >
        {trophies.breakdown.map((entry: TrophyEntry, i: number) => (
          <article
            key={entry.competition}
            style={{
              position: 'relative',
              padding: 28,
              borderRight: '1px solid var(--rule)',
              borderBottom: '1px solid var(--rule)',
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              background: 'transparent',
              transition: 'background 0.18s ease',
            }}
            onMouseEnter={(e) => {
              setHoveredIdx(i)
              ;(e.currentTarget as HTMLElement).style.background = 'var(--accent-soft)'
            }}
            onMouseLeave={(e) => {
              setHoveredIdx(null)
              ;(e.currentTarget as HTMLElement).style.background = 'transparent'
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                overflow: 'hidden',
                pointerEvents: 'none',
                borderRadius: 'inherit',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '40%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)',
                  animation: hoveredIdx === i ? 'shimmer-sweep 0.6s ease forwards' : 'none',
                }}
              />
            </div>
            <div className="flex justify-between items-center">
              <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '0.12em' }}>
                № {String(i + 1).padStart(2, '0')}
              </span>
              <span style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 48, color: 'var(--accent)', lineHeight: 1 }}>
                <AnimatedCount target={entry.count} visible={visible} />
              </span>
            </div>

            <div style={{ width: 64, color: 'var(--ink)', opacity: 0.7 }}>
              <TrophyGlyph kind={entry.competition} />
            </div>

            <h3 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 20, lineHeight: 1.1, letterSpacing: '-0.01em', margin: '4px 0 0', color: 'var(--ink)' }}>
              {entry.competition}
            </h3>

            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', lineHeight: 1.7, wordSpacing: 4 }}>
              {entry.years.length > 5
                ? `${entry.years.slice(-5).join(' · ')} +${entry.years.length - 5} more`
                : entry.years.join(' · ')}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
