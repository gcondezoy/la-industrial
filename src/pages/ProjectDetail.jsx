import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { productLines } from '../data/projects.js';
import './ProjectDetail.scss';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Estado para controlar la imagen en pantalla completa
  const [selectedImage, setSelectedImage] = useState(null);

  // Buscamos la línea de producto correspondiente
  const line = productLines.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!line) {
    return (
      <div className="error-page">
        <h2>Línea de producción no encontrada</h2>
        <Link to="/" className="back-btn">Regresar al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      <div className="container">
        <button onClick={() => navigate(-1)} className="back-link">
          ← Volver al Catálogo
        </button>

        <div className="detail-layout">
          {/* Columna Izquierda: Galería Masiva */}
          <div className="detail-media">
            <h2>Galería de Unidades Entregadas</h2>
            {line.images.length > 0 ? (
              <div className="products-photos-grid">
                {line.images.map((imgUrl, idx) => (
                  <div 
                    key={idx} 
                    className="product-photo-item"
                    onClick={() => setSelectedImage(imgUrl)} // Abrimos la imagen al hacer clic
                  >
                    <img src={imgUrl} alt={`Unidad fabricada ${line.title}`} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-images-box">
                <p>Próximamente fotos de proyectos en esta línea en nuestras rutas.</p>
              </div>
            )}
          </div>

          {/* Columna Derecha: Información Técnica */}
          <div className="detail-info">
            <span className="badge">{line.macroCategory}</span>
            <h1>{line.title}</h1>
            
            <div className="divider"></div>
            
            <h2>Descripción e Ingeniería</h2>
            <p className="long-description">{line.longDesc}</p>

            <h2>Especificaciones Estándar de Fábrica</h2>
            <ul className="specs-list">
              {line.specs?.map((spec, index) => (
                <li key={index}>
                  <span className="bullet">✓</span> {spec}
                </li>
              ))}
            </ul>
            
            <div className="cta-box">
              <p>¿Deseas solicitar una cotización formal o plano técnico para esta línea?</p>
              <a 
                href={`https://wa.me/TU_NUMERO_DE_WHATSAPP?text=Hola,%20solicito%20cotización%20e%20información%20técnica%20sobre%20la%20línea%20de:%20${encodeURIComponent(line.title)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="whatsapp-btn"
              >
                Cotizar esta Línea por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL / LIGHTBOX: Solo se dibuja si hay una imagen seleccionada */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <span className="lightbox-close">&times;</span>
          <img src={selectedImage} alt="Ampliación de carrocería" className="lightbox-image" />
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;