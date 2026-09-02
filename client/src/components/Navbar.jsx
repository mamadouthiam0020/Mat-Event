import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher.jsx";

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo">
          MAT<span className="logo-accent">'</span>EVENT
        </Link>

        <nav className={`navbar__menu ${open ? "is-open" : ""}`}>
          <Link to="/" className="navbar__link" onClick={() => setOpen(false)}>
            {t("nav.accueil")}
          </Link>

          <Link
            to="/a-propos"
            className={`navbar__link ${location.pathname === "/a-propos" ? "is-active" : ""}`}
          >
            {t("nav.aPropos")}
          </Link>

          <Link
            to="/mat-event"
            className={`navbar__link ${location.pathname === "/mat-event" ? "is-active" : ""}`}
          >
            {t("nav.matEvent")}
          </Link>

          <Link
            to="/mat-event-transport"
            className={`navbar__link ${location.pathname === "/mat-event-transport" ? "is-active" : ""}`}
          >
            {t("nav.transport")}
          </Link>

          <Link
            to="/mat-prop"
            className={`navbar__link ${location.pathname === "/mat-prop" ? "is-active" : ""}`}
          >
            {t("nav.matProp")}
          </Link>

          <div className="navbar__lang">
            <LanguageSwitcher />
          </div>

          <Link to="/#devis" className="navbar__cta btn btn--gold" onClick={() => setOpen(false)}>
            {t("nav.devis")}
          </Link>
        </nav>

        <button
          className={`navbar__toggle ${open ? "is-open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={t("common.menu")}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
