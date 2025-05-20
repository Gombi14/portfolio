import express from "express";
import multer from "multer";
import path from "path";
import {
  getAllTecnologias,
  getTecnologiaById,
  createTecnologia,
  updateTecnologia,
  deleteTecnologia,
} from "../controllers/skillController.js";

const router = express.Router();

// Configuración multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// Rutas con y sin imagen
router.get("/", getAllTecnologias);
router.get("/:id", getTecnologiaById);
router.post("/", upload.single("foto"), createTecnologia);
router.put("/:id", upload.single("foto"), updateTecnologia);
router.delete("/:id", deleteTecnologia);

export default router;
