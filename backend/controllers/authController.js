import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";

const JWT_SECRET = process.env.JWT_SECRET || "supersecreto";

export const login = async (req, res) => {
  const { user, password } = req.body;

  try {
    const foundUser = await User.findOne({ user });
    if (!foundUser) return res.status(400).json({ message: "Usuario no encontrado" });

    const match = await bcrypt.compare(password, foundUser.password);
    if (!match) return res.status(401).json({ message: "Contraseña incorrecta" });

    const token = jwt.sign({ userId: foundUser._id }, JWT_SECRET, { expiresIn: "2h" });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Error en el servidor" });
  }
};
