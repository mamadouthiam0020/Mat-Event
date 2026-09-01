import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSEO } from "../hooks/useSEO.js";
import { useReveal } from "../hooks/useReveal.js";
import { imageFor } from "../lib/images.js";

export default function MatPropPage() {
  const { t } = useTranslation();
  const ref = useReveal();

  useSEO({
    title: "Mat'Prop by Mat'Event | Nettoyage & Entretien Professionnel au Sénégal",
    description:
      "Mat'Prop accompagne les entreprises et institutions du Sénégal avec des prestations de nettoyage et d'entretien professionnel : bureaux, immeubles, chantiers.",
  });

  return (
    <>
      <section className="page-hero">
        <div
          className="page-hero__bg"
          style={{ backgroundImage: `url(${imageFor("propHero")})` }}
        />
        <div className="page-hero__overlay page-hero__overlay--prop" />
        <div className="container">
          <div className="page-hero__content">
            <span className="page-hero__badge page-hero__badge--prop">
              {t("matPropPage.badge")}
            </span>
            <h1 className="page-hero__title">{t("matPropPage.titre")}</h1>
            <p className="page-hero__sub">{t("matPropPage.sub")}</p>
            <div className="hero__actions">
              <Link to="/#devis" className="btn btn--prop btn--lg">
                {t("matPropPage.cta")}
              </Link>
              <a href="#prop-qui-sommes-nous" className="btn btn--outline btn--lg">
                {t("hero.cta1")}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="prop-qui-sommes-nous" className="about" ref={ref}>
        <div className="container">
          <div className="about__inner">
            <div className="about__text reveal">
              <p className="eyebrow teal">{t("matPropPage.quiSommesNous.eyebrow")}</p>
              <h2 className="section-title">{t("matPropPage.quiSommesNous.titre")}</h2>
              <p className="about__p">{t("matPropPage.quiSommesNous.p1")}</p>
              <p className="about__p">{t("matPropPage.quiSommesNous.p2")}</p>
            </div>
            <div className="about__visual reveal" style={{ transitionDelay: "0.1s" }}>
              <img src={imageFor("bureaux")} alt={t("matPropPage.quiSommesNous.titre")} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="prop-engagement" ref={ref}>
        <div className="container">
          <p className="eyebrow teal reveal">{t("matPropPage.engagement.eyebrow")}</p>
          <h2 className="section-title reveal" style={{ color: "var(--prop-teal-light)" }}>
            {t("matPropPage.engagement.titre")}
          </h2>
          <p className="prop-engagement__intro reveal">{t("matPropPage.engagement.intro")}</p>
          <div className="prop-engagement__grid">
            <div className="prop-engagement__card reveal">
              <h3>{t("matPropPage.engagement.politique.titre")}</h3>
              <p>{t("matPropPage.engagement.politique.texte")}</p>
            </div>
            <div className="prop-engagement__card reveal" style={{ transitionDelay: "0.1s" }}>
              <h3>{t("matPropPage.engagement.personnel.titre")}</h3>
              <p>{t("matPropPage.engagement.personnel.texte")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="prop-prestations" ref={ref}>
        <div className="container">
          <div className="me-engage__head reveal">
            <p className="eyebrow teal">{t("matPropPage.prestations.eyebrow")}</p>
            <h2 className="section-title">{t("matPropPage.prestations.titre")}</h2>
            <p>{t("matPropPage.prestations.intro")}</p>
          </div>
          <div className="prop-prestations__grid">
            {t("matPropPage.prestations.list", { returnObjects: true }).map((item, i) => (
              <div className="prop-prestations__item reveal" key={i} style={{ transitionDelay: `${(i % 4) * 0.06}s` }}>
                <span className="prop-prestations__num">0{i + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="prop-block" style={{ background: "var(--black-2)" }}>
        <div className="container prop-block__inner">
          <div className="prop-block__content reveal">
            <h3 style={{ color: "var(--prop-teal-light)" }}>{t("matPropPage.controle.titre")}</h3>
            <p className="prop-block__intro">{t("matPropPage.controle.intro")}</p>
            <ul className="prop-block__list">
              {t("matPropPage.controle.list", { returnObjects: true }).map((item, i) => (
                <li key={i}>✓ {item}</li>
              ))}
            </ul>
          </div>
          <div className="prop-block__content prop-block__content--accent reveal" style={{ transitionDelay: "0.1s" }}>
            <h3 style={{ color: "var(--prop-teal-light)" }}>{t("matPropPage.reactivite.titre")}</h3>
            <p className="prop-block__intro">{t("matPropPage.reactivite.intro")}</p>
            <ul className="prop-block__list">
              {t("matPropPage.reactivite.list", { returnObjects: true }).map((item, i) => (
                <li key={i}>→ {item}</li>
              ))}
            </ul>
            <p className="prop-block__note">{t("matPropPage.reactivite.note")}</p>
          </div>
        </div>
      </section>

      <section className="about" ref={ref}>
        <div className="container">
          <div className="about__inner about__inner--reverse">
            <div className="about__text reveal">
              <p className="eyebrow teal">{t("matPropPage.mission.eyebrow")}</p>
              <h2 className="section-title">{t("matPropPage.mission.titre")}</h2>
              <p className="about__p">{t("matPropPage.mission.p1")}</p>
              <p className="about__p">{t("matPropPage.mission.p2")}</p>
              <p className="about__p">{t("matPropPage.mission.p3")}</p>
            </div>
            <div className="about__visual reveal" style={{ transitionDelay: "0.1s" }}>
              <img src={imageFor("propreté")} alt={t("matPropPage.mission.titre")} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="prop-confiance" style={{ background: "var(--black-2)" }} ref={ref}>
        <div className="container">
          <div className="me-engage__head reveal">
            <p className="eyebrow teal">{t("matPropPage.confiance.eyebrow")}</p>
            <h2 className="section-title">{t("matPropPage.confiance.titre")}</h2>
            <p>{t("matPropPage.confiance.intro")}</p>
            <p>{t("matPropPage.confiance.p2")}</p>
            <p>{t("matPropPage.confiance.p3")}</p>
            <h3 className="prop-confiance__listTitle">{t("matPropPage.confiance.listTitle")}</h3>
          </div>
          <div className="prop-confiance__grid">
            {t("matPropPage.confiance.list", { returnObjects: true }).map((item, i) => (
              <div className="prop-confiance__item reveal" key={i} style={{ transitionDelay: `${(i % 3) * 0.06}s` }}>
                <span className="prop-confiance__check">✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <p className="prop-confiance__note reveal">{t("matPropPage.confiance.note")}</p>
        </div>
      </section>

      <section className="prop-services">
        <div className="container">
          <p className="eyebrow teal reveal">{t("matPropPage.services.eyebrow")}</p>
          <h2 className="section-title reveal" style={{ color: "var(--prop-teal-light)" }}>
            {t("matPropPage.services.titre")}
          </h2>
          <div className="prop-confiance__grid">
            {t("matPropPage.services.list", { returnObjects: true }).map((item, i) => (
              <div className="prop-confiance__item prop-confiance__item--center reveal" key={i} style={{ transitionDelay: `${(i % 3) * 0.06}s` }}>
                <span className="prop-confiance__check">✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="prop-zones" style={{ background: "var(--black-2)" }}>
        <div className="container prop-zones__inner">
          <div className="reveal">
            <p className="eyebrow teal">{t("matPropPage.zones.eyebrow")}</p>
            <h2 className="section-title">{t("matPropPage.zones.titre")}</h2>
            <p className="prop-zones__text">{t("matPropPage.zones.text")}</p>
          </div>
        </div>
      </section>

      <section className="me-contact prop-contact" id="prop-contact">
        <div className="container">
          <div className="me-contact__card reveal">
            <p className="eyebrow teal">{t("matPropPage.contact.titre")}</p>
            <p className="me-contact__brand">Mat'Event / Mat'Prop</p>
            <p className="me-contact__address">{t("matPropPage.contact.address")}</p>
            <div className="me-contact__phones">
              {t("matPropPage.contact.phones", { returnObjects: true }).map((p, i) => (
                <a key={i} href={`tel:${p.replace(/[^0-9+]/g, "")}`}>{p}</a>
              ))}
            </div>
            <div className="me-contact__emails">
              {t("matPropPage.contact.emails", { returnObjects: true }).map((e, i) => (
                <a key={i} href={`mailto:${e}`}>{e}</a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="outro-cta outro-cta--prop">
        <div className="container outro-cta__inner">
          <div className="outro-cta__text">
            <p className="eyebrow teal">{t("matPropPage.reactivite.titre")}</p>
            <h2 className="outro-cta__title">{t("matPropPage.engagement.titre")}</h2>
            <p className="outro-cta__intro">{t("matPropPage.engagement.intro")}</p>
          </div>
          <div className="outro-cta__actions">
            <Link to="/#devis" className="btn btn--prop btn--lg">{t("nav.devis")}</Link>
            <Link to="/mat-event" className="btn btn--outline btn--lg">
              {t("universes.event.link")} →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
