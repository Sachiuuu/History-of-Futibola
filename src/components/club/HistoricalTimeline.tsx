import type { TimelineEvent } from '@/types/club'
import SectionHeader from '@/components/ui/SectionHeader'

interface HistoricalTimelineProps {
  events: TimelineEvent[]
}

export default function HistoricalTimeline({ events }: HistoricalTimelineProps) {
  return (
    <section id="history">
      <SectionHeader kicker="Timeline" title="A History, Briefly" />

      <div style={{ borderTop: '1px solid var(--rule)' }}>
        {events.map((event) => (
          <article
            key={event.year}
            style={{
              display: 'grid',
              gridTemplateColumns: '120px 1fr 6fr',
              gap: 24,
              alignItems: 'baseline',
              padding: '22px 0',
              borderBottom: '1px solid var(--rule)',
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
