import SectionTitle from '../../components/SectionTitle/SectionTitle'
import PageHero from '../../components/PageHero/PageHero'
import {
  Globe,
  Smartphone,
  Plug,
  Wrench,
  Layers,
  Cloud,
} from 'lucide-react'
import './Servicios.css'

const SERVICIOS = [
  {
    id: 1,
    Icon: Globe,
    title: 'Desarrollo Web',
    description: 'Creamos aplicaciones web modernas, responsivas y de alto rendimiento usando tecnologías actuales.',
  },
  {
    id: 2,
    Icon: Smartphone,
    title: 'Desarrollo Móvil',
    description: 'Desarrollamos apps nativas e híbridas para iOS y Android adaptadas a tu negocio.',
  },
  {
    id: 3,
    Icon: Plug,
    title: 'Integraciones y APIs',
    description: 'Conectamos tus sistemas con servicios externos para automatizar procesos y centralizar datos.',
  },
  {
    id: 4,
    Icon: Wrench,
    title: 'Mantenimiento y Soporte',
    description: 'Acompañamiento continuo para mantener tus soluciones actualizadas, seguras y funcionando.',
  },
  {
    id: 5,
    Icon: Layers,
    title: 'Diseño UI/UX',
    description: 'Diseñamos interfaces intuitivas y atractivas centradas en la experiencia del usuario.',
  },
  {
    id: 6,
    Icon: Cloud,
    title: 'Soluciones en la Nube',
    description: 'Implementamos y administramos infraestructura en la nube para escalar tu operación.',
  },
]

function Servicios() {
  return (
    <div className="servicios">
      {/* Encabezado de página */}
      <PageHero
        title="Nuestros Servicios"
        subtitle="Ofrecemos soluciones de desarrollo de software a medida para impulsar el crecimiento de tu negocio."
      />

      {/* Grid de servicios */}
      <section className="servicios-grid-section">
        <div className="container">
          <ul className="servicios__grid" role="list">
            {SERVICIOS.map((servicio) => (
              <li key={servicio.id} className="servicio-card">
                <div className="servicio-card__icon" aria-hidden="true">
                  <servicio.Icon size={32} strokeWidth={1.5} color="#2363da" />
                </div>
                <h3 className="servicio-card__title">{servicio.title}</h3>
                <p className="servicio-card__description">{servicio.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Servicios
