import React from 'react';
import herCodeImage from "../assets/img/hercode.jpg"; 
import defemmeImage from "../assets/img/defemme.jpeg";

const TechEmpowermentProducts = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" 
              style={{ 
                background: 'linear-gradient(135deg, #a855f7, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
            Transformando Sectores en Tiempo Real
          </h1>
          <div className="w-24 h-1 mx-auto" 
               style={{ 
                 background: 'linear-gradient(90deg, #a855f7, #06b6d4)' 
               }}></div>
        </div>

        {/* Products Grid */}
        <div className="row g-5 justify-content-center"> 
          {/* HER CODE Card */}
          <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch"> 
            <div className="card h-100 border-0 position-relative overflow-hidden flex-fill" 
                 style={{ 
                   background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(6, 182, 212, 0.1))',
                   border: '1px solid rgba(168, 85, 247, 0.2)',
                   borderRadius: '20px',
                   boxShadow: '0 8px 32px rgba(168, 85, 247, 0.1)',
                   display: 'flex',
                   flexDirection: 'column', 
                 }}>
              
              {/* Image Container: Fixed height for compact design */}
              <div className="w-100 position-relative" 
                   style={{
                     height: '220px', /* ALTURA FIJA MÁS COMPACTA para el área de la imagen */
                     borderRadius: '20px 20px 0 0',
                     overflow: 'hidden', 
                   }}>
                <div className="position-absolute w-100 h-100 top-0 left-0"
                     style={{
                       backgroundImage: `url(${herCodeImage})`,
                       backgroundSize: 'cover', 
                       backgroundPosition: 'center 20%', /* Ajusta este valor (ej: 'center 10%', 'center 30%') para la imagen de HER CODE si es necesario para que el rostro se vea bien */
                       backgroundRepeat: 'no-repeat',
                       transition: 'transform 0.3s ease',
                     }}
                     onMouseOver={(e) => e.target.style.transform = 'scale(1.03)'} 
                     onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
                </div>
              </div>

              {/* Badge */}
              <div className="position-absolute top-0 start-0 m-3" style={{ zIndex: 3 }}>
                <span className="badge px-2 py-2 text-white fw-normal"
                      style={{ 
                        backgroundColor: 'rgba(168, 85, 247, 0.8)',
                        borderRadius: '25px',
                        fontSize: '0.85rem',
                        boxShadow: '0 4px 20px rgba(168, 85, 247, 0.3)'
                      }}>
                  EN DESARROLLO
                </span>
              </div>

              {/* Content (text and button) */}
              <div className="card-body p-4 d-flex flex-column" 
                   style={{ 
                     zIndex: 2, 
                     flexGrow: 1, 
                     paddingTop: '20px', 
                     minHeight: '180px' /* min-height para el área de texto, ajustado para ser más compacto */
                   }}>
                <h2 className="card-title h3 fw-bold text-white mb-2 text-center"> 
                  HER CODE
                </h2>
                <p className="text-white mb-2 text-center" style={{ opacity: '0.9', fontSize: '1.0rem' }}> 
                  La Catapulta Tecnológica Femenina
                </p>
                <p className="text-white mb-4 text-center" style={{ opacity: '0.7', fontSize: '0.9rem', flexGrow: 1 }}> 
                  En desarrollo: Gamificación + STEAM
                </p>
                <div className="mt-auto d-flex justify-content-center"> 
                  <button className="btn text-white fw-semibold px-4 py-2"
                          style={{ 
                            background: 'linear-gradient(135deg, #8b5cf6, #b043b9, #a855f7)',
                            border: 'none',
                            borderRadius: '25px',
                            boxShadow: '0 4px 20px rgba(168, 85, 247, 0.4)',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseOver={(e) => {
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 8px 30px rgba(168, 85, 247, 0.6)';
                          }}
                          onMouseOut={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 4px 20px rgba(168, 85, 247, 0.4)';
                          }}>
                    Conocer Avances
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* DE FEMME Card (misma estructura) */}
          <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
            <div className="card h-100 border-0 position-relative overflow-hidden flex-fill"
                 style={{ 
                   background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(168, 85, 247, 0.1))',
                   border: '1px solid rgba(6, 182, 212, 0.2)',
                   borderRadius: '20px',
                   boxShadow: '0 8px 32px rgba(6, 182, 212, 0.1)',
                   display: 'flex',
                   flexDirection: 'column',
                 }}>
              
              {/* Image Container: Fixed height for compact design */}
              <div className="w-100 position-relative" 
                   style={{
                     height: '220px', /* ALTURA FIJA MÁS COMPACTA */
                     borderRadius: '20px 20px 0 0',
                     overflow: 'hidden'
                   }}>
                <div className="position-absolute w-100 h-100 top-0 left-0"
                     style={{
                       backgroundImage: `url(${defemmeImage})`,
                       backgroundSize: 'cover',
                       backgroundPosition: 'center', 
                       backgroundRepeat: 'no-repeat',
                       transition: 'transform 0.3s ease',
                     }}
                     onMouseOver={(e) => e.target.style.transform = 'scale(1.03)'}
                     onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
                </div>
              </div>

              {/* Badge */}
              <div className="position-absolute top-0 start-0 m-3" style={{ zIndex: 3 }}>
                <span className="badge px-2 py-2 text-white fw-normal"
                      style={{                         
                        backgroundColor: 'rgba(168, 85, 247, 0.8)',
                        borderRadius: '25px',
                        fontSize: '0.85rem',
                        boxShadow: '0 4px 20px rgba(168, 85, 247, 0.3)'
                      }}>
                  EN DESARROLLO
                </span>
              </div>

              {/* Content (text and button) */}
              <div className="card-body p-4 d-flex flex-column" style={{ zIndex: 2, flexGrow: 1, paddingTop: '20px', minHeight: '180px' }}>
                <h2 className="card-title h3 fw-bold text-white mb-2 text-center">
                  DE FEMME
                </h2>
                <p className="text-white mb-2 text-center" style={{ opacity: '0.9', fontSize: '1.0rem' }}>
                  La Revolución del Bienestar Femenino
                </p>
                <p className="text-white mb-4 text-center" style={{ opacity: '0.7', fontSize: '0.9rem', flexGrow: 1 }}>
                  En desarrollo: IA + Autocuidado + Autodefensa
                </p>
                <div className="mt-auto d-flex justify-content-center">
                  <button className="btn text-white fw-semibold px-4 py-2"
                          style={{ 
                            background: 'linear-gradient(135deg, #8b5cf6, #b043b9, #a855f7)',
                            border: 'none',
                            borderRadius: '25px',
                            boxShadow: '0 4px 20px rgba(6, 182, 212, 0.4)',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseOver={(e) => {
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 8px 30px rgba(6, 182, 212, 0.6)';
                          }}
                          onMouseOut={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 4px 20px rgba(6, 182, 212, 0.4)';
                          }}>
                    Conocer Avances
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="position-fixed" 
             style={{ 
               top: '20%', 
               left: '-100px', 
               width: '200px', 
               height: '200px',
               background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1), transparent)',
               borderRadius: '50%',
               zIndex: 0,
               pointerEvents: 'none'
             }}></div>
        
        <div className="position-fixed" 
             style={{ 
               bottom: '20%', 
               right: '-100px', 
               width: '300px', 
               height: '300px',
               background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1), transparent)',
               borderRadius: '50%',
               zIndex: 0,
               pointerEvents: 'none'
             }}></div>
      </div>
    </div>
  );
};

export default TechEmpowermentProducts;