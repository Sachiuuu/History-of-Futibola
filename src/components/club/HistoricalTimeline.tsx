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
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 14,
              padding: '32px 24px',
              borderBottom: '1px solid var(--rule)',
              maxWidth: 720,
              margin: '0 auto',
              textAlign: 'center',
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
                color: 'var(--accent)',
              }}
            >
              {event.year}
            </div>

            {/* Centered dot separator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, width: 120 }}>
              <div style={{ flex: 1, height: 1, background: 'var(--rule)' }} />
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
              <div style={{ flex: 1, height: 1, background: 'var(--rule)' }} />
            </div>

            {/* Event text */}
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.6,
                color: 'var(--ink)',
                margin: 0,
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
