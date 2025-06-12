import React, { useState } from 'react';
import linkedinImg from "../assets/img/Linkedin.png";
import inversoresImg from "../assets/img/inversores.jpg";
import patrocinadoresImg from "../assets/img/creadores.jpg";
import cocreacionImg from "../assets/img/pilar.jpg";
import ContactModal from './contactModal.jsx';

// Define el número de WhatsApp de la empresa (formato internacional sin "+")
const WHATSAPP_NUMBER = '34611891848'; // ¡ASEGÚRATE DE CAMBIAR ESTO POR EL NÚMERO REAL DE TU EMPRESA!

const Colaboradores = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false); // Estado para controlar la visibilidad del modal

  // Función para abrir WhatsApp
  const openWhatsAppChat = (messageText) => {
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
  };

  // Funciones para abrir y cerrar el modal de contacto
  const handleOpenContactModal = () => setShowContactModal(true);
  const handleCloseContactModal = () => setShowContactModal(false);

  const colaboradoresData = [
    {
      id: 'empresas',
      icon: '🏢',
      title: 'EMPRESAS & MARCAS',
      subtitle: 'Acceso a audiencias segmentadas',
      description: 'Conecta con nuestra comunidad de mujeres empoderadas y amplifica tu impacto de marca a través de experiencias auténticas y transformadoras.',
      cta: 'Explorar Alianzas',
      whatsappMessage: '¡Hola! Estoy interesado/a en las Alianzas para Empresas y Marcas. Me gustaría obtener más información.', // Mensaje específico
      image: linkedinImg,
      gradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(6, 182, 212, 0.1))',
      border: 'rgba(168, 85, 247, 0.2)',
      shadow: 'rgba(168, 85, 247, 0.08)'
    },
    {
      id: 'inversores',
      icon: '💰',
      title: 'INVERSORES',
      subtitle: 'Portfolio de impacto exponencial',
      description: 'Invierte en el futuro de la tecnología femenina. Proyectos escalables con impacto social medible y retorno sostenible a largo plazo.',
      cta: 'Ver Oportunidades',
      whatsappMessage: '¡Hola! Estoy interesado/a en oportunidades de inversión. Me gustaría conocer más sobre los proyectos de IN RESET.', // Mensaje específico
      image: inversoresImg,
      gradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(168, 85, 247, 0.1))',
      border: 'rgba(6, 182, 212, 0.2)',
      shadow: 'rgba(6, 182, 212, 0.08)'
    },
    {
      id: 'patrocinadores',
      icon: '🤝',
      title: 'PATROCINADORES',
      subtitle: 'Integración en experiencias',
      description: 'Forma parte de eventos, talleres y programas formativos que transforman vidas. Tu marca asociada al empoderamiento tecnológico femenino.',
      cta: 'Conocer Programas',
      whatsappMessage: '¡Hola! Estoy interesado/a en los programas de patrocinio de IN RESET. Me gustaría conocer más detalles.', // Mensaje específico
      image: patrocinadoresImg,
      gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(14, 165, 233, 0.1))',
      border: 'rgba(139, 92, 246, 0.2)',
      shadow: 'rgba(139, 92, 246, 0.08)'
    },
    {
      id: 'cocreacion',
      icon: '⚡',
      title: 'CO-CREACIÓN',
      subtitle: 'Desarrollo de proyectos conjuntos',
      description: 'Colabora directamente en el desarrollo de soluciones innovadoras. Desde la ideación hasta la implementación de productos disruptivos.',
      cta: 'Iniciar Proyecto',
      whatsappMessage: '¡Hola! Estoy interesado/a en iniciar un proyecto de co-creación con IN RESET. Me gustaría discutir mi idea.', // Mensaje específico
      image: cocreacionImg,
      gradient: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(168, 85, 247, 0.1))',
      border: 'rgba(14, 165, 233, 0.2)',
      shadow: 'rgba(14, 165, 233, 0.08)'
    }
  ];

  return (
    <section id="contacto" className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            {/* Header */}
            <div className="text-center mt-5 mb-5">
              <h2
                className="text-4xl md:text-5xl font-bold mb-3"
                style={{
                  background: 'linear-gradient(135deg,rgb(76, 13, 134),rgb(210, 163, 228))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Colabora con Nosotras
              </h2>
              <div
                className="mx-auto mb-4"
                style={{
                  width: '100px',
                  height: '4px',
                  background: 'linear-gradient(135deg, #8b5cf6, #b043b9, #a855f7)',
                  borderRadius: '2px'
                }}
              ></div>
              <p className="text-white-50 fs-5">
                Construye el Futuro con IN RESET
              </p>
            </div>

            {/* Grid for cards */}
            <div
              className="row g-4 d-flex align-items-stretch justify-content-center"
            >
              {colaboradoresData.map((item) => {
                const isHovered = hoveredCard === item.id;
                return (
                  <div key={item.id} className="col-12 col-sm-6 col-md-6 col-lg-3">
                    <div
                      className="position-relative h-100 overflow-hidden d-flex flex-column"
                      style={{
                        background: item.gradient,
                        border: `1px solid ${item.border}`,
                        borderRadius: '20px',
                        minHeight: '300px',
                        boxShadow: `0 8px 32px ${item.shadow}`,
                        cursor: 'pointer',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        zIndex: isHovered ? 10 : 3,
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                      }}
                      onMouseEnter={() => setHoveredCard(item.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      {/* Background Image */}
                      <div
                        className="position-absolute w-100 h-100"
                        style={{
                          backgroundImage: `url(${item.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          opacity: isHovered ? '0.3' : '0.05',
                          transition: 'opacity 0.4s ease',
                          zIndex: 1
                        }}
                      ></div>

                      {/* Overlay Gradient */}
                      <div
                        className="position-absolute w-100 h-100"
                        style={{
                          background: isHovered
                            ? `linear-gradient(135deg, ${item.gradient.replace(/,\s*0\.1\)/g, ', 0.35)')}, rgba(0,0,0,0.5))`
                            : `linear-gradient(135deg, ${item.gradient.replace(/,\s*0\.1\)/g, ', 0.05)')}`,
                          transition: 'background 0.4s ease',
                          zIndex: 2
                        }}
                      ></div>

                      {/* Content */}
                      <div className="position-relative h-100 p-4 d-flex flex-column justify-content-between" style={{ zIndex: 3 }}>
                        {/* Top Section */}
                        <div>
                          {/* Icon */}
                          <div className="mb-3">
                            <div
                              className="d-inline-flex align-items-center justify-content-center"
                              style={{
                                width: isHovered ? '70px' : '60px',
                                height: isHovered ? '70px' : '60px',
                                background: 'linear-gradient(135deg, #8b5cf6,rgb(178, 156, 180), #a855f7)',
                                borderRadius: '50%',
                                boxShadow: `0 8px 25px ${item.shadow}`,
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                transform: isHovered ? 'rotate(10deg)' : 'rotate(0deg)'
                              }}
                            >
                              <span
                                className="fw-bold"
                                style={{
                                  fontSize: isHovered ? '1.8rem' : '1.5rem',
                                  transition: 'font-size 0.4s ease'
                                }}
                              >
                                {item.icon}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Title & Subtitle */}
                        <h3 className="text-white fw-bold mb-2" style={{ fontSize: '1.25rem' }}>
                          {item.title}
                        </h3>
                        <p className="text-white mb-3" style={{ fontSize: '0.95rem' }}>
                          {item.subtitle}
                        </p>
                        

                        {/* Expanded Content - Only shown on hover */}
                        <div
                          style={{
                            maxHeight: isHovered ? '300px' : '0',
                            opacity: isHovered ? '1' : '0',
                            overflow: isHovered ? 'visible' : 'hidden',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                          }}
                        >
                          <div
                            className="mb-4"
                            style={{
                              height: '2px',
                              background: 'linear-gradient(90deg, #a855f7, #06b6d4)',
                              borderRadius: '1px',
                              width: isHovered ? '100%' : '0%',
                              transition: 'width 0.6s ease 0.2s'
                            }}
                          ></div>

                          <p className="text-white mb-3 lh-lg" style={{ fontSize: '0.9rem' }}>
                            {item.description}
                          </p>

                          <button
                            type="button"
                            className="btn fw-semibold px-4 py-2"
                            onClick={() => openWhatsAppChat(item.whatsappMessage)} // Llama a la función para abrir WhatsApp
                            style={{
                              background: 'linear-gradient(135deg, #8b5cf6, #b043b9, #a855f7)',
                              border: 'none',
                              color: 'white',
                              borderRadius: '25px',
                              fontSize: '0.9rem',
                              boxShadow: '0 4px 15px rgba(168, 85, 247, 0.3)',
                              transition: 'all 0.3s ease',
                              transform: isHovered ? 'translateY(0)' : 'translateY(20px)'
                            }}
                            onMouseOver={(e) => {
                              e.target.style.transform = 'translateY(-2px)';
                              e.target.style.boxShadow = '0 8px 25px rgba(168, 85, 247, 0.4)';
                            }}
                            onMouseOut={(e) => {
                              e.target.style.transform = 'translateY(0)';
                              e.target.style.boxShadow = '0 4px 15px rgba(168, 85, 247, 0.3)';
                            }}
                          >
                            {item.cta}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Call to Action Section */}
            <div className="text-center mt-5">
              <div
                className="p-5 rounded-4"
                style={{
                  background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(6, 182, 212, 0.15))',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  boxShadow: '0 8px 32px rgba(168, 85, 247, 0.1)'
                }}
              >
                <h4 className="text-white mb-3 fw-bold fs-3">
                  ¿Lista para Colaborar?
                </h4>
                <p className="text-white-50 mb-4 fs-5">
                  Únete a nuestra red de colaboradores y construye el futuro tecnológico femenino
                </p>
                <button
                  type="button"
                  className="btn btn-lg px-5 py-3 fw-semibold"
                  onClick={handleOpenContactModal} // CAMBIO AQUÍ: Ahora abre el modal de contacto
                  style={{
                    background: 'linear-gradient(135deg, #8b5cf6, #b043b9, #a855f7)',
                    border: 'none',
                    color: 'white',
                    borderRadius: '50px',
                    boxShadow: '0 4px 20px rgba(168, 85, 247, 0.4)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 8px 30px rgba(168, 85, 247, 0.6)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 20px rgba(168, 85, 247, 0.4)';
                  }}
                >
                  Iniciar Conversación
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div
          className="position-absolute"
          style={{
            top: '10%',
            left: '-5%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.08), transparent)',
            borderRadius: '50%',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        ></div>

        <div
          className="position-absolute"
          style={{
            bottom: '10%',
            right: '-5%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08), transparent)',
            borderRadius: '50%',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        ></div>
      </div>

      {/* Contact Modal Component - Added here */}
      <ContactModal show={showContactModal} handleClose={handleCloseContactModal} />
    </section>
  );
};

export default Colaboradores;