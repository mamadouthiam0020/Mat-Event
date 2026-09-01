import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { api } from "../api.js";

export default function Cta() {
  const { t } = useTranslation();
  const [needType, setNeedType] = useState("matevent");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    date: "",
    budget: "",
    location: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleNeedType = (type) => {
    setNeedType(type);
    setForm({ ...form, serviceType: "" });
  };

  const serviceGroups = {
    matevent: t("cta.services.matevent.options", { returnObjects: true }),
    matprop: t("cta.services.matprop.options", { returnObjects: true }),
    mattransport: t("cta.services.mattransport.options", { returnObjects: true }),
  };

  const serviceOptions =
    needType === "both"
      ? { ...serviceGroups.matevent, ...serviceGroups.matprop, ...serviceGroups.mattransport }
      : serviceGroups[needType] || {};

  const serviceLabel =
    needType === "both"
      ? t("cta.services.all.label")
      : t(`cta.services.${needType}.label`);

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await api.sendContact({
        name: form.name,
        email: form.email,
        phone: form.phone,
        company: form.company,
        type: needType,
        serviceType: form.serviceType,
        date: form.date,
        budget: form.budget,
        location: form.location,
        message: form.message,
      });
      setStatus("success");
      setForm({ name: "", email: "", phone: "", company: "", serviceType: "", date: "", budget: "", location: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  const isProp = needType === "matprop";

  return (
    <section id="devis" className="cta">
      <div className="container">
        <div className="cta__wrapper">
          <h2 className="cta__title">
            {t("cta.titre")}{" "}
            <span className="gold">{t("cta.titreAccent")}</span>
            {t("cta.question")}
          </h2>
          <p className="cta__subtitle">{t("cta.soustitre")}</p>

          <div className="cta__type-selector">
            {["matevent", "matprop", "mattransport", "both"].map((type) => (
              <button
                key={type}
                type="button"
                className={`cta__type-btn ${needType === type ? (type === "matprop" ? "is-active-prop" : "is-active") : ""}`}
                onClick={() => handleNeedType(type)}
              >
                {t(`cta.typeSelector.options.${type}`)}
              </button>
            ))}
          </div>

          <form className="cta__form" onSubmit={submit}>
            <div className="form__row">
              <input
                name="name"
                required
                placeholder={t("cta.placeholder.nom")}
                value={form.name}
                onChange={update}
              />
              <input
                name="email"
                type="email"
                required
                placeholder={t("cta.placeholder.email")}
                value={form.email}
                onChange={update}
              />
            </div>
            <div className="form__row">
              <input
                name="phone"
                placeholder={t("cta.placeholder.telephone")}
                value={form.phone}
                onChange={update}
              />
              <input
                name="company"
                placeholder={t("cta.placeholder.entreprise")}
                value={form.company}
                onChange={update}
              />
            </div>
            <div className="form__row">
              <select
                name="serviceType"
                value={form.serviceType}
                onChange={update}
                required
              >
                <option value="">{serviceLabel}</option>
                {Object.entries(serviceOptions).map(([key, label]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
              <input
                name="date"
                type="date"
                placeholder={t("cta.placeholder.date")}
                value={form.date}
                onChange={update}
              />
            </div>
            <div className="form__row">
              <input
                name="budget"
                placeholder={t("cta.placeholder.budget")}
                value={form.budget}
                onChange={update}
              />
              <input
                name="location"
                placeholder={t("cta.placeholder.localisation")}
                value={form.location}
                onChange={update}
              />
            </div>
            <textarea
              name="message"
              required
              rows="4"
              placeholder={t("cta.placeholder.message")}
              value={form.message}
              onChange={update}
            />

            <button
              type="submit"
              className={`btn ${isProp ? "btn--prop" : "btn--gold"} btn--lg`}
              disabled={status === "loading"}
            >
              {status === "loading" ? t("cta.envoi") : t("cta.envoyer")}
            </button>

            {status === "success" && (
              <p className="form__msg form__msg--ok">{t("cta.succes")}</p>
            )}
            {status === "error" && (
              <p className="form__msg form__msg--err">{t("cta.erreur")}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
