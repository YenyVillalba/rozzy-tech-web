import { useState } from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import PageHero from '../../components/PageHero/PageHero'
import Button from '../../components/Button/Button'
import { Mail, Phone, MessageCircle, Linkedin } from 'lucide-react'
import './Contacto.css'

const SERVICIOS_OPCIONES = [
  'Desarrollo Web',
  'Desarrollo Móvil',
  'Integraciones y APIs',
  'Mantenimiento y Soporte',
  'Diseño UI/UX',
  'Soluciones en la Nube',
  'Otro',
]

const INITIAL_FORM = {
  nombre: '',
  email: '',
  telefono: '',
  servicio: '',
  mensaje: '',
}

const INITIAL_ERRORS = {
  nombre: '',
  email: '',
  telefono: '',
  servicio: '',
  mensaje: '',
}

/* Validaciones */
function validate(fields) {
  const errors = { ...INITIAL_ERRORS }

  if (!fields.nombre.trim()) {
    errors.nombre = 'El nombre es obligatorio.'
  }

  if (!fields.email.trim()) {
    errors.email = 'El correo electrónico es obligatorio.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Ingresa un correo electrónico válido.'
  }

  if (fields.telefono && !/^[0-9 +\-]{7,20}$/.test(fields.telefono)) {
    errors.telefono = 'El teléfono solo puede contener dígitos, espacios, guiones o + (7–20 caracteres).'
  }

  if (!fields.servicio) {
    errors.servicio = 'Selecciona el servicio de interés.'
  }

  if (!fields.mensaje.trim()) {
    errors.mensaje = 'El mensaje es obligatorio.'
  }

  return errors
}

function hasErrors(errors) {
  return Object.values(errors).some((e) => e !== '')
}

