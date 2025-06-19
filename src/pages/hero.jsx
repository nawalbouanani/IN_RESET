// Hero.jsx
import React, { useState, useEffect } from 'react';
import './hero.css'; // Importar los estilos

const Hero = () => {
  const [visibleWords, setVisibleWords] = useState([]);
  const [showDescription, setShowDescription] = useState(false);

  const words = ['Educación', 'Tecnología', 'Experiencias'];
  
  const awards = [
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
  ];

  useEffect(() => {
    // Mostrar palabras una por una
    words.forEach((_, index) => {
      setTimeout(() => {
        setVisibleWords(prev => [...prev, index]);
      }, 800 + (index * 600));
    });

    // Mostrar descripción después de todas las palabras
    setTimeout(() => {
      setShowDescription(true);
    }, 800 + (words.length * 600) + 500);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="container-fluid px-2 px-md-3">
          <div className="row align-items-center justify-content-between">

          {/* Títulos a la izquierda */}
          <div className="col-12 col-lg-3 text-start text-center text-lg-start px-3 px-md-4" 
               style={{ marginTop: '30px' }}>
            <div>
              {words.map((word, index) => (
                <h1
                  key={word}
                  className={`mb-2 mb-md-3`}
                  style={{
                    fontSize: 'clamp(2rem, 8vw, 5rem)',
                    fontWeight: '600',
                    letterSpacing: '-0.03em',
                    color: 'white',
                    textShadow: '0 4px 12px rgba(0,0,0,0.4)',
                    opacity: visibleWords.includes(index) ? 1 : 0,
                    transform: visibleWords.includes(index)
                      ? 'translateX(0) scale(1)'
                      : 'translateX(-50px) scale(0.8)',
                    transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
                    margin: '0 0 0.5rem 0',
                    lineHeight: '0.85',
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
            <div className="hero-3d-placeholder"></div>
          </div>

          {/* Descripción a la derecha */}
          <div className="col-12 col-lg-3 text-end text-center text-lg-end px-3 px-md-4 description-container" 
               style={{ marginTop: '30px' }}>
            <div className={`hero-description mx-auto mx-lg-0 ms-lg-auto me-lg-0 ${
              showDescription ? 'visible' : ''
            }`}>
              <p className="hero-description-text text-justify text-lg-end px-lg-0">
                Creamos{' '}
                <span className="hero-description-highlight">
                   ecosistemas 
                </span>{' '}
                inmersivos donde las mujeres descubren su poder transformador. {' '}
                <span className="hero-description-highlight">
                  Innovación Tech {' '}
                </span>
                que convierte el aprendizaje en acción real
              </p>
            </div>
          </div>

        </div>
      </div>
      </div>

      {/* Carousel infinito de premios */}
      <div className={`awards-carousel ${showDescription ? 'visible' : ''}`}>
        <div className="awards-carousel-container">
          <div className={`awards-scroll ${showDescription ? 'animated' : ''}`}>
            {awards.map((award, index) => (
              <div key={index} className="d-flex align-items-center">
                <span className="award-item">
                  {award}
                </span>
                {index < awards.length - 1 && (
                  <div className="award-separator" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;