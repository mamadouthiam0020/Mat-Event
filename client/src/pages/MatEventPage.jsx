import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSEO } from "../hooks/useSEO.js";
import { useReveal } from "../hooks/useReveal.js";
import { imageFor } from "../lib/images.js";
import Evenements from "../components/Evenements.jsx";
import Universes from "../components/Universes.jsx";

const MAT_EVENT_PHOTOS = [
  "/event-01.jpeg",
  "/event-03.jpeg",
  "/event-05.jpeg",
  "/event-06.jpeg",
  "/event-07.jpeg",
  "/event-08.jpeg",
  "/event-10.jpeg",
  "/event-12.jpeg",
  "/event-14.jpeg",
  "/event-16.jpeg",
  "/event-17.jpeg",
  "/event-18.jpeg",
];

export default function MatEventPage() {
  const { t } = useTranslation();
  const ref = useReveal();
  const p = (k) => t(`matEventPage.prestations.${k}`);

  useSEO({
    title: "Mat'Event — Événementiel, Communication & Organisation au Sénégal",
    description:
      "Mat'Event accompagne les entreprises et institutions du Sénégal dans l'organisation de leurs événements, leur communication et leurs besoins en accueil événementiel, street marketing et organisation.",
  });

  const keywordArr = t("matEventPage.keywords").split(",").map((s) => s.trim());

  const renderList = (v) =>
    t(v, { returnObjects: true });

  return (
    <>
      <section className="page-hero">
        <div
          className="page-hero__bg"
          style={{ backgroundImage: `url(${imageFor("eventHero")})` }}
        />
        <div className="page-hero__overlay page-hero__overlay--event" />
        <div className="container">
          <div className="page-hero__content">
            <span className="page-hero__badge page-hero__badge--event">
              {t("matEventPage.badge")}
            </span>
            <p className="page-hero__keywords">{keywordArr.join(" • ")}</p>
            <h1 className="page-hero__title">
              {t("matEventPage.titre")}
            </h1>
            <p className="page-hero__sub">{t("matEventPage.sub")}</p>
            <div className="hero__actions">
              <a href="#event-prestations" className="btn btn--gold btn--lg">
                {t("matEventPage.prestations.eyebrow")}
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
              <p className="eyebrow gold">{t("matEventPage.quiSommesNous.eyebrow")}</p>
              <h2 className="section-title">{t("matEventPage.quiSommesNous.titre")}</h2>
              <p className="about__p">{t("matEventPage.quiSommesNous.p1")}</p>
              <p className="about__p">{t("matEventPage.quiSommesNous.p2")}</p>
            </div>
            <div className="about__visual reveal" style={{ transitionDelay: "0.1s" }}>
              <img src={imageFor("quiSommesNous")} alt={t("matEventPage.quiSommesNous.titre")} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section ref={ref} className="engagement">
        <div className="container">
          <p className="eyebrow gold reveal">{t("matEventPage.engagement.eyebrow")}</p>
          <h2 className="section-title reveal">{t("matEventPage.engagement.titre")}</h2>
          <p className="engagement__intro reveal">{t("matEventPage.engagement.intro")}</p>

          <div className="engagement__blocks">
            <div className="engagement__block reveal">
              <h3>{t("matEventPage.engagement.politique.titre")}</h3>
              <p>{t("matEventPage.engagement.politique.texte")}</p>
            </div>
            <div className="engagement__block reveal" style={{ transitionDelay: "0.1s" }}>
              <h3>{t("matEventPage.engagement.personnel.titre")}</h3>
              <p>{t("matEventPage.engagement.personnel.texte")}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="event-prestations" ref={ref} className="prestations-detail">
        <div className="container">
          <p className="eyebrow gold reveal">{t("matEventPage.prestations.eyebrow")}</p>
          <h2 className="section-title reveal">{t("matEventPage.prestations.titre")}</h2>

          <div className="detail-blocks">
            {/* Accueil événementiel */}
            <article className="detail-block reveal">
              <div className="detail-block__header">
                <span className="detail-block__icon">🎫</span>
                <h3>{p("accueilEvent.titre")}</h3>
              </div>
              <p className="detail-block__text">{p("accueilEvent.texte")}</p>
              <p className="detail-block__text2">{p("accueilEvent.subtitle")}</p>
              <ul className="detail-block__list line-2">
                {renderList("matEventPage.prestations.accueilEvent.list").map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
              <p className="detail-block__text2">{p("accueilEvent.list2")}</p>
            </article>

            {/* Accueil en entreprise */}
            <article className="detail-block reveal">
              <div className="detail-block__header">
                <span className="detail-block__icon">🏢</span>
                <h3>{p("accueilEntreprise.titre")}</h3>
              </div>
              <p className="detail-block__text">{p("accueilEntreprise.texte")}</p>
              <h4 className="detail-block__sub">{p("accueilEntreprise.engagementsTitle")}</h4>
              <ul className="detail-block__list">
                {renderList("matEventPage.prestations.accueilEntreprise.engagements").map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
              <p className="detail-block__text2">{p("accueilEntreprise.tranquillite")}</p>
              <h4 className="detail-block__sub">{p("accueilEntreprise.missionTitle")}</h4>
              <ul className="detail-block__list">
                {renderList("matEventPage.prestations.accueilEntreprise.mission").map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            </article>

            {/* Street marketing */}
            <article className="detail-block reveal">
              <div className="detail-block__header">
                <span className="detail-block__icon">📣</span>
                <h3>{p("streetMarketing.titre")}</h3>
              </div>
              <p className="detail-block__text">{p("streetMarketing.texte")}</p>
              <p className="detail-block__text2">{p("streetMarketing.texte2")}</p>
              <ul className="detail-block__list line-2">
                {renderList("matEventPage.prestations.streetMarketing.list").map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            </article>

            {/* Communication / Organisation */}
            <article className="detail-block reveal">
              <div className="detail-block__header">
                <span className="detail-block__icon">🤝</span>
                <h3>{p("communication.titre")}</h3>
              </div>
              <p className="detail-block__text">{p("communication.texte")}</p>
              <p className="detail-block__text">{p("communication.texte2")}</p>
              <p className="detail-block__text">{p("communication.texte3")}</p>
              <p className="detail-block__text2">{p("communication.texte4")}</p>
              <h4 className="detail-block__sub">{p("communication.communicationTitle")}</h4>
              <p className="detail-block__text">{p("communication.communication")}</p>
              <h4 className="detail-block__sub">{p("communication.atoutsTitle")}</h4>
              <p className="detail-block__text">{p("communication.atouts")}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="engage-kpis">
        <div className="container">
          <div className="engage-kpis__grid">
            <div className="engage-kpi reveal">
              <span className="engage-kpi__value">24/7</span>
              <span className="engage-kpi__label">Disponibilité</span>
            </div>
            <div className="engage-kpi reveal" style={{ transitionDelay: "0.05s" }}>
              <span className="engage-kpi__value">2+</span>
              <span className="engage-kpi__label">Langues parlées par nos hôtes</span>
            </div>
            <div className="engage-kpi reveal" style={{ transitionDelay: "0.1s" }}>
              <span className="engage-kpi__value">3</span>
              <span className="engage-kpi__label">Continents : France, Afrique, Sénégal</span>
            </div>
            <div className="engage-kpi reveal" style={{ transitionDelay: "0.15s" }}>
              <span className="engage-kpi__value">100%</span>
              <span className="engage-kpi__label">Sur mesure & à votre image</span>
            </div>
          </div>
        </div>
      </section>

      <Evenements
        title="Nos événements en images"
        eyebrow="Portfolio Mat'Event"
        photos={MAT_EVENT_PHOTOS}
        baseId="event-galerie"
      />

      <Universes />

      <section className="me-contact">
        <div className="container">
          <div className="me-contact__card">
            <p className="eyebrow gold">{t("matEventPage.contact.titre")}</p>
            <h2 className="section-title">Mat'Event</h2>
            <p className="me-contact__address">{t("matEventPage.contact.address")}</p>
            <div className="me-contact__row">
              <span className="me-contact__label">📞</span>
              {t("matEventPage.contact.phones", { returnObjects: true }).map((ph) => (
                <a key={ph} href={`tel:${ph.replace(/\s/g, "")}`}>{ph}</a>
              ))}
            </div>
            <div className="me-contact__row">
              <span className="me-contact__label">✉️</span>
              {t("matEventPage.contact.emails", { returnObjects: true }).map((em) => (
                <a key={em} href={`mailto:${em}`}>{em}</a>
              ))}
            </div>
            <Link to="/#devis" className="btn btn--gold btn--lg me-contact__cta">
              {t("nav.devis")}
            </Link>
          </div>
        </div>
      </section>

      <section className="outro-cta outro-cta--event">
        <div className="container outro-cta__inner">
          <div className="outro-cta__text">
            <p className="eyebrow gold">{t("matEventPage.engagement.eyebrow")}</p>
            <h2 className="outro-cta__title">{t("matEventPage.engagement.titre")}</h2>
            <p className="outro-cta__intro">{t("matEventPage.engagement.intro")}</p>
          </div>
          <div className="outro-cta__actions">
            <Link to="/#devis" className="btn btn--gold btn--lg">{t("nav.devis")}</Link>
            <Link to="/mat-prop" className="btn btn--outline btn--lg">
              {t("universes.prop.link")} →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
