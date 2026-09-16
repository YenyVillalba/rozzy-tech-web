import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { SERVICIOS } from '../../data/servicios'
import PageHero from '../../components/PageHero/PageHero'
import Button from '../../components/Button/Button'
import './ServicioDetalle.css'

function ServicioDetalle() {
  const { id } = useParams()
  const navigate = useNavigate()
  const servicio = SERVICIOS.find((s) => s.id === id)

  if (!servicio) {
    return (
      <div className="servicio-detalle-notfound">
        <p>Servicio no encontrado.</p>
        <Link to="/servicios">← Volver a servicios</Link>
      </div>
    )
  }

  const { Icon, title, detalle } = servicio

  return (
    <div className="servicio-detalle">
      <PageHero
        titleNode={<>{title}</>}
        subtitle={detalle.intro}
      />

      <div className="container servicio-detalle__body">
        {/* Botón volver */}
        <button className="servicio-detalle__back" onClick={() => navigate(-1)}>
          <ArrowLeft size={16} strokeWidth={1.5} />
          Volver a servicios
        </button>

        <div className="servicio-detalle__grid">
          {/* Qué hacemos */}
          <section className="servicio-detalle__section">
            <div className="servicio-detalle__icon" aria-hidden="true">
              <Icon size={40} strokeWidth={1.5} color="#2363da" />
            </div>
            <h2 className="servicio-detalle__section-title">¿Qué hacemos?</h2>
            <ul className="servicio-detalle__list">
              {detalle.queHacemos.map((item, i) => (
                <li key={i} className="servicio-detalle__list-item">
                  <CheckCircle2 size={18} strokeWidth={1.5} color="#2363da" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Beneficios */}
          <section className="servicio-detalle__section">
            <h2 className="servicio-detalle__section-title">Beneficios</h2>
            <ul className="servicio-detalle__list">
              {detalle.beneficios.map((item, i) => (
                <li key={i} className="servicio-detalle__list-item">
                  <CheckCircle2 size={18} strokeWidth={1.5} color="#1b438f" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Tecnologías */}
        <section className="servicio-detalle__tech">
          <h2 className="servicio-detalle__section-title">Tecnologías</h2>
          <ul className="servicio-detalle__tags" role="list">
            {detalle.tecnologias.map((tech) => (
              <li key={tech} className="servicio-detalle__tag">{tech}</li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <div className="servicio-detalle__cta">
          <p className="servicio-detalle__cta-text">
            ¿Interesado en este servicio? Cuéntanos tu proyecto.
          </p>
          <Button variant="primary" size="lg">
            <Link to="/contacto">Solicitar asesoría</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ServicioDetalle
