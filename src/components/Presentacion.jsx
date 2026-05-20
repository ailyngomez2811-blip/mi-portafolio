import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import BlurText from './BlurText';
import miFotoImg from '../img/mifoto.jpeg';

const Presentacion = () => {
  return (
    <section id="presentacion" className="hero container">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hola, soy</p>
          <BlurText
            text="Ailyn"
            delay={150}
            animateBy="words"
            direction="top"
            className="hero-title text-gradient"
          />
          <p className="hero-subtitle">
            &lt; <span className="highlight">Desarrolladora Web</span> /&gt;
          </p>
          <p className="hero-desc">
            Soy una desarrolladora apasionada por crear experiencias digitales excepcionales.
            Me enfoco en construir aplicaciones modernas, rápidas y escalables.
          </p>
          <a href="#proyectos" className="btn-premium">
            Ver proyectos <FaArrowRight size={14} />
          </a>
        </div>

        <div className="hero-visual">
          <div className="hero-glow"></div>
          <div className="hero-image-wrapper">
            <img src={miFotoImg} alt="Ailyn Nicol" className="hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentacion;
