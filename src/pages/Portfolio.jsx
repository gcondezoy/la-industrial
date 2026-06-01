import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { productLines } from '../data/projects.js';
import './Portfolio.scss';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  // Las NUEVAS Macro-Categorías oficiales (Alineadas con projects.js)
  const macroCategories = [
    'Todos', 
    'Línea Furgones', 
    'Línea Abiertas y Barandas', 
    'Línea Pesada', 
    'Especiales y Accesorios'
  ];
  
  // Filtrado lógico
  const filteredLines = activeCategory === 'Todos' 
    ? productLines 
    : productLines.filter(line => line.macroCategory === activeCategory);

  return (
    <div className="portfolio-section">
      <div className="container">
        <h2>Líneas de Fabricación</h2>
        
        {/* Botones de Filtro Macro */}
        <div className="categories-filter">
          {macroCategories.map((cat) => (
            <button 
              key={cat}
              className={activeCategory === cat ? 'active' : ''}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Líneas de Producto con KEY para forzar la animación al filtrar */}
        <div className="projects-grid" key={activeCategory}>
          {filteredLines.map((line) => {
            // Usamos la primera imagen de la galería como portada, si no hay ponemos un placeholder
            const coverImage = line.images.length > 0 ? line.images[0] : '/placeholder-camion.webp';
            
            return (
              <Link 
                to={`/proyecto/${line.id}`} 
                key={line.id} 
                className="project-card"
              >
                <div className="card-image">
                  <img src={coverImage} alt={line.title} loading="lazy" />
                </div>
                
                <div className="card-info">
                  <span>{line.macroCategory}</span>
                  <h3>{line.title}</h3>
                  <p>{line.desc}</p>
                  <span className="view-more">Ver Modelos e Inf. Técnica →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;