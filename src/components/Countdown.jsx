import { Hourglass } from 'lucide-react'
import Divider from './Divider.jsx'
import RevealSection from './RevealSection.jsx'
import { useCountdown } from '../hooks/useCountdown.js'

const UNITS = [
  { key: 'days', label: 'Días' },
  { key: 'hours', label: 'Horas' },
  { key: 'minutes', label: 'Min' },
  { key: 'seconds', label: 'Seg' },
]

function Countdown() {
  const timeLeft = useCountdown()

  return (
    <RevealSection
      className="relative isolate flex flex-col items-center overflow-hidden px-6 py-16 text-center sm:px-8"
      id="cuenta-regresiva"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_620px_380px_at_50%_0%,rgba(127,29,29,0.22),transparent_65%)]"
      />

      <div className="relative z-10 flex flex-col items-center">
        <Hourglass className="mb-4 h-5 w-5 text-[var(--crimson-bright)]" />
        <p className="eyebrow">Faltan solo</p>
        <h3 className="section-title mb-8">La Noche se Acerca</h3>

        {timeLeft.isPast ? (
          <p className="statement-body">La noche embrujada ya ha comenzado.</p>
        ) : (
          <div className="grid w-full max-w-xs grid-cols-4 gap-2.5" role="timer" aria-live="polite">
            {UNITS.map((unit) => (
              <div
                key={unit.key}
                className="rounded-lg border border-white/15 bg-black/35 px-1.5 py-4 shadow-[0_20px_45px_-20px_rgba(0,0,0,0.9)] backdrop-blur-md"
              >
                <p className="font-[var(--font-display)] text-[1.7rem] font-semibold leading-none tabular-nums text-[var(--bone)] sm:text-[2rem]">
                  {String(timeLeft[unit.key]).padStart(2, '0')}
                </p>
                <p className="mt-2 font-[var(--font-display)] text-[0.58rem] uppercase tracking-[0.2em] text-[var(--ash)]">
                  {unit.label}
                </p>
              </div>
            ))}
          </div>
        )}

        <Divider className="mt-9" />
        <p className="statement-note mt-4">26 de septiembre &middot; 6:30 PM</p>
      </div>
    </RevealSection>
  )
}

export default Countdown
