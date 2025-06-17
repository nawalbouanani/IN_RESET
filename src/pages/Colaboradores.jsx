import React, { useState } from 'react';
import linkedinImg from "../assets/img/Linkedin.png";
import inversoresImg from "../assets/img/inversores.jpg";
import patrocinadoresImg from "../assets/img/creadores.jpg";
import cocreacionImg from "../assets/img/pilar.jpg";
import ContactModal from './contactModal.jsx';

// Define el número de WhatsApp de la empresa (formato internacional sin "+")
const WHATSAPP_NUMBER = '34691976233';

const Colaboradores = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);

  // ⚙️ CONFIGURACIÓN DEL BOTÓN - Cambia esta variable para elegir el comportamiento
  const SHOW_BUTTON_ALWAYS = true; // true = siempre visible, false = solo en hover

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
      title: 'Empresas & Marcas',
      subtitle: 'Accede a audiencias altamente segmentadas y comprometidas',
      description: 'Genera conexiones auténticas que impulsan resultados medibles.',
      cta: 'Explorar Alianzas',
      whatsappMessage: '¡Hola! Estoy interesado/a en las Alianzas para Empresas y Marcas. Me gustaría obtener más información.',
      image: linkedinImg,
      gradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(6, 182, 212, 0.1))',
      border: 'rgba(168, 85, 247, 0.2)',
      shadow: 'rgba(168, 85, 247, 0.08)'
    },
    {
      id: 'inversores',
      title: 'Inversores',
      subtitle: 'Únete al crecimiento de mercados emergentes con alta demanda',
      description: ' Oportunidad real en tecnología educativa y de bienestar con potencial escalable.',
      cta: 'Ver Oportunidades',
      whatsappMessage: '¡Hola! Estoy interesado/a en oportunidades de inversión. Me gustaría conocer más sobre los proyectos de IN RESET.',
      image: inversoresImg,
      gradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(168, 85, 247, 0.1))',
      border: 'rgba(6, 182, 212, 0.2)',
      shadow: 'rgba(6, 182, 212, 0.08)'
    },
    {
      id: 'patrocinadores',
      title: 'Patrocinadores',
      subtitle: 'Posicionamiento estratégico en mercados emergentes',
      description: 'Visibilidad premium en experiencias que generan comunidad y fidelización.',
      cta: 'Conocer Programas',
      whatsappMessage: '¡Hola! Estoy interesado/a en los programas de patrocinio de IN RESET. Me gustaría conocer más detalles.',
      image: patrocinadoresImg,
      gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(14, 165, 233, 0.1))',
      border: 'rgba(139, 92, 246, 0.2)',
      shadow: 'rgba(139, 92, 246, 0.08)'
    },
    {
      id: 'cocreacion',
      title: 'Co-Creación',
      subtitle: 'Imagina crear la próxima revolución tecnológica juntos',
      description: 'Desarrollamos productos que no existen pero que el mundo necesita.',
      cta: 'Iniciar Proyecto',
      whatsappMessage: '¡Hola! Estoy interesado/a en iniciar un proyecto de co-creación con IN RESET. Me gustaría discutir mi idea.',
      image: cocreacionImg,
      gradient: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(168, 85, 247, 0.1))',
      border: 'rgba(14, 165, 233, 0.2)',
      shadow: 'rgba(14, 165, 233, 0.08)'
    }
  ];

  return (
    <section id="contacto" className="min-vh-100 d-flex flex-column" style={{ 
      backgroundColor: '#0a0a0a',
      paddingTop: '05px', // Espacio para el navbar fijo
      scrollMarginTop: '80px' // Para navegación suave
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            {/* Header */}
            <div className="text-center mt-2 mb-5">
              <h4 className="title display-6 fw-bold mb-3"
                style={{
                  background: '#442386',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Colabora con nosotras
              </h4>              
              <p className="text-white-50 fs-5 mb-4">
                Construye el futuro con IN RESET
              </p>
              <div
            className="mx-auto"
            style={{
              width: '60px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #a855f7, transparent)',
              borderRadius: '1px'
            }}>
        </div>
            </div>

            {/* Grid for cards */}
            <div className="row g-4 d-flex align-items-stretch justify-content-center">
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
                          opacity: isHovered ? '0.3' : '0.1',
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
                        
                        {/* Title & Subtitle */}
                        <h3 className="text-white fw-bold mb-2" style={{ fontSize: '1.25rem' }}>
                          {item.title}
                        </h3>
                        <p className="text-white mb-3" style={{ fontSize: '0.95rem' }}>
                          {item.subtitle}
                        </p>
                        
                        {/* Expanded Content */}
                        <div
                          style={{
                            maxHeight: (SHOW_BUTTON_ALWAYS || isHovered) ? '300px' : '0',
                            opacity: (SHOW_BUTTON_ALWAYS || isHovered) ? '1' : '0',
                            overflow: (SHOW_BUTTON_ALWAYS || isHovered) ? 'visible' : 'hidden',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                          }}
                        >
                          <div
                            className="mb-4"
                            style={{
                              height: '2px',
                              background: 'linear-gradient(90deg, transparent, #a855f7, transparent)',
                              borderRadius: '1px',
                              width: (SHOW_BUTTON_ALWAYS || isHovered) ? '100%' : '0%',
                              transition: 'width 0.6s ease 0.2s'
                            }}
                          ></div>

                          <p className="text-white mb-3 lh-lg" style={{ fontSize: '0.9rem' }}>
                            {item.description}
                          </p>

                          <button
                            type="button"
                            className="btn fw-semibold px-4 py-2"
                            onClick={() => openWhatsAppChat(item.whatsappMessage)}
                            style={{
                              background: 'linear-gradient(135deg,rgb(73, 30, 102),rgb(116, 41, 185),rgb(150, 85, 211))',
                              border: 'none',
                              color: 'white',
                              borderRadius: '25px',
                              fontSize: '0.9rem',
                              boxShadow: '0 4px 15px rgba(168, 85, 247, 0.3)',
                              transition: 'all 0.3s ease',
                              transform: (SHOW_BUTTON_ALWAYS || isHovered) ? 'translateY(0)' : 'translateY(20px)'
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
                className="p-3 rounded-4"
                style={{
                  background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(6, 182, 212, 0.15))',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  boxShadow: '0 8px 32px rgba(168, 85, 247, 0.1)'
                }}
              >
                <p className="text-white-50 mb-4 fs-5">
                  Forma parte nuestra red de colaboradores 
                </p>
                <button
                  type="button"
                  className="btn  px-4 py-2 mb-2 fw-semibold"
                  onClick={handleOpenContactModal}
                  style={{
                    background: 'linear-gradient(135deg,rgb(73, 30, 102),rgb(116, 41, 185),rgb(150, 85, 211))',
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
                  Únete a la revolución
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal Component */}
      <ContactModal show={showContactModal} handleClose={handleCloseContactModal} />
    </section>
  );
};

export default Colaboradores;