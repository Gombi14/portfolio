import express from 'express';
import {
  getEducations,
  getEducationById,
  createEducation,
  deleteEducation,
  updateEducation
} from '../controllers/educationController.js';

const router = express.Router();

router.get('/', getEducations);
router.get('/:id', getEducationById);
router.post('/', createEducation);
router.delete('/:id', deleteEducation);
router.put('/:id', updateEducation);

export default router;
