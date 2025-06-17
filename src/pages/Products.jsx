import React from 'react';
import herCodeImage from "../assets/img/hercode.jpg"; 
import defemmeImage from "../assets/img/defemme.jpg";

const TechEmpowermentProducts = () => {
  return (
    <div id="proyectos" className="min-vh-100 d-flex flex-column" style={{ 
      backgroundColor: '#0a0a0a',
      paddingTop: '05px', // Espacio para el navbar fijo
      scrollMarginTop: '80px' // Para navegación suave
    }}>
      <div className="container mx-auto px-4 py-2 flex-grow-1 d-flex flex-column justify-content-center">
        {/* Header */}
        <div className="text-center mb-5">
          <h4 className="title display-6 fw-bold mb-3"
              style={{
                background: ' #442386',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
            Nuestros Proyectos
          </h4>
          
          <p className="text-white-50 fs-5 mb-4">
            Crecimiento y oportunidad en cada producto
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

        {/* Products Grid */}
        <div className="row g-4 justify-content-center flex-grow-1 align-items-center"> 
          {/* Card Template */}
          {[{
            title: "",
            subtitle: "La Catapulta Tecnológica Femenina",
            description: "Gamificación + STEAM",
            image: herCodeImage
          }, {
            title: "",
            subtitle: "La Revolución del Bienestar Femenino",
            description: "IA + Autocuidado + Autodefensa",
            image: defemmeImage
          }].map((project, idx) => (
            <div key={idx} className="col-12 col-md-6 col-xl-5 d-flex align-items-stretch">
              <div className="card h-100 border-0 position-relative overflow-hidden flex-fill"
                   style={{ 
                     background: idx % 2 === 0 
                       ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(6, 182, 212, 0.1))'
                       : 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(168, 85, 247, 0.1))',
                     border: '1px solid rgba(168, 85, 247, 0.2)',
                     borderRadius: '20px',
                     boxShadow: '0 8px 32px rgba(168, 85, 247, 0.1)',
                     display: 'flex',
                     flexDirection: 'column',
                     maxWidth: '400px',
                     margin: '0 auto'
                   }}>
                
                {/* Imagen */}
                <div className="w-100 position-relative"
                     style={{
                       height: '250px',
                       borderRadius: '20px 20px 0 0',
                       overflow: 'hidden'
                     }}>
                  <div className="position-absolute w-100 h-100 top-0 left-0"
                       style={{
                         backgroundImage: `url(${project.image})`,
                         backgroundSize: 'cover',
                         backgroundPosition: 'center 20%',
                         backgroundRepeat: 'no-repeat',
                         transition: 'transform 0.3s ease'
                       }}
                       onMouseOver={(e) => e.target.style.transform = 'scale(1.03)'}
                       onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
                  </div>
                </div>

                {/* Badge */}
                <div className="position-absolute top-0 start-0 m-3" style={{ zIndex: 3 }}>
                  <span className="badge px-3 py-2 text-white fw-normal"
                        style={{ 
                          backgroundColor: 'rgba(168, 85, 247, 0.8)',
                          borderRadius: '25px',
                          fontSize: '0.75rem',
                          boxShadow: '0 4px 20px rgba(168, 85, 247, 0.3)'
                        }}>
                    EN DESARROLLO
                  </span>
                </div>

                {/* Contenido */}
                <div className="card-body p-4 d-flex flex-column justify-content-center text-center"
                     style={{ 
                       zIndex: 2,
                       flexGrow: 1
                     }}>
                  <h2 className="card-title h5 fw-bold text-white mb-3">
                    {project.title}
                  </h2>
                  <h3 className="h6 text-white mb-3" style={{ opacity: '0.9' }}>
                    {project.subtitle}
                  </h3>
                  <p className="text-white mb-0" style={{ opacity: '0.7', fontSize: '0.9rem' }}>
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechEmpowermentProducts;