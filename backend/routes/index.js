import express from "express";
import educationRoutes from './educationRoutes.js';
import experienceRoutes from './experienceRoutes.js'
import messgesRoutes from './messagesRoutes.js'


const router = express.Router();

router.use('/education', educationRoutes);
router.use('/experience', experienceRoutes);
router.use('/messages', messgesRoutes);

export default router;