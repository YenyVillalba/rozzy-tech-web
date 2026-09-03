import SectionTitle from '../../components/SectionTitle/SectionTitle'
import PageHero from '../../components/PageHero/PageHero'
import './SobreNosotros.css'

const TECNOLOGIAS = [
  'React', 'JavaScript', 'Node.js', 'Python',
  'REST APIs', 'SQL', 'Git', 'AWS',
]

function SobreNosotros() {
  return (
    <div className="sobre-nosotros">
      {/* Encabezado */}
      <PageHero
        title="Sobre Nosotros"
        subtitle="Conoce quiénes somos y qué nos impulsa a crear soluciones de software de calidad."
      />

      {/* Perfil profesional */}
      <section className="sobre-perfil">
        <div className="container sobre-perfil__inner">
          {/* Imagen / Avatar placeholder */}
          <div className="sobre-perfil__avatar" aria-hidden="true">
            <span>RT</span>
          </div>

          <div className="sobre-perfil__info">
            <h2 className="sobre-perfil__name">ROZZY TECH</h2>
            <p className="sobre-perfil__role">Empresa de Desarrollo de Software</p>
            <p className="sobre-perfil__bio">
              Somos un equipo de profesionales apasionados por la tecnología y el
              desarrollo de software. Nos especializamos en crear soluciones digitales
              a medida que ayudan a las empresas a optimizar sus procesos, ampliar su
              presencia en línea y alcanzar sus objetivos de negocio con herramientas
              modernas y escalables.
            </p>

            {/* Propuesta de valor */}
            <div className="sobre-perfil__value">
              <p>
                <strong>Nuestra propuesta:</strong> Desarrollamos software que resuelve
                problemas reales, con código limpio, entregas a tiempo y acompañamiento
                continuo. Tu éxito digital es nuestra misión.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologías */}
      <section className="sobre-tech">
        <div className="container">
          <SectionTitle title="Tecnologías y especialidades" align="center" />
          <ul className="sobre-tech__list" role="list">
            {TECNOLOGIAS.map((tech) => (
              <li key={tech} className="sobre-tech__tag">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default SobreNosotros
