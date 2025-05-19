import Project from '../models/projectsModel.js';

// Crear nuevo proyecto
export const createProject = async (req, res) => {
  try {
    const { title, content } = req.body;
    const img = req.file ? req.file.filename : null;

    const newProject = new Project({ title, content, img });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener todos los proyectos
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un proyecto por ID
export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'No encontrado' });
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un proyecto
export const updateProject = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedData = { title, content };
    if (req.file) {
      updatedData.img = req.file.filename;
    }

    const project = await Project.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    if (!project) return res.status(404).json({ message: 'No encontrado' });
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un proyecto
export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: 'No encontrado' });
    res.json({ message: 'Proyecto eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
