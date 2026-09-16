import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import heroImg from '../../assets/hero-rozzy-tech.png'
import logo from '../../assets/RozzyTech.png'
import { Globe, Smartphone, Cloud, Settings, Users, ShieldCheck, Lightbulb } from 'lucide-react'
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
        {/* Logo decorativo sobre el fondo */}
        <img src={logo} alt="" className="hero__logo-bg" aria-hidden="true" />
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
      <section className="home-services">
        <div className="container">
          <div className="home-services__layout">
            <div className="home-services__heading">
              <p className="home-services__tagline">Soluciones que se adaptan a tus necesidades</p>
            </div>
            <ul className="home-services__grid">
              <li className="home-service-item">
                <div className="home-service-item__icon" aria-hidden="true">
                  <Globe size={32} strokeWidth={1.5} color="#2363da" />
                </div>
                <h3 className="home-service-item__title">Desarrollo Web</h3>
                <p className="home-service-item__desc">Sitios y aplicaciones web modernas, rápidas y seguras.</p>
              </li>
              <li className="home-service-item">
                <div className="home-service-item__icon" aria-hidden="true">
                  <Smartphone size={32} strokeWidth={1.5} color="#2363da" />
                </div>
                <h3 className="home-service-item__title">Desarrollo Móvil</h3>
                <p className="home-service-item__desc">Aplicaciones móviles funcionales para iOS y Android.</p>
              </li>
              <li className="home-service-item">
                <div className="home-service-item__icon" aria-hidden="true">
                  <Cloud size={32} strokeWidth={1.5} color="#2363da" />
                </div>
                <h3 className="home-service-item__title">Soluciones en la Nube</h3>
                <p className="home-service-item__desc">Infraestructura escalable, segura y disponible 24/7.</p>
              </li>
              <li className="home-service-item">
                <div className="home-service-item__icon" aria-hidden="true">
                  <Settings size={32} strokeWidth={1.5} color="#2363da" />
                </div>
                <h3 className="home-service-item__title">Sistemas a Medida</h3>
                <p className="home-service-item__desc">Desarrollamos sistemas personalizados según los procesos de tu negocio.</p>
              </li>
            </ul>
          </div>
          <div className="home-services__cta">
            <Link to="/servicios" className="home-services__btn">
              Ver todos los servicios →
            </Link>
          </div>
        </div>
      </section>

      {/* Somos Rozzy Tech */}
      <section className="home-about">
        <div className="container home-about__inner">
          {/* Texto izquierda */}
          <div className="home-about__brand">
            <div className="home-about__text">
              <h2 className="home-about__title">Somos Rozzy Tech</h2>
              <p className="home-about__desc">
                Un equipo apasionado por la tecnología y la innovación. Ayudamos a empresas y emprendedores a transformar ideas en soluciones digitales que generan valor y resultados.
              </p>
            </div>
          </div>

          {/* Features derecha */}
          <ul className="home-about__features">
            <li className="home-about__feature">
              <Users size={28} strokeWidth={1.5} color="#2363da" aria-hidden="true" />
              <span className="home-about__feature-text">Enfoque en el cliente</span>
            </li>
            <li className="home-about__feature">
              <ShieldCheck size={28} strokeWidth={1.5} color="#2363da" aria-hidden="true" />
              <span className="home-about__feature-text">Calidad y Seguridad</span>
            </li>
            <li className="home-about__feature">
              <Lightbulb size={28} strokeWidth={1.5} color="#2363da" aria-hidden="true" />
              <span className="home-about__feature-text">Innovación constante</span>
            </li>
          </ul>
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
