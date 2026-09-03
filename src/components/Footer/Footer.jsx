import { NavLink } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">ROZZY TECH</span>
          <p className="footer__tagline">Soluciones de software para impulsar tu negocio.</p>
        </div>

        <nav className="footer__nav" aria-label="Navegación del pie de página">
          <ul className="footer__links">
            <li><NavLink to="/" className="footer__link" end>Inicio</NavLink></li>
            <li><NavLink to="/servicios" className="footer__link">Servicios</NavLink></li>
            <li><NavLink to="/sobre-nosotros" className="footer__link">Sobre Nosotros</NavLink></li>
            <li><NavLink to="/contacto" className="footer__link">Contacto</NavLink></li>
          </ul>
        </nav>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p className="footer__copy">
            &copy; {currentYear} ROZZY TECH. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
