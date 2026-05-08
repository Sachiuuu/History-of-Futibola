'use client'
import { useEffect, useRef, useState } from 'react'

export function useIntersectionVisible(threshold = 0.2) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

export function useCountUp(target: number, visible: boolean, duration = 1200): number {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!visible) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(1, elapsed / duration)
      setValue(Math.round(easeOutCubic(progress) * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [visible, target, duration])
  return value
}

// Backward compatibility — alias for existing call sites
export const useAnimatedCount = useCountUp
