import type { ClubRecord } from '@/types/club'
import SectionHeader from '@/components/ui/SectionHeader'
import GlassCard from '@/components/ui/GlassCard'

interface ClubRecordsProps {
  records: Record<string, ClubRecord>
}

const recordLabels: Record<string, string> = {
  mostLeagueGoals: 'Most League Goals',
  mostAppearances: 'Most Appearances',
  mostGoalsAllCompetitions: 'Most Goals (All Competitions)',
  biggestWin: 'Biggest Win',
  recordTransferFee: 'Record Transfer Fee',
  recordAttendance: 'Record Attendance',
}

export default function ClubRecords({ records }: ClubRecordsProps) {
  return (
    <section>
      <SectionHeader title="Club Records" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(records).map(([key, record]) => (
          <GlassCard key={key} className="p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
              {recordLabels[key] ?? key}
            </p>
            {record.player && (
              <p className="font-bold text-gray-800">{record.player}</p>
            )}
            {record.description && (
              <p className="font-bold text-gray-800">{record.description}</p>
            )}
            {record.value !== undefined && (
              <p className="text-2xl font-black mt-1" style={{ color: 'var(--club-primary)' }}>
                {record.value}
                {record.unit && <span className="text-sm font-medium text-gray-500 ml-1">{record.unit}</span>}
              </p>
            )}
            {record.year && (
              <p className="text-xs text-gray-400 mt-1">{record.year}</p>
            )}
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
