import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} <span>Ailyn Gómez</span>. Todos los derechos reservados.</p>
        <p>Construyendo con pasión y <span className="text-gradient">código puro</span>.</p>
      </div>
    </footer>
  );
};

export default Footer;
