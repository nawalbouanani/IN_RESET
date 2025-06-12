import React from 'react';
import NetworkAnimation from './networkAnimation';

const Pilares = () => {
  return (
    <section id="pilares" className="py-5">
      <div className="container">
        {/* Título principal */}
        <div className="text-center mb-5">
          <h2
            className="text-4xl md:text-5xl font-bold mt-5 mb-4"
            style={{
              background: 'linear-gradient(135deg, #8b5cf6, #b043b9, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Creadores de Soluciones Transformadoras<br />para Cada Etapa de las Mujeres
          </h2>
          <div
            className="mx-auto mt-5"
            style={{
              width: '80px',
              height: '4px',
              background: 'linear-gradient(135deg, #8b5cf6, #b043b9, #a855f7)',
              borderRadius: '2px'
            }}
          />
        </div>

        {/* Los 3 pilares */}
        <div className="row g-4 mt-5 mb-5">
          {/* Pilar 1 */}
          <div className="col-12 col-md-4">
            <div
              className="text-center h-100 p-4 rounded-4"
              style={{
                background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(6, 182, 212, 0.1))',
                border: '1px solid rgba(168, 85, 247, 0.2)',
                boxShadow: '0 8px 32px rgba(168, 85, 247, 0.1)',
              }}
            >
              <div
                className="d-flex align-items-center justify-content-center mb-3"
                style={{
                  width: '70px',
                  height: '70px',
                  background: 'linear-gradient(135deg, #a855f7, #06b6d4)',
                  borderRadius: '50%',
                  boxShadow: '0 4px 20px rgba(168, 85, 247, 0.3)'
                }}
              >
                <span className="fs-2 text-white">🔍</span>
              </div>
              <h5 className="text-white fw-bold mb-2">Identificación de Nichos</h5>
              <p className="text-white-50 mb-0">
                Detectamos problemas específicos sin resolver
              </p>
            </div>
          </div>

          {/* Pilar 2 */}
          <div className="col-12 col-md-4">
            <div
              className="text-center h-100 p-4 rounded-4"
              style={{
                background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(168, 85, 247, 0.1))',
                border: '1px solid rgba(6, 182, 212, 0.2)',
                boxShadow: '0 8px 32px rgba(6, 182, 212, 0.1)',
              }}
            >
              <div
                className="d-flex align-items-center justify-content-center mb-3"
                style={{
                  width: '70px',
                  height: '70px',
                  background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
                  borderRadius: '50%',
                  boxShadow: '0 4px 20px rgba(6, 182, 212, 0.3)'
                }}
              >
                <span className="fs-2 text-white">🧠</span>
              </div>
              <h5 className="text-white fw-bold mb-2">Soluciones a Medida</h5>
              <p className="text-white-50 mb-0">
                Tecnología + Educación + Experiencias
              </p>
            </div>
          </div>

          {/* Pilar 3 */}
          <div className="col-12 col-md-4">
            <div
              className="text-center h-100 p-4 rounded-4"
              style={{
                background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(6, 182, 212, 0.1))',
                border: '1px solid rgba(168, 85, 247, 0.2)',
                boxShadow: '0 8px 32px rgba(168, 85, 247, 0.1)',
              }}
            >
              <div
                className="d-flex align-items-center justify-content-center mb-3"
                style={{
                  width: '70px',
                  height: '70px',
                  background: 'linear-gradient(135deg, #a855f7, #06b6d4)',
                  borderRadius: '50%',
                  boxShadow: '0 4px 20px rgba(168, 85, 247, 0.3)'
                }}
              >
                <span className="fs-2 text-white">📈</span>
              </div>
              <h5 className="text-white fw-bold mb-2">Escalabilidad e Impacto</h5>
              <p className="text-white-50 mb-0">
                Modelos de negocio sostenibles
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pilares;
