import { useState, useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/RozzyTech.png'
import './Navbar.css'

const NAV_LINKS = [
  { to: '/',               label: 'Inicio' },
  { to: '/servicios',      label: 'Servicios' },
  { to: '/sobre-nosotros', label: 'Sobre Nosotros' },
  { to: '/contacto',       label: 'Contacto' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Cerrar menú al redimensionar a pantalla grande
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Navegar a /contacto y hacer scroll al formulario
  const handleContactoCTA = () => {
    setMenuOpen(false)
    if (location.pathname === '/contacto') {
      document.getElementById('contacto-form')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/contacto')
      // El scroll se hace después de que la página cargue
      setTimeout(() => {
        document.getElementById('contacto-form')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        {/* Logo / Marca */}
        <NavLink to="/" className="navbar__logo" aria-label="ROZZY TECH - Inicio">
          <img src={logo} alt="" className="navbar__logo-img" aria-hidden="true" />
          <span className="navbar__logo-text">ROZZY TECH</span>
        </NavLink>

        {/* Navegación escritorio */}
        <nav className="navbar__nav" aria-label="Navegación principal">
          <ul className="navbar__links">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `navbar__link${isActive ? ' navbar__link--active' : ''}`
                  }
                  end={to === '/'}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <button className="navbar__cta" onClick={handleContactoCTA}>
            Contáctanos
          </button>
        </nav>

        {/* Botón hamburguesa (móvil) */}
        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span className="navbar__hamburger-bar" />
          <span className="navbar__hamburger-bar" />
          <span className="navbar__hamburger-bar" />
        </button>
      </div>

      {/* Menú móvil */}
      <nav
        id="mobile-menu"
        className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`}
        aria-label="Navegación móvil"
        aria-hidden={!menuOpen}
      >
        <ul className="navbar__mobile-links">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `navbar__mobile-link${isActive ? ' navbar__mobile-link--active' : ''}`
                }
                end={to === '/'}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <button className="navbar__mobile-cta" onClick={handleContactoCTA}>
              Contáctanos
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
