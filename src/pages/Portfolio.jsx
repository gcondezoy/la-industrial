import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Portfolio.scss';

const Portfolio = () => {
  // Inicializamos el filtro con 'Todo' para que coincida con tu nueva imagen
  const [filter, setFilter] = useState('Todo');

  // Las categorías exactas de tu referencia
  const categories = ['Todo', 'Acondicionamiento', 'Remolques', 'Semirremolques', 'Sobre Chasis'];

  // Proyectos mapeados a las nuevas categorías con las fotos industriales
  const projects = [
    { id: 1, title: 'Furgón Comercial Metálico', category: 'Sobre Chasis', img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Plataforma de Carga Pesada', category: 'Remolques', img: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Tolva Estructural Minera', category: 'Semirremolques', img: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'Carrocería de Barandas', category: 'Sobre Chasis', img: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80' },
    { id: 5, title: 'Plataforma Logística Extensible', category: 'Semirremolques', img: 'https://images.unsplash.com/photo-1616432043562-3671ea2e5242?auto=format&fit=crop&w=800&q=80' },
    { id: 6, title: 'Revestimiento y Aislamiento', category: 'Acondicionamiento', img: 'https://images.unsplash.com/photo-1590496794008-383c8070b257?auto=format&fit=crop&w=800&q=80' },
  ];

  const filteredProjects = filter === 'Todo' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="portfolio-page">
      
      {/* HEADER ACTUALIZADO: Foto de camión en carretera */}
      <header 
        className="portfolio-hero"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80')` 
        }}
      >
        <div className="portfolio-hero__overlay"></div>

        <div className="container relative-z">
          <span className="overline">Catálogo de Unidades</span>
          <motion.h1 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}>
            Proyectos <span className="highlight">Fabricados</span>
          </motion.h1>
          <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay: 0.2 }}>
            Nuestra ingeniería y resistencia plasmada en estructuras reales que operan en todas las rutas del país.
          </motion.p>
        </div>
      </header>

      {/* SECCIÓN DE GALERÍA INTACTA */}
      <section className="gallery-section">
        <div className="container">
          
          <div className="filter-tabs">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={filter === cat ? 'active' : ''}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="gallery-grid">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div 
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="gallery-item"
                >
                  <img src={project.img} alt={project.title} />
                  <div className="overlay">
                    <span className="tag">{project.category}</span>
                    <h3>{project.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Portfolio;