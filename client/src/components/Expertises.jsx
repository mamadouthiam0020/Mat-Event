import React from "react";
import { useTranslation } from "react-i18next";
import { useReveal } from "../hooks/useReveal.js";

const EVENT_ICONS = ["📅", "📢", "🎯", "🎓", "💁", "💃"];
const EVENT_KEYS = ["evenementiel", "communication", "organisation", "seminaires", "hostes", "mannequins"];

export default function Expertises() {
  const { t } = useTranslation();
  const ref = useReveal();

  return (
    <section id="expertises" ref={ref} className="expertises">
      <div className="container">
        <p className="eyebrow gold reveal">{t("expertises.eyebrow")}</p>
        <h2 className="section-title reveal">{t("expertises.titre")}</h2>

        <div className="expertises__grid">
          {EVENT_KEYS.map((key, i) => (
            <div
              key={key}
              className="expertise reveal"
              style={{ transitionDelay: `${Math.min(i, 3) * 0.05}s` }}
            >
              <span className="expertise__icon">{EVENT_ICONS[i]}</span>
              <h3 className="expertise__title">
                {t(`expertises.items.${key}.titre`)}
              </h3>
              <p className="expertise__text">
                {t(`expertises.items.${key}.texte`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
