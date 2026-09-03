import './SectionTitle.css'

/**
 * SectionTitle - Título de sección reutilizable
 *
 * Props:
 *   title    : string (requerido)
 *   subtitle : string (opcional)
 *   align    : 'left' | 'center' | 'right'  (default: 'center')
 *   light    : boolean — usar colores claros sobre fondo oscuro
 */
function SectionTitle({ title, subtitle, align = 'center', light = false }) {
  const classes = [
    'section-title',
    `section-title--${align}`,
    light ? 'section-title--light' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      <h2 className="section-title__heading">{title}</h2>
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
