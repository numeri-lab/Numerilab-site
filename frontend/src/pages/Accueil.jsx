import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation.jsx";
import { expertisesList } from "../routes.js";

export default function Accueil() {
  return (
    <>
      {/* SECTION 1 — Présentation / Hero */}
      <header id="accueil" className="hero-header">
        <Navigation />
        <div className="hero">
          <small className="hero-kicker">
            <i></i> CABINET D’INGÉNIERIE, DE CONSEIL ET DE SOLUTIONS NUMÉRIQUES
          </small>
          <h1>
            L’ingénierie et la transformation digitale au service de vos projets<span>.</span>
          </h1>
          <p className="hero-lead">
            NumeriLab accompagne les entreprises, les institutions et les porteurs de projets dans la réalisation de leurs projets techniques et leur transformation digitale, grâce à une équipe d’ingénieurs formés dans des établissements de référence à l’international.
          </p>
          <p className="hero-secondary">
            Nous contribuons également au développement des compétences à travers des formations pratiques et certifiantes, destinées aux étudiants, aux professionnels et aux organisations.
          </p>
          <div className="actions">
            <Link className="btn" to="/expertises">
              Découvrir nos expertises
            </Link>
            <Link className="outline" to="/formations">
              Explorer nos formations
            </Link>
          </div>
        </div>

        <div className="herofoot">
          <span>⌖ &nbsp; Bamako, Mali</span>
          <a href="#expertises-accueil">Découvrir nos activités ↓</a>
        </div>
      </header>

      <main>
        {/* SECTION 2 — Expertises (Deux pôles, quatre domaines) */}
        <section className="home-section home-expertises-v2" id="expertises-accueil" aria-labelledby="home-expertises-title">
          <div className="home-section-heading">
            <small className="section-eyebrow">NOS DOMAINES D’INTERVENTION</small>
            <h2 id="home-expertises-title">
              Deux pôles d’expertise.<br />
              <em>Quatre domaines d’intervention.</em>
            </h2>
            <p className="section-description">
              Nous associons l’ingénierie et les technologies numériques pour répondre aux besoins techniques et opérationnels de nos clients.
            </p>
          </div>

          <div className="expertises-cards-grid">
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
                    Découvrir cette expertise <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="home-section-cta">
            <Link className="btn btn-secondary-solid" to="/expertises">
              Explorer le détail de notre démarche et de nos livrables →
            </Link>
          </div>
        </section>

        {/* SECTION 3 — Formations */}
        <section className="home-section home-formations-v2" id="formations-accueil" aria-labelledby="home-formations-title">
          <div className="home-section-heading">
            <small className="section-eyebrow">FORMATION & DÉVELOPPEMENT DES COMPÉTENCES</small>
            <h2 id="home-formations-title">
              Des compétences qui ouvrent<br />
              <em>de nouvelles perspectives.</em>
            </h2>
            <p className="section-description">
              NumeriLab propose des formations pratiques et certifiantes pour les étudiants, les professionnels et les organisations. Nos programmes privilégient la mise en application et sont proposés en présentiel et en ligne.
            </p>
          </div>

          <div className="home-formations-families-grid">
            <div className="formation-family-card">
              <span className="family-num">01</span>
              <h3>Intelligence artificielle</h3>
              <p>Des usages professionnels aux applications pratiques, prompt engineering et automatisation.</p>
            </div>

            <div className="formation-family-card">
              <span className="family-num">02</span>
              <h3>Bureautique & Data</h3>
              <p>Excel avancé, modélisation de données et tableaux de bord décisionnels avec Power BI.</p>
            </div>

            <div className="formation-family-card">
              <span className="family-num">03</span>
              <h3>Programmation</h3>
              <p>Python pour l’analyse de données et développement logiciel orienté objet avec Java.</p>
            </div>

            <div className="formation-family-card">
              <span className="family-num">04</span>
              <h3>Conception & Logiciels techniques</h3>
              <p>Plans d’architecture 2D/3D avec AutoCAD, calcul de structures sur Robot et cartographie SIG sous ArcGIS.</p>
            </div>
          </div>

          <div className="home-section-cta actions">
            <Link className="btn" to="/formations">
              Découvrir nos formations
            </Link>
            <Link className="home-text-link" to="/contact">
              Échanger avec notre équipe
            </Link>
          </div>
        </section>
      </main>

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
            <Link to="/notre-cabinet">Notre cabinet</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
