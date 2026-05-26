import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Truck, Wrench, ShieldCheck, MapPin, Phone } from 'lucide-react';
import './Home.scss'; // Conectado a tus estilos SASS

const Home = () => {
  const ventajas = [
    {
      id: 1,
      icon: <Settings className="icon" />,
      titulo: "Diseño y fabricación a medida",
      descripcion: "Desarrollamos estructuras personalizadas calculadas para las dimensiones y necesidades específicas de tu unidad."
    },
    {
      id: 2,
      icon: <Truck className="icon" />,
      titulo: "Estructuras resistentes y duraderas",
      descripcion: "Utilizamos materiales seleccionados de alta resistencia para garantizar carrocerías preparadas para el transporte pesado."
    },
    {
      id: 3,
      icon: <Wrench className="icon" />,
      titulo: "Acabados en metal y madera",
      descripcion: "Trabajamos con uniones metalmecánicas precisas y madera de alta densidad para asegurar la máxima durabilidad en ruta."
    },
    {
      id: 4,
      icon: <ShieldCheck className="icon" />,
      titulo: "Soluciones para carga pesada",
      descripcion: "Especialistas en la fabricación de unidades estructurales resistentes y sistemas de transporte especializado."
    }
  ];

  return (
    <div className="home-container">
      
      {/* 1. SECCIÓN HERO */}
      <section className="hero-section">
        <img 
    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1920&q=80" 
    alt="Taller industrial y carrocerías" 
    className="hero-background" 
  />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="brand-badge">LA INDUSTRIAL S.A.C.</span>
          <h1 className="hero-title">
            Fabricación de Carrocerías en <span className="highlight">Metal y Madera</span>
          </h1>
          <p className="hero-description">
            Especialistas en transporte pesado. Diseñamos y construimos estructuras resistentes, duraderas y a medida para optimizar tus operaciones de carga general.
          </p>
          <div className="hero-actions">
            <Link to="/proyectos" className="btn-primary">
              Ver Proyectos <ArrowRight size={18} />
            </Link>
            <a href="https://wa.me/51932528794" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN VENTAJAS (PILARS DEL FLYER) */}
      <section className="ventajas-section">
        <div className="section-header">
          <span className="section-subtitle">Nuestra Propuesta</span>
          <h2 className="section-title">
            Especialistas en <span className="highlight">Transporte Pesado</span>
          </h2>
          <p className="section-description">
            Soluciones robustas en metalmecánica y madera estructural diseñadas para resistir las condiciones de carga más exigentes del país.
          </p>
        </div>

        <div className="ventajas-grid">
          {ventajas.map((item) => (
            <div key={item.id} className="ventaja-card">
              <div className="icon-wrapper">{item.icon}</div>
              <h3 className="card-title">{item.titulo}</h3>
              <p className="card-description">{item.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SECCIÓN CONTACTO REAL */}
      <section className="contact-section">
        <div className="section-header-dark">
          <h2>Canales de <span>Contacto Directo</span></h2>
          <p>Comunícate directamente con nuestros asesores comerciales para solicitar un presupuesto adaptado a tu chasis.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-card border-only">
            <MapPin className="card-icon" />
            <h3>Sede de Operaciones</h3>
            <p>Planta de diseño y fabricación metalmecánica especializada en Lima, Perú.</p>
          </div>

          <a href="https://wa.me/51932528794" target="_blank" rel="noopener noreferrer" className="contact-card link-card">
            <Phone className="card-icon" />
            <h3>Contacto Comercial</h3>
            <span className="phone-number">932 528 794</span>
            <p className="hint">Atención inmediata y cotizaciones vía WhatsApp.</p>
          </a>

          <a href="https://wa.me/51942138008" target="_blank" rel="noopener noreferrer" className="contact-card link-card">
            <Phone className="card-icon" />
            <h3>Asesoría Técnica</h3>
            <span className="phone-number">942 138 008</span>
            <p className="hint">Consultas de diseño estructural y especificaciones.</p>
          </a>
        </div>
      </section>

    </div>
  );
};

export default Home;