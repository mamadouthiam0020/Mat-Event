import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal.js";
import { imageFor } from "../lib/images.js";

const UNIVERSES = [
  { key: "event", num: "01", route: "/mat-event", img: "event15" },
  { key: "prop", num: "02", route: "/mat-prop", img: "bureaux" },
  { key: "transport", num: "03", route: "/mat-event-transport", img: "transport1" },
];

export default function ExpertisesPremium() {
  const { t } = useTranslation();
  const ref = useReveal();

  return (
    <section id="expertises" ref={ref} className="ep">
      <div className="container">
        <div className="ep__header">
          <p className="eyebrow gold reveal">{t("universes.eyebrow")}</p>
          <h2 className="section-title reveal">{t("universes.titre")}</h2>
        </div>

        <div className="ep__list">
          {UNIVERSES.map((u, i) => (
            <article
              key={u.key}
              className={`ep-card ep-card--${u.key} reveal`}
              style={{ transitionDelay: `${Math.min(i, 2) * 0.08}s` }}
            >
              <div className="ep-card__media">
                <img src={imageFor(u.img)} alt={t(`universes.${u.key}.title`)} loading="lazy" />
              </div>

              <span className="ep-card__num" aria-hidden="true">
                {u.num}
              </span>

              <div className="ep-card__body">
                <span className="ep-card__badge">{t(`universes.${u.key}.badge`)}</span>
                <h3 className="ep-card__title">{t(`universes.${u.key}.title`)}</h3>
                <p className="ep-card__desc">{t(`universes.${u.key}.desc`)}</p>

                <ul className="ep-card__services">
                  {t(`universes.${u.key}.services`, { returnObjects: true }).map((s) => (
                    <li key={s} className="ep-card__service">
                      {s}
                    </li>
                  ))}
                </ul>

                <Link to={u.route} className="ep-card__link">
                  {t(`universes.${u.key}.link`)} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
