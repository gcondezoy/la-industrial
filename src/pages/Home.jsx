import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ShieldCheck, Clock, Award } from 'lucide-react';
import { productLines } from '../data/projects.js';
import './Home.scss';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const productsRef = useRef(null);
  const brandsRef = useRef(null);
  
  // Agregamos resumeTimeout para manejar la pausa en celulares
  const dragProps = useRef({ isDown: false, startX: 0, scrollLeft: 0, isHovering: false, resumeTimeout: null });

  const heroSlides = [
    {
      title: "FABRICACIÓN DE CARROCERÍAS METÁLICAS",
      desc: "Conoce todos nuestros modelos y elige la que más se adecue a tu negocio.",
      img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80"
    },
    {
      title: "CARROCERÍAS PARA TODAS LAS INDUSTRIAS",
      desc: "¡Solicita tu cotización ya!",
      img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1920&q=80"
    }
  ];

  const marcas = [
    { name: 'HINO', img: '/marcas/carrocerias-para-camiones-hino.webp', alt: 'Carrocerías metálicas fabricadas para camiones Hino' },
    { name: 'HYUNDAI', img: '/marcas/carrocerias-metalicas-hyundai.webp', alt: 'Fabricación de carrocerías para camiones Hyundai' },
    { name: 'ISUZU', img: '/marcas/carrocerias-furgon-isuzu.webp', alt: 'Carrocerías tipo furgón y baranda para camiones Isuzu' },
    { name: 'IVECO', img: '/marcas/carrocerias-carga-pesada-iveco.webp', alt: 'Estructuras y carrocerías para camiones Iveco' },
    { name: 'JAC', img: '/marcas/carrocerias-comerciales-jac.webp', alt: 'Diseños de carrocerías metálicas para camiones JAC Motors' },
    { name: 'JMC', img: '/marcas/fabricacion-carrocerias-jmc.webp', alt: 'Carrocerías a medida para camiones de carga JMC' },
    { name: 'Mercedes-Benz', img: '/marcas/carrocerias-heavy-duty-mercedes-benz.webp', alt: 'Carrocerías de alta resistencia para camiones Mercedes-Benz' },
    { name: 'TOYOTA', img: '/marcas/carrocerias-metalicas-toyota.webp', alt: 'Fabricación de carrocerías para camiones y barandas Toyota' },
    { name: 'Volkswagen', img: '/marcas/carrocerias-camiones-volkswagen.webp', alt: 'Modelos de carrocerías para la línea de camiones Volkswagen' },
    { name: 'VOLVO', img: '/marcas/carrocerias-remolques-volvo.webp', alt: 'Estructuras metálicas y carrocerías para camiones Volvo' }
  ];
  
  const displayProducts = [...productLines, ...productLines, ...productLines]; 
  const displayMarcas = [...marcas, ...marcas, ...marcas];

  // 1. Autoplay del Hero
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [heroSlides.length]);

  // 2. Animaciones de Scroll 
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    }, { threshold: 0.15 });

    const hiddenElements = document.querySelectorAll('.scroll-animate, .slide-in-left, .slide-in-right');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => hiddenElements.forEach((el) => observer.unobserve(el));
  }, []);

  // 3. Motor de Autoplay lento para Sliders
  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (!dragProps.current.isDown && !dragProps.current.isHovering) {
        if (productsRef.current) {
          productsRef.current.scrollLeft += 1; 
          if (productsRef.current.scrollLeft >= productsRef.current.scrollWidth - productsRef.current.clientWidth - 1) {
            productsRef.current.scrollLeft = 0;
          }
        }
        if (brandsRef.current) {
          brandsRef.current.scrollLeft += 1;
          if (brandsRef.current.scrollLeft >= brandsRef.current.scrollWidth - brandsRef.current.clientWidth - 1) {
            brandsRef.current.scrollLeft = 0;
          }
        }
      }
    }, 30); 

    return () => clearInterval(autoScroll);
  }, []);

  // ==========================================
  // LÓGICA DE INTERACCIÓN (MOUSE Y TOUCH)
  // ==========================================
  const scrollSlider = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = ref.current.offsetWidth > 768 ? 350 : 250; 
      ref.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const handleMouseDown = (e, ref) => {
    dragProps.current.isDown = true;
    dragProps.current.startX = e.pageX - ref.current.offsetLeft;
    dragProps.current.scrollLeft = ref.current.scrollLeft;
    ref.current.classList.add('dragging');
  };

  const handleMouseLeaveOrUp = (ref) => {
    dragProps.current.isDown = false;
    ref.current.classList.remove('dragging');
  };

  const handleMouseMove = (e, ref) => {
    if (!dragProps.current.isDown) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - dragProps.current.startX) * 1.5; 
    ref.current.scrollLeft = dragProps.current.scrollLeft - walk;
  };

  // Novedad: Eventos para que el celular no se atasque al deslizar
  const handleTouchStart = () => {
    dragProps.current.isHovering = true; // Pausa el motor
    if (dragProps.current.resumeTimeout) clearTimeout(dragProps.current.resumeTimeout);
  };

  const handleTouchEnd = () => {
    // Da 1.5 segundos de gracia después de soltar el dedo para que termine de deslizar
    dragProps.current.resumeTimeout = setTimeout(() => {
      dragProps.current.isHovering = false;
    }, 1500); 
  };

  return (
    <div className="home-container">
      
      {/* 1. HERO SLIDER */}
      <section className="hero-slider">
        {heroSlides.map((slide, index) => (
          <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
            <img src={slide.img} alt={slide.title} className="slide-bg" />
            <div className="slide-overlay"></div>
            <div className="slide-content">
              <h1>{slide.title}</h1>
              <p>{slide.desc}</p>
              <Link to="/contacto" className="btn-primary">COTIZA AQUÍ →</Link>
            </div>
          </div>
        ))}
        <div className="slider-dots">
          {heroSlides.map((_, index) => (
            <button 
              key={index} 
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* 2. BARRA DE GARANTÍAS */}
      <section className="features-banner scroll-animate">
        <div className="feature-item">
          <ShieldCheck className="feature-icon" />
          <div className="feature-text">
            <h3>SEGURIDAD</h3>
            <p>Materiales A1, maquinaria de punta y personal capacitado que permiten fabricar carrocerías 100% seguras.</p>
          </div>
        </div>
        <div className="feature-item">
          <Clock className="feature-icon" />
          <div className="feature-text">
            <h3>PUNTUALIDAD</h3>
            <p>Amplia planta de fabricación dedicada que nos permite fabricar en tiempo récord.</p>
          </div>
        </div>
        <div className="feature-item">
          <Award className="feature-icon" />
          <div className="feature-text">
            <h3>GARANTÍA</h3>
            <p>24 meses de garantía en todos los productos y seguimiento post-venta.</p>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN CHASIS */}
      <section className="info-split">
        <div className="info-text slide-in-left">
          <h2>¿Compraste tu camión y buscas una carrocería?</h2>
          <p>Deja tu proyecto en nuestras manos y nos convertiremos en tus socios estratégicos brindando soluciones requeridas para tu negocio según tus necesidades de carga y transporte.</p>
        </div>
        <div className="info-img slide-in-right">
          <img src="/chasis-camion-azul-sin-carroceria.webp" alt="Chasis de camión" />
        </div>
      </section>

      {/* 4. SECCIÓN EXPERTOS */}
      <section className="info-split reverse">
        <div className="info-img slide-in-left">
          <img src="/furgon-heavy-duty-isuzu.webp" alt="Furgón terminado" />
        </div>
        <div className="info-text slide-in-right">
          <h2>Expertos en la fabricación de todo tipo de carrocerías</h2>
          <p>Desarrollamos soluciones logísticas a medida para el sector transporte. Fabricación eficiente, equipo especializado y procesos certificados que garantizan calidad en cada carrocería.</p>
        </div>
      </section>

      {/* 4.5 CONTADORES ESTADÍSTICOS */}
      <section className="stats-section scroll-animate">
        <div className="stat-item">
          <h2>100%</h2>
          <p>De calidad garantizada</p>
        </div>
        <div className="stat-item">
          <h2>+500</h2>
          <p>Clientes atendidos</p>
        </div>
        <div className="stat-item">
          <h2>+1000</h2>
          <p>Carrocerías entregadas</p>
        </div>
      </section>

      {/* 5. SLIDER DE PRODUCTOS */}
      <section className="products-slider-section scroll-animate">
        <div className="section-header-row">
          <h2>Nuestros Principales Productos</h2>
        </div>
        
        <div 
          className="slider-wrapper"
          onMouseEnter={() => dragProps.current.isHovering = true}
          onMouseLeave={() => dragProps.current.isHovering = false}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button className="slider-btn prev" onClick={() => scrollSlider(productsRef, 'left')}>
            <ChevronLeft size={24} />
          </button>
          
          <div 
            className="products-track interactive-track" 
            ref={productsRef}
            onMouseDown={(e) => handleMouseDown(e, productsRef)}
            onMouseLeave={() => handleMouseLeaveOrUp(productsRef)}
            onMouseUp={() => handleMouseLeaveOrUp(productsRef)}
            onMouseMove={(e) => handleMouseMove(e, productsRef)}
          >
            {displayProducts.map((product, index) => {
              const coverImg = product.images && product.images.length > 0 ? product.images[0] : '/placeholder-camion.webp';
              
              return (
                <div key={`${product.id}-${index}`} className="product-tall-card">
                  <img src={coverImg} alt={product.title} loading="lazy" />
                  <div className="card-overlay">
                    <h3>{product.id.charAt(0).toUpperCase() + product.id.slice(1).replace('-', ' ')}</h3>
                    <Link to={`/proyecto/${product.id}`} className="btn-outline" onDragStart={(e) => e.preventDefault()}>
                      VER DETALLES →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="slider-btn next" onClick={() => scrollSlider(productsRef, 'right')}>
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* 6. SLIDER DE MARCAS */}
      <section className="brands-slider-section scroll-animate">
        <h2>Trabajamos con todas las marcas de camiones</h2>
        <div 
          className="slider-wrapper brands-wrapper"
          onMouseEnter={() => dragProps.current.isHovering = true}
          onMouseLeave={() => dragProps.current.isHovering = false}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button className="slider-btn prev" onClick={() => scrollSlider(brandsRef, 'left')}>
            <ChevronLeft size={24} />
          </button>
          
          <div 
            className="brands-track interactive-track" 
            ref={brandsRef}
            onMouseDown={(e) => handleMouseDown(e, brandsRef)}
            onMouseLeave={() => handleMouseLeaveOrUp(brandsRef)}
            onMouseUp={() => handleMouseLeaveOrUp(brandsRef)}
            onMouseMove={(e) => handleMouseMove(e, brandsRef)}
          >
            {displayMarcas.map((marca, index) => (
              <div key={`${marca.name}-${index}`} className="brand-item">
                <img src={marca.img} alt={marca.alt} loading="lazy" />
              </div>
            ))}
          </div>

          <button className="slider-btn next" onClick={() => scrollSlider(brandsRef, 'right')}>
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* 7. FORMULARIO DE CONTACTO */}
      <section className="contact-split-section">
        <h2 className="text-center scroll-animate">SOLICITA TU COTIZACIÓN</h2>
        <div className="contact-container">
          <div className="contact-image slide-in-left">
            <img src="/baranda-comercial-blanca-canastilla.webp" alt="Cotización de carrocería" /> 
          </div>
          <div className="contact-form-wrapper slide-in-right">
            <form className="quote-form">
              <div className="form-row">
                <input type="text" placeholder="Nombre" required />
                <input type="email" placeholder="Correo electrónico" required />
              </div>
              <div className="form-row">
                <input type="tel" placeholder="Teléfono" required />
                <input type="text" placeholder="Razón social o RUC" required />
              </div>
              <textarea placeholder="Producto en consulta" rows="4" required></textarea>
              <button type="submit" className="btn-submit">Solicitar cotización</button>
            </form>
            <hr className="divider" />
            <a href="https://wa.me/51932528794" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              Cotiza vía WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;