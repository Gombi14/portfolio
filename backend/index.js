// ========================
// Módulos de Node.js y configuración
// ========================
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// ========================
// Archivo de rutas
// ========================
import routes from './routes/index.js'

// Obtener __filename y __dirname en módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cargar variables de entorno desde el archivo .env
dotenv.config({ path: path.join(__dirname, '.env') });

// ========================
// Módulos externos
// ========================
import express from 'express';
import cors from 'cors';

// ========================
// Módulos locales
// ========================
import connectDB from './db.js';

// ========================
// Conexión a la base de datos
// ========================
connectDB();

// ========================
// Inicialización de Express
// ========================
const app = express();
const PORT = process.env.PORT || 3001;

console.log('📦 process.env.PORT:', PORT);

// ========================
// Middlewares
// ========================
app.use(cors());
app.use(express.json());

// ========================
// Archivos estáticos (imagenes)
// ========================
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ========================
// Rutas de la API
// ========================
app.use('/api', routes);

// ========================
// Inicio del servidor
// ========================
app.listen(PORT, () => {
  console.log(`✅ Servidor backend en http://localhost:${PORT}`);
});
