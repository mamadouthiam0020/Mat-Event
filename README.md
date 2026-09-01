# MAT'EVENT — Agence événementielle haut de gamme à Dakar

Site complet **MERN** (MongoDB + Express + React/Vite + Node) pour MAT'EVENT, une agence événementielle haut de gamme à Dakar.

Fonctionnalités :

- **Design premium & animations** — fond noir, couleur de base **mauve**, accents or/champagne, révélations au scroll (IntersectionObserver).
- **Galerie photo avancée** — filtres par catégorie + lightbox avec navigation clavier.
- **Blog & actualités** — liste filtrable + page article (markdown léger).
- **Espace recrutement** — offres d'emploi + dépôt de CV (upload serveur via multer).
- **Site multilingue FR/EN** — react-i18next avec sélecteur de langue.
- **SEO & performances** — meta dynamiques (Open Graph, Twitter), données structurées schema.org, images IA/stock haute qualité avec fallback, lazy-loading, cache statique.
- **Sans proxy** : le frontend appelle directement l'API (via `VITE_API_URL`).
- **Deux bases de données** séparées (dev / prod) via variables d'environnement.

## Structure

```
server/   (API Express + MongoDB)
  .env.development     → Cluster Atlas DÉV
  .env.production      → Cluster Atlas PROD
  src/
    config/db.js       → connecte Mongo selon NODE_ENV
    config/cors.js     → origines autorisées
    config/upload.js   → multer (dépôt de CV)
    models/            → Contact, Event, Testimonial, Blog,
                         GalleryImage, JobOffer, JobApplication
    routes/            → API REST complète
    index.js           → serveur Express (+ statique prod + uploads)
  scripts/seed.js      → données de démo (événements, galerie, blog, offres)
  uploads/             → CV déposés (créé automatiquement)
client/   (React + Vite + React Router + i18next)
  .env.development     → VITE_API_URL http://localhost:5000/api
  .env.production      → VITE_API_URL https://api.matevent.dakar/api
  src/
    pages/             → Home, Galerie, Blog, BlogPost, Carriere
    components/        → sections + Navbar/Footer/LanguageSwitcher
    i18n/locales/      → fr.js, en.js
    hooks/             → useReveal (animations), useSEO (meta dynamiques)
    lib/images.js      → images IA/stock (Unsplash) + fallback local
```

## Prérequis

- Node.js ≥ 18
- Un compte **MongoDB Atlas** avec **2 clusters/serveurs séparés** (1 dev + 1 prod)

## Configuration des bases de données

1. Crée un cluster (ou un serveur) Atlas `dev` et un autre `prod`.
2. Dans `server/.env.development`, remplace `<user>`, `<password>` et l'hôte par ton cluster **dev**.
3. Dans `server/.env.production`, fais de même avec ton cluster **prod**.

> Les deux DB sont volontairement séparées : aucune donnée de test ne se mélange avec la production.

## Installation

```bash
npm install
```

## Lancer en développement

En mode dev, on se connecte à la DB `dev` (`server/.env.development`).

```bash
# terminal 1 : API (NODE_ENV=development)
npm run dev:server

# terminal 2 : frontend Vite (port 5173)
npm run dev:client
```

Site : http://localhost:5173 — API : http://localhost:5000

## Peupler la base (données de démo)

```bash
npm run seed --workspace server                # DB dev
node server/scripts/seed.js --env=production   # DB prod
```

## Lancer en production

```bash
npm run build          # construit le frontend dans client/dist
npm run start          # API en NODE_ENV=production (sert aussi client/dist)
```

Le serveur Express sert automatiquement `client/dist` et gère le fallback SPA (React Router), donc un seul process suffit en production.

## API

| Méthode | Route                    | Description                          |
|---------|--------------------------|--------------------------------------|
| GET     | `/api/events`            | Réalisations                         |
| POST    | `/api/events`            | Créer un événement                   |
| GET     | `/api/testimonials`      | Témoignages                          |
| POST    | `/api/testimonials`      | Créer un témoignage                  |
| POST    | `/api/contacts`          | Envoyer une demande de devis         |
| GET     | `/api/contacts`          | Lister les demandes (admin)          |
| GET     | `/api/gallery`           | Images de la galerie (filtre `?category=`) |
| POST    | `/api/gallery`           | Ajouter une image                    |
| GET     | `/api/blog`              | Articles (filtre `?category=`)       |
| GET     | `/api/blog/:slug`        | Détail d'un article                  |
| POST    | `/api/blog`              | Créer un article                     |
| GET     | `/api/jobs`              | Offres d'emploi                      |
| POST    | `/api/jobs`              | Créer une offre                      |
| GET     | `/api/applications`      | Candidatures (admin)                 |
| POST    | `/api/applications`      | Déposer une candidature (+ CV multipart `field=cv`) |

Les CV déposés sont stockés dans `server/uploads/` et servis sous `/uploads/...`.

## Pages

| Route            | Description                       |
|------------------|-----------------------------------|
| `/`              | Accueil (toutes les sections)     |
| `/galerie`       | Galerie photo + lightbox          |
| `/blog`          | Blog filtrable                    |
| `/blog/:slug`    | Article complet                   |
| `/carriere`      | Offres + dépôt de CV              |

## Images

`client/src/lib/images.js` centralise les images d'Intelligence Artificielle/stock (Unsplash) avec un **fallback SVG local** en cas de panne réseau. Remplace les URLs par tes propres images générées par IA quand tu le souhaites.

## Thème / couleurs

- **Base :** mauve (`#b491c9`), mauve clair (`#d6c2e3`), mauve foncé (`#7a5b91`)
- **Accents :** or/champagne (`#d4b06a`, `#f0e6d6`)
- **Fond :** noir profond (`#0c0a10`)
