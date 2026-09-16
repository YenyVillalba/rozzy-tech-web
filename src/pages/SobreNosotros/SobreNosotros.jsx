import { ShieldCheck, Star, Heart, Users, Lightbulb, Handshake, Group } from 'lucide-react'
import logo from '../../assets/RozzyTech.png'
import heroBg from '../../assets/hero-rozzy-tech.png'
import reunionImg from '../../assets/reunion.jpg'
import './SobreNosotros.css'

const CARACTERISTICAS = [
  {
    id: 1,
    Icon: Lightbulb,
    titulo: 'Innovación',
    descripcion: 'Buscamos nuevas ideas y tecnologías para crear soluciones de vanguardia.',
  },
  {
    id: 2,
    Icon: ShieldCheck,
    titulo: 'Compromiso',
    descripcion: 'Nos involucramos en cada proyecto como si fuera nuestro.',
  },
  {
    id: 3,
    Icon: Users,
    titulo: 'Colaboración',
    descripcion: 'Trabajamos en equipo con nuestros clientes para lograr grandes resultados.',
  },
]

const VALORES = [
  {
    id: 1,
    Icon: ShieldCheck,
    titulo: 'Integridad',
    descripcion: 'Actuamos con honestidad, transparencia y ética en todo lo que hacemos.',
  },
  {
    id: 2,
    Icon: Star,
    titulo: 'Calidad',
    descripcion: 'Nos esforzamos por entregar soluciones de la más alta calidad.',
  },
  {
    id: 3,
    Icon: Heart,
    titulo: 'Pasión',
    descripcion: 'Nos apasiona la tecnología y eso se refleja en cada proyecto que desarrollamos.',
  },
  {
    id: 4,
    Icon: Users,
    titulo: 'Enfoque en el cliente',
    descripcion: 'Escuchamos, entendemos y nos adaptamos a las necesidades de nuestros clientes.',
  },
]

function SobreNosotros() {
  return (
    <div className="sobre-nosotros">

      {/* ── Hero ── */}
      <section
        className="sobre-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="sobre-hero__overlay" aria-hidden="true" />
        <div className="container sobre-hero__inner">
          <div className="sobre-hero__content">
            <h1 className="sobre-hero__title">
              Sobre <span className="sobre-hero__accent">Nosotros</span>
            </h1>
            <p className="sobre-hero__bio">
              Somos un equipo apasionado por la tecnología y la innovación. Ayudamos a
              empresas y emprendedores a transformar ideas en soluciones digitales que
              generan valor y resultados.
            </p>
          </div>
          <div className="sobre-hero__logo-wrapper" aria-hidden="true">
            <img src={logo} alt="" className="sobre-hero__logo" />
          </div>
        </div>
      </section>

      {/* ── Misión, Visión y Características ── */}
      <section className="sobre-mv">
        <div className="container sobre-mv__inner">
          {/* Imagen izquierda */}
          <div className="sobre-mv__image-wrapper">
            <img
              src={reunionImg}
              alt="Equipo ROZZY TECH en reunión"
              className="sobre-mv__image"
            />
          </div>

          {/* Contenido derecho */}
          <div className="sobre-mv__content">
            <div className="sobre-mv__block">
              <h2 className="sobre-mv__title">
                Nuestra <span className="sobre-mv__accent">Misión.</span>
              </h2>
              <p className="sobre-mv__text">
                Impulsar el crecimiento de nuestros clientes a través de soluciones
                tecnológicas innovadoras, confiables y escalables.
              </p>
            </div>

            <div className="sobre-mv__block">
              <h2 className="sobre-mv__title">
                Nuestra <span className="sobre-mv__accent">Visión.</span>
              </h2>
              <p className="sobre-mv__text">
                Ser reconocidos como un aliado estratégico líder en desarrollo de software y
                soluciones digitales en Latinoamérica, destacando por nuestra calidad,
                innovación y compromiso con el éxito de nuestros clientes.
              </p>
            </div>

            <ul className="sobre-mv__features" role="list">
              {CARACTERISTICAS.map(({ id, Icon, titulo, descripcion }) => (
                <li key={id} className="sobre-mv__feature">
                  <Icon size={28} strokeWidth={1.5} color="#2363da" aria-hidden="true" />
                  <div>
                    <strong className="sobre-mv__feature-title">{titulo}</strong>
                    <p className="sobre-mv__feature-desc">{descripcion}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Nuestros Valores ── */}
      <section className="sobre-valores">
        <div className="container">
          <h2 className="sobre-valores__title">
            Nuestros <span className="sobre-valores__accent">Valores</span>
          </h2>
          <ul className="sobre-valores__grid" role="list">
            {VALORES.map(({ id, Icon, titulo, descripcion }) => (
              <li key={id} className="sobre-valor-card">
                <Icon size={28} strokeWidth={1.5} color="#2363da" aria-hidden="true" />
                <h3 className="sobre-valor-card__title">{titulo}</h3>
                <p className="sobre-valor-card__desc">{descripcion}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </div>
  )
}

export default SobreNosotros
