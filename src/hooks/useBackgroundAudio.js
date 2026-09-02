import { useEffect, useRef, useState } from 'react'

export function useBackgroundAudio() {
  const audioRef = useRef(null)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    // React applies the `muted` attribute a tick after mount, so the browser
    // can still see the element as unmuted when this effect fires and block
    // autoplay. Setting it imperatively here guarantees it's muted in time.
    audio.muted = true
    audio.volume = 0.5
    audio.play().catch(() => {})
  }, [])

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return

    const next = !isMuted
    audio.muted = next
    setIsMuted(next)
    if (!next) {
      audio.play().catch(() => {})
    }
  }

  return { audioRef, isMuted, toggleMute }
}
