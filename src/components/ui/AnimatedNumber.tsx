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

export function useAnimatedCount(target: number, visible: boolean): number {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!visible) return
    setCount(0)
    let current = 0
    const step = Math.max(1, Math.ceil(target / 50))
    const timer = setInterval(() => {
      current += step
      if (current >= target) { setCount(target); clearInterval(timer) }
      else setCount(current)
    }, 25)
    return () => clearInterval(timer)
  }, [visible, target])
  return count
}
