import type { TimelineEvent } from '@/types/club'
import SectionHeader from '@/components/ui/SectionHeader'
import GlassCard from '@/components/ui/GlassCard'

interface HistoricalTimelineProps {
  events: TimelineEvent[]
}

export default function HistoricalTimeline({ events }: HistoricalTimelineProps) {
  return (
    <section>
      <SectionHeader title="Club History" subtitle="Key moments that shaped the club's identity" />

      <div className="relative">
        {/* Vertical connecting line */}
        <div
          className="absolute left-[2.2rem] md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
          style={{ backgroundColor: 'rgba(255,255,255,0.35)' }}
        />

        <div className="space-y-6">
          {events.map((event, index) => {
            const isRight = index % 2 !== 0

            return (
              <div
                key={event.year}
                className={`flex items-start gap-4 md:gap-0 ${isRight ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                {/* Card */}
                <div className={`flex-1 ${isRight ? 'md:pl-10' : 'md:pr-10'}`}>
                  <GlassCard className="p-4 hover:shadow-lg transition-shadow">
                    <p className="text-sm font-black mb-1" style={{ color: 'var(--club-primary)' }}>
                      {event.year}
                    </p>
                    <p className="text-sm text-gray-800 leading-relaxed font-medium">{event.event}</p>
                  </GlassCard>
                </div>

                {/* Dot */}
                <div
                  className="relative flex-shrink-0 w-9 h-9 rounded-full border-2 bg-white flex items-center justify-center z-10 shadow-md md:mx-auto"
                  style={{ borderColor: 'var(--club-accent)' }}
                >
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--club-primary)' }} />
                </div>

                {/* Mirror spacer desktop */}
                <div className="hidden md:block flex-1" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
