import React from 'react';
import './Services.scss';

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        // En tu archivo Services.jsx, cambia la imagen a esta:
          <img 
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=80" 
            alt="Soldadura y Fabricación de Carrocerías" 
            className="services-hero__bg"
          />
        <div className="services-hero__overlay"></div>

        <div className="container">
          <span className="overline">Nuestras Especialidades</span>
          <h1>Soluciones estructurales en <br/><span className="highlight">metal y madera</span></h1>
          <p>
            Diseñamos y fabricamos carrocerías altamente resistentes para el transporte pesado y especializado, cumpliendo con los requerimientos técnicos exactos de cada chasis.
          </p>
        </div>
      </section>

      {/* Grid de Servicios con Imágenes */}
      <section className="services-catalog">
        <div className="container">
          
          {/* Categoría 1: Fabricación de Carrocerías */}
          <div className="category-block">
            <h2 className="category-title">Fabricación a Medida</h2>
            <div className="catalog-grid">
              
              <div className="catalog-card">
                <div className="card-img-wrap">
                  <img src="/carrocerias-metálicas.jpeg" alt="Car rocerías Metálicas Robustas" />
                </div>
                <div className="card-content">
                  <h3>Carrocerías Metálicas</h3>
                  <p>Estructuras robustas soldadas en acero de alta resistencia, ideales para barandas fijas, plataformas y furgones de carga pesada.</p>
                </div>
              </div>

              <div className="catalog-card">
                <div className="card-img-wrap">
                  <img src="/baranda-madera-panagra-peru.jpeg" alt="Carrocerías de Madera Seleccionada" />
                </div>
                <div className="card-content">
                  <h3>Carrocerías en Madera</h3>
                  <p>Uso de madera seleccionada de alta densidad y durabilidad, reforzada con bastidores metálicos para soportar impactos severos.</p>
                </div>
              </div>

              <div className="catalog-card">
                <div className="card-img-wrap">
                  <img src="/diseño-carga-industrial.jpeg" alt="Diseño Estructural Personalizado" />
                </div>
                <div className="card-content">
                  <h3>Diseño y Cálculo a Medida</h3>
                  <p>Planificación técnica milimétrica adaptada a las dimensiones de tu chasis, optimizando volumen y capacidad de carga útil.</p>
                </div>
              </div>

              <div className="catalog-card">
                <div className="card-img-wrap">
                  <img src="/Diseño-calculo-medida.jpeg" alt="Soluciones para Carga Pesada" />
                </div>
                <div className="card-content">
                  <h3>Unidades Especializadas</h3>
                  <p>Desarrollo de configuraciones a medida para transportistas y empresas logísticas que manejan cargas de alta exigencia estructural.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Categoría 2: Acabados y Protección de Planta */}
          <div className="category-block">
            <h2 className="category-title">Servicios de Planta y Acabados</h2>
            <div className="catalog-grid">
              
              <div className="catalog-card">
                <div className="card-img-wrap">
                  <img src="/chasis-camion-azul-sin-carroceria.jpeg" alt="Servicio de Arenado e Imprimación" />
                </div>
                <div className="card-content">
                  <h3>Arenado Profesional (Sandblasting)</h3>
                  <p>Limpieza y preparación profunda de superficies metálicas por granallado para eliminar impurezas, óxido y pinturas previas.</p>
                </div>
              </div>

              <div className="catalog-card">
                <div className="card-img-wrap">
                  <img src="/baranda-madera-aerografia-personalizada.jpeg" alt="Pintura Epóxica Industrial" />
                </div>
                <div className="card-content">
                  <h3>Recubrimiento Epóxico y Acabados</h3>
                  <p>Aplicación técnica de pinturas epóxicas y de poliuretano industrial para dotar a la estructura de la máxima protección anticorrosiva.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Categoría 3: Soporte y Mantenimiento */}
          <div className="category-block">
            <h2 className="category-title">Soporte y Reparaciones</h2>
            <div className="catalog-grid">
              
              <div className="catalog-card">
                <div className="card-img-wrap">
                  <img src="/plataforma-carga-pesada-metalica.jpeg" alt="Mantenimiento Estructural Correctivo" />
                </div>
                <div className="card-content">
                  <h3>Reparación de Carrocerías</h3>
                  <p>Ingeniería de mantenimiento correctivo para unidades dañadas o con desgaste severo, recuperando su resistencia original.</p>
                </div>
              </div>

              <div className="catalog-card">
                <div className="card-img-wrap">
                  <img src="/tolva-estructural-volteo-azul.jpeg" alt="Reforzamiento de Componentes Críticos" />
                </div>
                <div className="card-content">
                  <h3>Reforzamiento Estructural</h3>
                  <p>Modificación y optimización de uniones mecánicas y cordones de soldadura en zonas críticas propensas a fatiga por sobrecarga.</p>
                </div>
              </div>

              <div className="catalog-card">
                <div className="card-img-wrap">
                  <img src="/baranda-metalica-abierta-utilitario.jpeg" alt="Asesoría Técnica de Flotas" />
                </div>
                <div className="card-content">
                  <h3>Evaluación y Diagnóstico Técnico</h3>
                  <p>Inspección de las condiciones estructurales de tus unidades de transporte pesado para asegurar operaciones seguras en ruta.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Services;