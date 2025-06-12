import React from 'react';
import NetworkAnimation from './networkAnimation.jsx';
import './hero.css';

const Hero = () => {
  // Logros para el ticker
  const achievements = [
    "Premios Fundadoras 2024",
    "Featured Las Provincias",
    "Premio UE Madrid",
    "Social Nest Foundation",
    "Valencia Plaza Interview",
    "FORINVEST 2024",
    "VDS 2024"
  ];

  const AchievementsTicker = () => (
    <div className="achievements-ticker">
      <div className="ticker-container">
        <div className="ticker-content">
          {[...achievements, ...achievements, ...achievements].map((achievement, index) => (
            <span key={index} className="ticker-item">
              {achievement}
              <span className="ticker-separator">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="hero" className="hero-section">
      {/* Network Animation Background */}
      <NetworkAnimation />

      {/* Contenido principal del Hero */}
      <div className="hero-content d-flex flex-column justify-content-center align-items-center">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-7 text-center">
              <div className="hero-text-container">
                <h1 className="hero-title-purple fw-bold mb-0 animate-fade-up fs-hero-title-main">
                  Convertimos Desafíos
                </h1>
                <h1 className="hero-title-purple fw-bold mb-3 animate-fade-up animate-delay-1 fs-hero-title-secondary">
                  en Oportunidades
                </h1>
                <p className="hero-description-purple mb-4 animate-fade-up animate-delay-2">
                  Cada etapa de la vida de una mujer presenta desafíos únicos. Nuestra visión? Cada desafío puede transformarse en un proyecto escalable con impacto social y económico.
                </p>
                <div className="animate-fade-up animate-delay-3 mb-5">
                  <a href="#nosotros" className="btn btn-tech-compact btn-lg px-4 py-2">
                    Transforma tu historia
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker de Logros */}
      <AchievementsTicker />
    </section>
  );
};

export default Hero;
