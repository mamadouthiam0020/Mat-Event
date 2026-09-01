import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="navbar__logo">
            MAT<span className="logo-accent">'</span>EVENT
          </Link>
          <p>{t("footer.tagline")}</p>
          <div className="footer__brand-links">
            <a href="#" className="footer__social" aria-label="Instagram">IG</a>
            <a href="#" className="footer__social" aria-label="Facebook">FB</a>
            <a href="#" className="footer__social" aria-label="LinkedIn">LI</a>
          </div>
        </div>

        <div className="footer__col">
          <h4>{t("footer.contact")}</h4>
          <a href="mailto:informationsevent@gmail.com">informationsevent@gmail.com</a>
          <a href="tel:+221781788775">+221 78 178 87 75</a>
          <a href="tel:+331752364922">+33 7 52 36 49 22</a>
          <span>Dakar, Sénégal</span>
        </div>

        <div className="footer__col">
          <h4>{t("footer.services")}</h4>
          <Link to="/mat-event">{t("footer.matEvent")}</Link>
          <Link to="/mat-prop">{t("footer.matProp")}</Link>
          <Link to="/mat-event-transport">{t("footer.matTransport")}</Link>
        </div>

        <div className="footer__col">
          <h4>{t("footer.navigation")}</h4>
          <Link to="/">{t("nav.accueil")}</Link>
          <Link to="/a-propos">{t("nav.aPropos")}</Link>
          <Link to="/galerie">{t("nav.galerie")}</Link>
          <Link to="/blog">{t("nav.blog")}</Link>
          <Link to="/carriere">{t("nav.carriere")}</Link>
          <Link to="/#devis">{t("nav.devis")}</Link>
        </div>
      </div>

      <div className="footer__bottom container">
        <span>
          © {new Date().getFullYear()} MAT'EVENT — {t("footer.droits")}
        </span>
        <span>{t("footer.universes")}</span>
      </div>
    </footer>
  );
}