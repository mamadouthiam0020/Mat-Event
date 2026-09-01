import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import fr from "./locales/fr.js";
import en from "./locales/en.js";

const saved = localStorage.getItem("matevent-lang");

i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: fr },
    en: { translation: en },
  },
  lng: saved || "fr",
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
