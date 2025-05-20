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
import { protect } from "../middlewares/authMiddleware.js";

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
router.get('/:id', protect, getProjectById);
router.put('/:id', protect, upload.single('img'), updateProject);
router.delete('/:id', protect, deleteProject);

export default router;
