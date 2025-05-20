import mongoose from "mongoose";

const tecnologiaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  foto: { type: String, required: true },
  categoria: {
    type: String,
    required: true,
    enum: ["frontend", "backend", "aprendiendo", "herramientas"],
  },
});

export default mongoose.model("Tecnologia", tecnologiaSchema, 'skills');
