import { useStarfield } from '../hooks/useStarfield.js'

function Starfield() {
  const stars = useStarfield()

  return (
    <div className="starfield" aria-hidden="true">
      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  )
}

export default Starfield
