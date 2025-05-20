import express from "express";
import educationRoutes from './educationRoutes.js';
import experienceRoutes from './experienceRoutes.js'
import messgesRoutes from './messagesRoutes.js'
import projectsRoutes from './projectsRoutes.js';
import skillRoutes from './skillRoutes.js'

const router = express.Router();

router.use('/education', educationRoutes);
router.use('/experience', experienceRoutes);
router.use('/messages', messgesRoutes);
router.use('/projects', projectsRoutes);
router.use('/skill', skillRoutes);

export default router;