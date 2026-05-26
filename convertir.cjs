const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

// Carpeta donde tienes tus imágenes actualmente (ajusta si están en otra ruta)
const inputFolder = './public'; 
// Carpeta donde se guardarán las nuevas imágenes
const outputFolder = './public/webp'; 

// Crea la carpeta de salida si no existe
if (!fs.existsSync(outputFolder)){
    fs.mkdirSync(outputFolder);
}

// Lee los archivos y los procesa
fs.readdirSync(inputFolder).forEach(file => {
  // Filtra solo imágenes (puedes agregar .webp si tienes alguna)
  if (file.match(/\.(jpg|jpeg|png)$/i)) {
    const name = path.parse(file).name;
    
    sharp(`${inputFolder}/${file}`)
      // Redimensiona inteligentemente: máximo 1200px de ancho para no tener tamaños absurdos
      .resize({ width: 1200, withoutEnlargement: true }) 
      // Convierte a WebP con una compresión excelente manteniendo nitidez
      .webp({ quality: 80 }) 
      .toFile(`${outputFolder}/${name}.webp`)
      .then(() => console.log(`✅ Convertido: ${name}.webp`))
      .catch(err => console.error(`❌ Error con ${file}:`, err));
  }
});

console.log('Iniciando conversión de imágenes...');