function Contacto() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState(INITIAL_ERRORS)
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // 'idle' | 'success' | 'error'

  /* Actualizar campo */
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Revalidar en tiempo real si el campo ya fue tocado
    if (touched[name]) {
      const newErrors = validate({ ...form, [name]: value })
      setErrors((prev) => ({ ...prev, [name]: newErrors[name] }))
    }
  }

  /* Marcar campo como tocado al salir */
  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const newErrors = validate(form)
    setErrors((prev) => ({ ...prev, [name]: newErrors[name] }))
  }

  /* Envío del formulario */
  const handleSubmit = (e) => {
    e.preventDefault()
    const allTouched = Object.keys(INITIAL_FORM).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {}
    )
    setTouched(allTouched)

    const validationErrors = validate(form)
    setErrors(validationErrors)

    if (hasErrors(validationErrors)) return

    // TODO: integrar con servicio de envío de correo (EmailJS, Formspree, etc.)
    console.log('Formulario enviado:', form)
    setStatus('success')
    setForm(INITIAL_FORM)
    setTouched({})
    setErrors(INITIAL_ERRORS)
  }

  return (
    <div className="contacto">
      {/* Encabezado */}
      <PageHero
        title="Contacto"
        subtitle="¿Tienes un proyecto en mente? Escríbenos y te respondemos a la brevedad."
      />

      <section className="contacto-main">
        <div className="container contacto-main__inner">
          {/* Información de contacto */}
          <aside className="contacto-info">
            <h2 className="contacto-info__title">Medios de contacto</h2>
            <ul className="contacto-info__list">
              <li className="contacto-info__item">
                <Mail size={20} strokeWidth={1.5} color="#2363da" aria-hidden="true" />
                <a href="mailto:contacto@rozzytech.com" className="contacto-info__link">
                  contacto@rozzytech.com
                </a>
              </li>
              <li className="contacto-info__item">
                <Phone size={20} strokeWidth={1.5} color="#2363da" aria-hidden="true" />
                <a href="tel:+573001234567" className="contacto-info__link">
                  +57 300 123 4567
                </a>
              </li>
              <li className="contacto-info__item">
                <MessageCircle size={20} strokeWidth={1.5} color="#2363da" aria-hidden="true" />
                <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer" className="contacto-info__link">
                  WhatsApp
                </a>
              </li>
              <li className="contacto-info__item">
                <Linkedin size={20} strokeWidth={1.5} color="#2363da" aria-hidden="true" />
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contacto-info__link">
                  LinkedIn
                </a>
              </li>
            </ul>
          </aside>

          {/* Formulario */}
          <div className="contacto-form-wrapper">
            {status === 'success' ? (
              <div className="contacto-success" role="alert">
                <span className="contacto-success__icon" aria-hidden="true">✅</span>
                <h3>¡Mensaje enviado!</h3>
                <p>Gracias por contactarnos. Te responderemos pronto.</p>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => setStatus('idle')}
                >
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form
                className="contacto-form"
                id="contacto-form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Formulario de contacto"
              >
                {/* Nombre */}
                <div className="form-group">
                  <label htmlFor="nombre" className="form-label">
                    Nombre <span className="form-required" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    className={`form-input${errors.nombre && touched.nombre ? ' form-input--error' : ''}`}
                    value={form.nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={100}
                    autoComplete="name"
                    aria-required="true"
                    aria-describedby={errors.nombre && touched.nombre ? 'nombre-error' : undefined}
                  />
                  {errors.nombre && touched.nombre && (
                    <span id="nombre-error" className="form-error" role="alert">
                      {errors.nombre}
                    </span>
                  )}
                </div>

                {/* Correo */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Correo electrónico <span className="form-required" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`form-input${errors.email && touched.email ? ' form-input--error' : ''}`}
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={254}
                    autoComplete="email"
                    aria-required="true"
                    aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                  />
                  {errors.email && touched.email && (
                    <span id="email-error" className="form-error" role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Teléfono (opcional) */}
                <div className="form-group">
                  <label htmlFor="telefono" className="form-label">
                    Teléfono <span className="form-optional">(opcional)</span>
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    className={`form-input${errors.telefono && touched.telefono ? ' form-input--error' : ''}`}
                    value={form.telefono}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={20}
                    autoComplete="tel"
                    aria-describedby={errors.telefono && touched.telefono ? 'telefono-error' : undefined}
                  />
                  {errors.telefono && touched.telefono && (
                    <span id="telefono-error" className="form-error" role="alert">
                      {errors.telefono}
                    </span>
                  )}
                </div>

                {/* Servicio de interés */}
                <div className="form-group">
                  <label htmlFor="servicio" className="form-label">
                    Servicio de interés <span className="form-required" aria-hidden="true">*</span>
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    className={`form-select${errors.servicio && touched.servicio ? ' form-input--error' : ''}`}
                    value={form.servicio}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-required="true"
                    aria-describedby={errors.servicio && touched.servicio ? 'servicio-error' : undefined}
                  >
                    <option value="">Selecciona un servicio</option>
                    {SERVICIOS_OPCIONES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.servicio && touched.servicio && (
                    <span id="servicio-error" className="form-error" role="alert">
                      {errors.servicio}
                    </span>
                  )}
                </div>

                {/* Mensaje */}
                <div className="form-group">
                  <label htmlFor="mensaje" className="form-label">
                    Mensaje <span className="form-required" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    className={`form-textarea${errors.mensaje && touched.mensaje ? ' form-input--error' : ''}`}
                    value={form.mensaje}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={1000}
                    rows={5}
                    aria-required="true"
                    aria-describedby={errors.mensaje && touched.mensaje ? 'mensaje-error' : undefined}
                  />
                  {errors.mensaje && touched.mensaje && (
                    <span id="mensaje-error" className="form-error" role="alert">
                      {errors.mensaje}
                    </span>
                  )}
                </div>

                {status === 'error' && (
                  <div className="form-submit-error" role="alert">
                    No se pudo enviar el mensaje. Intenta nuevamente o usa otro medio de contacto.
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="contacto-form__submit"
                >
                  Enviar mensaje
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contacto
