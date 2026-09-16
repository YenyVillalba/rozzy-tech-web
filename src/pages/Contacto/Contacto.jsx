import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Button from '../../components/Button/Button'
import './Contacto.css'

const EMAILJS_SERVICE_ID  = 'service_4u80m3e'
const EMAILJS_TEMPLATE_ID = 'template_vyj587o'
const EMAILJS_PUBLIC_KEY  = 'wjXA_2yIIWw4lGueY'

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
  empresa: '',
  telefono: '',
  servicio: '',
  mensaje: '',
}

const INITIAL_ERRORS = {
  nombre: '',
  email: '',
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

  if (!fields.servicio) {
    errors.servicio = 'Selecciona el servicio de interés.'
  }

  if (!fields.mensaje.trim()) {
    errors.mensaje = 'El mensaje es obligatorio.'
  } else if (fields.mensaje.trim().length < 20) {
    errors.mensaje = 'El mensaje debe tener al menos 20 caracteres.'
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
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (touched[name]) {
      const newErrors = validate({ ...form, [name]: value })
      setErrors((prev) => ({ ...prev, [name]: newErrors[name] }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const newErrors = validate(form)
    setErrors((prev) => ({ ...prev, [name]: newErrors[name] }))
  }

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

    setStatus('sending')

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        nombre:   form.nombre,
        email:    form.email,
        empresa:  form.empresa  || 'No especificada',
        telefono: form.telefono || 'No especificado',
        servicio: form.servicio,
        mensaje:  form.mensaje,
      },
      EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setStatus('success')
        setForm(INITIAL_FORM)
        setTouched({})
        setErrors(INITIAL_ERRORS)
      })
      .catch(() => {
        setStatus('error')
      })
  }

  return (
    <div className="contacto">
      {/* Intro centrada */}
      <section className="contacto-intro">
        <div className="container">
          <h2 className="contacto-intro__titulo">Hablemos de tu proyecto.</h2>
          <p className="contacto-intro__subtitulo">
            Cuéntanos qué necesitas y nos pondremos en contacto contigo a la mayor brevedad posible.
          </p>
        </div>
      </section>

      <section className="contacto-main">
        <div className="container contacto-main__inner">
          <div className="contacto-form-wrapper">
            {status === 'success' ? (
              <div className="contacto-success" role="alert">
                <span className="contacto-success__icon" aria-hidden="true">✅</span>
                <h3>¡Mensaje enviado!</h3>
                <p>Gracias por contactarnos. Te responderemos pronto.</p>
                <Button variant="outline" size="md" onClick={() => setStatus('idle')}>
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
                {/* Fila 1: Nombre + Correo */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nombre" className="form-label">
                      Nombre Completo <span className="form-required" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      placeholder="Ingresa tu nombre"
                      className={`form-input${errors.nombre && touched.nombre ? ' form-input--error' : ''}`}
                      value={form.nombre}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={100}
                      autoComplete="name"
                      aria-required="true"
                    />
                    {errors.nombre && touched.nombre && (
                      <span className="form-error" role="alert">{errors.nombre}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Correo Electrónico <span className="form-required" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="ejemplo@correo.com"
                      className={`form-input${errors.email && touched.email ? ' form-input--error' : ''}`}
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={254}
                      autoComplete="email"
                      aria-required="true"
                    />
                    {errors.email && touched.email && (
                      <span className="form-error" role="alert">{errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Fila 2: Empresa + Teléfono */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="empresa" className="form-label">
                      Empresa <span className="form-optional">(opcional)</span>
                    </label>
                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      placeholder="Nombre de tu empresa"
                      className="form-input"
                      value={form.empresa}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={100}
                      autoComplete="organization"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="telefono" className="form-label">
                      Teléfono <span className="form-optional">(opcional)</span>
                    </label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      placeholder="+57 300 000 0000"
                      className="form-input"
                      value={form.telefono}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={20}
                      autoComplete="tel"
                    />
                  </div>
                </div>

                {/* Fila 3: Servicio de interés */}
                <div className="form-group">
                  <label htmlFor="servicio" className="form-label">
                    Servicio de Interés <span className="form-required" aria-hidden="true">*</span>
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    className={`form-select${errors.servicio && touched.servicio ? ' form-input--error' : ''}`}
                    value={form.servicio}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-required="true"
                  >
                    <option value="">Selecciona un servicio</option>
                    {SERVICIOS_OPCIONES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.servicio && touched.servicio && (
                    <span className="form-error" role="alert">{errors.servicio}</span>
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
                    placeholder="Cuéntanos brevemente sobre tu proyecto o consulta..."
                    className={`form-textarea${errors.mensaje && touched.mensaje ? ' form-input--error' : ''}`}
                    value={form.mensaje}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    minLength={20}
                    maxLength={500}
                    rows={5}
                    aria-required="true"
                  />
                  {errors.mensaje && touched.mensaje && (
                    <span className="form-error" role="alert">{errors.mensaje}</span>
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
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
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
