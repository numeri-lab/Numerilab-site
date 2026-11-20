import React from "react";
import { Link } from "react-router-dom";
import { expertisesList } from "../routes.js";
import FormulaireCommercial from "../components/FormulaireCommercial.jsx";

export default function Expertises() {
  const faqItems = [
    {
      q: "Qui réalise les missions ?",
      r: "Des ingénieurs et spécialistes mobilisés selon les compétences requises, avec un responsable de mission identifié."
    },
    {
      q: "Comment obtenir une proposition ?",
      r: "Après un premier échange pour préciser le besoin, NumeriLab établit une proposition technique et financière adaptée."
    },
    {
      q: "Quels livrables sont remis ?",
      r: "Selon le projet : plans, notes de calcul, rapports, DQE, applications, assistants IA, tableaux de bord ou documentation ; la liste est précisée contractuellement."
    },
    {
      q: "Intervenez-vous hors de Bamako ?",
      r: "Certaines prestations peuvent être réalisées à distance ; d’autres exigent une intervention sur site. Les modalités sont définies selon le projet."
    }
  ];

  const demarches = [
    {
      step: "01",
      titre: "Analyse du besoin",
      desc: "Nous échangeons avec vous pour comprendre vos objectifs, vos contraintes et le périmètre de la mission."
    },
    {
      step: "02",
      titre: "Proposition technique et financière",
      desc: "Nous précisons les prestations envisagées, les livrables, les délais prévisionnels et les conditions de réalisation."
    },
    {
      step: "03",
      titre: "Réalisation de la mission",
      desc: "Nos ingénieurs et spécialistes conduisent les études ou développent les solutions prévues, avec un suivi adapté."
    },
    {
      step: "04",
      titre: "Restitution et livraison",
      desc: "Nous présentons les résultats et remettons les livrables convenus, accompagnés des éléments nécessaires à leur exploitation."
    }
  ];

  return (
    <div className="expertises-hub-page">
      {/* SECTION 1 — Introduction */}
      <section className="expertises-hero-intro">
        <small className="section-eyebrow">INGÉNIERIE & TRANSFORMATION DIGITALE</small>
        <h1>Des expertises complémentaires pour concrétiser vos projets<span>.</span></h1>
        <p className="lead-text">
          NumeriLab accompagne les entreprises, les institutions et les porteurs de projets dans la réalisation de leurs études techniques et de leurs projets de transformation digitale. Du génie civil à l’hydraulique, de l’intelligence artificielle à la digitalisation, notre équipe d’ingénieurs apporte des compétences adaptées aux besoins de chaque mission.
        </p>
        <div className="actions" style={{ marginTop: "28px" }}>
          <a className="btn" href="#domaines-expertises">
            Explorer nos expertises
          </a>
          <a className="outline" href="#contact-expertises" style={{ color: "#21182f", borderColor: "#882a94" }}>
            Présenter votre projet
          </a>
        </div>
      </section>

      {/* SECTION 2 — Quatre cartes d'accès direct */}
      <section className="home-section expertises-cards-section" id="domaines-expertises">
        <div className="home-section-heading">
          <small className="section-eyebrow">NOS DOMAINES D'INTERVENTION</small>
          <h2>Deux pôles d’ingénierie et de technologies numériques<span>.</span></h2>
          <p className="section-description">
            Sélectionnez une expertise pour consulter les prestations détaillées, les livrables types et les réalisations associées.
          </p>
        </div>

        <div className="expertises-cards-grid" style={{ margin: "40px 0" }}>
          {expertisesList.map((exp) => (
            <article key={exp.id} className="expertise-card">
              <div className="expertise-card-header">
                <span className={"pole-badge " + (exp.pole.includes("Ingénierie") ? "pole-ingenierie" : "pole-digital")}>
                  {exp.pole}
                </span>
                <h3 className="expertise-card-title">{exp.titre}</h3>
                <p className="expertise-card-desc">{exp.description}</p>
              </div>

              <div className="expertise-card-body">
                <ul className="expertise-tags-list">
                  {exp.tags.map((tag, idx) => (
                    <li key={idx} className="expertise-tag-item">
                      <span className="tag-bullet">•</span> {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="expertise-card-footer">
                <Link to={exp.chemin} className="expertise-card-link">
                  Consulter la page {exp.titre} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 3 — Notre démarche en 4 étapes */}
      <section className="demarche-section">
        <div className="demarche-container">
          <small className="section-eyebrow">MÉTHODOLOGIE</small>
          <h2>Notre démarche<span>.</span></h2>
          <p className="lead-text-sub">
            Un processus structuré et transparent pour garantir la rigueur des études et la conformité des livrables.
          </p>

          <div className="demarche-steps-grid">
            {demarches.map((step) => (
              <div key={step.step} className="demarche-step-card">
                <span className="step-number">{step.step}</span>
                <h3 className="step-title">{step.titre}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Pourquoi NumeriLab ? */}
      <section className="pourquoi-section">
        <div className="pourquoi-container">
          <small className="section-eyebrow">ENGAGEMENTS & EXIGENCE</small>
          <h2>Pourquoi confier vos études à NumeriLab ?<span>.</span></h2>

          <div className="pourquoi-grid">
            <div className="pourquoi-card">
              <span className="pourquoi-bullet">01</span>
              <h3>Une expertise portée par des ingénieurs qualifiés</h3>
              <p>Des ingénieurs formés dans des établissements de référence à l’international, aux compétences complémentaires pour aborder chaque projet sous un angle global.</p>
            </div>

            <div className="pourquoi-card">
              <span className="pourquoi-bullet">02</span>
              <h3>Une approche adaptée à votre environnement</h3>
              <p>Des solutions qui tiennent rigoureusement compte des réalités techniques, opérationnelles et économiques locales propres à votre projet.</p>
            </div>

            <div className="pourquoi-card">
              <span className="pourquoi-bullet">03</span>
              <h3>Des résultats concrets et exploitables</h3>
              <p>Une attention portée à la rigueur des études, à la fiabilité des solutions et à la clarté immédiate des livrables pour faciliter vos prises de décision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Formulaire commercial réutilisable */}
      <FormulaireCommercial
        id="contact-expertises"
        domaineInitial=""
        titreZone="Vous avez un projet ? Parlons-en."
        descriptionZone="Projet de construction, étude hydraulique, automatisation de processus ou développement d’une solution numérique : présentez-nous votre besoin et échangeons sur les possibilités d’accompagnement."
      />

      {/* SECTION 6 — Questions fréquentes (FAQ) */}
      <section className="expertises-faq-section">
        <div className="faq-container">
          <small className="section-eyebrow">QUESTIONS FRÉQUENTES</small>
          <h2>Tout savoir sur nos interventions<span>.</span></h2>

          <div className="faq-list">
            {faqItems.map((item, i) => (
              <details key={i} className="faq-detail-item">
                <summary className="faq-summary">
                  <span>{item.q}</span>
                  <span className="faq-chevron" aria-hidden="true">+</span>
                </summary>
                <div className="faq-answer">
                  <p>{item.r}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Pied de page sobre */}
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

