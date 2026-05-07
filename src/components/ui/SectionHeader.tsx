interface SectionHeaderProps {
  kicker?: string
  title: string
  right?: React.ReactNode
}

export default function SectionHeader({ kicker, title, right }: SectionHeaderProps) {
  return (
    <header
      className="flex items-end justify-between gap-8 flex-wrap"
      style={{
        paddingBottom: 32,
        borderBottom: '1px solid var(--rule)',
        marginBottom: 48,
      }}
    >
      <div>
        {kicker && (
          <div className="kicker" style={{ color: 'var(--accent)' }}>{kicker}</div>
        )}
        <h2 className="section-title">{title}</h2>
      </div>
      {right && (
        <div className="flex items-baseline gap-3">{right}</div>
      )}
    </header>
  )
}
