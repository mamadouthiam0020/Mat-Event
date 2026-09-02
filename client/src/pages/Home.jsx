import React from "react";
import Hero from "../components/Hero.jsx";
import ExpertisesPremium from "../components/ExpertisesPremium.jsx";
import Evenements from "../components/Evenements.jsx";
import Chiffres from "../components/Chiffres.jsx";
import PourquoiNous from "../components/PourquoiNous.jsx";
import Secteurs from "../components/Secteurs.jsx";
import Temoignages from "../components/Temoignages.jsx";
import Cta from "../components/Cta.jsx";
import { useSEO } from "../hooks/useSEO.js";

export default function Home() {
  useSEO({
    title:
      "MAT'EVENT — Événementiel, Communication & Organisation au Sénégal",
    description:
      "Mat'Event accompagne les entreprises et institutions du Sénégal dans l'organisation de leurs événements, leur communication et leurs besoins en prestations professionnelles.",
  });

  return (
    <>
      <Hero />
      <ExpertisesPremium />
      <Evenements />
      <Chiffres />
      <PourquoiNous />
      <Secteurs />
      <Temoignages />
      <Cta />
    </>
  );
}
