import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const envFile =
  process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";

dotenv.config({ path: path.resolve(__dirname, "..", "..", envFile) });

export const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error(
        `MONGODB_URI non défini. Vérifie server/${envFile}`
      );
    }
    const conn = await mongoose.connect(uri);
    console.log(
      `[${process.env.NODE_ENV}] MongoDB connecté : ${conn.connection.host} / ${conn.connection.name}`
    );
  } catch (error) {
    console.error(`Erreur de connexion MongoDB (${process.env.NODE_ENV}) :`, error.message);
    process.exit(1);
  }
};
