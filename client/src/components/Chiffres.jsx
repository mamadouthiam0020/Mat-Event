import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useReveal } from "../hooks/useReveal.js";

function AnimatedCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const num = parseInt(target.replace(/[^0-9]/g, ""), 10);
          const duration = 2000;
          const step = Math.ceil(num / (duration / 16));
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= num) {
              setCount(num);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  const prefix = target.startsWith("+") ? "+" : "";
  const displaySuffix = suffix || target.replace(/[0-9+]/g, "");

  return (
    <span ref={ref} className="stat__value">
      {prefix}{count}{displaySuffix}
    </span>
  );
}

export default function Chiffres() {
  const { t } = useTranslation();
  const ref = useReveal();

  const STATS = [
    { target: "50", suffix: "+", label: t("chiffres.evenements") },
    { target: "30", suffix: "+", label: t("chiffres.clients") },
    { target: "100", suffix: "+", label: t("chiffres.prestations") },
    { target: "100", suffix: "%", label: t("chiffres.engagement") },
  ];

  return (
    <section ref={ref} className="chiffres">
      <div className="container">
        <p className="eyebrow reveal">{t("chiffres.eyebrow")}</p>
        <h2 className="section-title reveal">{t("chiffres.titre")}</h2>

        <div className="chiffres__row">
          {STATS.map((s) => (
            <div key={s.label} className="stat reveal">
              <AnimatedCounter target={s.target} suffix={s.suffix} />
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
