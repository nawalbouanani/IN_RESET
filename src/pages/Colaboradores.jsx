import React, { useState, useEffect, useRef } from 'react';
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
  const [visibleItems, setVisibleItems] = useState([]);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

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
      number: "01"
    },
    {
      id: 'inversores',
      title: 'Inversores',
      subtitle: 'Únete al crecimiento de mercados emergentes con alta demanda',
      description: 'Oportunidad real en tecnología educativa y de bienestar con potencial escalable.',
      cta: 'Ver Oportunidades',
      whatsappMessage: '¡Hola! Estoy interesado/a en oportunidades de inversión. Me gustaría conocer más sobre los proyectos de IN RESET.',
      image: inversoresImg,
      number: "02"
    },
    {
      id: 'patrocinadores',
      title: 'Patrocinadores',
      subtitle: 'Posicionamiento estratégico en mercados emergentes',
      description: 'Visibilidad premium en experiencias que generan comunidad y fidelización.',
      cta: 'Conocer Programas',
      whatsappMessage: '¡Hola! Estoy interesado/a en los programas de patrocinio de IN RESET. Me gustaría conocer más detalles.',
      image: patrocinadoresImg,
      number: "03"
    },
    {
      id: 'cocreacion',
      title: 'Co-Creación',
      subtitle: 'Imagina crear la próxima revolución tecnológica juntos',
      description: 'Desarrollamos productos que no existen pero que el mundo necesita.',
      cta: 'Iniciar Proyecto',
      whatsappMessage: '¡Hola! Estoy interesado/a en iniciar un proyecto de co-creación con IN RESET. Me gustaría discutir mi idea.',
      image: cocreacionImg,
      number: "04"
    }
  ];

  // Intersection Observer para animaciones
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
  setIsInView(true);
  colaboradoresData.forEach((_, index) => {
    setTimeout(() => {
      setVisibleItems(prev => {
        if (!prev.includes(index)) {
          return [...prev, index];
        }
        return prev;
      });
    }, index * 200);
  });
}
        });
      },
      { 
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="contacto" 
      className="py-5 position-relative" 
      style={{ 
        paddingTop: '100px',
        paddingBottom: '100px',
        scrollMarginTop: '80px',
        overflow: 'hidden'
      }}
    >
      <div className="container position-relative">
        {/* Header */}
        <div className="row mb-5">
          <div className="col-12 col-lg-8 mx-auto text-center">
            <h2
              className="display-5 fw-light mb-0"
              style={{
                color: 'white',
                lineHeight: '1.2',
                letterSpacing: '-0.02em',
                fontWeight: '300',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              Colabora con <span style={{ color: '#8B5CF6', fontWeight: '400' }}>Nosotros</span>
            </h2>
            
            <p 
              className="mb-1 fs-5" 
              style={{ 
                lineHeight: '1.6',
                maxWidth: '600px',
                margin: '0 auto 1.5rem auto',
                color: 'rgba(255, 255, 255, 0.8)'
              }}
            >
              Construye el futuro con IN RESET
            </p>
            </div>
        </div>

        {/* Cards Grid */}
        <div className="row g-4 mb-5">
          {colaboradoresData.map((item, index) => {
            const isHovered = hoveredCard === item.id;
            const isVisible = visibleItems.includes(index);
            
            return (
              <div key={item.id} className="col-12 col-sm-6 col-lg-3">
                <div
                  className="position-relative h-100 overflow-hidden d-flex flex-column"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: isVisible 
                      ? '1px solid rgba(139, 92, 246, 0.25)'
                      : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '12px',
                    minHeight: '350px',
                    boxShadow: isVisible
                      ? '0 4px 20px rgba(139, 92, 246, 0.15)'
                      : '0 2px 15px rgba(0, 0, 0, 0.2)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                    transitionDelay: `${index * 0.1}s`
                  }}
                  onMouseEnter={() => {
                    setHoveredCard(item.id);
                  }}
                  onMouseLeave={() => {
                    setHoveredCard(null);
                  }}
                >
                  {/* Background Image with overlay */}
                  <div
                    className="position-absolute w-100 h-100"
                    style={{
                     backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(139, 92, 246, 0.1)), url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      opacity: isHovered ? '0.4' : '0.2',
                      transition: 'opacity 0.3s ease',
                      zIndex: 1
                    }}
                  />

                  {/* Content */}
                  <div className="position-relative h-100 p-4 d-flex flex-column" style={{ zIndex: 2 }}>
                    
                    {/* Número */}
                    <div className="mb-2">
                      <span 
                        className="fw-light d-block"
                        style={{
                          fontSize: '1.8rem',
                          color: isVisible 
                            ? '#8B5CF6'
                            : 'rgba(255, 255, 255, 0.3)',
                          transition: 'all 0.5s ease',
                          fontWeight: '200',
                          lineHeight: '1'
                        }}
                      >
                        {item.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 
                      className="fw-normal mb-2"
                      style={{ 
                        color: 'white',
                        fontSize: '1.2rem',
                        lineHeight: '1.3',
                        fontWeight: '400'
                      }}
                    >
                      {item.title}
                    </h3>
                    
                    {/* Subtitle */}
                    <p 
                      className="mb-3 fs-6"
                      style={{ 
                        color: 'rgba(255, 255, 255, 0.7)',
                        lineHeight: '1.5',
                        fontSize: '0.9rem'
                      }}
                    >
                      {item.subtitle}
                    </p>
                    
                    {/* Expanded Content */}
                    <div className="flex-grow-1 d-flex flex-column justify-content-end">
                      <div
                        style={{
                          maxHeight: (SHOW_BUTTON_ALWAYS || isHovered) ? '300px' : '0',
                          opacity: (SHOW_BUTTON_ALWAYS || isHovered) ? '1' : '0',
                          overflow: (SHOW_BUTTON_ALWAYS || isHovered) ? 'visible' : 'hidden',
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                      >
                        <div
                          className="mb-3"
                          style={{
                            height: '1px',
                            background: 'linear-gradient(90deg, transparent, #8B5CF6, transparent)',
                            borderRadius: '1px',
                            width: (SHOW_BUTTON_ALWAYS || isHovered) ? '100%' : '0%',
                            transition: 'width 0.6s ease 0.2s'
                          }}
                        />

                        <p 
                          className="mb-3"
                          style={{ 
                            color: 'rgba(255, 255, 255, 0.7)',
                            lineHeight: '1.5',
                            fontSize: '0.85rem'
                          }}
                        >
                          {item.description}
                        </p>

                        <button
                          type="button"
                          className="btn fw-semibold px-3 py-2"
                          onClick={() => openWhatsAppChat(item.whatsappMessage)}
                          style={{
                            background: 'linear-gradient(135deg, #8B5CF6)',
                            border: 'none',
                            color: 'white',
                            borderRadius: '8px',
                            fontSize: '0.85rem',
                            boxShadow: '0 2px 10px rgba(139, 92, 246, 0.3)',
                            transition: 'all 0.3s ease',
                            transform: (SHOW_BUTTON_ALWAYS || isHovered) ? 'translateY(0)' : 'translateY(20px)'
                          }}
                          onMouseOver={(e) => {
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 4px 15px rgba(139, 92, 246, 0.5)';
                            e.target.style.background = 'rgba(44, 7, 49, 0.05)';
                          }}
                          onMouseOut={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 2px 10px rgba(139, 92, 246, 0.3)';
                            e.target.style.background = 'linear-gradient(135deg, #8B5CF6,rgb(110, 29, 148))';
                          }}
                        >
                          {item.cta}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Section */}
        <div className="row mt-5">
          <div className="col-12 col-lg-12 mx-auto text-center">
            <div 
              className="py-4 px-4"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '12px',
                border: '1px solid rgba(139, 92, 246, 0.25)',
                boxShadow: '0 4px 20px rgba(139, 92, 246, 0.15)'
              }}
            >
              <p 
                className="mb-4 fs-5"
                style={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6'
                }}
              >
                Forma parte de nuestra red de colaboradores 
              </p>
              <button
                type="button"
                className="btn px-4 py-2 fw-semibold"
                onClick={handleOpenContactModal}
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6)',
                  border: 'none',
                  color: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)',
                  transition: 'all 0.3s ease',
                  fontSize: '0.95rem'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.5)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(139, 92, 246, 0.3)';
                  e.target.style.background = 'linear-gradient(135deg, #8B5CF6,rgb(110, 29, 148))';
                }}
              >
                Únete a la revolución
              </button>
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