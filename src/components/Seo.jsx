import { useEffect } from 'react';

// Dominio oficial del sitio (para canonical y Open Graph)
export const SITE_URL = 'https://www.carroceriaslaindustrial.com.pe';

function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(url) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', url);
}

/**
 * Componente que actualiza el <title>, la meta description, la URL canónica
 * y las etiquetas Open Graph según la página en la que estemos.
 * No renderiza nada visual.
 */
const Seo = ({ title, description, path = '', image = '/logo.webp' }) => {
  useEffect(() => {
    const url = SITE_URL + path;
    if (title) {
      document.title = title;
      setMeta('property', 'og:title', title);
    }
    if (description) {
      setMeta('name', 'description', description);
      setMeta('property', 'og:description', description);
    }
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', SITE_URL + image);
    setCanonical(url);
  }, [title, description, path, image]);

  return null;
};

export default Seo;
