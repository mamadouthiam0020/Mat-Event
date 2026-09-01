import React from "react";
import { useTranslation } from "react-i18next";
import { useReveal } from "../hooks/useReveal.js";

export default function Methode() {
  const { t } = useTranslation();
  const ref = useReveal();
  const STEPS = ["01", "02", "03", "04", "05"];

  return (
    <section id="methode" ref={ref} className="methode">
      <div className="container">
        <p className="eyebrow gold reveal">{t("methode.eyebrow")}</p>
        <h2 className="section-title reveal">{t("methode.titre")}</h2>

        <div className="methode__steps">
          {STEPS.map((num, i) => (
            <React.Fragment key={num}>
              <div className="step reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                <span className="step__num">{num}</span>
                <h3 className="step__title">{t(`methode.steps.${num}`)}</h3>
              </div>
              {i < STEPS.length - 1 && <div className="step__arrow">→</div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
