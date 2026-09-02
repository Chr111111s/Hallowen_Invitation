import venetianMask from '../assets/venetian-mask.jpg'
import PhotoBackdrop from './PhotoBackdrop.jsx'
import RevealSection from './RevealSection.jsx'

function DressCode() {
  return (
    <RevealSection
      className="relative isolate flex min-h-[85svh] flex-col items-center justify-center overflow-hidden px-6 py-16 text-center sm:px-8"
      id="disfraz"
    >
      <PhotoBackdrop
        src={venetianMask}
        alt="Máscara veneciana dorada sostenida junto a una rosa roja"
        position="center 30%"
        overlayClassName="bg-[linear-gradient(180deg,rgba(10,10,10,.45)_0%,rgba(10,10,10,.35)_45%,rgba(10,10,10,.85)_100%)]"
      />

      <div className="relative z-10">
        <p className="eyebrow">El código de la noche</p>
        <h3 className="statement-title mt-3 text-[2rem] sm:text-[2.4rem]">Disfraz obligatorio</h3>
        <p className="statement-body">¡No olvides tu disfraz! Habrá premio al mejor.</p>
        <p className="statement-note">La elegancia y el misterio son bienvenidos.</p>
      </div>
    </RevealSection>
  )
}

export default DressCode
