const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

async function request(path, options = {}) {
  const isForm = options.body instanceof FormData;
  const headers = isForm ? options.headers : { "Content-Type": "application/json" };
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers,
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Erreur ${res.status}`);
  }

  return res.json();
}

export const api = {
  sendContact: (payload) =>
    request("/contacts", { method: "POST", body: JSON.stringify(payload) }),
  getEvents: () => request("/events"),
  getTestimonials: () => request("/testimonials"),
  getGallery: (category = "tout") =>
    request(`/gallery${category !== "tout" ? `?category=${category}` : ""}`),
  getBlog: (category = "tout") =>
    request(`/blog${category !== "tout" ? `?category=${category}` : ""}`),
  getBlogPost: (slug) => request(`/blog/${slug}`),
  getJobs: () => request("/jobs"),
  sendApplication: (formData) =>
    request("/applications", {
      method: "POST",
      body: formData,
      headers: {}, // FormData définit son propre Content-Type
    }),
};
