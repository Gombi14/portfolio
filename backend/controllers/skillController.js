import Tecnologia from "../models/skillModel.js";

// Obtener todas las tecnologías
export const getAllTecnologias = async (req, res) => {
  try {
    const tecnologias = await Tecnologia.find();
    res.json(tecnologias);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

// Obtener una tecnología por ID
export const getTecnologiaById = async (req, res) => {
  try {
    const tecnologia = await Tecnologia.findById(req.params.id);
    if (!tecnologia) {
      return res.status(404).json({ message: "Tecnología no encontrada" });
    }
    res.json(tecnologia);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear nueva tecnología
export const createTecnologia = async (req, res) => {
  try {
    const { nombre, categoria } = req.body;
    const foto = req.file
      ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
      : null;

    if (!foto) return res.status(400).json({ message: "Falta imagen (foto)" });

    const newTech = new Tecnologia({ nombre, foto, categoria });
    await newTech.save();
    res.status(201).json(newTech);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Actualizar tecnología
export const updateTecnologia = async (req, res) => {
  try {
    const { nombre, categoria } = req.body;
    const updatedData = { nombre, categoria };

    if (req.file) {
      updatedData.foto = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
    }

    const tecnologia = await Tecnologia.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    if (!tecnologia) return res.status(404).json({ message: "No encontrado" });

    res.json(tecnologia);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar tecnología
export const deleteTecnologia = async (req, res) => {
  try {
    const deleted = await Tecnologia.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Tecnología no encontrada" });
    }
    res.json({ message: "Tecnología eliminada con éxito" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
