import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal.js";
import { imageFor } from "../lib/images.js";

export default function Universes() {
  const { t } = useTranslation();
  const ref = useReveal();

  return (
    <section id="universes" ref={ref} className="universes">
      <div className="container">
        <p className="eyebrow gold reveal">{t("universes.eyebrow")}</p>
        <h2 className="section-title reveal">{t("universes.titre")}</h2>

        <div className="universes__grid">
          <div className="universe-card universe-card--event universe-card--featured reveal">
            <div
              className="universe-card__bg"
              style={{ backgroundImage: `url(${imageFor("corporate")})` }}
            />
            <div className="universe-card__overlay" />
            <div className="universe-card__content">
              <span className="universe-card__badge">
                {t("universes.event.badge")}
              </span>
              <h3 className="universe-card__title">
                {t("universes.event.title")}
              </h3>
              <p className="universe-card__desc">
                {t("universes.event.desc")}
              </p>
              <div className="universe-card__services">
                {t("universes.event.services", { returnObjects: true }).map((s) => (
                  <span key={s} className="universe-card__service">{s}</span>
                ))}
              </div>
              <Link to="/mat-event" className="universe-card__link">
                {t("universes.event.link")} →
              </Link>
            </div>
          </div>

          <div className="universe-card universe-card--prop reveal" style={{ transitionDelay: "0.1s" }}>
            <div
              className="universe-card__bg"
              style={{ backgroundImage: `url(${imageFor("bureaux")})` }}
            />
            <div className="universe-card__overlay" />
            <div className="universe-card__content">
              <span className="universe-card__badge">
                {t("universes.prop.badge")}
              </span>
              <h3 className="universe-card__title">
                {t("universes.prop.title")}
              </h3>
              <p className="universe-card__desc">
                {t("universes.prop.desc")}
              </p>
              <div className="universe-card__services">
                {t("universes.prop.services", { returnObjects: true }).map((s) => (
                  <span key={s} className="universe-card__service">{s}</span>
                ))}
              </div>
              <Link to="/mat-prop" className="universe-card__link">
                {t("universes.prop.link")} →
              </Link>
            </div>
          </div>

          <div className="universe-card universe-card--transport reveal" style={{ transitionDelay: "0.2s" }}>
            <div
              className="universe-card__bg"
              style={{ backgroundImage: `url(${imageFor("transport1")})` }}
            />
            <div className="universe-card__overlay" />
            <div className="universe-card__content">
              <span className="universe-card__badge">
                {t("universes.transport.badge")}
              </span>
              <h3 className="universe-card__title">
                {t("universes.transport.title")}
              </h3>
              <p className="universe-card__desc">
                {t("universes.transport.desc")}
              </p>
              <div className="universe-card__services">
                {t("universes.transport.services", { returnObjects: true }).map((s) => (
                  <span key={s} className="universe-card__service">{s}</span>
                ))}
              </div>
              <Link to="/mat-event-transport" className="universe-card__link">
                {t("universes.transport.link")} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
