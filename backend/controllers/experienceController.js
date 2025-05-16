import Experience from '../models/experienceModel.js';

export const getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener datos de experience' });
  }
};

export const getExperienceById = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience) return res.status(404).json({ error: 'No encontrado' });
    res.json(experience);
  } catch (err) {
    res.status(500).json({ error: 'Error al buscar por ID' });
  }
};

export const createExperience = async (req, res) => {
  try {
    const { empresa, description } = req.body;
    const newExperience = new Experience({ empresa, description });
    await newExperience.save();
    res.status(201).json(newExperience);
  } catch (err) {
    console.log(err)
    res.status(400).json({ error: 'Error al crear experiencia' });
  }
};

export const deleteExperience = async (req, res) => {
  try {
    const result = await Experience.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ error: 'No encontrado' });
    res.json({ message: 'Eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar' });
  }
};

export const updateExperience = async (req, res) => {
  try {
    const { empresa, description } = req.body;
    const experience = await Experience.findById(req.params.id);
    console.log(experience);
    const updatedExperience = await Experience.findByIdAndUpdate(
      req.params.id,
      { empresa, description },
      { new: true, runValidators: true }
    );

    if (!updatedExperience) {
      return res.status(404).json({ error: 'Experiencia no encontrada' });
    }

    res.json(updatedExperience);
  } catch (err) {
    res.status(400).json({ error: 'Error al actualizar experiencia' });
  }
};