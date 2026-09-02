import { useEffect, useState } from 'react'

const TARGET_DATE = new Date('2026-10-03T17:00:00')

function getTimeLeft() {
  const diff = TARGET_DATE.getTime() - Date.now()
  const clamped = Math.max(diff, 0)

  return {
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamped / (1000 * 60)) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
    isPast: diff <= 0,
  }
}

export function useCountdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    if (timeLeft.isPast) return
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [timeLeft.isPast])

  return timeLeft
}
