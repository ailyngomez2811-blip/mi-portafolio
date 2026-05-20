import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <a href="#presentacion" className="logo">
          Mi <span>Portafolio</span>
        </a>
        <nav className="nav-links">
          <a href="#proyectos">Proyectos</a>
          <a href="#habilidades">Skills</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
