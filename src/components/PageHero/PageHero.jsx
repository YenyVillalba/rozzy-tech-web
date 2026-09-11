import heroBg from '../../assets/hero-rozzy-tech.png'
import logoBg from '../../assets/RozzyTech.png'
import './PageHero.css'

/**
 * PageHero - Encabezado de página con imagen de fondo compartida
 *
 * Props:
 *   title     : string (requerido si no se usa titleNode)
 *   titleNode : JSX    (opcional, reemplaza title para permitir colores parciales)
 *   subtitle  : string (opcional)
 */
function PageHero({ title, titleNode, subtitle }) {
  return (
    <section
      className="page-hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="page-hero__overlay" aria-hidden="true" />
      <img src={logoBg} alt="" className="page-hero__logo-bg" aria-hidden="true" />
      <div className="container page-hero__container">
        <div className="page-hero__content">
          <h1 className="page-hero__title">
            {titleNode || title}
          </h1>
          {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
        </div>
      </div>
    </section>
  )
}

export default PageHero
