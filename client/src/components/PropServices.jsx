import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal.js";
import { imageFor } from "../lib/images.js";

const PROP_ICONS = ["🏢", "🧹", "🏛️", "✨", "📋", "🔄"];
const PROP_KEYS = ["bureaux", "espaces", "administratifs", "apresEvent", "personnalise", "régulier"];

export default function PropServices() {
  const { t } = useTranslation();
  const ref = useReveal();

  return (
    <section id="prop-services" ref={ref} className="prop-services">
      <div className="container">
        <p className="eyebrow teal reveal">{t("propServices.eyebrow")}</p>
        <h2 className="section-title reveal">{t("propServices.titre")}</h2>

        <div className="prop-services__grid">
          {PROP_KEYS.map((key, i) => (
            <div
              key={key}
              className="prop-card reveal"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <span className="prop-card__icon">{PROP_ICONS[i]}</span>
              <h3 className="prop-card__title">
                {t(`propServices.items.${key}.titre`)}
              </h3>
              <p className="prop-card__text">
                {t(`propServices.items.${key}.texte`)}
              </p>
            </div>
          ))}
        </div>

        <div className="acc__cta reveal" style={{ marginTop: "48px" }}>
          <h3>{t("matPropPage.cta")}</h3>
          <Link to="/mat-prop" className="btn btn--prop btn--lg" style={{ marginTop: "16px" }}>
            {t("common.enSavoirPlus")} →
          </Link>
        </div>
      </div>
    </section>
  );
}
