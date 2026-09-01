import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { api } from "../api.js";
import { useSEO } from "../hooks/useSEO.js";
import { useReveal } from "../hooks/useReveal.js";

const FALLBACK_JOBS = ["chef-projet", "charge-comm", "decoration"];

export default function Carriere() {
  const { t } = useTranslation();
  const ref = useReveal();
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    cv: null,
  });
  const [status, setStatus] = useState("idle");

  useSEO({
    title: "Carrière",
    description:
      "Rejoignez MAT'EVENT, agence événementielle à Dakar. Découvrez nos offres d'emploi et déposez votre candidature.",
  });

  useEffect(() => {
    api
      .getJobs()
      .then((res) => {
        if (res.success && res.data.length) setJobs(res.data);
      })
      .catch(() => {});
  }, []);

  const jobsList = jobs.length ? jobs : FALLBACK_JOBS.map((key) => ({
    key,
    title: t(`carriere.postes.${key}.titre`),
    type: t(`carriere.postes.${key}.type`),
    description: t(`carriere.postes.${key}.description`),
  }));

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const fd = new FormData();
    fd.append("name", form.name);
    fd.append("email", form.email);
    fd.append("phone", form.phone);
    fd.append("position", form.position);
    fd.append("message", form.message);
    if (form.cv) fd.append("cv", form.cv);

    try {
      await api.sendApplication(fd);
      setStatus("success");
      setForm({ name: "", email: "", phone: "", position: "", message: "", cv: null });
      e.target.reset();
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="page-header carriere" ref={ref}>
      <div className="container">
        <p className="eyebrow gold reveal">{t("carriere.eyebrow")}</p>
        <h1 className="section-title reveal">{t("carriere.titre")}</h1>
        <p className="page-sub reveal">{t("carriere.sousTitre")}</p>

        <div className="jobs__grid">
          {jobsList.map((job, i) => (
            <div
              key={job.key || job.title}
              className="job reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <h2 className="job__title">{job.title}</h2>
              <span className="job__type">{job.type}</span>
              <p className="job__desc">{job.description}</p>
              <button
                className="btn btn--gold"
                onClick={() => {
                  document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t("carriere.offre.postuler")}
              </button>
            </div>
          ))}
        </div>

        {!jobs.length && (
          <p className="jobs__empty">{t("carriere.offre.aucun")}</p>
        )}

        <div id="apply-form" className="apply">
          <h2 className="apply__title">{t("carriere.formulaire.titre")}</h2>

          <form className="apply__form" onSubmit={submit}>
            <div className="form__row">
              <input
                name="name"
                required
                placeholder={t("carriere.formulaire.nom")}
                value={form.name}
                onChange={update}
              />
              <input
                name="email"
                type="email"
                required
                placeholder={t("carriere.formulaire.email")}
                value={form.email}
                onChange={update}
              />
            </div>
            <div className="form__row">
              <input
                name="phone"
                placeholder={t("carriere.formulaire.telephone")}
                value={form.phone}
                onChange={update}
              />
              <select
                name="position"
                value={form.position}
                onChange={update}
              >
                <option value="">{t("carriere.formulaire.selection")}</option>
                {jobsList.map((job) => (
                  <option key={job.key || job.title} value={job.title}>
                    {job.title}
                  </option>
                ))}
              </select>
            </div>

            <label className="file-field">
              <span className="file-field__label">
                {t("carriere.formulaire.fichier")}
              </span>
              <input
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.webp"
                onChange={(e) =>
                  setForm({ ...form, cv: e.target.files[0] || null })
                }
              />
              <small className="file-field__info">
                {t("carriere.formulaire.fichierInfo")}
              </small>
            </label>

            <textarea
              name="message"
              rows="4"
              placeholder={t("carriere.formulaire.message")}
              value={form.message}
              onChange={update}
            />

            <button
              type="submit"
              className="btn btn--gold btn--lg"
              disabled={status === "loading"}
            >
              {status === "loading"
                ? t("carriere.formulaire.envoi")
                : t("carriere.formulaire.envoyer")}
            </button>

            {status === "success" && (
              <p className="form__msg form__msg--ok">
                {t("carriere.formulaire.succes")}
              </p>
            )}
            {status === "error" && (
              <p className="form__msg form__msg--err">
                {t("carriere.formulaire.erreur")}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
