import { Calendar, Clock, MapPin, Navigation } from 'lucide-react'
import pumpkinLantern from '../assets/pumpkin-lantern.jpg'
import PhotoBackdrop from './PhotoBackdrop.jsx'
import RevealSection from './RevealSection.jsx'

function EventDetails() {
  return (
    <RevealSection
      className="relative isolate flex min-h-[88svh] flex-col overflow-hidden px-6 py-16 text-center sm:px-8"
      id="fecha"
    >
      <PhotoBackdrop
        src={pumpkinLantern}
        alt="Calabazas talladas e iluminadas con velas sobre una mesa"
        position="center 55%"
      />

      <div className="relative z-10">
        <p className="eyebrow">El gran encuentro</p>
        <h3 className="section-title">Fecha y Lugar</h3>
      </div>

      <div className="relative z-10 mx-auto mt-auto w-full max-w-xs rounded-lg border border-white/15 bg-black/35 px-6 py-6 text-left shadow-[0_25px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-md">
        <div className="info-row">
          <p className="info-row-label">
            <Calendar className="h-4 w-4" />
            Fecha
          </p>
          <p className="info-value">26 de septiembre</p>
        </div>

        <div className="info-row">
          <p className="info-row-label">
            <Clock className="h-4 w-4" />
            Hora
          </p>
          <p className="info-value">6:30 PM</p>
        </div>

        <div className="info-row">
          <p className="info-row-label">
            <MapPin className="h-4 w-4" />
            Lugar
          </p>
          <p className="info-value">Casa Playa</p>
          <a
            href="https://maps.app.goo.gl/2imrhbiNE8ba9By47"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-[3px] border border-white/15 bg-white/5 px-4 py-2 font-[var(--font-display)] text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[var(--bone)] transition-colors hover:border-white/25 hover:bg-[var(--crimson)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--crimson-bright)] focus-visible:outline-offset-2"
          >
            <Navigation className="h-3.5 w-3.5" />
            Ver ubicación
          </a>
        </div>
      </div>
    </RevealSection>
  )
}

export default EventDetails
