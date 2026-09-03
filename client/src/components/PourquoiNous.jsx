import React from "react";
import { useTranslation } from "react-i18next";
import { useReveal } from "../hooks/useReveal.js";
import Icon from "./Icon.jsx";

const ITEMS = [
  { icon: "Medal", key: "expertise" },
  { icon: "Handshake", key: "fiabilite" },
  { icon: "Gem", key: "qualite" },
  { icon: "RefreshCw", key: "flexibilite" },
  { icon: "Users", key: "accompagnement" },
];

export default function PourquoiNous() {
  const { t } = useTranslation();
  const ref = useReveal();

  return (
    <section ref={ref} className="pourquoi">
      <div className="container">
        <p className="eyebrow gold reveal">{t("pourquoi.eyebrow")}</p>
        <h2 className="section-title reveal">{t("pourquoi.titre")}</h2>

        <div className="pourquoi__grid">
          {ITEMS.map((item, i) => (
            <div
              key={item.key}
              className="pourquoi__item reveal"
              style={{ transitionDelay: `${Math.min(i, 3) * 0.05}s` }}
            >
              <span className="pourquoi__icon">
                <Icon name={item.icon} />
              </span>
              <h3 className="pourquoi__title">
                {t(`pourquoi.items.${item.key}.titre`)}
              </h3>
              <p className="pourquoi__text">
                {t(`pourquoi.items.${item.key}.texte`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
