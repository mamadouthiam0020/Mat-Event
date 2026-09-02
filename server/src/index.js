import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { connectDB } from "./config/db.js";
import { corsOptions } from "./config/cors.js";
import { uploadsDir } from "./config/upload.js";
import routes from "./routes/index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(cors(corsOptions));
app.use(express.json());

// Dossier des CV / fichiers téléversés
app.use("/uploads", express.static(uploadsDir));

// Les images IA/stock génériques sont servies depuis le client build en prod.
const clientDist = path.resolve(__dirname, "..", "..", "client", "dist");
app.use(
  express.static(clientDist, {
    index: false,
    setHeaders: (res, filePath) => {
      if (/\.(png|jpe?g|gif|webp|svg)$/i.test(filePath)) {
        res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
      }
    },
  })
);

app.get("/", (_req, res) => {
  res.json({
    name: "MAT'EVENT API",
    status: "ok",
    env: process.env.NODE_ENV,
  });
});

app.use("/api", routes);

// Health check pour Render
app.get("/api/health", (_req, res) => {
  res.json({ success: true, status: "ok", env: process.env.NODE_ENV });
});

// Fichiers statiques du client build + fallback SPA (React Router)
if (fs.existsSync(path.join(clientDist, "index.html"))) {
  const cleanPath = (p) => p.split("?")[0];
  app.get(/^\/(?!api|uploads).*/, (_req, res) => {
    res.sendFile(path.join(clientDist, "index.html"));
  });
}

app.use((req, res) => {
  res.status(404).json({ success: false, error: "Route introuvable" });
});

app.use((err, _req, res, _next) => {
  console.error("Erreur serveur :", err.message);
  res.status(500).json({ success: false, error: err.message });
});

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(
      `[${process.env.NODE_ENV}] Serveur MAT'EVENT démarré sur http://localhost:${PORT}`
    );
  });
});
