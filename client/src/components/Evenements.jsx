import React, { useMemo } from "react";
import { useReveal } from "../hooks/useReveal.js";

const DEFAULT_PHOTOS = [
  "/event-02.jpeg",
  "/event-04.jpeg",
  "/event-09.jpeg",
  "/event-11.jpeg",
  "/event-13.jpeg",
  "/event-15.jpeg",
  "/event-28.jpeg",
  "/event-29.jpeg",
  "/event-33.jpeg",
  "/event-36.jpeg",
  "/event-39.jpeg",
  "/event-42.jpeg",
];

const TRANSPORT_PHOTOS = [
  "/event-03.jpeg",
  "/event-05.jpeg",
  "/event-07.jpeg",
  "/event-08.jpeg",
  "/event-10.jpeg",
  "/event-12.jpeg",
  "/event-14.jpeg",
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Evenements({
  title,
  eyebrow,
  photos,
  count = 8,
  baseId = "galerie",
}) {
  const ref = useReveal();
  const pool = useMemo(
    () => (photos && photos.length ? photos : DEFAULT_PHOTOS),
    [photos]
  );
  const shown = useMemo(() => shuffle(pool).slice(0, count), [pool, count]);

  return (
    <section id={baseId} ref={ref} className="evenements">
      <div className="container">
        <p className="eyebrow gold reveal">{eyebrow || "Galerie"}</p>
        <h2 className="section-title reveal">
          {title || (
            <>
              Nos plus beaux <span className="gold">instants</span>
            </>
          )}
        </h2>

        <div className="evenements__gallery">
          {shown.map((src, i) => (
            <figure
              key={src}
              className={`gallery-photo reveal ${
                i % 5 === 0 ? "gallery-photo--wide" : ""
              }`}
              style={{ transitionDelay: `${(i % 4) * 0.06}s` }}
            >
              <img src={src} alt={`Galerie ${i + 1}`} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export { TRANSPORT_PHOTOS };
