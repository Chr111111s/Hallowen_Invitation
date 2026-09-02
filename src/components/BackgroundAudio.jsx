import { Volume2, VolumeX } from 'lucide-react'
// Recorte de 0:55 a 2:00 con fundido de entrada/salida para que el loop no se sienta abrupto.
// Para cambiar la música, reemplaza el archivo en src/assets/ y actualiza este import.
import audioSrc from '../assets/party-theme.mp3'
import { useBackgroundAudio } from '../hooks/useBackgroundAudio.js'

function BackgroundAudio() {
  const { audioRef, isMuted, toggleMute } = useBackgroundAudio()

  return (
    <>
      <audio ref={audioRef} src={audioSrc} loop muted playsInline preload="auto" />
      <button
        type="button"
        onClick={toggleMute}
        aria-label={isMuted ? 'Activar música' : 'Silenciar música'}
        aria-pressed={!isMuted}
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--bone-dim)] shadow-[0_10px_30px_-8px_rgba(0,0,0,0.85)] backdrop-blur-md transition hover:bg-white/10 hover:text-[var(--bone)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--crimson-bright)] focus-visible:outline-offset-2"
      >
        {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      </button>
    </>
  )
}

export default BackgroundAudio
