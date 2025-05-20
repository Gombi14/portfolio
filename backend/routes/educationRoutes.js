import express from 'express';
import {
  getEducations,
  getEducationById,
  createEducation,
  deleteEducation,
  updateEducation
} from '../controllers/educationController.js';
import { protect } from "../middlewares/authMiddleware.js";


const router = express.Router();

router.get('/', getEducations);
router.get('/:id', getEducationById);
router.post('/', protect, createEducation);
router.delete('/:id', protect, deleteEducation);
router.put('/:id', protect, updateEducation);

export default router;
