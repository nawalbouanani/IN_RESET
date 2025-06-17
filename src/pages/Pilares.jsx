import React from 'react';

const Pilares = () => {
  return (
    <section id="pilares" className="min-vh-100 d-flex flex-column" style={{ 
      backgroundColor: '#0a0a0a',
      paddingTop: '05px', // Espacio para el navbar fijo
      scrollMarginTop: '80px' // Para navegación suave
    }}>
      <div className="container">
        {/* Título principal mejorado */}
        <div className="text-center mb-5">
          <h2
            className="title display-6 fw-bold mt-5 mb-3"
            style={{
              background: ' #442386',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: '1.2'
            }}
          >
            Creadores de Soluciones Transformadoras
          </h2>
          <p className="text-white-50 fs-6 mb-4 mx-auto" style={{ maxWidth: '600px' }}>
            Tres pilares fundamentales que definen nuestro enfoque innovador
          </p>
          <div
            className="mx-auto"
            style={{
              width: '60px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #a855f7, transparent)',
              borderRadius: '1px'
            }}
          />
        </div>

        {/* Los 3 pilares con diseño mejorado */}
        <div className="row mt-5 pt-4 align-items-start">
          {/* Pilar 1 */}
          <div className="col-12 col-lg-4 text-center position-relative mb-4 mb-lg-0">
            <div className="px-4 py-4">
              <div className="mb-3">
                <span 
                  className="badge fs-6 px-3 py-2  mb-3"
                  style={{
                    background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(6, 182, 212, 0.2))',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    color: '#a855f7'
                  }}
                >
                  01
                </span>
              </div>
              <h4 className="text-white  mb-3 fs-4">
                Identificación de Nichos
              </h4>
              <p className="text-white-50 mb-0 lh-lg fs-6">
                Detectamos problemas específicos y oportunidades únicas en el mercado a través de análisis profundo
              </p>
            </div>
            
            {/* Línea divisoria vertical mejorada */}
            <div 
              className="d-none d-lg-block position-absolute top-50 end-0 translate-middle-y"
              style={{
                width: '1px',
                height: '60%',
                background: 'linear-gradient(180deg, transparent, rgba(168, 85, 247, 0.4), rgba(6, 182, 212, 0.4), transparent)',
              }}
            />
          </div>

          {/* Pilar 2 */}
          <div className="col-12 col-lg-4 text-center position-relative mb-4 mb-lg-0">
            <div className="px-4 py-4">
              <div className="mb-3">
                <span 
                  className="badge fs-6 px-3 py-2  mb-3"
                  style={{
                    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(168, 85, 247, 0.2))',
                    border: '1px solid rgba(6, 182, 212, 0.3)',
                    color: '#06b6d4'
                  }}
                >
                  02
                </span>
              </div>
              <h4 className="text-white  mb-3 fs-4">
                Soluciones a Medida
              </h4>
              <p className="text-white-50 mb-0 lh-lg fs-6">
                Combinamos tecnología, educación y experiencias para crear soluciones innovadoras y efectivas
              </p>
            </div>
            
            {/* Línea divisoria vertical mejorada */}
            <div 
              className="d-none d-lg-block position-absolute top-50 end-0 translate-middle-y"
              style={{
                width: '1px',
                height: '60%',
                background: 'linear-gradient(180deg, transparent, rgba(6, 182, 212, 0.4), rgba(168, 85, 247, 0.4), transparent)',
              }}
            />
          </div>

          {/* Pilar 3 */}
          <div className="col-12 col-lg-4 text-center">
            <div className="px-4 py-4">
              <div className="mb-3">
                <span 
                  className="badge fs-6 px-3 py-2 mb-3"
                  style={{
                    background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(6, 182, 212, 0.2))',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    color: '#a855f7'
                  }}
                >
                  03
                </span>
              </div>
              <h4 className="text-white mb-3 fs-4">
                Escalabilidad e Impacto
              </h4>
              <p className="text-white-50 mb-0 lh-lg fs-6">
                Desarrollamos modelos de negocio sostenibles con impacto real, medible y escalable
              </p>
            </div>
          </div>
        </div>

        {/* Separadores sutiles para mobile */}
        <div className="d-lg-none row">
          <div className="col-12">
            <div 
              className="mx-auto my-3"
              style={{
                width: '40px',
                height: '1px',
                background: 'rgba(168, 85, 247, 0.3)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pilares;