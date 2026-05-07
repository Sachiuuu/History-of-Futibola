import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'filled' | 'outline' | 'ghost'
  className?: string
}

export default function Badge({ children, variant = 'ghost', className = '' }: BadgeProps) {
  const base = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium'

  const variants = {
    filled: 'text-white',
    outline: 'border bg-transparent',
    ghost: 'bg-white/60 text-gray-800',
  }

  return (
    <span
      className={`${base} ${variants[variant]} ${className}`}
      style={
        variant === 'filled'
          ? { backgroundColor: 'var(--club-primary)' }
          : variant === 'outline'
          ? { borderColor: 'var(--club-primary)', color: 'var(--club-primary)' }
          : undefined
      }
    >
      {children}
    </span>
  )
}
