import { ChevronDown } from 'lucide-react'
import heroPhoto from '../assets/hero-forest.jpg'
import PhotoBackdrop from './PhotoBackdrop.jsx'
import Seal from './Seal.jsx'

const EMBERS = [
  { left: '18%', drift: '14px', duration: '7s', delay: '.2s', size: 3 },
  { left: '32%', drift: '-18px', duration: '9s', delay: '2s', size: 2 },
  { left: '52%', drift: '10px', duration: '8s', delay: '1.2s', size: 3 },
  { left: '68%', drift: '-12px', duration: '10s', delay: '3s', size: 2 },
  { left: '80%', drift: '16px', duration: '7.5s', delay: '.8s', size: 3 },
]

function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-7 pb-24 pt-12 text-center">
      <PhotoBackdrop
        src={heroPhoto}
        alt="Bosque envuelto en niebla con una luz cálida entre los árboles"
        position="center 30%"
        priority
      />

      {EMBERS.map((ember, index) => (
        <div
          key={index}
          className="hero-ember"
          style={{
            left: ember.left,
            '--drift': ember.drift,
            animationDuration: ember.duration,
            animationDelay: ember.delay,
            width: `${ember.size}px`,
            height: `${ember.size}px`,
          }}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center">
        <p className="eyebrow">Quedas invitado a una noche de</p>
        <h2 className="hero-name">Sheyla Denisse</h2>
        <h1 className="hero-title">¡Mis 29 Años!</h1>
        <Seal className="mb-6" />
        <p className="hero-sub">Una velada embrujada bajo la luna de septiembre</p>
      </div>

      <div className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="font-[var(--font-display)] text-[0.6rem] uppercase tracking-[0.3em] text-[var(--ash)]">
          Desliza
        </span>
        <ChevronDown className="scroll-cue-icon h-4 w-4" />
      </div>
    </section>
  )
}

export default Hero
