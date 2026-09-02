const UNSPLASH = {
  hero: "/event-57.jpeg",
  mariage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
  corporate: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
  conference: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80",
  soiree: "https://images.unsplash.com/photo-1545224144-b380b2a0f1e0?auto=format&fit=crop&w=900&q=80",
  decoration: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80",
  emotion: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
  elegance: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
  savoir: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=80",

  // Mat'Event specific
  eventHero: "/event-38.jpeg",
  histoire: "/event-51.jpeg",
  quiSommesNous: "/event-25.jpeg",
  aproposHero: "/event-13.jpeg",
  seminaire: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80",
  congres: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=80",
  hostes: "https://images.unsplash.com/photo-1573406219951-3f495b3fda83?auto=format&fit=crop&w=900&q=80",
  mannequins: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
  communication: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",

  // Mat'Prop specific
  propHero: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=2000&q=80",
  bureaux: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
  entretien: "https://images.unsplash.com/photo-1527515637462-cff94eebc9b3?auto=format&fit=crop&w=900&q=80",
  nettoyage: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=900&q=80",
  locaux: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
  propreté: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=900&q=80",

  // Transport specific
  transportHero: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=2000&q=80",
  transport1: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80",
  transport2: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=900&q=80",
  transport3: "https://images.unsplash.com/photo-1549317661-bd32c8ce0abb?auto=format&fit=crop&w=900&q=80",

  // Réalisations
  realisation1: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
  realisation2: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80",
  realisation3: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80",
  realisation4: "https://images.unsplash.com/photo-1545224144-b380b2a0f1e0?auto=format&fit=crop&w=900&q=80",
  realisation5: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
  realisation6: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
  realisation7: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80",
};

const FALLBACK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='1200'>
      <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0' stop-color='#7a5b91'/><stop offset='1' stop-color='#0c0a10'/>
      </linearGradient></defs>
      <rect width='100%' height='100%' fill='url(#g)'/>
      <text x='50%' y='50%' fill='#d6c2e3' font-family='serif' font-size='48'
        text-anchor='middle'>MAT'EVENT</text>
    </svg>`
  );

export function imageFor(key, seed) {
  if (UNSPLASH[key]) return UNSPLASH[key];
  return `https://picsum.photos/seed/${encodeURIComponent(key || seed || "matevent")}/900/1200`;
}

export function onImgError(e) {
  if (e.currentTarget.dataset.fallbackApplied) return;
  e.currentTarget.dataset.fallbackApplied = "1";
  e.currentTarget.src = FALLBACK;
}

export const picsum = (seed, w = 900, h = 1100) =>
  `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`;
