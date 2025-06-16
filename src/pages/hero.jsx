import React from 'react';
import NetworkAnimation2 from './networkAnimation2.jsx';
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
    <div 
       className="achievements-ticker position-absolute bottom-0 start-0 w-100 bg-black bg-opacity-50 py-2 d-flex align-items-center" // Añadimos d-flex y align-items-center
       style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}
    >
      <div className="d-inline-block" style={{ animation: 'scroll-left 40s linear infinite' }}>
        {[...achievements, ...achievements, ...achievements].map((achievement, index) => (
          <span key={index} className="mx-3 text-uppercase text-white-50" style={{ fontSize: '0.9rem' }}>
            {achievement}
            <span className="mx-3" style={{ color: '#a855f7' }}>•</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );

  return (
    <section id="hero" className="hero-section position-relative text-light" style={{ height: '90vh', overflow: 'hidden' }}>
      {/* Network Animation Background */}
      <NetworkAnimation2 />

      {/* Contenido principal del Hero */}
      <div className="hero-content d-flex flex-column justify-content-center align-items-end h-100">
        <div className="container-fluid pe-lg-5">
          <div className="row justify-content-end">
            <div className="col-12 col-lg-6 text-end">
              <div className="hero-text-container">
                <h1 className="fw-bold mb-2 animate-slide-in-right" style={{ fontSize: '3rem', color: '#442386' }}>
                  CONVERTIMOS <span className="glow-text highlight-word">DESAFÍOS</span>
                </h1>
                <h1 className="fw-bold mb-3 animate-fade-up animate-delay-1" style={{ fontSize: '3rem', color: '#442386' }}>
                  EN OPORTUNIDADES
                </h1>
                <p className="animate-fade-up animate-delay-2" style={{ color: '#bfc1c4', fontSize: '1rem', maxWidth: '500px', marginLeft: 'auto' }}>
                  Juntos, podemos resetear y redefinir el futuro.
                </p>
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