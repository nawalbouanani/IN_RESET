import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-5 mt-auto border-top border-secondary border-opacity-25">
      <div className="container">
        <div className="row justify-content-center g-4">
          {/* Columna de Producto */}
          <div className="col-12 col-md-3 text-center text-md-start">
            <h5 className="fs-6 fw-bold mb-3 text-white">Producto</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a href="#producto-soluciones" className="text-white-50 text-decoration-none link-light link-opacity-75-hover fs-7">Soluciones</a>
              </li>
              <li className="mb-2">
                <a href="#producto-educacion" className="text-white-50 text-decoration-none link-light link-opacity-75-hover fs-7">Educación</a>
              </li>
              <li className="mb-2">
                <a href="#producto-equipo" className="text-white-50 text-decoration-none link-light link-opacity-75-hover fs-7">Equipo</a>
              </li>
            </ul>
          </div>

          {/* Columna de Soporte */}
          <div className="col-12 col-md-3 text-center text-md-start">
            <h5 className="fs-6 fw-bold mb-3 text-white">Soporte</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a href="#soporte-ayuda" className="text-white-50 text-decoration-none link-light link-opacity-75-hover fs-7">Centro de ayuda</a>
              </li>
              <li className="mb-2">
                <a href="#soporte-terminos" className="text-white-50 text-decoration-none link-light link-opacity-75-hover fs-7">Términos y Servicios</a>
              </li>
              <li className="mb-2">
                <a href="#soporte-sitio" className="text-white-50 text-decoration-none link-light link-opacity-75-hover fs-7">Sitio</a>
              </li>
            </ul>
          </div>

          {/* Columna de Contacto */}
          <div className="col-12 col-md-3 text-center text-md-start">
            <h5 className="fs-6 fw-bold mb-3 text-white">Contacto</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a href="mailto:soporte@in-reset.com" className="text-white-50 text-decoration-none link-light link-opacity-75-hover fs-7">soporte@in-reset.com</a>
              </li>
              <li className="mb-2">
                <a href="mailto:info@in-reset.com" className="text-white-50 text-decoration-none link-light link-opacity-75-hover fs-7">info@in-reset.com</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary border-opacity-25 my-4" />

        {/* Sección de Copyright y Redes Sociales */}
        <div className="row justify-content-between align-items-center">
            <div className="col-12 col-md-auto text-center text-md-start">
                <p className="mb-2 mb-md-0 text-white-50 fs-7">&copy; IN RESET {currentYear}</p>
            </div>
            <div className="col-12 col-md-auto text-center text-md-end">
               
                <a href="https://www.linkedin.com/company/in-reset/" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none me-3">
                    <FontAwesomeIcon icon={faLinkedin} className="fa-lg text-primary-hover" />
                </a>
                <a href="https://www.instagram.com/in__reset?igsh=MWNtdzF1aTlrMXRlbQ==" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none me-3">
                    <FontAwesomeIcon icon={faInstagram} className="fa-lg text-primary-hover" />
                </a>
                {/* Reemplaza "https://www.tiktok.com/@tu_empresa_tiktok" con tu URL real de TikTok */}
                <a href="https://www.tiktok.com/@IN_RESET" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
                    <FontAwesomeIcon icon={faTiktok} className="fa-lg text-primary-hover" />
                </a>
            </div>
        </div>

      </div>
    </footer>
  );
};
