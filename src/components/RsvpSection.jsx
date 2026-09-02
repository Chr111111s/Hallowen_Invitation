import { MessageCircle } from 'lucide-react'
import rsvpCandles from '../assets/rsvp-candles.jpg'
import PhotoBackdrop from './PhotoBackdrop.jsx'
import RevealSection from './RevealSection.jsx'
import { RSVP_MESSAGE, RSVP_WHATSAPP_NUMBER } from '../utils/config.js'

const WHATSAPP_HREF = `https://wa.me/${RSVP_WHATSAPP_NUMBER}?text=${encodeURIComponent(RSVP_MESSAGE)}`

function RsvpSection() {
  return (
    <RevealSection
      className="relative isolate flex min-h-[85svh] flex-col items-center justify-center overflow-hidden px-6 py-16 text-center sm:px-8"
      id="confirmacion"
    >
      <PhotoBackdrop
        src={rsvpCandles}
        alt="Tres velas encendidas en candeleros sobre un piso de mosaico, en la oscuridad"
        position="center 30%"
      />

      <div className="relative z-10">
        <p className="eyebrow">Tu lugar en la lista</p>
        <h3 className="statement-title">Confirma tu Asistencia</h3>
        <p className="statement-body">
          Para organizar cada detalle de la noche, avísame si podrás acompañarme.
        </p>

        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex items-center gap-2 rounded-[3px] border border-white/15 bg-[var(--crimson)] px-8 py-3.5 font-[var(--font-display)] text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--bone)] transition-colors hover:border-white/25 hover:bg-[var(--crimson-bright)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--crimson-bright)] focus-visible:outline-offset-2"
        >
          <MessageCircle className="h-4 w-4" />
          Confirmar por WhatsApp
        </a>
        <p className="statement-note">Se abrirá WhatsApp con un mensaje ya redactado</p>
      </div>
    </RevealSection>
  )
}

export default RsvpSection
