const DEFAULT_OVERLAY =
  'bg-[linear-gradient(180deg,rgba(10,10,10,.6)_0%,rgba(10,10,10,.25)_28%,rgba(10,10,10,.7)_60%,rgba(10,10,10,.97)_100%)]'

function PhotoBackdrop({
  src,
  alt = '',
  position = 'center',
  overlayClassName = DEFAULT_OVERLAY,
  priority = false,
}) {
  return (
    <div className="absolute inset-0">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        style={{ objectPosition: position }}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  )
}

export default PhotoBackdrop
