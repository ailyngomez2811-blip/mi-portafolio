import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaServer, FaFilePdf } from 'react-icons/fa';
import { SiMongodb, SiPhp, SiTailwindcss, SiMysql } from 'react-icons/si';
import BlurText from './BlurText';

const Habilidades = () => {
  const skills = [
    { num: '01', name: 'HTML5', desc: 'Estructura semántica', icon: <FaHtml5 /> },
    { num: '02', name: 'CSS', desc: 'Diseño responsivo y animaciones', icon: <FaCss3Alt /> },
    { num: '03', name: 'JavaScript', desc: 'Lógica interactiva', icon: <FaJs /> },
    { num: '04', name: 'React', desc: 'Interfaces dinámicas', icon: <FaReact /> },
    { num: '05', name: 'Node.js', desc: 'Desarrollo backend', icon: <FaNodeJs /> },
    { num: '06', name: 'MongoDB', desc: 'Base de datos NoSQL', icon: <SiMongodb /> },
    { num: '07', name: 'PHP', desc: 'Desarrollo web del lado servidor', icon: <SiPhp /> },
    { num: '08', name: 'TailwindCSS', desc: 'Estilos utilitarios modernos', icon: <SiTailwindcss /> },
    { num: '09', name: 'MySQL', desc: 'Base de datos relacional', icon: <SiMysql /> },
    { num: '10', name: 'Python', desc: 'Scripting y automatización', icon: <FaPython /> },
    { num: '11', name: 'Laragon', desc: 'Entorno de desarrollo local', icon: <FaServer /> },
    { num: '12', name: 'DomPDF', desc: 'Generación de archivos PDF', icon: <FaFilePdf /> }
  ];

  return (
    <section id="habilidades" className="section container">
      <div className="section-header">
        <span className="section-subtitle">Tecnologías</span>
        <BlurText
          text="Mis Habilidades"
          delay={150}
          animateBy="words"
          direction="top"
          className="section-title text-gradient"
        />
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card glass-panel">
            <span className="skill-number">{skill.num}</span>
            <div className="skill-icon-wrapper">
              {skill.icon}
            </div>
            <h3 className="skill-title">{skill.name}</h3>
            <p className="skill-desc">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Habilidades;
