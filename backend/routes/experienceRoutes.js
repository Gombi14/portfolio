import express from 'express';
import {
  getExperiences,
  getExperienceById,
  createExperience,
  deleteExperience,
  updateExperience
} from '../controllers/experienceController.js';

const router = express.Router();

router.get('/', getExperiences);
router.get('/:id', getExperienceById);
router.post('/', createExperience);
router.delete('/:id', deleteExperience);
router.put('/:id', updateExperience);

export default router;

