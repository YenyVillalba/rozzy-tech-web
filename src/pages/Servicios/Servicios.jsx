import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../../components/PageHero/PageHero'
import { SERVICIOS } from '../../data/servicios'
import './Servicios.css'

function Servicios() {
  return (
    <div className="servicios">
      {/* Encabezado de página */}
      <PageHero
        titleNode={<>Nuestros <span style={{ color: '#2363da' }}>Servicios</span></>}
        subtitle="Ofrecemos soluciones de desarrollo de software a medida para impulsar el crecimiento de tu negocio."
      />

      {/* Grid de servicios */}
      <section className="servicios-grid-section">
        <div className="container">
          <ul className="servicios__grid" role="list">
            {SERVICIOS.map((servicio) => (
              <li key={servicio.id}>
                <Link
                  to={`/servicios/${servicio.id}`}
                  className="servicio-card"
                  aria-label={`Ver más sobre ${servicio.title}`}
                >
                  <div className="servicio-card__icon" aria-hidden="true">
                    <servicio.Icon size={32} strokeWidth={1.5} color="#2363da" />
                  </div>
                  <h3 className="servicio-card__title">{servicio.title}</h3>
                  <p className="servicio-card__description">{servicio.description}</p>
                  <span className="servicio-card__link">
                    Ver más <ArrowRight size={14} strokeWidth={2} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Servicios
