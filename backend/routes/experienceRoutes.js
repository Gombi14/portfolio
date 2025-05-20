import express from 'express';
import {
  getExperiences,
  getExperienceById,
  createExperience,
  deleteExperience,
  updateExperience
} from '../controllers/experienceController.js';
import { protect } from "../middlewares/authMiddleware.js";


const router = express.Router();

router.get('/', getExperiences);
router.get('/:id', getExperienceById);
router.post('/', protect, createExperience);
router.delete('/:id', protect, deleteExperience);
router.put('/:id', protect, updateExperience);

export default router;

