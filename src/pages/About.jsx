import React from 'react';
import './About.scss';
import Seo from '../components/Seo';
import { Target, Lightbulb, Settings, Truck, Wrench } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page">
      <Seo
        title="Nosotros | Fabricantes de Carrocerías con más de 40 años - La Industrial S.A.C."
        description="Más de 40 años fabricando carrocerías en metal y madera para transporte pesado en el Perú. Conoce nuestra misión, visión e ingeniería de precisión."
        path="/nosotros"
      />

      {/* 1. CABECERA DIVIDIDA (OPCIÓN 2) */}
      <section className="about-header-split">
        <div className="container">
          <div className="split-grid">
            
            <div className="split-text">
              <span className="overline">Nuestra Experiencia</span>
              <h1>
                Especialistas en <br />
                <span className="highlight">transporte pesado</span>
              </h1>
              <p>
                En La Industrial S.A.C. nos dedicamos a la fabricación de carrocerías en metal y madera. Con más de 40 años en el rubro que garantizan la calidad y resistencia de nuestro trabajo, diseñamos soluciones robustas a medida para optimizar tus operaciones de carga general y transporte especializado en todo el país.
              </p>
            </div>
            
            <div className="split-image">
              <img
                src="/taller-nosotros.webp"
                alt="Taller de fabricación de carrocerías La Industrial en plena producción"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2. SECCIÓN MISIÓN Y VISIÓN (Fondo Gris Claro para contraste) */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mv-grid">
            
            <div className="mv-item">
              <div className="mv-icon">
                <Target size={30} />
              </div>
              <div className="mv-content">
                <h2>Nuestra Misión</h2>
                <p>Desarrollar estructuras personalizadas y duraderas, utilizando materiales de alta calidad y acabados de precisión para optimizar las operaciones de carga de nuestros clientes.</p>
              </div>
            </div>

            <div className="mv-item">
              <div className="mv-icon">
                <Lightbulb size={30} />
              </div>
              <div className="mv-content">
                <h2>Nuestra Visión</h2>
                <p>Posicionarnos como la planta fabricante de referencia a nivel nacional, destacando por nuestra capacidad de adaptar soluciones de carga pesada a los diferentes sectores industriales.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SECCIÓN CAPACIDAD TÉCNICA (Fondo Blanco) */}
      <section className="technical-section">
        <div className="container">
          <div className="section-header">
            <h2>Ingeniería y Respaldo Técnico</h2>
            <p>Nuestra ingeniería de precisión garantiza soluciones eficientes y rentables para el transporte pesado.</p>
          </div>

          <div className="technical-grid">
            
            <div className="tech-card">
              <div className="tech-icon">
                <Settings size={38} strokeWidth={1.5} />
              </div>
              <div className="tech-info">
                <h3>Desarrollo a Medida</h3>
                <p>Diseñamos carrocerías personalizadas calculadas milimétricamente para las dimensiones y necesidades específicas de tu unidad.</p>
              </div>
            </div>

            <div className="tech-card">
              <div className="tech-icon">
                <Truck size={38} strokeWidth={1.5} />
              </div>
              <div className="tech-info">
                <h3>Estructuras Resistentes</h3>
                <p>Utilizamos aceros estructurales y maderas seleccionadas de alta densidad preparados para resistir las rutas más exigentes.</p>
              </div>
            </div>

            <div className="tech-card">
              <div className="tech-icon">
                <Wrench size={38} strokeWidth={1.5} />
              </div>
              <div className="tech-info">
                <h3>Soporte Técnico de Planta</h3>
                <p>Ofrecemos asesoría técnica continua, servicios de mantenimiento metalmecánico y acabados protectores de alta calidad.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;