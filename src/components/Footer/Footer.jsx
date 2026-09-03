import { Mail, Phone, MapPin } from 'lucide-react'
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

        <div className="footer__contact">
          <h3 className="footer__contact-title">Contacto</h3>
          <ul className="footer__contact-list">
            <li className="footer__contact-item">
              <Mail size={16} strokeWidth={1.5} color="#ffffffff" aria-hidden="true" />
              <a href="mailto:rozzytech@gmail.com" className="footer__contact-link">
                rozzytech@gmail.com
              </a>
            </li>

            <li className="footer__contact-item">
              <Phone size={16} strokeWidth={1.5} color="#ffffffff" aria-hidden="true" />
             
              <a href="tel:+573025138703" className="footer__contact-link">
                302 513 8703
              </a>
            </li>
            <li className="footer__contact-item">
              <MapPin size={16} strokeWidth={1.5} color="hsla(0, 0%, 100%, 1.00)" aria-hidden="true" />
              <span className="footer__contact-link">Colombia</span>
            </li>
          </ul>
        </div>
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
