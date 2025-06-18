import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [visibleWords, setVisibleWords] = useState([]);
  const [showDescription, setShowDescription] = useState(false);

  const words = ['Educación', 'Tecnología', 'Experiencias'];

  useEffect(() => {
    // Mostrar palabras una por una
    words.forEach((_, index) => {
      setTimeout(() => {
        setVisibleWords(prev => [...prev, index]);
      }, 800 + (index * 600)); // 800ms inicial, luego cada 600ms
    });

    // Mostrar descripción después de todas las palabras
    setTimeout(() => {
      setShowDescription(true);
    }, 800 + (words.length * 600) + 500);
  }, []);

  return (
    <section
      className="d-flex flex-column justify-content-start"
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '60px' // AJUSTE: Puedes seguir ajustando este valor para subir el contenido principal.
      }}
    >
      <div className="container-fluid">
        <div className="row align-items-center justify-content-between">

          {/* Títulos a la izquierda */}
          <div className="col-12 col-lg-3 text-start ps-4" style={{ marginTop: '30px' }}> {/* AJUSTE: Puedes seguir ajustando este valor para subir los títulos. */}
            <div>
              {words.map((word, index) => (
                <h1
                  key={word}
                  className="mb-3"
                  style={{
                    fontSize: 'clamp(2.5rem, 7vw, 5rem)',
                    fontWeight: '600',
                    letterSpacing: '-0.03em',
                    color: 'white',
                    textShadow: '0 4px 12px rgba(0,0,0,0.4)',
                    opacity: visibleWords.includes(index) ? 1 : 0,
                    transform: visibleWords.includes(index)
                      ? 'translateX(0) scale(1)'
                      : 'translateX(-50px) scale(0.8)',
                    transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
                    margin: '0 0 1rem 0',
                    lineHeight: '0.9',
                    display: 'block'
                  }}
                >
                  {word}
                </h1>
              ))}
            </div>
          </div>

          {/* Espacio central para objeto 3D */}
          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <div style={{ minHeight: '300px' }}></div> {/* Placeholder para el 3D model */}
          </div>

          {/* Descripción a la derecha */}
          <div className="col-12 col-lg-3 text-end pe-4" style={{ marginTop: '30px' }}> {/* AJUSTE: Puedes seguir ajustando este valor para subir la descripción. */}
            <div
              style={{
                opacity: showDescription ? 1 : 0,
                transform: showDescription ? 'translateX(0)' : 'translateX(50px)',
                transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
                maxWidth: '280px',
                marginLeft: 'auto'
              }}
            >
              <p
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6',
                  fontWeight: '300',
                  fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                  textAlign: 'justify',
                  marginBottom: '0'
                }}
              >
                Transformamos desafíos en{' '}
                <span style={{ color: '#8B5CF6', fontWeight: '500' }}>
                  soluciones escalables
                </span>{' '}
                que revolucionan sectores completos. Creamos valor exponencial a través de la innovación tecnológica.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Carousel infinito de premios - sin redondeado en los extremos */}
      {/* ELIMINÉ EL DIV DEL SCROLL INDICATOR COMPLETO */}
      <div
        className="position-absolute"
        style={{
          bottom: '12%', // AJUSTE: Volví a 12% ya que no hay "Descubre más" encima. Puedes ajustar esto ahora para la posición final del carousel.
          left: '0',
          right: '0',
          opacity: showDescription ? 1 : 0,
          transition: 'all 1s ease 1s',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            background: 'rgba(139, 92, 246, 0.08)',
            borderTop: '1px solid rgba(139, 92, 246, 0.2)',
            borderBottom: '1px solid rgba(139, 92, 246, 0.2)',
            padding: '12px 0',
            backdropFilter: 'blur(10px)',
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)'
          }}
        >
          <div
            className="d-flex align-items-center"
            style={{
              animation: showDescription ? 'scrollInfinite 25s linear infinite' : 'none',
              gap: '0',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => e.target.style.animationPlayState = 'paused'}
            onMouseLeave={(e) => e.target.style.animationPlayState = 'running'}
          >
            {[
              'Startup del Año 2024',
              'Innovation Award',
              'Best EdTech Platform',
              'Top 10 HealthTech',
              'Female Leadership Prize',
              'Tech Excellence Award',
              'Startup del Año 2024',
              'Innovation Award',
              'Best EdTech Platform',
              'Top 10 HealthTech',
              'Female Leadership Prize',
              'Tech Excellence Award'
            ].map((award, index) => (
              <div key={index} className="d-flex align-items-center">
                <span
                  style={{
                    color: '#8B5CF6',
                    fontSize: '1rem',
                    fontWeight: '500',
                    padding: '0 2rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#A855F7';
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#8B5CF6';
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  {award}
                </span>
                {index < 11 && (
                  <div style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: '#8B5CF6',
                    flexShrink: 0,
                    opacity: 0.6
                  }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollInfinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-15px);
          }
          60% {
            transform: translateY(-8px);
          }
        }

        @media (max-width: 991px) {
          .row > div:first-child {
            text-align: center !important;
            padding-left: 1rem !important;
            margin-bottom: 2rem;
          }
          .row > div:last-child {
            text-align: center !important;
            padding-right: 1rem !important;
            margin-top: 2rem;
          }
          .row > div:last-child > div {
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;