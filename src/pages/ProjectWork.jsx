import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productLines } from '../data/projects.js';
import Seo from '../components/Seo';
import './ProjectDetail.scss';

// Página de un trabajo específico dentro de una línea (ej. un volquete modificado):
// muestra todas sus fotos y videos sin mezclarlos con la galería general de la línea.
const ProjectWork = () => {
  const { id, workId } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  const line = productLines.find((p) => p.id === id);
  const work = line?.projects?.find((w) => w.id === workId);

  if (!line || !work) {
    return (
      <div className="error-page">
        <h2>Proyecto no encontrado</h2>
        <Link to="/proyectos" className="back-btn">Regresar al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      <Seo
        title={`${work.title} | Carrocerías La Industrial S.A.C.`}
        description={`${work.desc} Proyecto realizado por La Industrial S.A.C. en Lima, Perú. Cotiza por WhatsApp.`}
        path={`/proyecto/${line.id}/${work.id}`}
        image={work.images[0]}
      />
      <div className="container">
        <Link to={`/proyecto/${line.id}`} className="back-link">
          ← Volver a {line.title}
        </Link>

        <div className="detail-layout">
          {/* Columna Izquierda: fotos y videos del proyecto */}
          <div className="detail-media">
            <h2>Fotos del proyecto</h2>
            <div className="products-photos-grid">
              {work.images.map((imgUrl, idx) => (
                <div
                  key={idx}
                  className="product-photo-item"
                  onClick={() => setSelectedImage(imgUrl)}
                >
                  <img src={imgUrl} alt={`${work.title} - foto ${idx + 1}`} loading="lazy" />
                </div>
              ))}
            </div>

            {work.videos?.length > 0 && (
              <>
                <h2 className="media-subtitle">Videos del proyecto</h2>
                <div className="videos-grid">
                  {work.videos.map((video, idx) => (
                    <video
                      key={idx}
                      src={video.src}
                      poster={video.poster}
                      controls
                      playsInline
                      preload="none"
                      className="project-video"
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Columna Derecha: información del proyecto */}
          <div className="detail-info">
            <span className="badge">{line.title}</span>
            <h1>{work.title}</h1>

            <div className="divider"></div>

            <h2>Descripción del trabajo</h2>
            <p className="long-description">{work.longDesc}</p>

            {work.specs?.length > 0 && (
              <>
                <h2>Detalles</h2>
                <ul className="specs-list">
                  {work.specs.map((spec, index) => (
                    <li key={index}>
                      <span className="bullet">✓</span> {spec}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div className="cta-box">
              <p>¿Necesitas un trabajo similar para tu unidad?</p>
              <a
                href={`https://wa.me/51932528794?text=${encodeURIComponent(`Hola, vi el proyecto "${work.title}" en su página web y me interesa un trabajo similar.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <span className="lightbox-close">&times;</span>
          <img src={selectedImage} alt={`Ampliación - ${work.title}`} className="lightbox-image" />
        </div>
      )}
    </div>
  );
};

export default ProjectWork;
