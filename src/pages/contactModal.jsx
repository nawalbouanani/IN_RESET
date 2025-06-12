import React, { useState, useEffect } from 'react';
import contactSideImage from "../assets/img/contactSideImage.jpg"; // Asegúrate de que esta imagen esté en tus assets

// Define el número de WhatsApp de la empresa (formato internacional sin "+")
const WHATSAPP_NUMBER = '34611891848'; // ¡CAMBIA ESTO POR EL NÚMERO REAL DE TU EMPRESA!
const ContactModal = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    mensaje: '',
    privacidad: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.privacidad) {
      alert('Debes aceptar los términos de privacidad para enviar el mensaje.');
      return;
    }

    // Construimos el mensaje de WhatsApp línea por línea y luego lo unimos
    // Esto asegura que cada línea termine con un salto de línea y se codifique correctamente
    const messageLines = [
      '¡Hola! He llenado el formulario de contacto en tu sitio web.',
      '', // Línea en blanco para separación
      'Detalles del Contacto:',
      `Nombre: ${formData.nombre}`,
      `Apellido: ${formData.apellido}`,
      `Email: ${formData.email}`,
      `Teléfono: ${formData.telefono}`,
      '', // Línea en blanco
      'Mensaje:',
      `${formData.mensaje}`
    ];

    // Unimos las líneas con '%0A' que es la codificación de un salto de línea en URL
    const message = messageLines.map(line => encodeURIComponent(line)).join('%0A');

    // Creamos el enlace de WhatsApp
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    // Abrimos el enlace en una nueva pestaña
    window.open(whatsappLink, '_blank');

    alert('Serás redirigido a WhatsApp con tu mensaje. Por favor, haz clic en "Enviar" allí.');

    // Opcional: Si quieres resetear el formulario después de la redirección
    setFormData({
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      mensaje: '',
      privacidad: false,
    });
    handleClose(); // Cierra el modal
  };

  useEffect(() => {
    if (show) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div className="modal fade show"
         style={{ display: 'block', paddingRight: '17px', backgroundColor: 'rgba(0,0,0,0.7)' }}
         tabIndex="-1" role="dialog" aria-labelledby="contactModalLabel" aria-hidden="true"
         onClick={handleClose}>

      <div className="modal-dialog modal-dialog-centered modal-lg" role="document"
           onClick={e => e.stopPropagation()}
           style={{ maxWidth: '750px' }}>
        <div className="modal-content"
             style={{
               background: 'transparent',
               border: 'none',
               borderRadius: '15px',
               overflow: 'hidden',
             }}>
          <div className="modal-body p-0"
               style={{
                 background: '#141414',
                 borderRadius: '15px',
                 border: '1px solid rgba(168, 85, 247, 0.4)',
                 boxShadow: '0 6px 20px rgba(0, 0, 0, 0.5)',
               }}>
            <button type="button" className="btn-close" aria-label="Close"
                    onClick={handleClose}
                    style={{
                        position: 'absolute',
                        top: '15px',
                        right: '15px',
                        zIndex: 10,
                        filter: 'invert(1) grayscale(1) brightness(2)',
                        backgroundColor: 'transparent',
                        border: 'none',
                        fontSize: '1.5rem',
                        opacity: 1,
                    }}
            ></button>

            <div className="row g-0 align-items-stretch">
              <div className="col-12 col-lg-6 d-flex">
                <div className="p-3 w-100 d-flex flex-column justify-content-center">
                  <h2 className="text-white text-center font-bold mb-1"
                      style={{
                        fontSize: '1.5rem',
                        background: 'linear-gradient(135deg,rgb(76, 13, 134),rgb(210, 163, 228))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}>
                    ¿Listos para crear el próximo proyecto disruptivo?
                  </h2>
                  <p className="text-white text-center mb-3" style={{ opacity: '1', fontSize: '0.8rem' }}>
                    Únete a la revolución de convertir desafíos femeninos en oportunidades.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="row g-2 mb-2">
                      <div className="col-md-6">
                        <label htmlFor="nombre" className="form-label" style={labelStyle}>Nombre</label>
                        <input
                          type="text"
                          className="form-control"
                          id="nombre"
                          name="nombre"
                          placeholder="Nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          required
                          style={formControlStyleInputs} /* Usamos el estilo para inputs con fondo blanco */
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="apellido" className="form-label" style={labelStyle}>Apellido</label>
                        <input
                          type="text"
                          className="form-control"
                          id="apellido"
                          name="apellido"
                          placeholder="Apellido"
                          value={formData.apellido}
                          onChange={handleChange}
                          required
                          style={formControlStyleInputs} /* Usamos el estilo para inputs con fondo blanco */
                        />
                      </div>
                    </div>

                    <div className="mb-2">
                      <label htmlFor="email" className="form-label" style={labelStyle}>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={formControlStyleInputs} /* Usamos el estilo para inputs con fondo blanco */
                      />
                    </div>

                    <div className="mb-2">
                      <label htmlFor="telefono" className="form-label" style={labelStyle}>Teléfono</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="telefono"
                        name="telefono"
                        placeholder="ES +34 (555) 000-000"
                        value={formData.telefono}
                        onChange={handleChange}
                        style={formControlStyleInputs} /* Usamos el estilo para inputs con fondo blanco */
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="mensaje" className="form-label" style={labelStyle}>Mensaje</label>
                      <textarea
                        className="form-control"
                        id="mensaje"
                        name="mensaje"
                        rows="2"
                        placeholder="Tu mensaje aquí..."
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                        style={formControlStyleInputs} /* Usamos el estilo para inputs con fondo blanco */
                      ></textarea>
                    </div>

                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="privacidad"
                        name="privacidad"
                        checked={formData.privacidad}
                        onChange={handleChange}
                        required
                        style={checkboxStyle(formData.privacidad)}
                      />
                      <label className="form-check-label" htmlFor="privacidad" style={labelStyle}>
                        Acepto los términos de privacidad
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn w-100 text-white fw-semibold px-3 py-1"
                      style={{
                        background: 'linear-gradient(135deg, #8b5cf6, #b043b9, #a855f7)',
                        border: 'none',
                        borderRadius: '20px',
                        boxShadow: '0 4px 12px rgba(168, 85, 247, 0.3)',
                        transition: 'all 0.3s ease',
                        fontSize: '0.85rem'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.transform = 'translateY(-1px)';
                        e.target.style.boxShadow = '0 5px 15px rgba(168, 85, 247, 0.4)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 12px rgba(168, 85, 247, 0.3)';
                      }}>
                      Enviar mensaje
                    </button>
                  </form>
                </div>
              </div>

              <div className="col-12 col-lg-6 d-none d-lg-flex align-items-center justify-content-center p-0">
                <div
                  className="w-100 h-100 position-relative overflow-hidden"
                  style={{
                    borderRadius: '12px',
                    border: '1px solid rgba(6, 182, 212, 0.3)',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <img
                    src={contactSideImage}
                    alt="Mujer haciendo yoga"
                    className="img-fluid w-100 h-100"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                      borderRadius: '12px',
                      filter: 'brightness(0.9) contrast(1.1) saturate(1.2)',
                    }}
                  />
                   <div
                    className="position-absolute w-100 h-100 top-0 left-0"
                    style={{
                      background: 'rgba(0, 0, 0, 0.4)',
                      borderRadius: '12px',
                      opacity: 1,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const formControlStyleInputs = {
  backgroundColor: '#ffffff',
  border: '1px solid #ccc',
  color: '#333',
  borderRadius: '5px',
  padding: '0.4rem 0.7rem',
  fontSize: '0.8rem',
  boxShadow: 'none',
  transition: 'all 0.3s ease',
  textAlign: 'left',
  '::placeholder': {
    color: '#666',
    textAlign: 'left',
  },
};

const labelStyle = {
  color: '#e0e0e0',
  textAlign: 'left',
  marginBottom: '0.1rem',
  fontSize: '0.8rem',
  display: 'block'
};

const checkboxStyle = (isChecked) => ({
  backgroundColor: isChecked ? 'rgba(168, 85, 247, 1)' : '#ffffff',
  border: isChecked ? '1px solid #a855f7' : '1px solid #ccc',
  borderRadius: '2px',
  appearance: 'none',
  width: '0.85rem',
  height: '0.85rem',
  cursor: 'pointer',
  display: 'inline-block',
  verticalAlign: 'middle',
  position: 'relative',
  transition: 'background-color 0.2s ease, border-color 0.2s ease',

  backgroundImage: isChecked
    ? `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e")`
    : 'none',
  backgroundSize: '100% 100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
});


export default ContactModal;