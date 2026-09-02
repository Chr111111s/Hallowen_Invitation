import { Calendar, Clock, MapPin } from 'lucide-react'
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
          <p className="info-value">3 de octubre</p>
        </div>

        <div className="info-row">
          <p className="info-row-label">
            <Clock className="h-4 w-4" />
            Hora
          </p>
          <p className="info-value">5:00 PM</p>
        </div>

        <div className="info-row">
          <p className="info-row-label">
            <MapPin className="h-4 w-4" />
            Lugar
          </p>
          <p className="info-value">Dirección pendiente por confirmar</p>
          <p className="info-note">Se compartirá próximamente</p>
        </div>
      </div>
    </RevealSection>
  )
}

export default EventDetails
