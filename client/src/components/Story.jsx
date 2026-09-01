import React from "react";
import { useTranslation } from "react-i18next";
import { imageFor, onImgError } from "../lib/images.js";
import { useReveal } from "../hooks/useReveal.js";

export default function Story() {
  const { t } = useTranslation();
  const ref = useReveal();

  const PHOTOS = [
    { key: "emotion", alt: t("story.photo1.titre") },
    { key: "elegance", alt: t("story.photo2.titre") },
    { key: "savoir", alt: t("story.photo3.titre") },
  ];

  return (
    <section ref={ref} className="story">
      <div className="container">
        <p className="eyebrow gold reveal">{t("story.eyebrow")}</p>
        <h2 className="section-title reveal">
          {t("story.titre")}{" "}
          <span className="gold">{t("story.titreAccent")}</span>
        </h2>

        <div className="story__grid">
          {PHOTOS.map((p, i) => (
            <figure
              key={p.key}
              className="story__card reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="story__img">
                <img
                  src={imageFor(p.key === "emotion" ? "mariage" : p.key === "elegance" ? "soiree" : "conference", p.key + "-1")}
                  alt={p.alt}
                  loading="lazy"
                  onError={onImgError}
                />
              </div>
              <figcaption>
                <h3 className="story__name">
                  {t(`story.photo${i + 1}.titre`)}
                </h3>
                <p className="story__caption">
                  {t(`story.photo${i + 1}.legende`)}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
