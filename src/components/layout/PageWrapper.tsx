import type { ReactNode, CSSProperties } from 'react'
import type { ClubTheme } from '@/types/club'
import { buildClubTheme } from '@/lib/theme/buildClubTheme'

interface PageWrapperProps {
  theme: ClubTheme
  children: ReactNode
  className?: string
}

export default function PageWrapper({ theme, children, className = '' }: PageWrapperProps) {
  const cssVars = buildClubTheme(theme) as CSSProperties

  return (
    <div style={cssVars} className={`min-h-screen ${className}`}>
      {children}
    </div>
  )
}
