import { useState } from 'react'

export function useStarfield(count = 36) {
  const [stars] = useState(() =>
    Array.from({ length: count }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 70,
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 3,
    })),
  )

  return stars
}
