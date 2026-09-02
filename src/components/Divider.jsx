function Divider({ className = '' }) {
  return (
    <div className={`divider ${className}`} aria-hidden="true">
      <span className="diamond" />
    </div>
  )
}

export default Divider
