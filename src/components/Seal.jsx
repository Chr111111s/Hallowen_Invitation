import { Skull } from 'lucide-react'

function Seal({ small = false, className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`inline-flex items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(135deg,var(--crimson),var(--crimson-deep))] shadow-[0_0_26px_-4px_rgba(127,29,29,0.65),inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-6px_10px_rgba(0,0,0,0.5)] backdrop-blur-md ${
        small ? 'h-11 w-11' : 'h-[76px] w-[76px]'
      } ${className}`}
    >
      <Skull className={small ? 'h-5 w-5 text-[var(--bone)]' : 'h-8 w-8 text-[var(--bone)]'} />
    </div>
  )
}

export default Seal
