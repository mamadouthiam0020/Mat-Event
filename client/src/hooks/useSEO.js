import { useEffect } from "react";

// SEO dynamique : met à jour title, meta description et Open Graph.
export function useSEO({ title, description }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | MAT'EVENT`
      : "MAT'EVENT — Agence événementielle à Dakar";

    document.title = fullTitle;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description || "";

    let og = document.querySelector('meta[property="og:title"]');
    if (!og) {
      og = document.createElement("meta");
      og.setAttribute("property", "og:title");
      document.head.appendChild(og);
    }
    og.content = fullTitle;

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = description || "";
  }, [title, description]);
}
