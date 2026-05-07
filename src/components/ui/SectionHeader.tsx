interface SectionHeaderProps {
  title: string
  subtitle?: string
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight drop-shadow-md">{title}</h2>
      <div className="section-divider" />
      {subtitle && (
        <p className="text-white text-sm mt-1 font-bold drop-shadow-md tracking-wide">{subtitle}</p>
      )}
    </div>
  )
}
