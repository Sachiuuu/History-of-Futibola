'use client'
import { useEffect, useRef, useState } from 'react'
import type { TimelineEvent } from '@/types/club'
import SectionHeader from '@/components/ui/SectionHeader'

interface HistoricalTimelineProps {
  events: TimelineEvent[]
}

export default function HistoricalTimeline({ events }: HistoricalTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.05 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="history">
      <SectionHeader kicker="Timeline" title="A History, Briefly" />

      <div ref={containerRef} style={{ borderTop: '1px solid var(--rule)' }}>
        {events.map((event, i) => (
          <article
            key={event.year}
            className={visible ? 'animate-slide-in' : ''}
            style={{
              display: 'grid',
              gridTemplateColumns: '120px 1fr 6fr',
              gap: 24,
              alignItems: 'center',
              padding: '22px 0',
              borderBottom: '1px solid var(--rule)',
              maxWidth: 900,
              margin: '0 auto',
              opacity: visible ? undefined : 0,
              animationDelay: `${i * 60}ms`,
              animationFillMode: 'forwards',
            }}
          >
            {/* Year */}
            <div
              style={{
                fontFamily: 'var(--display)',
                fontWeight: 'var(--display-weight)' as 'bold',
                fontSize: 'clamp(32px, 4vw, 52px)',
                lineHeight: 1,
                letterSpacing: '-0.02em',
                color: 'var(--ink)',
              }}
            >
              {event.year}
            </div>

            {/* Accent rule */}
            <div
              style={{
                height: 1,
                background: 'var(--accent)',
                alignSelf: 'center',
                marginTop: 4,
              }}
            />

            {/* Event text */}
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.55,
                color: 'var(--ink)',
                margin: 0,
                maxWidth: '64ch',
              }}
            >
              {event.event}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
