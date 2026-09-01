const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:4173",
  "https://matevent.dakar", // production
  "https://www.matevent.dakar",
];

export const corsOptions = {
  origin: (origin, callback) => {
    // Autorise les appels sans origine (Postman, curl, etc.)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Origine non autorisée par CORS"));
    }
  },
  credentials: true,
};
