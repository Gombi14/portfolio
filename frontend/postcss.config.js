import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import tailwindcssPlugin from '@tailwindcss/postcss'; // Importa el plugin de PostCSS

export default {
  plugins: [
    tailwindcssPlugin({}), // Usa el plugin de PostCSS
    autoprefixer({})
  ],
};