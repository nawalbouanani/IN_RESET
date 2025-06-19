import React from "react";
import logo from "../assets/img/logomorado.png";

export const Navbar = () => {

  const smoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top px-0"
      style={{
        backgroundColor: 'rgba(10, 10, 10, 0.7)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(168, 85, 247, 0.2)',
        padding: '0.4rem 0',
        width: '100%',
        boxSizing: 'border-box',
        minHeight: '60px'
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo de la marca */}
        <a
          href="#hero"
          className="navbar-brand py-0 me-auto ps-3"
          style={{
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            cursor: 'pointer'
          }}
          onClick={(e) => smoothScroll(e, "hero")}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              width: '150px',
              height: 'auto',
              maxHeight: '100%',
              display: 'block'
            }}
          />
        </a>

        {/* Botón del menú hamburguesa para responsive */}
        <button
          className="navbar-toggler border-0 me-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            style={{
              filter: 'invert(1) brightness(2)'
            }}
          />
        </button>

        {/* Menú de navegación */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto pe-3">
            <li className="nav-item">
              <a
                href="#nosotros"
                className="nav-link text-white mx-2 py-1"
                style={{
                  transition: 'color 0.3s ease',
                  fontSize: '1.05rem',
                  lineHeight: '1.2'
                }}
                onClick={(e) => smoothScroll(e, "nosotros")}
                onMouseOver={(e) => (e.target.style.color = '#a855f7')}
                onMouseOut={(e) => (e.target.style.color = 'white')}
              >
                Sobre Nosotros
              </a>
            </li>

            {/* Puedes activar o agregar más links aquí si quieres */}

            <li className="nav-item">
              <a
                href="#contacto"
                className="nav-link text-white mx-2 py-1"
                style={{
                  transition: 'color 0.3s ease',
                  fontSize: '1.05rem',
                  lineHeight: '1.2'
                }}
                onClick={(e) => smoothScroll(e, "contacto")}
                onMouseOver={(e) => (e.target.style.color = '#06b6d4')}
                onMouseOut={(e) => (e.target.style.color = 'white')}
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
