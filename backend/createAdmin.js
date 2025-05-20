import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import User from "./models/userModel.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, ".env") });

const MONGO_URI = process.env.MONGO_URI;

const createAdmin = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    const existing = await User.findOne({ user: "admin" });
    if (existing) {
      console.log("🟡 Admin ya existe");
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash("admin", 10);
    const admin = new User({ user: "admin", password: hashedPassword });
    await admin.save();
    console.log("✅ Admin creado correctamente");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error al crear admin:", err.message);
    process.exit(1);
  }
};

createAdmin();
