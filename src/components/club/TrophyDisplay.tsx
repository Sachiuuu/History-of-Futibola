'use client'

import { useEffect, useRef, useState } from 'react'
import type { TrophyRecord } from '@/types/club'
import TrophyIcon from '@/components/ui/TrophyIcon'
import SectionHeader from '@/components/ui/SectionHeader'
import GlassCard from '@/components/ui/GlassCard'

interface TrophyDisplayProps {
  trophies: TrophyRecord
}

function AnimatedCount({ target, visible }: { target: number; visible: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!visible) return
    let start = 0
    const duration = 1200
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [visible, target])

  return <span>{count}</span>
}

export default function TrophyDisplay({ trophies }: TrophyDisplayProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

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

  return (
    <section ref={ref}>
      <SectionHeader title="Trophy Cabinet" subtitle={`${trophies.leagueTitles} league titles and counting`} />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {trophies.breakdown.map((entry: import('@/types/club').TrophyEntry) => (
          <GlassCard key={entry.competition} className="p-5 text-center hover:scale-[1.02] transition-transform cursor-default group">
            <div className="flex justify-center mb-3 transition-transform group-hover:scale-110" style={{ color: 'var(--club-accent)' }}>
              <TrophyIcon size={36} color="var(--club-primary)" />
            </div>
            <p className="text-4xl font-black mb-1" style={{ color: 'var(--club-primary)' }}>
              <AnimatedCount target={entry.count} visible={visible} />
            </p>
            <p className="text-xs font-semibold text-gray-600 leading-tight">{entry.competition}</p>
            {/* Year pills */}
            <div className="mt-3 flex flex-wrap gap-1 justify-center">
              {entry.years.slice(0, 6).map((year: number) => (
                <span
                  key={year}
                  className="text-[10px] px-1.5 py-0.5 rounded-full font-medium text-white"
                  style={{ backgroundColor: 'var(--club-primary)', opacity: 0.7 }}
                >
                  {year}
                </span>
              ))}
              {entry.years.length > 6 && (
                <span className="text-[10px] px-1.5 py-0.5 rounded-full font-medium bg-gray-200 text-gray-600">
                  +{entry.years.length - 6}
                </span>
              )}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
