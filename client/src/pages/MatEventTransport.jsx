import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSEO } from "../hooks/useSEO.js";
import { useReveal } from "../hooks/useReveal.js";
import { imageFor } from "../lib/images.js";

export default function MatEventTransport() {
  const { t } = useTranslation();
  const ref = useReveal();

  useSEO({
    title: "Mat'Transport | Transferts Hôtel – Aéroport & Services Premium",
    description:
      "Mat'Event Transport & Services Premium : transferts de l'hôtel à l'aéroport, déplacements professionnels et chauffeurs privés. Fiabilité, sécurité et ponctualité.",
  });

  const engagements = t("transportPage.engagements.list", { returnObjects: true });
  const services = t("transportPage.services.list", { returnObjects: true });

  return (
    <>
      <section className="page-hero">
        <div
          className="page-hero__bg"
          style={{ backgroundImage: `url(${imageFor("transportHero")})` }}
        />
        <div className="page-hero__overlay page-hero__overlay--event" />
        <div className="container">
          <div className="page-hero__content">
            <span className="page-hero__badge page-hero__badge--event">
              {t("transportPage.badge")}
            </span>
            <h1 className="page-hero__title">{t("transportPage.titre")}</h1>
            <p className="page-hero__sub">{t("transportPage.sub")}</p>
            <div className="hero__actions">
              <a href="#transport-contact" className="btn btn--gold btn--lg">
                {t("transportPage.cta")}
              </a>
              <Link to="/#devis" className="btn btn--outline btn--lg">
                {t("nav.devis")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section ref={ref} className="about">
        <div className="container">
          <div className="about__inner">
            <div className="about__text reveal">
              <p className="eyebrow gold">{t("transportPage.fiabilite.eyebrow")}</p>
              <h2 className="section-title">{t("transportPage.fiabilite.titre")}</h2>
              <p className="about__p">{t("transportPage.fiabilite.texte")}</p>
            </div>
            <div className="about__visual reveal" style={{ transitionDelay: "0.1s" }}>
              <img src={imageFor("transport1")} alt={t("transportPage.fiabilite.titre")} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section ref={ref} className="engagement">
        <div className="container">
          <p className="eyebrow gold reveal">{t("transportPage.engagements.eyebrow")}</p>
          <h2 className="section-title reveal">{t("transportPage.engagements.titre")}</h2>

          <div className="engagement__blocks">
            {engagements.map((item, i) => (
              <div
                key={item.titre}
                className="engagement__block reveal"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <h3>{item.titre}</h3>
                <p>{item.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={ref} className="transport-services">
        <div className="container">
          <p className="eyebrow gold reveal">{t("transportPage.services.eyebrow")}</p>
          <h2 className="section-title reveal">{t("transportPage.services.titre")}</h2>

          <div className="transport-services__grid">
            {services.map((item, i) => (
              <div
                key={item.titre}
                className="transport-service reveal"
                style={{ transitionDelay: `${(i % 3) * 0.07}s` }}
              >
                <span className="transport-service__icon">{item.icon}</span>
                <h3 className="transport-service__title">{item.titre}</h3>
                <p className="transport-service__text">{item.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="me-contact transport-contact" id="transport-contact">
        <div className="container">
          <div className="me-contact__card reveal">
            <p className="eyebrow gold">{t("transportPage.contact.titre")}</p>
            <div className="me-contact__phones">
              {t("transportPage.contact.phones", { returnObjects: true }).map((ph) => (
                <a key={ph} href={`tel:${ph.replace(/\s/g, "")}`}>📞 {ph}</a>
              ))}
            </div>
            <div className="me-contact__emails">
              <a href={`mailto:${t("transportPage.contact.email")}`}>
                ✉️ {t("transportPage.contact.email")}
              </a>
            </div>
            <Link to="/#devis" className="btn btn--gold btn--lg me-contact__cta">
              {t("nav.devis")}
            </Link>
          </div>
        </div>
      </section>

      <section className="outro-cta outro-cta--transport">
        <div className="container outro-cta__inner">
          <div className="outro-cta__text">
            <p className="eyebrow gold">{t("transportPage.engagements.eyebrow")}</p>
            <h2 className="outro-cta__title">{t("transportPage.engagements.titre")}</h2>
            <p className="outro-cta__intro">{t("transportPage.engagements.intro")}</p>
          </div>
          <div className="outro-cta__actions">
            <Link to="/#devis" className="btn btn--gold btn--lg">{t("nav.devis")}</Link>
            <Link to="/mat-event" className="btn btn--outline btn--lg">
              {t("universes.event.link")} →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}