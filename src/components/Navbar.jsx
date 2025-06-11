import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{
        backgroundColor: 'rgba(10, 10, 10, 0.7)', // Fondo casi negro con 70% de opacidad
        backdropFilter: 'blur(10px)', // Efecto de desenfoque para la transparencia moderna
        borderBottom: '1px solid rgba(168, 85, 247, 0.2)', // Borde sutil del color de tu paleta
        padding: '0.4rem 0', // Padding vertical compacto en la nav principal
        width: '100%',
        boxSizing: 'border-box',
        minHeight: '60px' // Opcional: Establecer una altura mínima para la navbar si es muy pequeña
      }}
    >
      <div
        className="container d-flex justify-content-between align-items-center"
        style={{
          maxWidth: '1200px',
          padding: '0 15px', // Padding lateral dentro del container
        }}
      >
        {/* Logo de la marca: Intentamos controlar el padding directamente aquí */}
        <Link 
            className="navbar-brand" 
            to="/" 
            style={{ 
                padding: '0', // ANULAR CUALQUIER PADDING DEL NAVBAR-BRAND
                margin: '0',  // ANULAR CUALQUIER MARGEN DEL NAVBAR-BRAND
                height: '50px', // Altura explícita del contenedor del logo para que no afecte el padding
                display: 'flex', // Usar flexbox para centrar la imagen
                alignItems: 'center', // Centrar verticalmente la imagen dentro de su contenedor
            }}
        >
          <img
            src={logo}
            alt="Logo"
            width="160" // Mantenemos el tamaño grande del logo
            height="auto" // La altura se ajustará automáticamente, pero se limitará por el height del Link padre
            style={{
              filter: 'drop-shadow(0 0 5px rgba(168, 85, 247, 0.5))',
              display: 'block',
              maxHeight: '100%', // Asegura que la imagen no exceda la altura de su contenedor
              width: 'auto' // Permite que el ancho se ajuste proporcionalmente a la altura máxima
            }}
          />
        </Link>

        {/* Botón del menú hamburguesa para responsive */}
        <button
          className="navbar-toggler border-0"
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
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link className="nav-link text-white mx-2 py-1" to="/sobre-nosotros"
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