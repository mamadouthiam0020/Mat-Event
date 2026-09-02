const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:4173",
  "https://matevent.dakar", // production locale
  "https://www.matevent.dakar",
];

// URL du front déployé (définie sur Render via la variable CLIENT_URL)
if (process.env.CLIENT_URL) {
  allowedOrigins.push(process.env.CLIENT_URL);
  // Version sans slash final éventuel
  allowedOrigins.push(process.env.CLIENT_URL.replace(/\/+$/, ""));
}

export const corsOptions = {
  origin: (origin, callback) => {
    // Autorise les appels sans origine (Postman, curl, etc.)
    if (!origin) return callback(null, true);

    // Autorise n'importe quel sous-domaine onrender.com (préviews, prod)
    const isOnRender =
      origin.endsWith(".onrender.com") || origin === "https://onrender.com";

    if (allowedOrigins.includes(origin) || isOnRender) {
      callback(null, true);
    } else {
      callback(new Error("Origine non autorisée par CORS"));
    }
  },
  credentials: true,
};
