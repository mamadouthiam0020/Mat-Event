import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher.jsx";

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const goSection = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    if (onHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  const matEventServices = [
    t("expertises.items.evenementiel.titre"),
    t("expertises.items.communication.titre"),
    t("expertises.items.organisation.titre"),
    t("expertises.items.seminaires.titre"),
    t("expertises.items.hostes.titre"),
    t("expertises.items.mannequins.titre"),
  ];

  const matPropServices = [
    t("propServices.items.bureaux.titre"),
    t("propServices.items.espaces.titre"),
    t("propServices.items.administratifs.titre"),
    t("propServices.items.apresEvent.titre"),
  ];

  const matTransportServices = [
    t("transportPage.services.list.0.titre"),
    t("transportPage.services.list.1.titre"),
    t("transportPage.services.list.2.titre"),
    t("transportPage.services.list.3.titre"),
    t("transportPage.services.list.4.titre"),
    t("transportPage.services.list.5.titre"),
  ];

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

          <div className="navbar__item">
            <span className="navbar__link">{t("nav.expertises")}</span>
            <div className="mega-menu">
              <div className="mega-menu__col">
                <h4>Mat'Event</h4>
                {matEventServices.map((s) => (
                  <a key={s} href="#expertises" onClick={goSection("expertises")}>
                    {s}
                  </a>
                ))}
              </div>
              <div className="mega-menu__col mega-menu__col--prop">
                <h4>Mat'Prop</h4>
                {matPropServices.map((s) => (
                  <a key={s} href="#prop-services" onClick={goSection("prop-services")}>
                    {s}
                  </a>
                ))}
              </div>
              <div className="mega-menu__col mega-menu__col--transport">
                <h4>Mat'Transport</h4>
                {matTransportServices.map((s) => (
                  <Link key={s} to="/mat-event-transport" onClick={() => setOpen(false)}>
                    {s}
                  </Link>
                ))}
              </div>
            </div>
          </div>

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
