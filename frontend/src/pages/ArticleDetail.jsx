import React, { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Navigation from "../components/Navigation.jsx";
import { getArticleBySlug, tousLesArticles } from "../data/publicationsData.js";

export default function ArticleDetail() {
  const { slug } = useParams();
  const [copieLien, setCopieLien] = useState(false);

  const article = getArticleBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (article) {
      document.title = `${article.titre} · Publications NumeriLab`;
    }
  }, [slug, article]);

  if (!article) {
    return (
      <div className="article-not-found-page">
        <header className="publications-hero-header">
          <Navigation />
          <div className="publications-hero-inner">
            <h1 className="publications-main-title">Article introuvable<span>.</span></h1>
            <p className="publications-lead-subtitle">
              L'article que vous recherchez n'existe pas ou a été déplacé.
            </p>
            <div style={{ marginTop: "24px" }}>
              <Link to="/publications" className="btn">
                ← Retour aux publications
              </Link>
            </div>
          </div>
        </header>
      </div>
    );
  }

  // Articles similaires / associés (excluant l'article courant)
  const articlesAssocies = tousLesArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  const copierLienArticle = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopieLien(true);
    setTimeout(() => setCopieLien(false), 2500);
  };

  const lienWhatsApp =
    "https://wa.me/?text=" +
    encodeURIComponent(
      `À lire sur NumeriLab : "${article.titre}" - ${window.location.href}`
    );

  const lienLinkedIn =
    "https://www.linkedin.com/sharing/share-offsite/?url=" +
    encodeURIComponent(window.location.href);

  return (
    <div className="article-detail-page">
      {/* 1. HERO EN-TÊTE ÉDITORIAL DÉDIÉ (BLEU NUIT NUMERILAB) */}
      <header className="article-hero-header">
        <Navigation />

        <div className="article-hero-inner">
          <div className="article-breadcrumb" role="navigation" aria-label="Fil d'Ariane">
            <Link to="/">Accueil</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/publications">Publications</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-thematique">{article.thematique}</span>
          </div>

          <div className="article-hero-tags">
            <span className="article-tag-format">{article.format?.toUpperCase()}</span>
            <span className="article-tag-theme">{article.thematique?.toUpperCase()}</span>
          </div>

          <h1 className="article-main-h1">{article.titre}</h1>

          <p className="article-lead-chapo">{article.chapo}</p>

          <div className="article-author-bar">
            {article.auteurAvatar && (
              <img
                src={article.auteurAvatar}
                alt={article.auteur}
                className="article-author-avatar"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            )}
            <div className="article-author-info">
              <span className="author-name">{article.auteur}</span>
              <span className="author-role">{article.auteurRole || "Expert NumeriLab"}</span>
            </div>
            <div className="article-meta-details">
              <span>{article.date}</span>
              <span className="meta-sep">•</span>
              <span>{article.tempsLecture}</span>
            </div>
          </div>
        </div>
      </header>

      {/* BANNIÈRE VISUELLE PRINCIPALE DE L'ARTICLE */}
      {article.image && (
        <div className="article-cover-banner-wrap">
          <img
            src={article.image}
            alt={article.titre}
            className="article-cover-banner-img"
            loading="eager"
          />
        </div>
      )}

      {/* 2. CORPS PRINCIPAL DE L'ARTICLE */}
      <main className="article-main-body-container">
        {/* BLOC « L'ESSENTIEL » (SYNTHÈSE EN TÊTE DE LECTURE) */}
        {article.essentiel && article.essentiel.length > 0 && (
          <aside className="article-essentiel-box" aria-label="L'essentiel de l'article">
            <div className="essentiel-header">
              <span className="essentiel-icon" aria-hidden="true">💡</span>
              <h3>L'essentiel en quelques points</h3>
            </div>
            <ul className="essentiel-list">
              {article.essentiel.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </aside>
        )}

        {/* CONTENU TEXTUEL ET SOUS-TITRES */}
        <article className="article-reading-content">
          {article.sections && article.sections.length > 0 ? (
            article.sections.map((sec, i) => (
              <section key={i} className="article-content-section">
                <h2 className="article-section-title">{sec.titre}</h2>
                {sec.contenu.map((paragraphe, j) => (
                  <p key={j} className="article-paragraph">
                    {paragraphe}
                  </p>
                ))}
              </section>
            ))
          ) : article.contenu ? (
            <section className="article-content-section">
              {article.contenu.map((paragraphe, j) => (
                <p key={j} className="article-paragraph">
                  {paragraphe}
                </p>
              ))}
            </section>
          ) : null}

          {/* BLOC SOURCES & RÉFÉRENCES (SECTION 14 DU CAHIER DES CHARGES) */}
          {article.sources && article.sources.length > 0 && (
            <div className="article-sources-box">
              <h4 className="sources-title">Références & Sources documentaires</h4>
              <ul className="sources-list">
                {article.sources.map((src, idx) => (
                  <li key={idx}>
                    <span className="source-bullet">›</span> {src}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* FICHE AUTEUR & BOUTONS DE PARTAGE */}
          <footer className="article-end-footer">
            <div className="article-author-card">
              {article.auteurAvatar && (
                <img
                  src={article.auteurAvatar}
                  alt={article.auteur}
                  className="author-card-avatar"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              )}
              <div className="author-card-text">
                <small className="author-card-label">À PROPOS DE L'AUTEUR</small>
                <h4 className="author-card-name">{article.auteur}</h4>
                <p className="author-card-bio">
                  {article.auteurRole} au sein du cabinet NumeriLab. Spécialisé dans la conduite d'études techniques et l'accompagnement des organisations.
                </p>
              </div>
            </div>

            <div className="article-share-bar">
              <span className="share-label">Partager cet article :</span>
              <div className="share-buttons-group">
                <button
                  type="button"
                  className="share-btn share-copy"
                  onClick={copierLienArticle}
                >
                  {copieLien ? "✓ Lien copié" : "Copier le lien"}
                </button>
                <a
                  href={lienWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-btn share-whatsapp"
                >
                  WhatsApp
                </a>
                <a
                  href={lienLinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-btn share-linkedin"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="back-to-publications-wrap">
              <Link to="/publications" className="back-link">
                ← Revenir à l'ensemble des publications
              </Link>
            </div>
          </footer>
        </article>
      </main>

      {/* 3. SECTION « À LIRE ÉGALEMENT » (ARTICLES ASSOCIÉS) */}
      <section className="article-related-section">
        <div className="related-inner">
          <h2 className="related-heading">À lire également</h2>
          <div className="related-cards-grid">
            {articlesAssocies.map((rel) => (
              <Link
                key={rel.id}
                to={`/publications/${rel.slug || rel.id}`}
                className="related-article-card"
              >
                {rel.image && (
                  <div className="related-card-media-wrap">
                    <img
                      src={rel.image}
                      alt={rel.titre}
                      className="related-card-media-img"
                      loading="lazy"
                    />
                  </div>
                )}
                <span className="related-theme-tag">
                  {rel.thematique?.toUpperCase()}
                </span>
                <h3 className="related-card-title">{rel.titre}</h3>
                <p className="related-card-chapo">{rel.chapo}</p>
                <div className="related-card-meta">
                  <span>{rel.auteur}</span>
                  <span className="meta-sep">•</span>
                  <span>{rel.tempsLecture}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PIED DE PAGE SOBRE NUMERILAB */}
      <footer className="home-footer">
        <div className="home-footer-inner">
          <div className="footer-brand">
            <strong>NumeriLab</strong> — Cabinet d’ingénierie, de conseil et de solutions numériques
            <p className="footer-city">Bamako, Mali · numeri-lab.com</p>
          </div>
          <div className="footer-links">
            <Link to="/expertises">Expertises</Link>
            <Link to="/formations">Formations</Link>
            <Link to="/realisations">Réalisations</Link>
            <Link to="/publications">Publications</Link>
            <Link to="/notre-cabinet">Notre cabinet</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

