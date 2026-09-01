import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { api } from "../api.js";
import { onImgError } from "../lib/images.js";
import { useSEO } from "../hooks/useSEO.js";
import { useReveal } from "../hooks/useReveal.js";

const FALLBACK = [
  {
    slug: "tendances-mariage-2026",
    title: "Les tendances mariage 2026 à Dakar",
    excerpt:
      "Couleurs, lieux, cérémonies : découvrez ce qui marquera les mariages de l'année.",
    category: "tendances",
    cover:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    author: "Awa Diop",
  },
  {
    slug: "organiser-un-evenement-corporatif-reussi",
    title: "Organiser un événement corporate réussi : nos 5 secrets",
    excerpt:
      "Méthodologie, prestataires, timing : tout ce qu'il faut savoir pour un congrès ou un lancement réussi.",
    category: "conseils",
    cover:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    author: "Cheikh Ndiaye",
  },
  {
    slug: "coulisses-soiree-prestige",
    title: "Coulisses de la Soirée Prestige",
    excerpt:
      "Retour en images sur la préparation de notre plus belle soirée de l'année.",
    category: "coulisses",
    cover:
      "https://images.unsplash.com/photo-1545224144-b380b2a0f1e0?auto=format&fit=crop&w=1200&q=80",
    author: "Équipe MAT'EVENT",
  },
];

const FILTERS = ["tout", "conseils", "tendances", "coulisses", "evenement"];

export default function Blog() {
  const { t } = useTranslation();
  const ref = useReveal();
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("tout");

  useSEO({
    title: "Blog & Actualités",
    description:
      "Conseils, tendances et coulisses de l'événementiel à Dakar, par MAT'EVENT.",
  });

  useEffect(() => {
    api
      .getBlog()
      .then((res) => {
        if (res.success && res.data.length) setPosts(res.data);
      })
      .catch(() => {});
  }, []);

  const all = posts.length ? posts : FALLBACK;
  const filtered =
    filter === "tout" ? all : all.filter((p) => p.category === filter);

  return (
    <section className="page-header blog" ref={ref}>
      <div className="container">
        <p className="eyebrow gold reveal">{t("blog.eyebrow")}</p>
        <h1 className="section-title reveal">{t("blog.titre")}</h1>
        <p className="page-sub reveal">{t("blog.sousTitre")}</p>

        <div className="filters reveal">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter ${filter === f ? "is-active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {t(`blog.categories.${f}`)}
            </button>
          ))}
        </div>

        <div className="blog__grid">
          {filtered.map((post, i) => (
            <article
              key={post.slug}
              className="post reveal"
              style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
            >
              <Link to={`/blog/${post.slug}`} className="post__link">
                <div className="post__cover">
                  {post.cover ? (
                    <img src={post.cover} alt={post.title} loading="lazy" onError={onImgError} />
                  ) : (
                    <span className="post__placeholder">MAT'EVENT</span>
                  )}
                </div>
                <div className="post__body">
                  <span className="post__category">
                    {t(`blog.categories.${post.category}`)}
                  </span>
                  <h2 className="post__title">{post.title}</h2>
                  <p className="post__excerpt">{post.excerpt}</p>
                  <span className="post__more">
                    {t("blog.lireSuite")} →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
