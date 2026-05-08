'use client'
import type { ClubRecord } from '@/types/club'
import SectionHeader from '@/components/ui/SectionHeader'
import { useIntersectionVisible, useAnimatedCount } from '@/components/ui/AnimatedNumber'
import React from 'react'

interface ClubRecordsProps {
  records: Record<string, ClubRecord>
}

const RECORD_LABELS: Record<string, string> = {
  mostLeagueGoals: 'Most League Goals',
  mostAppearances: 'Most Appearances',
  mostGoalsAllCompetitions: 'Goals (All Comps)',
  biggestWin: 'Biggest Win',
  recordTransferFee: 'Record Transfer',
  recordAttendance: 'Record Attendance',
  longestUnbeaten: 'Longest Unbeaten',
}

function recordValue(record: ClubRecord): string {
  if (record.value !== undefined) return String(record.value)
  if (record.description) return record.description.split(' ')[0]
  return '—'
}

function recordSub(record: ClubRecord): string {
  const parts: string[] = []
  if (record.player) parts.push(record.player)
  if (record.description && record.value === undefined) {
    const rest = record.description.split(' ').slice(1).join(' ')
    if (rest) parts.push(rest)
  }
  if (record.year) parts.push(String(record.year))
  if (record.unit) parts.push(record.unit)
  return parts.join(' · ')
}

function RecordValue({ value, visible }: { value: number; visible: boolean }) {
  const count = useAnimatedCount(value, visible)
  return <>{count}</>
}

export default function ClubRecords({ records }: ClubRecordsProps) {
  const { ref, visible } = useIntersectionVisible(0.2)
  const entries = Object.entries(records).slice(0, 5)

  return (
    <section id="records" ref={ref as React.RefObject<HTMLElement>}>
      <SectionHeader kicker="Club History" title="Records & Milestones" />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${entries.length}, 1fr)`,
          borderTop: '1px solid var(--rule)',
          borderBottom: '1px solid var(--rule)',
        }}
      >
        {entries.map(([key, record], i) => {
          const raw = recordValue(record)
          const asNum = Number(raw)
          const isNumeric = !isNaN(asNum) && raw !== '—'
          return (
            <div
              key={key}
              style={{
                padding: '28px 20px',
                borderRight: i < entries.length - 1 ? '1px solid var(--rule)' : 'none',
              }}
            >
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 10 }}>
                {RECORD_LABELS[key] ?? key}
              </div>
              <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 44, lineHeight: 1, color: 'var(--accent)', letterSpacing: '-0.02em' }}>
                {isNumeric ? <RecordValue value={asNum} visible={visible} /> : raw}
              </div>
              <div style={{ fontSize: 13, marginTop: 8, color: 'var(--muted)' }}>
                {recordSub(record)}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
