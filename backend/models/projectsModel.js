import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: String,
  content: String,
  img: String // Guarda el nombre o la URL de la imagen
});

export default mongoose.model('Project', projectSchema, 'projects');
