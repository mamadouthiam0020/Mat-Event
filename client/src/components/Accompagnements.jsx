import React from "react";
import { useTranslation } from "react-i18next";
import { useReveal } from "../hooks/useReveal.js";

export default function Accompagnements() {
  const { t } = useTranslation();
  const ref = useReveal();

  const OFFERS = ["offre1", "offre2", "offre3"];

  return (
    <section id="accompagnements" ref={ref} className="accueils acc">
      <div className="container">
        <p className="eyebrow gold reveal">{t("accompagnements.eyebrow")}</p>
        <h2 className="section-title reveal">
          {t("accompagnements.titre")}
        </h2>

        <div className="acc__grid">
          {OFFERS.map((offer, i) => (
            <div
              key={offer}
              className="offer reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="offer__tag">
                {t(`accompagnements.${offer}.tag`)}
              </span>
              <h3 className="offer__title">
                {t(`accompagnements.${offer}.titre`)}
              </h3>
              <ul className="offer__points">
                {["p1", "p2", "p3"].map((p) => (
                  <li key={p}>{t(`accompagnements.${offer}.points.${p}`)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="acc__cta reveal">
          <h3>{t("accompagnements.ctaTitre")}</h3>
          <p>{t("accompagnements.ctaTexte")}</p>
          <a href="#devis" className="btn btn--gold btn--lg">
            {t("accompagnements.ctaBtn")}
          </a>
        </div>
      </div>
    </section>
  );
}
