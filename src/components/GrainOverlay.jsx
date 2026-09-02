function GrainOverlay() {
  return (
    <div className="grain" aria-hidden="true">
      <svg width="100%" height="100%">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  )
}

export default GrainOverlay
