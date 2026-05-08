'use client'
import { useEffect, useRef } from 'react'

export function useMagnetic(strength = 0.25) {
  const ref = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) * strength
      const y = (e.clientY - rect.top - rect.height / 2) * strength
      el.style.transform = `translate(${x}px, ${y}px)`
    }
    const onLeave = () => {
      el.style.transform = ''
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [strength])
  return ref
}
