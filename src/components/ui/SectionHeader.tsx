interface SectionHeaderProps {
  title: string
  subtitle?: string
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">{title}</h2>
      <div className="section-divider" />
      {subtitle && <p className="text-gray-500 text-sm mt-1">{subtitle}</p>}
    </div>
  )
}
