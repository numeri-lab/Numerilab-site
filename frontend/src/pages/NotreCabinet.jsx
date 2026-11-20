import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation.jsx";
import {
  cabinetIntro,
  missionVision,
  domainesIntervention,
  ecolesEquipe,
  membresEquipe
} from "../data/cabinetData.js";

export default function NotreCabinet() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappCabinet =
    "https://wa.me/22376547591?text=" +
    encodeURIComponent(
      "Bonjour NumeriLab, je souhaite échanger avec votre cabinet au sujet d'une mission ou d'une collaboration."
    );

  return (
    <div className="cabinet-page-wrap">
      {/* 1. HERO INSTITUTIONNEL (BLEU NUIT NUMERILAB — CONFORME MAQUETTE E) */}
      <header className="cabinet-hero-header">
        <Navigation />

        <div className="cabinet-hero-inner">
          <div className="cabinet-hero-grid">
            <div className="cabinet-hero-main">
              <div className="cabinet-breadcrumb" role="navigation" aria-label="Fil d'Ariane">
                <Link to="/">Accueil</Link>
                <span className="breadcrumb-sep">/</span>
                <span className="breadcrumb-current">Notre cabinet</span>
              </div>

              <small className="cabinet-eyebrow">{cabinetIntro.eyebrow}</small>
              <h1 className="cabinet-main-title">{cabinetIntro.titre}</h1>
              <p className="cabinet-lead-text">{cabinetIntro.description}</p>
            </div>

            <div className="cabinet-hero-side">
              <div className="cabinet-ambition-card">
                <span className="ambition-kicker">
                  {cabinetIntro.ambition.kicker}
                </span>
                <p className="ambition-text">{cabinetIntro.ambition.texte}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="cabinet-main-content">
        {/* 2. SECTION MISSION & VISION */}
        <section className="cabinet-section cabinet-mission-vision-section">
          <div className="cabinet-container">
            <div className="mission-vision-grid">
              <div className="mission-card">
                <div className="mission-card-header">
                  <span className="mission-badge">NOTRE MISSION</span>
                </div>
                <h3>Accompagner l'ingénierie et la transformation digitale</h3>
                <p>{missionVision.mission.texte}</p>
              </div>

              <div className="vision-card">
                <div className="vision-card-header">
                  <span className="vision-badge">NOTRE VISION</span>
                </div>
                <h3>Bâtir un écosystème d'excellence et d'autonomie</h3>
                <p>{missionVision.vision.texte}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SECTION DOMAINES D'INTERVENTION (RAPPEL SUCCINCT) */}
        <section className="cabinet-section cabinet-domaines-section">
          <div className="cabinet-container">
            <div className="cabinet-section-heading">
              <small className="section-eyebrow">NOS DOMAINES D’INTERVENTION</small>
              <h2>
                Deux pôles d’expertise et une activité formation transversale<span>.</span>
              </h2>
              <p className="section-description">
                Nous associons l’ingénierie de pointe et les technologies logicielles pour répondre aux défis techniques et opérationnels de nos partenaires.
              </p>
            </div>

            <div className="cabinet-domaines-grid">
              {domainesIntervention.map((axe) => (
                <div key={axe.id} className="cabinet-domaine-card">
                  <span className="domaine-pole-badge">{axe.pole}</span>
                  <h3 className="domaine-card-title">{axe.titre}</h3>
                  <p className="domaine-card-desc">{axe.description}</p>

                  <div className="domaine-card-tags">
                    <span className="domaine-tags-label">Expertises & axes :</span>
                    <div className="domaine-tags-list">
                      {axe.domaines.map((sub, idx) => (
                        <Link key={idx} to={sub.chemin} className="domaine-subtag-pill">
                          {sub.nom}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. SECTION NOTRE ÉQUIPE (AVEC PHOTOS BIEN REMPLIES, BIO & COMPÉTENCES EN TAGS) */}
        <section className="cabinet-section cabinet-team-section" id="equipe">
          <div className="cabinet-container">
            <div className="cabinet-section-heading">
              <small className="section-eyebrow">NOTRE ÉQUIPE</small>
              <h2>
                Des expertises complémentaires, une même exigence<span>.</span>
              </h2>
              <p className="section-description">
                NumeriLab réunit des ingénieurs et spécialistes aux parcours complémentaires. Leurs compétences constituent la force du cabinet pour concevoir des solutions, conduire des études et transmettre des savoir-faire.
              </p>
            </div>

            {/* Bandeau sobre des grandes écoles de référence */}
            <div className="cabinet-ecoles-strip">
              <span className="ecoles-strip-label">
                Ingénieurs et spécialistes diplômés d'établissements de référence :
              </span>
              <ul className="ecoles-strip-list">
                {ecolesEquipe.map((ecole, idx) => (
                  <li key={idx} className="ecoles-strip-item">
                    {ecole}
                  </li>
                ))}
              </ul>
            </div>

            {/* Grille des 7 profils */}
            <div className="cabinet-team-grid">
              {membresEquipe.map((membre) => (
                <article key={membre.id} className="cabinet-member-card">
                  <div className="member-photo-wrapper">
                    <img
                      src={membre.portrait}
                      alt={`Portrait de ${membre.nom}`}
                      className="member-photo-img"
                      loading="lazy"
                    />
                  </div>

                  <div className="member-card-body">
                    <div className="member-header-info">
                      <span className="member-badge-cat">{membre.badgeDomaine}</span>
                      <h3 className="member-name">{membre.nom}</h3>
                      <p className="member-titre">{membre.titre}</p>
                      <p className="member-formation">{membre.formation}</p>
                    </div>

                    <p className="member-bio">{membre.bio}</p>

                    <div className="member-skills-section">
                      <ul className="member-skills-tags">
                        {membre.competences.map((skill, sIdx) => (
                          <li key={sIdx} className="member-skill-tag">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. SECTION CTA CONTACT (L'EXPERTISE ADAPTÉE À VOTRE PROJET) */}
        <section className="cabinet-cta-section">
          <div className="cabinet-container">
            <div className="cabinet-cta-box">
              <div className="cabinet-cta-content">
                <small className="cabinet-cta-eyebrow">VOTRE PROJET</small>
                <h2 className="cabinet-cta-title">
                  L'expertise adaptée à votre projet<span>.</span>
                </h2>
                <p className="cabinet-cta-desc">
                  Votre projet mérite les bonnes expertises. Échangeons sur vos besoins et les possibilités de collaboration.
                </p>
                <div className="cabinet-cta-reassurance">
                  <span>Bamako, Mali</span>
                  <span className="reassurance-sep">•</span>
                  <span>Analyse et cadrage personnalisé</span>
                  <span className="reassurance-sep">•</span>
                  <span>Accompagnement sur mesure</span>
                </div>
              </div>

              <div className="cabinet-cta-actions">
                <Link to="/contact" className="btn btn-cabinet-primary">
                  Nous contacter
                </Link>
                <a
                  href={whatsappCabinet}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cabinet-whatsapp"
                >
                  Discuter sur WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="home-footer" role="contentinfo">
        <div className="home-footer-inner">
          <div className="footer-col-brand">
            <div className="footer-logo">
              NumeriLab
            </div>
            <p className="footer-tagline">
              Cabinet d’ingénierie, de conseil et de solutions numériques.
            </p>
            <p className="footer-address">
              Bamako, Mali · <a href="mailto:numerilab223@gmail.com">numerilab223@gmail.com</a>
            </p>
          </div>

          <div className="footer-col-links">
            <span className="footer-col-title">Navigation</span>
            <ul className="footer-nav-list">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/expertises">Expertises</Link></li>
              <li><Link to="/formations">Formations</Link></li>
              <li><Link to="/realisations">Réalisations</Link></li>
              <li><Link to="/publications">Publications</Link></li>
              <li><Link to="/notre-cabinet">Notre cabinet</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col-links">
            <span className="footer-col-title">Expertises</span>
            <ul className="footer-nav-list">
              <li><Link to="/expertises/genie-civil">Génie civil</Link></li>
              <li><Link to="/expertises/hydraulique">Hydraulique</Link></li>
              <li><Link to="/expertises/ia-automatisation">IA & Automatisation</Link></li>
              <li><Link to="/expertises/digitalisation">Digitalisation</Link></li>
            </ul>
          </div>

          <div className="footer-col-contact">
            <span className="footer-col-title">Contact rapide</span>
            <p className="footer-contact-item">
              WhatsApp : <a href="https://wa.me/22376547591">+223 76 54 75 91</a>
            </p>
            <p className="footer-contact-item">
              Site web : <a href="https://numeri-lab.com">numeri-lab.com</a>
            </p>
          </div>
        </div>

        <div className="home-footer-bottom">
          <p>© {new Date().getFullYear()} NumeriLab. Tous droits réservés.</p>
          <div className="footer-bottom-links">
            <Link to="/contact">Présenter votre projet</Link>
            <Link to="/formations">Découvrir nos formations</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
