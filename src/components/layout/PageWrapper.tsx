'use client'
import type { ReactNode, CSSProperties } from 'react'
import type { ClubTheme } from '@/types/club'
import { buildClubTheme } from '@/lib/theme/buildClubTheme'
import { useTheme } from '@/contexts/ThemeContext'

interface PageWrapperProps {
  theme: ClubTheme
  children: ReactNode
  className?: string
}

export default function PageWrapper({ theme, children, className = '' }: PageWrapperProps) {
  const { isDark } = useTheme()
  const cssVars = buildClubTheme(theme, isDark) as CSSProperties
  return (
    <div style={cssVars} className={`min-h-screen ${className}`}>
      {children}
    </div>
  )
}
