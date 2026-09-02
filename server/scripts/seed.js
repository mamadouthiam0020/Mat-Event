import mongoose from "mongoose";
import { fileURLToPath } from "url";
import path from "path";
import dotenv from "dotenv";
import Contact from "../src/models/Contact.js";
import Event from "../src/models/Event.js";
import Blog from "../src/models/Blog.js";
import GalleryImage from "../src/models/GalleryImage.js";
import JobOffer from "../src/models/JobOffer.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const envArg = process.argv
  .slice(2)
  .find((a) => a.startsWith("--env="));
const env =
  (envArg && envArg.split("=")[1]) ||
  process.env.NODE_ENV ||
  "development";

dotenv.config({ path: path.resolve(__dirname, "..", ".env." + env) });

const events = [
  {
    title: "Mariage de Awa & Mamadou",
    category: "mariage",
    description:
      "Une cérémonie intimiste et raffinée au bord de l'océan à Ngor.",
    location: "Dakar, Sénégal",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
    featured: true,
  },
  {
    title: "Sommet des Leaders de l'Ouest",
    category: "corporate",
    description:
      "Un forum d'affaires de grande ampleur pour 800 participants.",
    location: "Dakar, Sénégal",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
    featured: true,
  },
  {
    title: "Conférence Tech Africa 2026",
    category: "conference",
    description:
      "Plénières, ateliers et networking pour 500 innovateurs.",
    location: "Diamniadio, Sénégal",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80",
    featured: true,
  },
  {
    title: "Soirée Prestige by MAT'EVENT",
    category: "soiree",
    description:
      "Une nuit élégante marquée par la musique et la lumière.",
    location: "Dakar, Sénégal",
    image:
      "https://images.unsplash.com/photo-1545224144-b380b2a0f1e0?auto=format&fit=crop&w=900&q=80",
    featured: true,
  },
];

const gallery = [
  { title: "Mariage Awa & Mamadou", category: "mariage", url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=60", featured: true, sort: 1 },
  { title: "Sommet des Leaders", category: "corporate", url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=60", featured: true, sort: 2 },
  { title: "Conférence Tech Africa", category: "conference", url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=400&q=60", featured: true, sort: 3 },
  { title: "Soirée Prestige", category: "soiree", url: "https://images.unsplash.com/photo-1545224144-b380b2a0f1e0?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1545224144-b380b2a0f1e0?auto=format&fit=crop&w=400&q=60", featured: true, sort: 4 },
  { title: "Décoration florale", category: "decoration", url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=400&q=60", featured: false, sort: 5 },
  { title: "Réception élégante", category: "soiree", url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=60", featured: false, sort: 6 },
  { title: "Lancement de produit", category: "corporate", url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=400&q=60", featured: false, sort: 7 },
  { title: "Table d'invités", category: "decoration", url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=400&q=60", featured: false, sort: 8 },
  { title: "Cérémonie", category: "mariage", url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=400&q=60", featured: false, sort: 9 },
  { title: "Nos plus beaux instants", category: "soiree", url: "/event-49.jpeg", thumb: "/event-49.jpeg", featured: true, sort: 10 },
];

const blogSeed = [
  {
    slug: "tendances-mariage-2026",
    title: "Les tendances mariage 2026 à Dakar",
    excerpt:
      "Couleurs, lieux, cérémonies : découvrez ce qui marquera les mariages de l'année.",
    category: "tendances",
    cover:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    body:
      "## Couleurs et ambiances\n\nCette année, les mariages à Dakar misent sur des palettes chaudes : terracotta, or et champagne.\n\n## Lieux d'exception\n\nDes villas en bord de mer aux jardins intérieurs de la Médina, le choix du lieu fait toute la différence.\n\n## Le mot de MAT'EVENT\n\nChaque mariage est unique. Nous concevons une scénographie qui vous ressemble, du faire-part aux dernières décorations.",
    author: "Awa Diop",
    published: true,
    seoTitle: "Tendances mariage 2026 à Dakar | MAT'EVENT",
    seoDescription:
      "Découvrez les tendances mariage 2026 : couleurs, lieux et cérémonies qui marqueront l'année à Dakar.",
  },
  {
    slug: "organiser-un-evenement-corporatif-reussi",
    title: "Organiser un événement corporate réussi : nos 5 secrets",
    excerpt:
      "Méthodologie, prestataires, timing : tout ce qu'il faut savoir pour un congrès ou un lancement réussi.",
    category: "conseils",
    cover:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    body:
      "## 1. Définir un objectif clair\n\nUn événement corporate réussi commence par un objectif précis : notoriété, lancement, mobilisation.\n\n## 2. Choisir les bons prestataires\n\nTechniciens, décorateurs, traiteurs : nous sourçons les meilleurs pour vous.\n\n## 3. Maîtriser le planning\n\nUn rétroplanning précis garantit un jour J sans accroc.\n\n## 4. Soigner l'audiovisuel\n\nLuminaire et sonorisation font 80% de la réussite d'une plénière.\n\n## 5. Mesurer l'impact\n\nSuivez les retombées après l'événement pour capitaliser.",
    author: "Cheikh Ndiaye",
    published: true,
    seoTitle: "Organiser un événement corporate réussi | MAT'EVENT",
    seoDescription:
      "Nos 5 secrets pour organiser un événement corporate réussi à Dakar : objectif, prestataires, planning et audiovisuel.",
  },
  {
    slug: "coulisses-soiree-prestige",
    title: "Coulisses de la Soirée Prestige",
    excerpt:
      "Retour en images sur la préparation de notre plus belle soirée de l'année.",
    category: "coulisses",
    cover:
      "https://images.unsplash.com/photo-1545224144-b380b2a0f1e0?auto=format&fit=crop&w=1200&q=80",
    body:
      "## De l'idée au décor\n\nDes semaines de préparation pour transformer un espace neutre en une scénographie inoubliable.\n\n## Les équipes en action\n\nNos équipes de coordination, scénographie et production travaillent de concert.\n\n## Le résultat\n\nUne nuit élégante, marquée par la musique, la lumière et les émotions.",
    author: "Equipe MAT'EVENT",
    published: true,
    seoTitle: "Coulisses de la Soirée Prestige | MAT'EVENT",
    seoDescription:
      "Retour en images sur la préparation de notre plus belle soirée événementielle à Dakar.",
  },
];

const jobs = [
  {
    key: "chef-projet",
    title: "Chef de projet événementiel",
    type: "CDI • Dakar",
    description:
      "Pilotez des événements de A à Z, du brief client à la livraison.",
  },
  {
    key: "charge-comm",
    title: "Chargé(e) de communication",
    type: "CDI • Dakar",
    description:
      "Développez notre image de marque et nos contenus sur les réseaux.",
  },
  {
    key: "decoration",
    title: "Scénographe / Décorateur",
    type: "Freelance • Dakar",
    description:
      "Imaginez des ambiances uniques et raffinées pour nos clients.",
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connecté à", mongoose.connection.name);

    await Promise.all([
      Event.deleteMany(),
      Contact.deleteMany(),
      Blog.deleteMany(),
      GalleryImage.deleteMany(),
      JobOffer.deleteMany(),
    ]);

    await Event.insertMany(events);
    await GalleryImage.insertMany(gallery);
    await Blog.insertMany(blogSeed);
    await JobOffer.insertMany(jobs);

    console.log(
      `Seed terminé (${env}) ✔  Événements + Galerie + Blog + Offres insérés`
    );
    process.exit(0);
  } catch (error) {
    console.error("Erreur seed :", error.message);
    process.exit(1);
  }
}

seed();
