import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import heroImg from '../../assets/hero-rozzy-tech.png'
import { Globe, Smartphone, Plug } from 'lucide-react'
import './Inicio.css'

function Inicio() {
  return (
    <div className="inicio">
      {/* Hero */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero__overlay" aria-hidden="true" />
        <div className="container">
          <div className="hero__content">
            <h1 className="hero__title">
              Soluciones de software para{' '}
              <span className="hero__title--accent">impulsar tu negocio.</span>
            </h1>
            <p className="hero__subtitle">
              Desarrollamos soluciones de Software personalizadas,
               modernas y escalables que optimizan procesos,
                mejoran la productividad y hacen crecer tu empresa.
            </p>
            <div className="hero__actions">
              <Button variant="primary" size="lg" as={Link}>
                <Link to="/servicios">Ver servicios</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="/contacto">Contáctanos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vista previa de servicios */}
      <section className="inicio-services">
        <div className="container">
          <SectionTitle
            title="¿Qué hacemos?"
            subtitle="Ofrecemos soluciones de desarrollo de software adaptadas a las necesidades de cada negocio."
          />
          {/* Las tarjetas de servicios se completarán con el diseño de Figma */}
          <div className="inicio-services__grid">
            <div className="service-card-placeholder">
              <div className="service-card-placeholder__icon" aria-hidden="true">
                <Globe size={32} strokeWidth={1.5} color="#2363da" />
              </div>
              <h3>Desarrollo Web</h3>
              <p>Aplicaciones web modernas y responsivas.</p>
            </div>
            <div className="service-card-placeholder">
              <div className="service-card-placeholder__icon" aria-hidden="true">
                <Smartphone size={32} strokeWidth={1.5} color="#2363da" />
              </div>
              <h3>Desarrollo Móvil</h3>
              <p>Apps nativas e híbridas para iOS y Android.</p>
            </div>
            <div className="service-card-placeholder">
              <div className="service-card-placeholder__icon" aria-hidden="true">
                <Plug size={32} strokeWidth={1.5} color="#2363da" />
              </div>
              <h3>Integraciones</h3>
              <p>Conexión entre sistemas y servicios externos.</p>
            </div>
          </div>
          <div className="inicio-services__cta">
            <Link to="/servicios" className="inicio-services__link">
              Ver todos los servicios →
            </Link>
          </div>
        </div>
      </section>

      {/* Llamada a la acción */}
      <section className="inicio-cta">
        <div className="container inicio-cta__content">
          <h2 className="inicio-cta__title">¿Listo para empezar?</h2>
          <p className="inicio-cta__text">
            Cuéntanos tu proyecto y te damos una solución a medida.
          </p>
          <Button variant="primary" size="lg">
            <Link to="/contacto">Hablar con nosotros</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Inicio
