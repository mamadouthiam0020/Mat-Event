import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSEO } from "../hooks/useSEO.js";
import { useReveal } from "../hooks/useReveal.js";
import { imageFor } from "../lib/images.js";

const VALUES = ["elegance", "professionnalisme", "creativite", "organisation", "excellence", "proximite"];

const UNIVERSES = [
  { key: "event", theme: "event", to: "/mat-event", img: "corporate", delay: 0 },
  { key: "prop", theme: "prop", to: "/mat-prop", img: "bureaux", delay: 0.1 },
  { key: "transport", theme: "transport", to: "/mat-event-transport", img: "transport1", delay: 0.2 },
];

const PARTNERS = [
  { name: "Orange", src: "/partners/orange.svg" },
  { name: "2STV", src: "/partners/2stv.webp" },
];

const PARTNERS_MARQUEE = Array.from({ length: 5 }, () => PARTNERS).flat();

export default function About() {
  const { t } = useTranslation();
  const ref = useReveal();

  useSEO({
    title: "À propos — Mat'Event, Mat'Prop & Mat'Transport",
    description:
      "Découvrez l'histoire de Mat'Event, fondée en 2015 par Mme Maty Diakhate, et le groupe Mat'Event, Mat'Prop & Mat'Transport. Une maison sénégalaise présente en France, en Afrique et au Sénégal.",
  });

  return (
    <>
      <section className="page-hero">
        <div
          className="page-hero__bg"
          style={{ backgroundImage: `url(${imageFor("aproposHero")})` }}
        />
        <div className="page-hero__overlay page-hero__overlay--event" />
        <div className="container">
          <div className="page-hero__content">
            <span className="page-hero__badge page-hero__badge--event">
              {t("about.eyebrow")}
            </span>
            <h1 className="page-hero__title">{t("about.hero.titre")}</h1>
            <p className="page-hero__sub">{t("about.hero.sub")}</p>
          </div>
        </div>
      </section>

      <section ref={ref} className="about">
        <div className="container">
          <div className="about__inner">
            <div className="about__text reveal">
              <p className="eyebrow gold">{t("about.mission.eyebrow")}</p>
              <h2 className="section-title">{t("about.mission.titre")}</h2>
              <p className="about__p">{t("about.mission.p1")}</p>
              <p className="about__p">{t("about.mission.p2")}</p>
            </div>
            <div className="about__visual reveal" style={{ transitionDelay: "0.1s" }}>
              <img src={imageFor("histoire")} alt={t("about.mission.titre")} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section ref={ref} className="founder">
        <div className="container">
          <div className="founder__inner">
            <div className="founder__visual reveal">
              <div className="founder__avatar">
                <span>MD</span>
              </div>
            </div>
            <div className="founder__content reveal" style={{ transitionDelay: "0.1s" }}>
              <p className="eyebrow gold">{t("about.founder.eyebrow")}</p>
              <h2 className="section-title">{t("about.founder.titre")}</h2>
              <span className="founder__role">{t("about.founder.role")}</span>
              <p className="about__p">{t("about.founder.p1")}</p>
              <p className="about__p">{t("about.founder.p2")}</p>
            </div>
          </div>
        </div>
      </section>

      <section ref={ref} className="values">
        <div className="container">
          <p className="eyebrow gold reveal">{t("about.valuesTitle")}</p>
          <h2 className="section-title reveal">{t("about.valuesTitle")}</h2>
          <div className="values__grid">
            {VALUES.map((key, i) => (
              <div
                key={key}
                className="value reveal"
                style={{ transitionDelay: `${Math.min(i, 3) * 0.05}s` }}
              >
                <span className="value__icon">{t(`about.values.${key}.icon`)}</span>
                <h3 className="value__title">{t(`about.values.${key}.titre`)}</h3>
                <p className="value__text">{t(`about.values.${key}.texte`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={ref} className="about-universes">
        <div className="container">
          <p className="eyebrow gold reveal">{t("about.universTitle")}</p>
          <h2 className="section-title reveal">{t("about.universTitle")}</h2>
          <div className="about-universes__grid">
            {UNIVERSES.map((u) => (
              <div
                key={u.key}
                className={`about-universe about-universe--${u.theme} reveal`}
                style={{ transitionDelay: `${u.delay}s` }}
              >
                <div
                  className="about-universe__bg"
                  style={{ backgroundImage: `url(${imageFor(u.img)})` }}
                />
                <div className="about-universe__overlay" />
                <div className="about-universe__content">
                  <span className="universe-card__badge">{t(`about.univers.${u.key}.badge`)}</span>
                  <h3>{t(`about.univers.${u.key}.titre`)}</h3>
                  <p>{t(`about.univers.${u.key}.texte`)}</p>
                  <Link to={u.to} className="about-universe__link">
                    {t(`about.univers.${u.key}.link`)} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={ref} className="partners">
        <div className="container">
          <p className="eyebrow gold reveal">{t("about.partners.eyebrow")}</p>
          <h2 className="section-title reveal">{t("about.partners.titre")}</h2>
          <p className="partners__sub reveal">{t("about.partners.sub")}</p>
          <div className="partners__marquee reveal">
            <div className="partners__track">
              {[...PARTNERS_MARQUEE, ...PARTNERS_MARQUEE].map((p, i) => (
                <div key={`${p.name}-${i}`} className="partner">
                  <img
                    src={p.src}
                    alt={`${t("about.partners.alt")} ${p.name}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={ref} className="about-presence">
        <div className="container">
          <div className="about-presence__inner reveal">
            <p className="eyebrow gold">{t("about.presence.eyebrow")}</p>
            <h2 className="section-title">{t("about.presence.titre")}</h2>
            <p className="about-presence__text">{t("about.presence.text")}</p>
          </div>
        </div>
      </section>

      <section className="outro-cta outro-cta--about">
        <div className="container outro-cta__inner">
          <div className="outro-cta__text">
            <p className="eyebrow gold">{t("about.hero.eyebrow")}</p>
            <h2 className="outro-cta__title">{t("about.hero.titre")}</h2>
            <p className="outro-cta__intro">{t("about.hero.sub")}</p>
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
