import giftEnvelope from '../assets/gift-envelope.jpg'
import PhotoBackdrop from './PhotoBackdrop.jsx'
import RevealSection from './RevealSection.jsx'

function GiftNote() {
  return (
    <RevealSection
      className="relative isolate flex min-h-[80svh] flex-col overflow-hidden px-6 py-16 text-center sm:px-8"
      id="regalo"
    >
      <PhotoBackdrop
        src={giftEnvelope}
        alt="Sobres negros con sellos de cera dorados"
        position="center 40%"
      />

      <div className="relative z-10">
        <p className="eyebrow">Un gesto opcional</p>
        <h3 className="section-title">Un Pequeño Detalle</h3>
      </div>

      <div className="relative z-10 mx-auto mt-auto w-full max-w-xs rounded-lg border border-white/15 bg-black/35 px-6 py-6 shadow-[0_25px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-md">
        <p className="statement-body" style={{ maxWidth: 'none' }}>
          Mi mejor regalo es tu compañía, pero si deseas darme un obsequio, agradecería que sea dentro de un sobre.
        </p>
      </div>
    </RevealSection>
  )
}

export default GiftNote
