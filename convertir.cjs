const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// RUTAS
const carpetaOrigen = path.join(__dirname, 'public/marcas-origen'); 
const carpetaDestino = path.join(__dirname, 'public/marcas');

// Crear la carpeta de destino si no existe
if (!fs.existsSync(carpetaDestino)) {
  fs.mkdirSync(carpetaDestino, { recursive: true });
}

// Mapeo SEO basado en palabras clave y el nombre base de la marca
const reglasSEO = [
  { patron: /hino/i, nuevoNombre: 'carrocerias-para-camiones-hino.webp' },
  { patron: /hyundai/i, nuevoNombre: 'carrocerias-metalicas-hyundai.webp' },
  { patron: /isuzu/i, nuevoNombre: 'carrocerias-furgon-isuzu.webp' },
  { patron: /iveco/i, nuevoNombre: 'carrocerias-carga-pesada-iveco.webp' },
  { patron: /jac/i, nuevoNombre: 'carrocerias-comerciales-jac.webp' },
  { patron: /jmc/i, nuevoNombre: 'fabricacion-carrocerias-jmc.webp' },
  { patron: /mercedes/i, nuevoNombre: 'carrocerias-heavy-duty-mercedes-benz.webp' },
  { patron: /toyota/i, nuevoNombre: 'carrocerias-metalicas-toyota.webp' },
  { patron: /volk|volsk/i, nuevoNombre: 'carrocerias-camiones-volkswagen.webp' }, // Captura "volskwagen" o "volkswagen"
  { patron: /volvo/i, nuevoNombre: 'carrocerias-remolques-volvo.webp' }
];

async function optimizarYConvertir() {
  console.log('🚀 Iniciando conversión inteligente y optimización SEO...');
  
  if (!fs.existsSync(carpetaOrigen)) {
    console.error(`❌ Error: Crea la carpeta "${carpetaOrigen}" y mete los logos originales ahí.`);
    return;
  }

  const archivos = fs.readdirSync(carpetaOrigen);

  for (const archivo of archivos) {
    const rutaArchivoOrigen = path.join(carpetaOrigen, archivo);
    
    // Saltarse carpetas por si acaso
    if (fs.lstatSync(rutaArchivoOrigen).isDirectory()) continue;

    // Buscar si el archivo coincide con alguna de nuestras marcas reguladas
    const reglaEncontrada = reglasSEO.find(regla => regla.patron.test(archivo));

    if (reglaEncontrada) {
      const nuevoNombre = reglaEncontrada.nuevoNombre;
      const rutaArchivoDestino = path.join(carpetaDestino, nuevoNombre);

      try {
        await sharp(rutaArchivoOrigen)
          .ensureAlpha() // Mantiene transparencias
          .trim()        // Recorta bordes transparentes invisibles automáticos
          .webp({ quality: 85 }) // Conversión forzada a WebP premium
          .toFile(rutaArchivoDestino);

        console.log(`✅ ¡Convertido e indexado con éxito!: ${archivo} ➡️ ${nuevoNombre}`);
      } catch (error) {
        console.error(`❌ Error al procesar el archivo ${archivo}:`, error.message);
      }
    } else {
      console.log(`⚠️ Archivo omitido (no se reconoció la marca en el nombre): ${archivo}`);
    }
  }
  console.log('\n🎉 ¡Proceso terminado con éxito! Todos los formatos (.jfif, .png, .jpg) se unificaron en public/marcas/');
}

optimizarYConvertir();