import type { ReactNode, CSSProperties } from 'react'
import type { ClubTheme } from '@/types/club'
import { buildClubTheme } from '@/lib/theme/buildClubTheme'
import WavyBackground from './WavyBackground'

interface PageWrapperProps {
  theme: ClubTheme
  children: ReactNode
  className?: string
}

export default function PageWrapper({ theme, children, className = '' }: PageWrapperProps) {
  const cssVars = buildClubTheme(theme) as CSSProperties

  return (
    <div style={cssVars} className={`relative min-h-screen ${className}`}>
      <WavyBackground theme={theme} />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
