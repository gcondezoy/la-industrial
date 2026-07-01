import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import Seo from '../components/Seo';
import './Contact.scss';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    ruc: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });

  // Estado del envío: null | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const payload = {
      access_key: 'a7adc542-d509-45c9-96aa-781207847421',
      subject: `Nueva cotización web — ${formData.nombre || 'Sin nombre'}`,
      from_name: 'Web Carrocerías La Industrial',
      Nombre: formData.nombre,
      RUC: formData.ruc,
      Teléfono: formData.telefono,
      Correo: formData.email,
      'Tipo de carrocería': formData.servicio,
      Detalles: formData.mensaje || '(sin detalles)'
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ nombre: '', ruc: '', email: '', telefono: '', servicio: '', mensaje: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="contact-page">
      <Seo
        title="Contacto y Cotización | Carrocerías La Industrial S.A.C. - Puente Piedra, Lima"
        description="Cotiza tu carrocería o furgón. Planta en Puente Piedra, Lima - Perú. Escríbenos por WhatsApp al +51 932 528 794 o al correo Laindustrialeirl@gmail.com."
        path="/contacto"
      />

      {/* 1. HERO DE CONTACTO */}
      <header className="contact-hero">
        <img
          src="/camion-plataforma-metalica-azul.webp"
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
                    {/* DIRECCIÓN ACTUALIZADA AQUÍ */}
                    <p>Casa huerta San Pedro MZ B<br />Lote 6, Puente Piedra<br />Lima, Perú</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="icon-box"><FaPhoneAlt /></div>
                  <div>
                    <h3>Teléfonos Directos</h3>
                    <p>+51 932 528 794 (Ventas)<br />+51 942 138 008 (Soporte)<br />+51 952 897 113 (Soporte)</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="icon-box"><FaEnvelope /></div>
                  <div>
                    <h3>Correo Corporativo</h3>
                    <p>Laindustrialeirl@gmail.com</p>
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
                  {/* ... (Todo tu formulario se mantiene exactamente igual) ... */}
                  <div className="form-group">
                    <label>Nombre o Razón Social</label>
                    <input type="text" name="nombre" placeholder="Ej. Transportes del Norte S.A.C." required value={formData.nombre} onChange={handleChange} />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Número de RUC</label>
                      <input type="text" name="ruc" placeholder="Ej: 20123456789" required value={formData.ruc} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label>Teléfono / Celular</label>
                      <input type="tel" name="telefono" placeholder="+51 999 999 999" required value={formData.telefono} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Correo Electrónico</label>
                    <input type="email" name="email" placeholder="correo@empresa.com" required value={formData.email} onChange={handleChange} />
                  </div>

                  <div className="form-group">
                    <label>Tipo de Carrocería requerida</label>
                    <select name="servicio" required value={formData.servicio} onChange={handleChange}>
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
                    <textarea name="mensaje" rows="4" placeholder="Ej: Necesito un furgón para un chasis Hino Serie 300, cama larga..." value={formData.mensaje} onChange={handleChange}></textarea>
                  </div>

                  <button type="submit" className="btn-submit-form" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Enviando…' : 'Solicitar Presupuesto'}
                  </button>

                  {status === 'success' && (
                    <p className="form-feedback success">
                      ✅ ¡Mensaje enviado! Nos contactaremos contigo pronto.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="form-feedback error">
                      ❌ Hubo un problema al enviar. Escríbenos por WhatsApp al +51 932 528 794.
                    </p>
                  )}
                </form>
              </div>
            </motion.div>

          </div>

          {/* 3. NUEVA SECCIÓN DEL MAPA */}
          <motion.div 
            className="contact-map-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Encuéntranos en nuestro Taller</h2>
            <div className="map-wrapper">
              <iframe
                title="Mapa de ubicación La Industrial"
                src="https://maps.google.com/maps?q=-11.8979169,-77.0669129&z=17&hl=es&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Contacto;