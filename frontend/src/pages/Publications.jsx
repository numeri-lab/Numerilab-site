import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation.jsx";
import {
  articleALaUne,
  articlesSecondaires,
  toutesLesPublications,
  thematiques,
  formats
} from "../data/publicationsData.js";

// Illustration SVG du graphe de réseau (conforme à la maquette)
function NetworkGraphIllustration() {
  return (
    <div className="pub-network-illustration">
      <svg
        viewBox="0 0 460 170"
        className="pub-network-svg"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Fond adouci */}
        <rect width="460" height="170" rx="14" fill="#e8edf6" />

        {/* Lignes de liaison */}
        <polyline
          points="80,105 155,50 230,110 305,52 380,112"
          fill="none"
          stroke="#9bb0cf"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Nœuds du réseau */}
        {/* Nœud 1 - Bleu nuit */}
        <circle cx="80" cy="105" r="14" fill="#172d4f" />
        <circle cx="80" cy="105" r="7" fill="#2d4873" />

        {/* Nœud 2 - Violet de marque */}
        <circle cx="155" cy="50" r="14" fill="#882a94" />
        <circle cx="155" cy="50" r="7" fill="#be50cc" />

        {/* Nœud 3 - Bleu nuit */}
        <circle cx="230" cy="110" r="14" fill="#172d4f" />
        <circle cx="230" cy="110" r="7" fill="#2d4873" />

        {/* Nœud 4 - Violet de marque */}
        <circle cx="305" cy="52" r="14" fill="#882a94" />
        <circle cx="305" cy="52" r="7" fill="#be50cc" />

        {/* Nœud 5 - Bleu nuit */}
        <circle cx="380" cy="112" r="14" fill="#172d4f" />
        <circle cx="380" cy="112" r="7" fill="#2d4873" />
      </svg>
    </div>
  );
}

// Illustration SVG compacte pour les cartes secondaires
function SecondaryIconIllustration() {
  return (
    <div className="pub-secondary-icon-wrap">
      <svg viewBox="0 0 68 68" className="pub-secondary-svg" aria-hidden="true">
        <rect width="68" height="68" rx="12" fill="#e8edf6" />
        <line
          x1="18"
          y1="50"
          x2="50"
          y2="18"
          stroke="#882a94"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <circle cx="34" cy="34" r="8" fill="#172d4f" />
      </svg>
    </div>
  );
}

