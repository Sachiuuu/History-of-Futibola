import type { ClubRecord } from '@/types/club'

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

export default function ClubRecords({ records }: ClubRecordsProps) {
  const entries = Object.entries(records).slice(0, 5)

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${entries.length}, 1fr)`,
        borderTop: '1px solid var(--rule)',
        borderBottom: '1px solid var(--rule)',
        marginTop: 64,
      }}
    >
      {entries.map(([key, record], i) => (
        <div
          key={key}
          style={{
            padding: '22px 18px',
            borderRight: i < entries.length - 1 ? '1px solid var(--rule)' : 'none',
          }}
        >
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8 }}>
            {RECORD_LABELS[key] ?? key}
          </div>
          <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 36, lineHeight: 1, color: 'var(--ink)', letterSpacing: '-0.02em' }}>
            {recordValue(record)}
          </div>
          <div style={{ fontSize: 12, marginTop: 6, color: 'var(--muted)' }}>
            {recordSub(record)}
          </div>
        </div>
      ))}
    </div>
  )
}
