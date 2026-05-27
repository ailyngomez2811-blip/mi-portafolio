import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import BlurText from './BlurText';

const proyectosData = [
  {
    id: 1,
    num: "01",
    nombre: "Its Fashion",
    descripcion: "Sistema de gestión de inventario.",
    tecnologias: ["PHP", "TailwindCSS", "MySQL"],
    imagen: "/its-fashion.png",
    link: "https://itsfashion.byethost17.com/?i=2"
  }
];

const Proyectos = () => {
  return (
    <section id="proyectos" className="section container">
      <div className="section-header">
        <span className="section-subtitle">Portafolio</span>
        <BlurText
          text="Mis Proyectos"
          delay={150}
          animateBy="words"
          direction="top"
          className="section-title text-gradient"
        />
      </div>

      <div className="proyectos-list">
        {proyectosData.map((proyecto) => (
          <div key={proyecto.id} className="proyecto-item">
            <div className="proyecto-img-container">
              {proyecto.imagen ? (
                <img src={proyecto.imagen} alt={proyecto.nombre} className="proyecto-img" />
              ) : null}
              <div className="proyecto-img-overlay">
                <span className="proyecto-img-placeholder">
                  {proyecto.imagen ? 'Ver Proyecto' : 'Imagen del Proyecto'}
                </span>
              </div>
            </div>
            
            <div className="proyecto-info">
              <span className="proyecto-num">Proyecto {proyecto.num}</span>
              <h3 className="proyecto-title">{proyecto.nombre}</h3>
              <div className="proyecto-line"></div>
              <p className="proyecto-desc">{proyecto.descripcion}</p>
              
              <div className="proyecto-tags">
                {proyecto.tecnologias.map((tech, index) => (
                  <span key={index} className="tag">{tech}</span>
                ))}
              </div>
              
              <a
                href={proyecto.link || '#proyectos'}
                className="proyecto-link"
                target={proyecto.link ? '_blank' : '_self'}
                rel="noreferrer"
              >
                Ver proyecto <FaArrowRight size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