export default function Publications() {
  const [thematiqueActive, setThematiqueActive] = useState("Tous");
  const [formatActif, setFormatActif] = useState("Tous les formats");
  const [recherche, setRecherche] = useState("");

  // Filtrage des articles pour la section "Explorer"
  const articlesFiltres = toutesLesPublications.filter((article) => {
    const matchThematique =
      thematiqueActive === "Tous" || article.thematique === thematiqueActive;
    const matchFormat =
      formatActif === "Tous les formats" || article.format === formatActif;
    const matchRecherche =
      recherche === "" ||
      article.titre.toLowerCase().includes(recherche.toLowerCase()) ||
      article.chapo.toLowerCase().includes(recherche.toLowerCase());
    return matchThematique && matchFormat && matchRecherche;
  });

  return (
    <div className="publications-page-wrap">
      {/* 1. HERO ÉDITORIAL (BLEU NUIT DU CAHIER DES CHARGES) */}
      <header className="publications-hero-header">
        <Navigation />

        <div className="publications-hero-inner">
          <div className="cabinet-breadcrumb" role="navigation" aria-label="Fil d'Ariane">
            <Link to="/">Accueil</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Publications</span>
          </div>

          <small className="publications-eyebrow">PUBLICATIONS NUMERILAB</small>
          <h1 className="publications-main-title">
            Analyses, actualités & perspectives<span>.</span>
          </h1>
          <p className="publications-lead-subtitle">
            Un regard éclairé sur les technologies, l'ingénierie et les innovations qui transforment notre monde.
          </p>
        </div>
      </header>

      <main className="publications-main-content">
        {/* 2. SECTION « À LA UNE » (CONFORME À LA MAQUETTE) */}
        <section className="publications-alaune-section">
          <div className="section-title-wrap">
            <h2 className="publications-block-title">À la une</h2>
          </div>

          <div className="publications-alaune-grid">
            {/* CARTE PRINCIPALE (GAUCHE) -> OUVRE LA PAGE ARTICLE */}
            <Link
              to={`/publications/${articleALaUne.slug || articleALaUne.id}`}
              className="alaune-card-main"
              aria-label={`Lire l'article : ${articleALaUne.titre}`}
            >
              {articleALaUne.image ? (
                <div className="alaune-media-wrap">
                  <img
                    src={articleALaUne.image}
                    alt={articleALaUne.titre}
                    className="alaune-media-img"
                    loading="eager"
                  />
                </div>
              ) : (
                <NetworkGraphIllustration />
              )}

              <div className="alaune-main-body">
                <span className="alaune-kicker">
                  {articleALaUne.thematique.toUpperCase()} · {articleALaUne.format.toUpperCase()}
                </span>
                <h3 className="alaune-main-title">{articleALaUne.titre}</h3>
                <p className="alaune-main-chapo">{articleALaUne.chapo}</p>
                <div className="alaune-main-meta">
                  <span>Par {articleALaUne.auteur}</span>
                  <span className="meta-separator">•</span>
                  <span>{articleALaUne.tempsLecture}</span>
                  <span className="alaune-read-cta">Lire l'article →</span>
                </div>
              </div>
            </Link>

            {/* CARTES SECONDAIRES (DROITE) -> OUVRENT LA PAGE ARTICLE */}
            <div className="alaune-secondaires-col">
              {articlesSecondaires.map((art) => (
                <Link
                  key={art.id}
                  to={`/publications/${art.slug || art.id}`}
                  className="alaune-card-secondary"
                  aria-label={`Lire l'article : ${art.titre}`}
                >
                  {art.image ? (
                    <div className="alaune-secondary-thumb-wrap">
                      <img
                        src={art.image}
                        alt={art.titre}
                        className="alaune-secondary-thumb-img"
                        loading="eager"
                      />
                    </div>
                  ) : (
                    <SecondaryIconIllustration />
                  )}

                  <div className="alaune-secondary-content">
                    <span className="alaune-kicker">
                      {art.thematique.toUpperCase()}
                    </span>
                    <h3 className="alaune-secondary-title">{art.titre}</h3>
                    <div className="alaune-secondary-meta">
                      <span>{art.date}</span>
                      <span className="meta-separator">•</span>
                      <span>{art.tempsLecture}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 3. SECTION « EXPLORER LES PUBLICATIONS » */}
        <section className="publications-explorer-section">
          <div className="explorer-header">
            <h2 className="publications-block-title">Explorer les publications</h2>
          </div>

          {/* Barre de recherche (positionnée en premier, entre le titre et les filtres) */}
          <div className="explorer-search-wrap">
            <svg
              className="explorer-search-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Rechercher un article, un sujet, un mot-clé ou un auteur..."
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
              className="explorer-search-input"
              aria-label="Rechercher une publication"
            />
            {recherche && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setRecherche("")}
                aria-label="Effacer la recherche"
              >
                ×
              </button>
            )}
          </div>

          {/* Pastilles de filtrage par thématique en dessous */}
          <div className="explorer-pills-bar" aria-label="Filtrer par thématique">
            {thematiques.map((theme) => (
              <button
                key={theme}
                type="button"
                className={`explorer-pill-btn ${thematiqueActive === theme ? "active" : ""}`}
                onClick={() => setThematiqueActive(theme)}
              >
                {theme}
              </button>
            ))}
          </div>

          {/* Grille des articles explorables (3 colonnes) -> OUVRENT LA PAGE ARTICLE */}
          <div className="explorer-articles-grid">
            {articlesFiltres.length > 0 ? (
              articlesFiltres.map((item) => (
                <Link
                  key={item.id}
                  to={`/publications/${item.slug || item.id}`}
                  className="explorer-article-card"
                  aria-label={`Lire l'article : ${item.titre}`}
                >
                  {item.image && (
                    <div className="explorer-card-media-wrap">
                      <img
                        src={item.image}
                        alt={item.titre}
                        className="explorer-card-media-img"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="explorer-card-body">
                    <div className="explorer-card-top">
                      <span className="explorer-format-badge">
                        {item.format.toUpperCase()}
                      </span>
                      <span className="explorer-theme-badge">
                        {item.thematique}
                      </span>
                    </div>

                    <h3 className="explorer-card-title">{item.titre}</h3>
                    <p className="explorer-card-desc">{item.chapo}</p>

                    <div className="explorer-card-footer">
                      <span className="explorer-card-author">{item.auteur}</span>
                      <span className="explorer-read-link">Lire l'article →</span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="explorer-empty-box">
                <p>Aucune publication ne correspond à vos critères de recherche.</p>
                <button
                  type="button"
                  className="btn"
                  style={{ marginTop: "12px" }}
                  onClick={() => {
                    setThematiqueActive("Tous");
                    setFormatActif("Tous les formats");
                    setRecherche("");
                  }}
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        </section>

        {/* 4. BLOC NEWSLETTER & VEILLE TECHNOLOGIQUE (SECTION 15 DU CAHIER DES CHARGES) */}
        <section className="publications-newsletter-card">
          <div className="newsletter-text">
            <small className="section-eyebrow">VEILLE & PERSPECTIVES</small>
            <h3>Restez informé de nos prochaines publications</h3>
            <p>
              Recevez nos analyses trimestrielles, décryptages technologiques et retours d'expérience directement dans votre boîte mail. Aucun contenu commercial indésirable.
            </p>
          </div>
          <form
            className="newsletter-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Merci ! Vous recevrez nos prochaines publications.");
            }}
          >
            <input
              type="email"
              placeholder="Votre adresse email professionnelle"
              required
              className="newsletter-input"
            />
            <button type="submit" className="btn">
              S'inscrire
            </button>
          </form>
        </section>
      </main>

      {/* 5. PIED DE PAGE SOBRE DU SITE */}
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
