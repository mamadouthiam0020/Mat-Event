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
            <a href="#" className="footer__social" aria-label="Instagram" target="_blank" rel="noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="currentColor" strokeWidth="1.8"/>
                <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8"/>
                <circle cx="17.2" cy="6.8" r="1.3" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" className="footer__social" aria-label="Facebook" target="_blank" rel="noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M14 8.5V6.8c0-.7.2-1.2 1.4-1.2H17V2.6h-2.4C11.6 2.6 11 4.9 11 6.9v1.6H8.5V12H11v9.4h3V12h2.4l.4-3.5H14z"/>
              </svg>
            </a>
            <a href="#" className="footer__social" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M6.5 9.2v8.9H3.4V9.2h3.1zM4.9 3c-1 0-1.9.8-1.9 1.9 0 1 .8 1.9 1.9 1.9 1.1 0 1.9-.9 1.9-1.9 0-1.1-.8-1.9-1.9-1.9zM9.6 9.2h3v1.2c.5-.8 1.6-1.5 3.1-1.5 2.9 0 3.9 1.8 3.9 4.4v4.8h-3.1v-4.3c0-1.5-.5-2.4-1.7-2.4-1.2 0-1.9.8-1.9 2.4v4.3H9.6V9.2z"/>
              </svg>
            </a>
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