import React from "react";
import { useTranslation } from "react-i18next";
import { useReveal } from "../hooks/useReveal.js";

export default function Secteurs() {
  const { t } = useTranslation();
  const ref = useReveal();
  const items = t("secteurs.items", { returnObjects: true });

  return (
    <section ref={ref} className="secteurs">
      <div className="container">
        <p className="eyebrow gold reveal">{t("secteurs.eyebrow")}</p>
        <h2 className="section-title reveal">{t("secteurs.titre")}</h2>

        <div className="secteurs__grid">
          {items.map((item, i) => (
            <div
              key={item.name}
              className="secteur reveal"
              style={{ transitionDelay: `${Math.min(i, 3) * 0.04}s` }}
            >
              <span className="secteur__icon">{item.icon}</span>
              <span className="secteur__name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
