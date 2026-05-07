import type { TimelineEvent } from '@/types/club'
import SectionHeader from '@/components/ui/SectionHeader'

interface HistoricalTimelineProps {
  events: TimelineEvent[]
}

export default function HistoricalTimeline({ events }: HistoricalTimelineProps) {
  return (
    <section>
      <SectionHeader title="Club History" subtitle="Key moments that shaped the club's identity" />

      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-[4.5rem] md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
          style={{ backgroundColor: 'var(--club-primary)', opacity: 0.2 }}
        />

        <div className="space-y-8">
          {events.map((event, index) => {
            const isRight = index % 2 !== 0

            return (
              <div
                key={event.year}
                className={`flex items-start gap-4 md:gap-0 ${isRight ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                {/* Content */}
                <div className={`flex-1 ${isRight ? 'md:pl-10' : 'md:pr-10'}`}>
                  <div
                    className="glass-card p-4 hover:shadow-md transition-shadow"
                    style={{ marginLeft: isRight ? 0 : undefined }}
                  >
                    <p className="text-sm font-bold mb-1" style={{ color: 'var(--club-primary)' }}>
                      {event.year}
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">{event.event}</p>
                  </div>
                </div>

                {/* Year dot — desktop only center, mobile left */}
                <div className="relative flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full border-2 bg-white flex items-center justify-center z-10 shadow-sm md:mx-auto"
                  style={{ borderColor: 'var(--club-primary)' }}>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--club-primary)' }} />
                </div>

                {/* Mirror spacer on desktop */}
                <div className="hidden md:block flex-1" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
