import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard.jsx";
import FormulaireCommercial from "../components/FormulaireCommercial.jsx";
import { toutesLesRealisations } from "../data/expertisesData.js";

export default function Realisations() {
  const [filtreActif, setFiltreActif] = useState("tous");

  const filtres = [
    {
      id: "tous",
      label: "Toutes les expertises",
      count: toutesLesRealisations.length
    },
    {
      id: "genie-civil",
      label: "Génie civil",
      count: toutesLesRealisations.filter((p) => p.domaineSlug === "genie-civil").length
    },
    {
      id: "hydraulique",
      label: "Hydraulique",
      count: toutesLesRealisations.filter((p) => p.domaineSlug === "hydraulique").length
    },
    {
      id: "ia-automatisation",
      label: "IA & Automatisation",
      count: toutesLesRealisations.filter((p) => p.domaineSlug === "ia-automatisation").length
    },
    {
      id: "digitalisation",
      label: "Digitalisation",
      count: toutesLesRealisations.filter((p) => p.domaineSlug === "digitalisation").length
    }
  ];

  const projetsAffiches =
    filtreActif === "tous"
      ? toutesLesRealisations
      : toutesLesRealisations.filter((p) => p.domaineSlug === filtreActif);

  const domainePreselectionne =
    {
      "genie-civil": "Génie civil",
      hydraulique: "Hydraulique",
      "ia-automatisation": "IA & Automatisation",
      digitalisation: "Digitalisation"
    }[filtreActif] || "";

  return (
    <div className="realisations-page">
      {/* 1. EN-TÊTE & INTRODUCTION ÉDITORIALE */}
      <section className="realisations-intro-header">
        <small className="section-eyebrow">PORTFOLIO & ÉTUDES DE CAS</small>
        <h2>Des missions concrètes qui illustrent notre rigueur technique<span>.</span></h2>
        <p className="lead-text">
          Découvrez une sélection de projets réels conduits par notre équipe d’ingénieurs en génie civil, hydraulique, intelligence artificielle et digitalisation. Chaque étude repose sur des données vérifiées, des calculs normés et des livrables exploitables immédiatement.
        </p>

        <div className="realisations-badges-row">
          <span className="reassurance-pill">
            <span className="reassurance-pill-check">✓</span> 100% Projets réels documentés
          </span>
          <span className="reassurance-pill">
            <span className="reassurance-pill-check">✓</span> Résultats mesurés et vérifiables
          </span>
          <span className="reassurance-pill">
            <span className="reassurance-pill-check">✓</span> Respect strict du secret d’affaires
          </span>
        </div>
      </section>

      {/* 2. BARRE DE FILTRES PAR DOMAINE */}
      <section className="realisations-filters-bar" aria-label="Filtrer les réalisations par domaine">
        {filtres.map((f) => (
          <button
            key={f.id}
            type="button"
            className={`filter-tab-btn ${filtreActif === f.id ? "active" : ""}`}
            onClick={() => setFiltreActif(f.id)}
          >
            <span>{f.label}</span>
            <span className="filter-tab-count">{f.count}</span>
          </button>
        ))}
      </section>

      {/* 3. GRILLE DES RÉALISATIONS (PROJECTCARD) */}
      <section className="realisations-grid-section">
        {projetsAffiches.length > 0 ? (
          <div className="realisations-portfolio-grid">
            {projetsAffiches.map((projet) => (
              <ProjectCard key={projet.id} projet={projet} showDomainLink={true} />
            ))}
          </div>
        ) : (
          <div className="realisations-pending-card">
            <h4>Aucun projet public dans cette catégorie pour le moment</h4>
            <p>
              Les projets récents de cette thématique sont actuellement en phase d’exploitation ou protégés par des accords de non-divulgation. Contactez nos ingénieurs pour obtenir des cas similaires anonymisés.
            </p>
          </div>
        )}
      </section>

      {/* 4. BLOC DE RÉASSURANCE / DÉONTOLOGIE & PROJETS CONFIDENTIELS */}
      <section className="realisations-confidentialite-card">
        <div className="confidentialite-text">
          <small className="section-eyebrow">DÉONTOLOGIE & CONFIDENTIALITÉ</small>
          <h3>Vous recherchez une référence spécifique à votre secteur ?</h3>
          <p>
            Conformément aux exigences de NumeriLab, aucun projet fictif, visuel de démonstration déguisé ni chiffre inventé n’est présenté comme une réalisation du cabinet. Certaines études de structures sensibles, dimensionnements stratégiques ou architectures de données restent confidentielles. Nos ingénieurs peuvent vous présenter des références comparables lors d’un premier échange d’évaluation.
          </p>
        </div>
        <div className="confidentialite-actions">
          <a href="#contact-realisations" className="btn">
            Présenter votre projet
          </a>
          <a
            href="https://wa.me/22376547591?text=Bonjour%20NumeriLab,%20je%20souhaite%20consulter%20des%20r%C3%A9f%C3%A9rences%20compl%C3%A9mentaires%20sur%20vos%20r%C3%A9alisations."
            target="_blank"
            rel="noopener noreferrer"
            className="outline"
            style={{ borderColor: "#882a94", color: "#21182f" }}
          >
            Échanger via WhatsApp
          </a>
        </div>
      </section>

      {/* 5. FORMULAIRE COMMERCIAL PARTAGÉ */}
      <FormulaireCommercial
        id="contact-realisations"
        domaineInitial={domainePreselectionne}
        titreZone="Vous avez un projet similaire ? Parlons-en."
        descriptionZone="Présentez-nous votre besoin en quelques lignes. Notre équipe d'ingénieurs prendra contact avec vous pour comprendre vos contraintes et envisager un accompagnement adapté."
      />

      {/* 6. PIED DE PAGE SOBRE */}
      <footer className="home-footer" style={{ margin: "50px -7% -70px -7%" }}>
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
