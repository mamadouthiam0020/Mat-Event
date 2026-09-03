import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { api } from "../api.js";
import { useReveal } from "../hooks/useReveal.js";
import Icon from "./Icon.jsx";

export default function Temoignages() {
  const { t } = useTranslation();
  const ref = useReveal();
  const gridRef = useRef(null);
  const [list, setList] = useState([]);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-inview");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    api
      .getTestimonials()
      .then((res) => {
        if (res.success && res.data.length)
          setList(
            res.data.map((x) => ({
              name: x.name,
              content: x.content,
              role: x.role,
            }))
          );
      })
      .catch(() => {});
  }, []);

  const items = list;

  const getInitials = (name) => {
    const parts = name.split(" ");
    return parts.length > 1 ? parts[0][0] + parts[1][0] : parts[0][0];
  };

  if (!items.length) return null;

  return (
    <section ref={ref} className="temoignages">
      <div className="container">
        <p className="eyebrow gold reveal">{t("temoignages.eyebrow")}</p>
        <h2 className="section-title reveal">{t("temoignages.titre")}</h2>

        <div ref={gridRef} className="temoignages__grid">
          {items.map((x, i) => (
            <blockquote
              key={x.name + i}
              className="quote"
              style={{ animationDelay: `${(i % 3) * 0.08}s` }}
            >
              <p className="quote__stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="Star" fill="currentColor" strokeWidth={0} />
                ))}
              </p>
              <p className="quote__text">"{x.content}"</p>
              <footer className="quote__author">
                <div className="quote__avatar">{getInitials(x.name)}</div>
                <div className="quote__author-info">
                  <strong>{x.name}</strong>
                  <span>{x.role}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}