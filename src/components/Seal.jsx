import EngravedSkull from './EngravedSkull.jsx'

function Seal({ small = false, className = '' }) {
  return (
    <EngravedSkull
      className={`text-[var(--bone-dim)] drop-shadow-[0_0_10px_rgba(127,29,29,0.35)] ${
        small ? 'h-8 w-8' : 'h-14 w-14'
      } ${className}`}
    />
  )
}

export default Seal
