import express from 'express';
import multer from 'multer';
import path from 'path';
import {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject
} from '../controllers/projectsController.js';

const router = express.Router();

// Configuración de multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Rutas
router.post('/', upload.single('img'), createProject);
router.get('/', getProjects);
router.get('/:id', getProjectById);
router.put('/:id', upload.single('img'), updateProject);
router.delete('/:id', deleteProject);

export default router;
