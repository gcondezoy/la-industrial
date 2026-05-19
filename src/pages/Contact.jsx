import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Restaurado a tus iconos originales de react-icons
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import './Contact.scss';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    ruc: '', // Agregado el estado del RUC
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    alert("¡Mensaje enviado con éxito! Nos contactaremos contigo pronto.");
  };

  return (
    <div className="contact-page">
      
      {/* 1. HERO DE CONTACTO */}
      <header className="contact-hero">
        <img 
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1920&q=80" 
          alt="Contacto La Industrial SAC" 
          className="contact-hero__bg"
        />
        <div className="contact-hero__overlay"></div>

        <div className="container relative-z">
          <span className="overline">Contacto</span>
          <motion.h1 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}>
            Cotiza tu <span className="highlight">Carrocería</span>
          </motion.h1>
          <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay: 0.2 }}>
            Cotiza con nosotros. Nuestro equipo de ingenieros y especialistas está listo para asesorarte.
          </motion.p>
        </div>
      </header>

      {/* 2. SECCIÓN PRINCIPAL: INFO + FORMULARIO */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            
            {/* Columna Izquierda: Información */}
            <motion.div 
              className="info-column"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Información de Contacto</h2>
              <p className="intro-text">Estamos a tu disposición para consultas técnicas, diseño estructural y cotización de flotas completas.</p>

              <div className="info-items">
                <div className="info-item">
                  <div className="icon-box"><FaMapMarkerAlt /></div>
                  <div>
                    <h3>Planta Principal</h3>
                    <p>Distrito de Puente Piedra<br />Lima, Perú</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="icon-box"><FaPhoneAlt /></div>
                  <div>
                    <h3>Teléfonos Directos</h3>
                    <p>+51 932 528 794 (Ventas)<br />+51 942 138 008 (Soporte)</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="icon-box"><FaEnvelope /></div>
                  <div>
                    <h3>Correo Corporativo</h3>
                    <p>carla.industrial@hotmail.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="icon-box"><FaClock /></div>
                  <div>
                    <h3>Horario de Atención</h3>
                    <p>Lunes a Viernes: 8:00 AM - 6:00 PM<br />Sábados: 8:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Columna Derecha: Formulario */}
            <motion.div 
              className="form-column"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="contact-form-card">
                <h2>Envíanos los datos de tu camión</h2>
                <form onSubmit={handleSubmit}>
                  
                  <div className="form-group">
                    <label>Nombre o Razón Social</label>
                    <input type="text" name="nombre" placeholder="Ej. Transportes del Norte S.A.C." required onChange={handleChange} />
                  </div>

                  {/* Fila agregada para el RUC y Teléfono */}
                  <div className="form-row">
                    <div className="form-group">
                      <label>Número de RUC</label>
                      <input type="text" name="ruc" placeholder="Ej: 20123456789" required onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label>Teléfono / Celular</label>
                      <input type="tel" name="telefono" placeholder="+51 999 999 999" required onChange={handleChange} />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Correo Electrónico</label>
                    <input type="email" name="email" placeholder="correo@empresa.com" required onChange={handleChange} />
                  </div>

                  <div className="form-group">
                    <label>Tipo de Carrocería requerida</label>
                    <select name="servicio" required onChange={handleChange}>
                      <option value="">Selecciona una estructura...</option>
                      <option value="furgon">Furgón Comercial Metálico</option>
                      <option value="plataforma">Plataformas y Remolques</option>
                      <option value="madera">Carrocería de Madera (Barandas)</option>
                      <option value="tolva">Tolvas / Unidades Mineras</option>
                      <option value="arenado">Servicio de Arenado y Pintura</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Marca, Modelo y Detalles (Opcional)</label>
                    <textarea name="mensaje" rows="4" placeholder="Ej: Necesito un furgón para un chasis Hino Serie 300, cama larga..." onChange={handleChange}></textarea>
                  </div>

                  <button type="submit" className="btn-submit-form">
                    Solicitar Presupuesto
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;