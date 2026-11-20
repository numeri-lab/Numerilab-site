import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation.jsx";
import Catalogue from "../components/Catalogue.jsx";
import Questions from "../components/Questions.jsx";

export default function Formations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappGeneral =
    "https://wa.me/22376547591?text=" +
    encodeURIComponent(
      "Bonjour NumeriLab, je souhaite des renseignements sur vos programmes de formation (calendrier, inscription, formations sur mesure)."
    );

  return (
    <div className="formations-page-wrap">
      {/* 1. HERO INSTITUTIONNEL (BLEU NUIT NUMERILAB — CONFORME MAQUETTE D) */}
      <header className="formations-hero-header">
        <Navigation />

        <div className="formations-hero-inner">
          <div className="formations-hero-content">
            <div className="cabinet-breadcrumb" role="navigation" aria-label="Fil d'Ariane">
              <Link to="/">Accueil</Link>
              <span className="breadcrumb-sep">/</span>
              <span className="breadcrumb-current">Formations</span>
            </div>

            <small className="formations-eyebrow">
              FORMATIONS PROFESSIONNELLES &amp; CERTIFIANTES
            </small>

            <h1 className="formations-main-title">
              Des compétences qui ouvrent de nouvelles perspectives.
            </h1>

            <p className="formations-hero-sub">
              Démarquez-vous sur le marché du travail. Accélérez votre évolution professionnelle.
            </p>

            <p className="formations-lead-text">
              NumeriLab propose des formations pratiques dans les domaines du numérique et de l’ingénierie, conçues pour développer des compétences directement mobilisables dans vos études, votre travail et vos projets. Nos parcours s’adressent aux étudiants, aux professionnels et aux organisations.
            </p>

            <div className="formations-modalites-row">
              <span className="formation-mod-pill">
                En présentiel et en ligne
              </span>
              <span className="formation-mod-pill">
                Formations certifiantes
              </span>
              <span className="formation-mod-pill">
                Ingénieurs formateurs
              </span>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* 2. SECTION PÉDAGOGIE NUMERILAB & POURQUOI SE FORMER (MAQUETTE D) */}
        <section className="formations-pedagogie-section" aria-labelledby="pedagogie-heading">
          <div className="formations-section-inner">
            <div className="section-head-centered">
              <small className="section-eyebrow-accent">LA PÉDAGOGIE NUMERILAB</small>
              <h2 id="pedagogie-heading" className="formations-section-title">
                Comprendre. Pratiquer. Appliquer. Valoriser.
              </h2>
            </div>

            {/* Pourquoi se former — 2 piliers de carrière */}
            <div className="formations-piliers-grid">
              <div className="formation-pilier-card">
                <h3>Se démarquer sur le marché du travail</h3>
                <p>
                  Renforcez votre profil avec des compétences techniques et numériques utiles pour répondre aux attentes des employeurs et saisir de nouvelles opportunités.
                </p>
              </div>

              <div className="formation-pilier-card">
                <h3>Accélérer son évolution professionnelle</h3>
                <p>
                  Développez votre expertise, gagnez en autonomie et maîtrisez de nouveaux outils pour élargir vos possibilités d’évolution au sein de votre organisation.
                </p>
              </div>
            </div>

            {/* Méthode NumeriLab — 4 étapes horizontales */}
            <div className="formations-steps-grid">
              <div className="formation-step-card">
                <span className="f-step-num">01</span>
                <h4>Comprendre</h4>
                <p>Acquérir les fondamentaux théoriques et les méthodes de travail rigoureuses.</p>
              </div>

              <div className="formation-step-card">
                <span className="f-step-num">02</span>
                <h4>Pratiquer</h4>
                <p>Manipuler les outils du marché à travers des exercices concrets et guidés.</p>
              </div>

              <div className="formation-step-card">
                <span className="f-step-num">03</span>
                <h4>Appliquer</h4>
                <p>Travailler sur des cas réels d’entreprise et concevoir un projet pratique complet.</p>
              </div>

              <div className="formation-step-card">
                <span className="f-step-num">04</span>
                <h4>Valoriser</h4>
                <p>Consolider ses compétences, soutenir son travail et obtenir un certificat reconnu.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SECTION CATALOGUE DES FORMATIONS (CARTES CONSERVÉES) */}
        <section className="formations-catalogue-section" id="catalogue-section" aria-labelledby="catalogue-heading">
          <div className="formations-section-inner">
            <div className="section-head-centered">
              <small className="section-eyebrow-accent">EXPLOREZ NOS FORMATIONS</small>
              <h2 id="catalogue-heading" className="formations-section-title">
                Choisissez les compétences à développer.
              </h2>
              <p className="formations-section-sub">
                Explorez notre catalogue de formations intensives par domaine, consultez les programmes détaillés et réservez votre place.
              </p>
            </div>

            {/* Grille complète des cartes de formation (conservées) */}
            <Catalogue />
          </div>
        </section>

        {/* 4. SECTION QUESTIONS FRÉQUENTES */}
        <section className="formations-faq-section" aria-labelledby="faq-formations-heading">
          <div className="formations-section-inner">
            <Questions />
          </div>
        </section>

        {/* 5. BANDEAU D'ORIENTATION ET CONTACT SUR MESURE */}
        <section className="formations-cta-banner">
          <div className="formations-cta-inner">
            <div className="formations-cta-text">
              <h3>Besoin d'une formation personnalisée ou intra-entreprise ?</h3>
              <p>
                NumeriLab conçoit également des modules sur mesure pour les entreprises, ONG et institutions souhaitant monter en compétences sur des technologies spécifiques.
              </p>
            </div>
            <div className="formations-cta-actions">
              <a
                href={whatsappGeneral}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp-cta"
              >
                Échanger sur WhatsApp
              </a>
              <Link to="/contact" className="btn btn-secondary-cta">
                Demander un devis sur mesure
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* 6. PIED DE PAGE SOBRE NUMERILAB */}
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
