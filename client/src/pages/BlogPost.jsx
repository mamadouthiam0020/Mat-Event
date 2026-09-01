import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { api } from "../api.js";
import { onImgError, picsum } from "../lib/images.js";
import { useSEO } from "../hooks/useSEO.js";
import Markdown from "../components/Markdown.jsx";

export default function BlogPost() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const [post, setPost] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useSEO({
    title: post ? post.title : "Article",
    description: post ? post.excerpt : "",
  });

  useEffect(() => {
    setPost(null);
    setNotFound(false);
    api
      .getBlogPost(slug)
      .then((res) => setPost(res.data))
      .catch(() => setNotFound(true));
  }, [slug]);

  if (notFound) {
    return (
      <section className="page-header">
        <div className="container">
          <h1 className="section-title">{t("blog.nonTrouve")}</h1>
          <Link to="/blog" className="btn btn--gold">
            {t("blog.retour")}
          </Link>
        </div>
      </section>
    );
  }

  if (!post) {
    return (
      <section className="page-header">
        <div className="container">
          <div className="loading">…</div>
        </div>
      </section>
    );
  }

  const date = post.date
    ? new Date(post.date).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <article className="page-header post-page">
      <div className="container container--narrow">
        <Link to="/blog" className="post-page__back">
          ← {t("blog.retour")}
        </Link>

        <h1 className="post-page__title">{post.title}</h1>
        <div className="post-page__meta">
          <span>
            {t("blog.auteur")} {post.author}
          </span>
          {date && <span>{date}</span>}
          <span>{t(`blog.categories.${post.category}`)}</span>
        </div>

        {post.cover && (
          <div className="post-page__cover">
            <img src={post.cover} alt={post.title} onError={onImgError} />
          </div>
        )}

        <Markdown text={post.body} />

        <div className="post-page__nav">
          <Link to="/blog" className="btn btn--gold">
            {t("blog.retour")}
          </Link>
        </div>
      </div>
    </article>
  );
}
