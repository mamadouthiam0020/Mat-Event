import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const change = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("matevent-lang", lang);
  };

  const current = i18n.language;

  return (
    <div className="lang">
      <button
        className={`lang__btn ${current === "fr" ? "is-active" : ""}`}
        onClick={() => change("fr")}
        aria-label="Français"
      >
        FR
      </button>
      <span className="lang__sep">|</span>
      <button
        className={`lang__btn ${current === "en" ? "is-active" : ""}`}
        onClick={() => change("en")}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
