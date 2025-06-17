import React from 'react';

const About = () => {
  return (
    <section id="nosotros" className="min-vh-100 d-flex flex-column justify-content-center" style={{ 
      backgroundColor: '#0a0a0a',
      paddingTop: '10px', // Espacio para el navbar fijo
      paddingBottom: '80px',
      scrollMarginTop: '80px' // Para navegación suave
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            {/* Header */}
            <div className="text-center mb-5">
              <h2 className="title display-6 fw-bold mb-3"
                  style={{
                    background: '#442386',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                Sobre Nosotros
              </h2>
              
              <div
                className="mx-auto mb-4"
                style={{
                  width: '60px',
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, #a855f7, transparent)',
                  borderRadius: '1px'
                }}>
              </div>
            </div>

            {/* Content - Cards de Misión y Qué Somos */}
            <div className="row align-items-stretch mb-5">
              <div className="col-12 col-md-6 mb-4 mb-md-0">
                <div
                  className="p-4 h-100 d-flex flex-column"
                  style={{
                    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(168, 85, 247, 0.1))',
                    borderRadius: '15px',
                    border: '1px solid rgba(6, 182, 212, 0.2)',
                    boxShadow: '0 8px 32px rgba(6, 182, 212, 0.1)'
                  }}
                >
                  <h3 className="h4 text-white mb-3">
                    Quiénes Somos
                  </h3>
                  <p className="text-white-50 mb-0 lh-lg flex-grow-1">
                    Somos la plataforma
                    <span className="text-white"> EdTech-HealthTech </span>
                    que convierte retos en proyectos escalables. 
                    <span className="text-white"> Transformamos cada desafío en oportunidades de impacto real</span>.
                  </p>
                </div>
              </div>
              
              <div className="col-12 col-md-6">
                <div
                  className="p-4 h-100 d-flex flex-column"
                  style={{
                    background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(6, 182, 212, 0.1))',
                    borderRadius: '15px',
                    border: '1px solid rgba(168, 85, 247, 0.2)',
                    boxShadow: '0 8px 32px rgba(168, 85, 247, 0.1)'
                  }}
                >
                  <h3 className="h4 text-white mb-3 ">
                    Nuestra Misión
                  </h3>
                  <p className="text-white-50 mb-0 lh-lg flex-grow-1">
                    Creemos que cada mujer puede resetear su futuro y crear  
                    <span className="text-white"> valor exponencial</span>.
                    Convertimos problemas en soluciones escalables que transforman sectores completos.
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="row">
              <div className="col-12">
                <div className="row g-4">
                  <div className="col-12 col-sm-6 col-lg-3 text-center">
                    <div className="p-3">
                      <i className="fas fa-graduation-cap text-white fs-2 mb-3" style={{ 
                        filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.5))' 
                      }}></i>
                      <h5 className="subtitle text-white mb-2">EdTech</h5>
                      <p className="text-white-50 small mb-0">Educación tecnológica innovadora</p>
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-3 text-center">
                    <div className="p-3">
                      <i className="fas fa-capsules text-white fs-2 mb-3" style={{ 
                        filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.5))' 
                      }}></i>
                      <h5 className="subtitle text-white mb-2 ">HealthTech</h5>
                      <p className="text-white-50 small mb-0">Soluciones de salud digital</p>
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-3 text-center">
                    <div className="p-3">
                      <i className="fas fa-rocket text-white fs-2 mb-3" style={{ 
                        filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.5))' 
                      }}></i>
                      <h5 className="subtitle text-white mb-2">Impacto</h5>
                      <p className="text-white-50 small mb-0">Proyectos con impacto real</p>
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-3 text-center">
                    <div className="p-3">
                      <i className="far fa-gem text-white fs-2 mb-3" style={{ 
                        filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.5))' 
                      }}></i>
                      <h5 className="subtitle text-white mb-2">Mujeres</h5>
                      <p className="text-white-50 small mb-0">Diseñado por y para mujeres</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;