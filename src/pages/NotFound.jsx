import { Link } from 'react-router-dom'
import Seal from '../components/Seal.jsx'

function NotFound() {
  return (
    <section className="lost-page">
      <div className="flex flex-col items-center text-center">
        <p className="eyebrow">Página extraviada</p>
        <h1 className="hero-title" style={{ fontSize: 'clamp(2.4rem, 12vw, 3rem)' }}>
          404
        </h1>
        <Seal className="mx-auto mb-6" />
        <p className="hero-sub">La página que buscas se perdió en la niebla.</p>
        <Link to="/" className="lost-link">
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}

export default NotFound
