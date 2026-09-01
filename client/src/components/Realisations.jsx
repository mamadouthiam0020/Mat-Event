import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { api } from "../api.js";
import { imageFor, onImgError } from "../lib/images.js";
import { useReveal } from "../hooks/useReveal.js";

const FALLBACK_ITEMS = [
  { titleKey: "mariage", cat: "evenementiel", img: "realisation1", desc: "Un mariage de prestige au cœur de Dakar", date: "2024" },
  { titleKey: "corporate", cat: "evenementiel", img: "realisation2", desc: "Sommet des Leaders — Événement corporate annuel", date: "2024" },
  { titleKey: "conference", cat: "seminaires", img: "realisation3", desc: "Conférence Tech Africa — Innovation & Digital", date: "2024" },
  { titleKey: "soiree", cat: "evenementiel", img: "realisation4", desc: "Soirée Gala de charité — 500 invités", date: "2023" },
  { titleKey: "seminaire", cat: "congres", img: "realisation5", desc: "Séminaire institutionnel — Planification stratégique", date: "2024" },
  { titleKey: "streetmarketing", cat: "communication", img: "realisation6", desc: "Campagne de street marketing — Lancement produit", date: "2024" },
];

const FILTER_KEYS = ["tous", "evenementiel", "seminaires", "congres", "communication"];

export default function Realisations() {
  const { t } = useTranslation();
  const ref = useReveal();
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("tous");

  useEffect(() => {
    api
      .getEvents()
      .then((res) => {
        if (res.success && res.data.length) setEvents(res.data);
      })
      .catch(() => {});
  }, []);

  const items = events.length
    ? events.map((e) => ({
        title: e.title,
        category: e.category,
        image: e.image,
        desc: e.description || "",
        date: e.date || "",
      }))
    : FALLBACK_ITEMS.map((fi) => ({
        title: t(`realisations.fallback.${fi.titleKey}`),
        category: fi.cat,
        image: imageFor(fi.img),
        desc: fi.desc,
        date: fi.date,
      }));

  const filtered = filter === "tous" ? items : items.filter((i) => i.category === filter);

  const catLabel = (cat) => t(`realisations.filters.${cat}`, { defaultValue: cat });

  return (
    <section id="realisations" ref={ref} className="realisations">
      <div className="container">
        <p className="eyebrow gold reveal">{t("realisations.eyebrow")}</p>
        <h2 className="section-title reveal">{t("realisations.titre")}</h2>

        <div className="realisations__filters reveal">
          {FILTER_KEYS.map((f) => (
            <button
              key={f}
              className={`filter ${filter === f ? "is-active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {t(`realisations.filters.${f}`)}
            </button>
          ))}
        </div>

        <div className="realisations__grid">
          {filtered.map((item, i) => (
            <figure
              key={item.title + i}
              className="realisation reveal"
              style={{ transitionDelay: `${Math.min(i, 3) * 0.05}s` }}
            >
              <div className="realisation__img">
                {item.image ? (
                  <img src={item.image} alt={item.title} loading="lazy" onError={onImgError} />
                ) : (
                  <span className="realisation__placeholder">{item.title}</span>
                )}
              </div>
              <div className="realisation__body">
                <span className="realisation__cat">{catLabel(item.category)}</span>
                <h3 className="realisation__name">{item.title}</h3>
                <p className="realisation__desc">{item.desc}</p>
                <span className="realisation__date">{item.date}</span>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
