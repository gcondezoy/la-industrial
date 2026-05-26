import React from 'react';
import { Link } from 'react-router-dom';
// Agrega FaTiktok a tu lista de importaciones
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          
          {/* Columna 1: Marca */}
          <div className="footer__brand">
            <div className="footer-logo">
              {/* Asegúrate de que logo.png esté en tu carpeta public/ */}
              <img src="/logo.png" alt="La Industrial S.A.C. Logo" />
            </div>
            <p>Especialistas en la fabricación de carrocerías en metal y madera, estructuras robustas y soluciones integrales para el transporte pesado a nivel nacional.</p>
          </div>

          {/* Columna 2: Enlaces */}
          <div className="footer__links">
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/nosotros">Nosotros</Link></li>
              <li><Link to="/servicios">Servicios</Link></li>
              <li><Link to="/proyectos">Catálogo</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="footer__contact">
            <h3>Contáctanos</h3>
            <p>Distrito de Puente Piedra, Lima - Perú</p>
            <p>contactenos@carrocerialaindustrial.com</p>
            <p>Ventas@carrocerialaindustrial.com</p>
            <p className="phone">01 370 6259</p>
            <p className="phone">+51 952 897 113</p>
            <p className="phone">+51 942 138 008</p>
          </div>

          {/* Columna 4: Redes Sociales */}
          <div className="footer__social">
            <h3>Síguenos</h3>
            <div className="social-links">
              <a href="https://www.tiktok.com/@la.industrial.sac" target="_blank" rel="noopener noreferrer" className="social-icon tiktok">
                <FaTiktok />
              </a>
              <a href="https://www.facebook.com/LaIndustrialEIRL" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/laindustrialeirl/" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p>&copy; {currentYear} LA INDUSTRIAL S.A.C. | Fabricación de Carrocerías. Todos los derechos reservados.</p>
          <p className="dev">Desarrollado por Guillermo Condezo - Programador y Analista de Datos</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;