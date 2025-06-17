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
      className="achievements-ticker position-absolute start-0 w-100 d-flex align-items-center"
      style={{ 
        bottom: '10vh', // o '60px' si prefieres fijo
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '0.5rem 0',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        height: '40px',
        backdropFilter: 'blur(4px)'
      }}
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
    <section
      id="hero"
      className="hero-section position-relative text-light"
      style={{ 
        height: '100vh', 
        overflow: 'hidden',
        scrollMarginTop: '80px' 
      }}
    >
      {/* Network Animation Background */}
      <NetworkAnimation2 />

     {/* Contenido principal del Hero */}
      <div className="hero-content d-flex flex-column justify-content-center align-items-start h-100" style={{ paddingTop: '10px' }}>
        <div className="container-fluid">
          <div className="row justify-content-start">
            <div className="col-12 col-lg-7 col-xl-6"> 
              <div className="hero-text-container text-start ps-3 ps-lg-5">
                <h1
                  className="hero-title fw-bold mb-1 animate-slide-in-right"
                  style={{ 
                    fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', 
                    color: '#442386',
                    lineHeight: '1.1',
                    letterSpacing: '-0.02em'
                  }}
                >
                  CONVERTIMOS DESAFÍOS
                </h1>
                
                <h1
                  className="hero-title fw-bold mb-1 animate-slide-in-right"
                  style={{ 
                    fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', 
                    color: '#442386',
                    lineHeight: '1.1',
                    letterSpacing: '-0.02em'
                  }}
                >
                  EN
                </h1>
                
                <h1 className="hero-title mb-4 animate-fade-up animate-delay-1">
                  <span
                    className="glow-text d-block"
                    style={{
                      fontSize: 'clamp(2.4rem, 5.5vw, 3.5rem)',
                      fontWeight: '600',
                      lineHeight: '1',
                      color: '#a06fff',
                      textShadow: '0 0 30px rgba(160, 111, 255, 0.5)',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    OPORTUNIDADES
                  </span>
                </h1>
                
                <div className="d-flex justify-content-start">
                  <p
                    className="animate-fade-up animate-delay-2 mb-0"
                    style={{
                      color: '#bfc1c4',
                      fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                      maxWidth: '400px',
                      textAlign: 'left',
                      lineHeight: '1.6',
                      fontWeight: '300'
                    }}
                  >
                    Juntos, podemos resetear y redefinir el futuro.
                  </p>
                </div>
                
                {/* Call to Action Button - Opcional 
                <div className="d-flex justify-content-start mt-4">
                  <button
                    className="btn btn-lg px-4 py-3 fw-semibold animate-fade-up animate-delay-3"
                    style={{
                      background: 'linear-gradient(135deg, #8b5cf6, #a855f7, #9333ea)',
                      border: 'none',
                      color: 'white',
                      borderRadius: '50px',
                      boxShadow: '0 8px 32px rgba(168, 85, 247, 0.3)',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)',
                      fontSize: '0.95rem',
                      letterSpacing: '0.3px'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-3px)';
                      e.target.style.boxShadow = '0 12px 40px rgba(168, 85, 247, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 8px 32px rgba(168, 85, 247, 0.3)';
                    }}
                  >
                    Descubre Más
                  </button>
                </div>*/}
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