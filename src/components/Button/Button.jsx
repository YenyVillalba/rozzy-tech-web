import './Button.css'

/**
 * Button - Componente de botón reutilizable
 *
 * Props:
 *   variant  : 'primary' | 'secondary' | 'outline'  (default: 'primary')
 *   size     : 'sm' | 'md' | 'lg'                   (default: 'md')
 *   type     : atributo HTML type                    (default: 'button')
 *   disabled : boolean
 *   onClick  : función
 *   children : contenido del botón
 *   className: clases adicionales
 */
function Button({
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  onClick,
  children,
  className = '',
  ...rest
}) {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
