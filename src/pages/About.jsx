import React from 'react';
import moradito from "../assets/img/moradito.png";

const About = () => {
  return (
    <section id="nosotros" className="py-5"  >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            {/* Header con imagen en lugar de texto */}
            <div className="text-center mb-5">
              <img
                src={moradito} // <-- Cambia esto por la ruta real de tu logo
                alt="IN RESET Logo"
                className="img-fluid mb-3 mt-4"
                style={{ maxHeight: '80px' }} // <-- Ajusta la altura del logo según tu diseño
              />
            </div>

            {/* Content - Cards de Misión y Qué Somos */}
            {/* AÑADIDO: d-flex y align-items-stretch al row para igualar alturas */}
            <div className="row align-items-center d-flex align-items-stretch">
              <div className="col-12 col-md-6 mb-3 mb-md-0"> {/* AÑADIDO: mb-3 mb-md-0 para espaciado en mobile */}
                <div
                  className="p-4 h-100 d-flex flex-column" /* AÑADIDO: d-flex flex-column */
                  style={{
                    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(168, 85, 247, 0.1))',
                    borderRadius: '15px',
                    border: '1px solid rgba(6, 182, 212, 0.2)',
                    boxShadow: '0 8px 32px rgba(6, 182, 212, 0.1)'
                  }}
                >
                  <h3 className="h4 text-white mb-3 fw-bold">
                    Quiénes Somos
                  </h3>
                  <p className="text-white-50 mb-0 lh-lg flex-grow-1"> {/* AÑADIDO: flex-grow-1 */}
                    Somos una plataforma
                    <span className="text-white fw-semibold"> EdTech-HealthTech </span>
                    que impulsa proyectos con impacto social y económico,
                    <span className="text-white fw-semibold"> diseñados por y para mujeres</span>.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6"> {/* REMOVIDO: mb-4 mb-md-0 ya que era redundante */}
                <div
                  className="p-4 h-100 d-flex flex-column" /* AÑADIDO: d-flex flex-column para que el contenido se estire dentro de la card */
                  style={{
                    background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(6, 182, 212, 0.1))',
                    borderRadius: '15px',
                    border: '1px solid rgba(168, 85, 247, 0.2)',
                    boxShadow: '0 8px 32px rgba(168, 85, 247, 0.1)'
                  }}
                >
                  <h3 className="h4 text-white mb-3 fw-bold">
                    Nuestra Misión
                  </h3>
                  <p className="text-white-50 mb-0 lh-lg flex-grow-1"> {/* AÑADIDO: flex-grow-1 para que el párrafo ocupe el espacio restante */}
                    En IN RESET creemos que cada etapa en la vida de una mujer puede convertirse en una
                    <span className="text-white fw-semibold"> oportunidad de cambio</span>.
                    Transformamos desafíos en soluciones reales, acompañando a cada mujer en el camino
                    de resetear y redefinir su futuro.
                  </p>
                </div>
              </div>


            </div>

            {/* Features */}
            <div className="row mt-5">
              <div className="col-12">
                <div className="row g-4">
                  <div className="col-12 col-sm-6 col-lg-3 text-center">
                    <i className="fas fa-graduation-cap text-white fs-2 mb-3"></i>
                    <h5 className="text-white mb-2">EdTech</h5>
                    <p className="text-white-50 small mb-0">Educación tecnológica innovadora</p>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-3 text-center">
                    <i className="fas fa-capsules text-white fs-2 mb-3"></i>
                    <h5 className="text-white mb-2">HealthTech</h5>
                    <p className="text-white-50 small mb-0">Soluciones de salud digital</p>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-3 text-center">
                    <i className="fas fa-rocket text-white fs-2 mb-3"></i>
                    <h5 className="text-white mb-2">Impacto</h5>
                    <p className="text-white-50 small mb-0">Proyectos con impacto real</p>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-3 text-center">
                    <i className="far fa-gem text-white fs-2 mb-3"></i>
                    <h5 className="text-white mb-2">Mujeres</h5>
                    <p className="text-white-50 small mb-0">Diseñado por y para mujeres</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA 
            <div className="text-center mt-5">
              <div
                className="p-4 rounded-4"
                style={{
                  background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(6, 182, 212, 0.15))',
                  border: '1px solid rgba(168, 85, 247, 0.3)'
                }}
              >
                <h4 className="text-white mb-3 fw-bold">
                  ¿Lista para tu RESET?
                </h4>
                <p className="text-white-50 mb-4">
                  Únete a la comunidad de mujeres que están transformando sus vidas
                </p>
                <button
                  className="btn btn-lg px-5 py-3 fw-semibold"
                  style={{
                    background: 'linear-gradient(135deg, #8b5cf6, #b043b9, #a855f7)',
                    border: 'none',
                    color: 'white',
                    borderRadius: '50px',
                    boxShadow: '0 4px 20px rgba(168, 85, 247, 0.4)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 30px rgba(168, 85, 247, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 20px rgba(168, 85, 247, 0.4)';
                  }}
                >
                  Comienza tu transformación
                </button>
              </div>
            </div>*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;