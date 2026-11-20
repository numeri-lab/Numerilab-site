import React from "react";
import { Link, Navigate } from "react-router-dom";
import Navigation from "../components/Navigation.jsx";
import { expertisesData } from "../data/expertisesData.js";
import FormulaireCommercial from "../components/FormulaireCommercial.jsx";
import ProjectCard from "../components/ProjectCard.jsx";

export default function ExpertiseDetaillee({ domaineKey }) {
  const data = expertisesData[domaineKey];

  // Sécurité si la clé d'expertise n'existe pas
  if (!data) {
    return <Navigate to="/expertises" replace />;
  }

  return (
    <div className="expertise-detail-page">
      {/* 1. HERO AVEC IMAGE DE FOND SPÉCIFIQUE (COMME SUR L'ACCUEIL) */}
      <header
        id="accueil"
        className="hero-header expertise-hero-header"
        style={{
          background: `linear-gradient(90deg, rgba(19, 12, 38, 0.92), rgba(30, 17, 49, 0.72) 48%, rgba(20, 14, 31, 0.35)), url(${data.imageBg}) center 48%/cover`
        }}
      >
        <Navigation />

        <div className="hero expertise-hero-content">
          <div className="breadcrumb-nav">
            <Link to="/" className="breadcrumb-link">Accueil</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to="/expertises" className="breadcrumb-link">Expertises</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{data.titre}</span>
          </div>

          <small className="hero-kicker">
            <i></i> {data.kicker}
          </small>

          <h1 className="expertise-hero-h1">
            {data.heroTitre}<span>.</span>
          </h1>

          <p className="hero-lead">
            {data.heroPitch}
          </p>

          <div className="actions" style={{ marginTop: "28px" }}>
            <a className="btn" href="#contact-detail">
              {data.ctaTexte}
            </a>
            <a className="outline" href="#prestations-detail">
              Consulter nos prestations & livrables ↓
            </a>
          </div>
        </div>

        <div className="herofoot">
          <span>{data.pole}</span>
          <a href="#prestations-detail">Découvrir les livrables ↓</a>
        </div>
      </header>

      <main>
        {/* 2. PRESTATIONS CONCRÈTES & LIVRABLES ASSOCIÉS */}
        <section className="detail-prestations-section" id="prestations-detail">
          <div className="detail-container">
            <div className="section-intro-block">
              <small className="section-eyebrow">SERVICES & OFFRES</small>
              <h2>Des prestations conçues autour de vos objectifs<span>.</span></h2>
              <p className="section-description">{data.introPrestations}</p>
            </div>

            <div className="prestations-cards-grid">
              {data.prestations.map((presta, i) => (
                <div key={i} className="prestation-item-card">
                  <span className="prestation-index">0{i + 1}</span>
                  <h3 className="prestation-title">{presta.titre}</h3>
                  <p className="prestation-description">{presta.description}</p>
                  <div className="prestation-livrables-box">
                    <strong>Livrables associés :</strong>
                    <p>{presta.livrables}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. NOS RÉALISATIONS CONCRÈTES */}
        <section className="detail-realisations-section">
          <div className="detail-container">
            <div className="section-intro-block">
              <small className="section-eyebrow">RÉALISATIONS SUR LE TERRAIN</small>
              <h2>Des missions concrètes qui illustrent notre savoir-faire<span>.</span></h2>
              <p className="section-description">
                Exemples de missions d'études et d'ingénierie conduites par notre cabinet. Seuls les projets réels documentés sont présentés.
              </p>
            </div>

            <div className="realisations-cards-grid">
              {data.realisations && data.realisations.length > 0 ? (
                data.realisations.map((proj, idx) => (
                  <ProjectCard key={idx} projet={proj} showDomainLink={false} />
                ))
              ) : (
                <div className="realisations-pending-card">
                  <h4>Références en cours de documentation</h4>
                  <p>
                    Les projets de ce domaine font l'objet d'accords de confidentialité ou sont en phase de validation finale. Contactez directement nos ingénieurs pour obtenir des cas similaires anonymisés.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 4. LIVRABLES REMIS AU CLIENT */}
        <section className="detail-livrables-synthese">
          <div className="detail-container">
            <div className="livrables-synthese-card">
              <div className="livrables-text">
                <small className="section-eyebrow">LIVRABLES CONTRACTUELS</small>
                <h3>Ce que nous vous remettons à la livraison de la mission</h3>
                <p>
                  Chaque mission fait l’objet d'une restitution soignée, exploitable immédiatement par vos équipes et vos partenaires.
                </p>
              </div>
              <ul className="livrables-checklist">
                {data.livrablesSynthese.map((liv, idx) => (
                  <li key={idx}>
                    <span className="check-bullet">✓</span> {liv}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 5. FORMULAIRE COMMERCIAL AVEC DOMAINE PRÉ-SÉLECTIONNÉ */}
        <FormulaireCommercial
          id="contact-detail"
          domaineInitial={data.titre}
          titreZone={data.titreFormulaire}
          descriptionZone={`Transmettez-nous les éléments de votre projet en ${data.titre}. Notre équipe vous contacte pour organiser un premier échange technique d'évaluation.`}
        />
      </main>

      {/* Pied de page sobre */}
      <footer className="home-footer">
        <div className="home-footer-inner">
          <div className="footer-brand">
            <strong>NumeriLab</strong> — {data.titre} ({data.pole})
            <p className="footer-city">numeri-lab.com</p>
          </div>
          <div className="footer-links">
            <Link to="/expertises">Toutes les expertises</Link>
            <Link to="/formations">Formations</Link>
            <Link to="/realisations">Réalisations</Link>
            <Link to="/notre-cabinet">Notre cabinet</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
