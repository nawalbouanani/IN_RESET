import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top px-0" // px-0 elimina padding horizontal de la nav
      style={{
        backgroundColor: 'rgba(10, 10, 10, 0.7)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(168, 85, 247, 0.2)',
        padding: '0.4rem 0', // Padding vertical, horizontal lo controla px-0
        width: '100%',
        boxSizing: 'border-box',
        minHeight: '60px'
      }}
    >
      <div
        className="container-fluid d-flex justify-content-between align-items-center" // container-fluid y d-flex justify-content-between para extremos
        // Eliminamos maxWidth aquí para que el container-fluid ocupe todo el ancho
        // Si necesitas un ancho máximo, puedes volver a agregarlo y centrar la navbar en un div padre.
      >
        {/* Logo de la marca */}
        <Link 
          className="navbar-brand py-0 me-auto ps-3" // py-0 elimina padding vertical, me-auto empuja, ps-3 añade padding-left
          to="/" 
          style={{ 
            height: '50px', // Altura del contenedor del logo
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'start', 
          }}
        >
          <img
            src={logo}
            alt="Logo"
            // Controla el tamaño del logo aquí.
            style={{
              width: '150px', // Ajusta este valor para el tamaño del logo.
              height: 'auto',
              maxHeight: '100%', // Asegura que no exceda la altura del Link padre
              filter: 'drop-shadow(0 0 5px rgba(168, 85, 247, 0.5))',
              display: 'block'
            }}
          />
        </Link>

        {/* Botón del menú hamburguesa para responsive */}
        <button
          className="navbar-toggler border-0 me-3" // me-3 para un poco de margen a la derecha del botón
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"
            style={{
              filter: 'invert(1) brightness(2)'
            }}>
          </span>
        </button>

        {/* Menú de navegación */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto pe-3"> {/* ms-auto para empujar a la derecha, pe-3 para padding-right */}
            <li className="nav-item">
              <Link className="nav-link text-white mx-2 py-1" to="/sobre-nosotros" // mx-2 para margen horizontal entre links
                style={{
                  transition: 'color 0.3s ease',
                  fontSize: '1.05rem',
                  lineHeight: '1.2'
                }}
                onMouseOver={(e) => e.target.style.color = '#a855f7'}
                onMouseOut={(e) => e.target.style.color = 'white'}>
                Sobre Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white mx-2 py-1" to="/pilares"
                style={{
                  transition: 'color 0.3s ease',
                  fontSize: '1.05rem',
                  lineHeight: '1.2'
                }}
                onMouseOver={(e) => e.target.style.color = '#a855f7'}
                onMouseOut={(e) => e.target.style.color = 'white'}>
                Pilares
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link text-white mx-2 py-1" to="/contacto"
                style={{
                  transition: 'color 0.3s ease',
                  fontSize: '1.05rem',
                  lineHeight: '1.2'
                }}
                onMouseOver={(e) => e.target.style.color = '#06b6d4'}
                onMouseOut={(e) => e.target.style.color = 'white'}>
                Contacto
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white mx-2 py-1" to="/proyectos"
                style={{
                  transition: 'color 0.3s ease',
                  fontSize: '1.05rem',
                  lineHeight: '1.2'
                }}
                onMouseOver={(e) => e.target.style.color = '#06b6d4'}
                onMouseOut={(e) => e.target.style.color = 'white'}>
                Proyectos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};