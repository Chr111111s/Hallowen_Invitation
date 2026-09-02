import { useEffect, useRef, useState } from 'react'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function useReveal() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(prefersReducedMotion)

  useEffect(() => {
    const node = ref.current
    if (!node || isVisible) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [isVisible])

  return { ref, isVisible }
}
