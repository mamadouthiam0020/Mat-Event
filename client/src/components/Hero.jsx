import React from "react";
import { useTranslation } from "react-i18next";
import { imageFor } from "../lib/images.js";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="top" className="hero">
      <div className="hero__overlay" />
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${imageFor("hero")})` }}
      />
      <div className="hero__content container">
        <span className="hero__badge">{t("hero.badge")}</span>
        <h1 className="hero__title">
          {t("hero.titre1")}
          <br />
          <span className="gold">{t("hero.titre2")}</span>
        </h1>
        <p className="hero__subtitle">{t("hero.soustitre")}</p>
        <div className="hero__actions">
          <a href="#expertises" className="btn btn--gold btn--lg">
            {t("hero.cta1")}
          </a>
          <a href="#devis" className="btn btn--outline btn--lg">
            {t("hero.cta2")}
          </a>
        </div>
      </div>
    </section>
  );
}
