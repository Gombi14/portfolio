import Education from '../models/educationModel.js';

export const getEducations = async (req, res) => {
  try {
    const educations = await Education.find();
    res.json(educations);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener datos de educación' });
  }
};

export const getEducationById = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    if (!education) return res.status(404).json({ error: 'No encontrado' });
    res.json(education);
  } catch (err) {
    res.status(500).json({ error: 'Error al buscar por ID' });
  }
};

export const createEducation = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newEducation = new Education({ title, content });
    await newEducation.save();
    res.status(201).json(newEducation);
  } catch (err) {
    console.log(err)
    res.status(400).json({ error: 'Error al crear educación' });
  }
};

export const deleteEducation = async (req, res) => {
  try {
    const result = await Education.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ error: 'No encontrado' });
    res.json({ message: 'Eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar' });
  }
};

export const updateEducation = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedEducation = await Education.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true, runValidators: true }
    );

    if (!updatedEducation) {
      return res.status(404).json({ error: 'Educación no encontrada' });
    }

    res.json(updatedEducation);
  } catch (err) {
    res.status(400).json({ error: 'Error al actualizar educación' });
  }
};