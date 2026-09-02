import { useReveal } from '../hooks/useReveal.js'

function RevealSection({ as: Tag = 'section', className = '', children, ...props }) {
  const { ref, isVisible } = useReveal()

  return (
    <Tag ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`} {...props}>
      {children}
    </Tag>
  )
}

export default RevealSection
