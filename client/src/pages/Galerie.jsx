import React, { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { api } from "../api.js";
import { onImgError } from "../lib/images.js";
import { useSEO } from "../hooks/useSEO.js";
import { useReveal } from "../hooks/useReveal.js";
import Icon from "../components/Icon.jsx";

const FALLBACK = [
  { title: "Mariage Awa & Mamadou", category: "mariage", url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=60" },
  { title: "Sommet des Leaders", category: "corporate", url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=60" },
  { title: "Conférence Tech Africa", category: "conference", url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=400&q=60" },
  { title: "Soirée Prestige", category: "soiree", url: "https://images.unsplash.com/photo-1545224144-b380b2a0f1e0?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1545224144-b380b2a0f1e0?auto=format&fit=crop&w=400&q=60" },
  { title: "Décoration florale", category: "decoration", url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=400&q=60" },
  { title: "Réception élégante", category: "soiree", url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=60" },
  { title: "Lancement de produit", category: "corporate", url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=400&q=60" },
  { title: "Table d'invités", category: "decoration", url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=400&q=60" },
  { title: "Cérémonie", category: "mariage", url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=400&q=60" },
  { title: "Nos plus beaux instants", category: "soiree", url: "/event-49.jpeg", thumb: "/event-49.jpeg" },
];

const FILTERS = ["tout", "mariage", "corporate", "conference", "soiree", "decoration"];

export default function Galerie() {
  const { t } = useTranslation();
  const ref = useReveal();
  const [images, setImages] = useState([]);
  const [filter, setFilter] = useState("tout");
  const [lightbox, setLightbox] = useState(null);

  useSEO({
    title: "Galerie",
    description:
      "Découvrez nos plus beaux instants : mariages, événements corporate, conférences et soirées réalisés par MAT'EVENT à Dakar.",
  });

  useEffect(() => {
    api
      .getGallery()
      .then((res) => {
        if (res.success && res.data.length) setImages(res.data);
      })
      .catch(() => {});
  }, []);

  const all = images.length ? images : FALLBACK;
  const filtered =
    filter === "tout" ? all : all.filter((im) => im.category === filter);

  const next = useCallback(
    () => setLightbox((i) => (i + 1) % filtered.length),
    [filtered.length]
  );
  const prev = useCallback(
    () => setLightbox((i) => (i - 1 + filtered.length) % filtered.length),
    [filtered.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, next, prev]);

  return (
    <section className="page-header gallery" ref={ref}>
      <div className="container">
        <p className="eyebrow gold reveal">{t("gallery.eyebrow")}</p>
        <h1 className="section-title reveal">{t("gallery.titre")}</h1>
        <p className="page-sub reveal">{t("gallery.sousTitre")}</p>

        <div className="filters reveal">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter ${filter === f ? "is-active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {t(`gallery.filtres.${f}`)}
            </button>
          ))}
        </div>

        <div className="gallery__grid">
          {filtered.map((im, i) => (
            <button
              key={im._id || im.title + i}
              className="gallery__item reveal"
              style={{ transitionDelay: `${(i % 6) * 0.05}s` }}
              onClick={() => setLightbox(i)}
            >
              <img
                src={im.thumb || im.url}
                alt={im.title}
                loading="lazy"
                onError={onImgError}
              />
              <span className="gallery__item-title">{im.title}</span>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && filtered[lightbox] && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button
            className="lightbox__close"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(null);
            }}
            aria-label={t("gallery.fermer")}
          >
            <Icon name="X" />
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label={t("gallery.precedent")}
          >
            ‹
          </button>
          <img
            src={filtered[lightbox].url || filtered[lightbox].thumb}
            alt={filtered[lightbox].title}
            onClick={(e) => e.stopPropagation()}
            onError={onImgError}
          />
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label={t("gallery.suivant")}
          >
            ›
          </button>
          <p className="lightbox__caption">
            {filtered[lightbox].title}
          </p>
        </div>
      )}
    </section>
  );
}
