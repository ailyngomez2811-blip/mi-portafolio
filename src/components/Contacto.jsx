import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaGithub } from 'react-icons/fa';
import BlurText from './BlurText';

const Contacto = () => {
  return (
    <section id="contacto" className="section container">
      <div className="section-header">
        <span className="section-subtitle">Comunicación</span>
        <BlurText
          text="Contáctame"
          delay={150}
          animateBy="words"
          direction="top"
          className="section-title text-gradient"
        />
      </div>

      <div className="contact-grid">
        
        <div className="contact-card glass-panel">
          <FaEnvelope className="contact-icon" />
          <h3>Correo</h3>
          <p>ailyngomez.2811@gmail.com</p>
        </div>


        <div className="contact-card glass-panel">
          <FaPhoneAlt className="contact-icon" />
          <h3>WhatsApp</h3>
          <p>+57 323 713 9709</p>
        </div>

        <a
          href="https://github.com/ailyngomez2811-blip"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card glass-panel"
          style={{ textDecoration: 'none' }}
        >
          <FaGithub className="contact-icon" />
          <h3>GitHub</h3>
          <p>ailyngomez2811-blip</p>
        </a>

      </div>
    </section>
  );
};

export default Contacto;
