import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolle en haut à chaque changement de route, ou vers l'ancre si présente.
export default function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      // Attendre le rendu de la page
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 60);
        } else {
          window.scrollTo(0, 0);
        }
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return null;
}
