import { useEffect, useRef } from "react";

// Révélation au scroll (IntersectionObserver).
// Observe tous les éléments `.reveal` du document (pas seulement les enfants
// du ref), y compris ceux ajoutés plus tard par un rendu asynchrone (API).
// Révele immédiatement tout élément déjà visible à l'écran pour éviter les
// zones vides en haut de page. L'observateur étant idempotent, l'usage
// parallèle de plusieurs hooks est sans risque (même en StrictMode).
export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    let raf = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-inview");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -6% 0px" }
    );

    const scan = () => {
      const vh = window.innerHeight;
      const nodes = document.querySelectorAll(".reveal:not(.is-inview)");
      for (const node of nodes) {
        const rect = node.getBoundingClientRect();
        if (rect.top < vh && rect.bottom > 0) {
          node.classList.add("is-inview");
        } else {
          observer.observe(node);
        }
      }
    };

    const schedule = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        scan();
      });
    };

    const mo = new MutationObserver(schedule);
    mo.observe(document.body, { childList: true, subtree: true });

    scan();

    return () => {
      observer.disconnect();
      mo.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return ref;
}