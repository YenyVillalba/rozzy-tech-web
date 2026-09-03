import heroBg from '../../assets/hero-rozzy-tech.png'
import './PageHero.css'

/**
 * PageHero - Encabezado de página con imagen de fondo compartida
 *
 * Props:
 *   title    : string (requerido)
 *   subtitle : string (opcional)
 */
function PageHero({ title, subtitle }) {
  return (
    <section
      className="page-hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="page-hero__overlay" aria-hidden="true" />
      <div className="container page-hero__container">
        <div className="page-hero__content">
          <h1 className="page-hero__title">{title}</h1>
          {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
        </div>
      </div>
    </section>
  )
}

export default PageHero
