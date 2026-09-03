import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import heroImg from '../../assets/hero-rozzy-tech.png'
import logo from '../../assets/RozzyTech.png'
import { Globe, Smartphone, Cloud, Settings, Users, Shield, Lightbulb } from 'lucide-react'
import './Inicio.css'

const SERVICIOS_HOME = [
  { id: 1, Icon: Globe,      title: 'Desarrollo Web',        description: 'Sitios y aplicaciones web modernas, rápidas y seguras.' },
  { id: 2, Icon: Smartphone, title: 'Desarrollo Móvil',      description: 'Aplicaciones móviles funcionales para iOS y Android.' },
  { id: 3, Icon: Cloud,      title: 'Soluciones en la Nube', description: 'Infraestructura escalable, segura y disponible 24/7.' },
  { id: 4, Icon: Settings,   title: 'Sistemas a Medida',     description: 'Desarrollamos sistemas personalizados según los procesos de tu negocio.' },
]

const CARACTERISTICAS = [
  { id: 1, Icon: Users,      texto: 'Enfoque en el cliente.' },
  { id: 2, Icon: Shield,     texto: 'Calidad y Seguridad.' },
  { id: 3, Icon: Lightbulb,  texto: 'Innovación constante.' },
]

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
              <Button variant="primary" size="lg">
                <Link to="/servicios">Ver servicios</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="/contacto">Contáctanos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de servicios */}
      <section className="home-services">
        <div className="container">
          <div className="home-services__layout">
            <div className="home-services__heading">
              <p className="home-services__tagline">Soluciones que se adaptan a tus necesidades</p>
            </div>
            <ul className="home-services__grid" role="list">
              {SERVICIOS_HOME.map(({ id, Icon, title, description }) => (
                <li key={id} className="home-service-item">
                  <div className="home-service-item__icon" aria-hidden="true">
                    <Icon size={36} strokeWidth={1.5} color="#2363da" />
                  </div>
                  <h3 className="home-service-item__title">{title}</h3>
                  <p className="home-service-item__desc">{description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="home-services__cta">
            <Link to="/servicios" className="home-services__btn">
              Ver todos los servicios ›
            </Link>
          </div>
        </div>
      </section>

      {/* Sección Somos Rozzy Tech */}
      <section className="home-about">
        <div className="container home-about__inner">
          {/* Logo + texto */}
          <div className="home-about__brand">
            <img src={logo} alt="ROZZY TECH" className="home-about__logo" />
            <div className="home-about__text">
              <h2 className="home-about__title">Somos Rozzy Tech</h2>
              <p className="home-about__desc">
                Un equipo apasionado por la tecnología y la innovación. Ayudamos a empresas
                y emprendedores a transformar ideas en soluciones digitales que generan valor
                y resultados.
              </p>
            </div>
          </div>

          {/* Características */}
          <ul className="home-about__features" role="list">
            {CARACTERISTICAS.map(({ id, Icon, texto }) => (
              <li key={id} className="home-about__feature">
                <Icon size={24} strokeWidth={1.5} color="#2363da" aria-hidden="true" />
                <span className="home-about__feature-text">{texto}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </div>
  )
}

export default Inicio
