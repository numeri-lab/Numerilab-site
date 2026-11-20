import React, { useEffect, useState } from "react";
import { chargerFormations } from "../api/formations.js";
import formationsInitiales from "../../../backend/data/formations.json";

// Correspondance directe vers les affiches grand format de /uploads/formations/
const AFFICHES_FORMATIONS_MAP = {
  "python-data": "/uploads/formations/python.jpg",
  "java-poo": "/uploads/formations/javacode.jpg",
  "excel-pro": "/uploads/formations/excel.jpg",
  "power-bi": "/uploads/formations/power-bi.jpg",
  "ia-initiation": "/uploads/formations/ia.jpg",
  "autocad-2d": "/uploads/formations/autocad.jpg",
  "robot-structural": "/uploads/formations/robot.jpg",
  "arcgis-sig": "/uploads/formations/arcgis.jpg"
};

export function getAfficheFormation(atelier) {
  if (!atelier) return null;
  if (atelier.affiche) return atelier.affiche;
  if (atelier.id && AFFICHES_FORMATIONS_MAP[atelier.id]) {
    return AFFICHES_FORMATIONS_MAP[atelier.id];
  }
  const idMin = (atelier.id || "").toLowerCase();
  const titreMin = (atelier.titre || "").toLowerCase();
  if (idMin.includes("python") || titreMin.includes("python")) return "/uploads/formations/python.jpg";
  if (idMin.includes("power") || titreMin.includes("power bi") || titreMin.includes("powerbi")) return "/uploads/formations/power-bi.jpg";
  if (idMin.includes("ia") || titreMin.includes("intelligence artificielle") || titreMin.includes(" ia")) return "/uploads/formations/ia.jpg";
  if (idMin.includes("autocad") || titreMin.includes("autocad") || titreMin.includes("archicad")) return "/uploads/formations/autocad.jpg";
  if (idMin.includes("robot") || titreMin.includes("robot")) return "/uploads/formations/robot.jpg";
  if (idMin.includes("arcgis") || idMin.includes("sig") || titreMin.includes("arcgis")) return "/uploads/formations/arcgis.jpg";
  if (idMin.includes("excel") || titreMin.includes("excel")) return "/uploads/formations/excel.jpg";
  if (idMin.includes("java") || titreMin.includes("java")) return "/uploads/formations/javacode.jpg";
  return atelier.fiche || null;
}

export default function Catalogue() {
  const [formations, setFormations] = useState(formationsInitiales);
  const [filtreCat, setFiltreCat] = useState("tous");
  const [recherche, setRecherche] = useState("");
  const [ficheApercue, setFicheApercue] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    async function charger() {
      try {
        const reponse = await chargerFormations(controller.signal);
        if (reponse.ok) {
          const catalogue = await reponse.json();
          if (Array.isArray(catalogue) && catalogue.length > 0) {
            setFormations(catalogue);
          }
        }
      } catch {
        // En cas de non-disponibilité du backend, formationsInitiales reste actif
      }
    }
    charger();
    return () => controller.abort();
  }, []);

  // Extraction à plat de tous les ateliers avec le titre de leur catégorie
  const tousLesAteliers = formations.flatMap(cat =>
    (cat.ateliers || []).map(atelier => ({
      ...atelier,
      categorieParente: cat.titre,
      categorieId: cat.categorieId
    }))
  );

  // Filtrage combiné par catégorie et par mot-clé
  const ateliersFiltres = tousLesAteliers.filter(atelier => {
    const matchCat = filtreCat === "tous" || atelier.categorieId === filtreCat;
    const texteSearch = (atelier.titre + " " + atelier.objectif + " " + (atelier.projet || "") + " " + atelier.categorieParente).toLowerCase();
    const matchRecherche = !recherche || texteSearch.includes(recherche.toLowerCase().trim());
    return matchCat && matchRecherche;
  });

  const whatsappInscription = (titre) =>
    "https://wa.me/22376547591?text=" +
    encodeURIComponent(
      "Bonjour NumeriLab, je souhaite m'inscrire à la formation « " +
      titre +
      " ». Pouvez-vous m'indiquer les prochaines sessions et les modalités d'inscription ?"
    );

  const categories = [
    { id: "tous", label: "Toutes les formations" },
    { id: "ia", label: "Intelligence artificielle" },
    { id: "office-data", label: "Bureautique & Data" },
    { id: "programmation", label: "Programmation" },
    { id: "cao-ingenierie", label: "Conception & Logiciels techniques" }
  ];

  return (
    <div className="catalogue-wrapper">
      {/* Barre de Filtres et Recherche */}
      <div className="catalogue-controls">
        <div className="filter-buttons" role="group" aria-label="Filtrer les formations par domaine">
          {categories.map(cat => (
            <button
              key={cat.id}
              type="button"
              className={"filter-btn" + (filtreCat === cat.id ? " active" : "")}
              aria-pressed={filtreCat === cat.id}
              onClick={() => setFiltreCat(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="search-box">
          <input
            type="search"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            placeholder="Rechercher une formation…"
            aria-label="Rechercher une formation"
          />
          {recherche && (
            <button type="button" className="search-clear" onClick={() => setRecherche("")} aria-label="Effacer la recherche">
              &times;
            </button>
          )}
        </div>
      </div>

      {/* Résultat et Grille des Ateliers */}
      {ateliersFiltres.length === 0 ? (
        <div className="empty-results">
          <p>Aucune formation ne correspond à votre recherche « <strong>{recherche}</strong> ».</p>
          <button type="button" className="btn" onClick={() => { setRecherche(""); setFiltreCat("tous"); }}>
            Réinitialiser les filtres
          </button>
        </div>
      ) : (
        <div className="courses-grid">
          {ateliersFiltres.map(atelier => {
            const afficheGrandFormat = getAfficheFormation(atelier);
            return (
              <article key={atelier.id || atelier.titre} className="course-card">
                {/* Visuel sur la carte */}
                {atelier.fiche ? (
                  <div
                    className="course-thumb"
                    onClick={() => setFicheApercue(atelier)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === "Enter") setFicheApercue(atelier); }}
                  >
                    <img src={atelier.fiche} alt={"Affiche de la formation " + atelier.titre} loading="lazy" />
                    <div className="course-thumb-overlay">
                      <span>Voir l'affiche complète</span>
                    </div>
                    <span className="badge-tarif">Certifiant</span>
                  </div>
                ) : (
                  <div
                    className="course-thumb course-thumb-placeholder"
                    onClick={() => { if (afficheGrandFormat) setFicheApercue(atelier); }}
                    role={afficheGrandFormat ? "button" : undefined}
                    tabIndex={afficheGrandFormat ? 0 : undefined}
                  >
                    <div className="placeholder-pattern" />
                    <div className="placeholder-content">
                      <span className="course-cat-tag">{atelier.categorieParente}</span>
                      <h4>{atelier.titre}</h4>
                    </div>
                    {afficheGrandFormat && (
                      <div className="course-thumb-overlay">
                        <span>Voir l'affiche complète</span>
                      </div>
                    )}
                    <span className="badge-tarif">Certifiant</span>
                  </div>
                )}

                <div className="course-content">
                  <div className="course-badges-row">
                    {atelier.duree && (
                      <span className="course-badge">
                        {atelier.duree === "3 semaines" ? "10h" : atelier.duree}
                      </span>
                    )}
                    <span className="course-badge">{atelier.mode || "Présentiel & En ligne"}</span>
                    <span className="course-badge certif">Formation certifiante</span>
                  </div>

                  <h3 className="course-title">{atelier.titre}</h3>
                  <p className="course-goal">{atelier.objectif}</p>

                  {/* Encadré Projet Final Concret */}
                  {atelier.projet && (
                    <div className="course-project-box">
                      <span className="project-tag">Projet final pratique</span>
                      <p>{atelier.projet}</p>
                    </div>
                  )}

                  {/* Programme dépliable */}
                  {atelier.programme && atelier.programme.length > 0 && (
                    <details className="course-syllabus">
                      <summary>
                        <span>Consulter les modules du programme</span>
                        <span className="chevron" aria-hidden="true" />
                      </summary>
                      <ol className="syllabus-steps">
                        {atelier.programme.map((module, i) => (
                          <li key={i}>
                            {typeof module === "string" ? module.replace(/Semaine\s+/gi, "Module ") : module}
                          </li>
                        ))}
                      </ol>
                    </details>
                  )}

                  {/* Actions de la carte */}
                  <div className="course-footer-actions">
                    <a
                      className="btn btn-whatsapp"
                      href={whatsappInscription(atelier.titre)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      S'inscrire sur WhatsApp
                    </a>
                    {afficheGrandFormat && (
                      <button
                        type="button"
                        className="btn-view-sheet"
                        onClick={() => setFicheApercue(atelier)}
                      >
                        Voir l'affiche détaillée
                      </button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Modal Lightbox pour afficher la fiche grand format de /uploads/formations/ */}
      {ficheApercue && (() => {
        const urlAffiche = getAfficheFormation(ficheApercue);
        return (
          <div className="modal-overlay" onClick={() => setFicheApercue(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setFicheApercue(null)}
                aria-label="Fermer la fiche"
              >
                &times;
              </button>
              <div className="modal-image-wrapper">
                {urlAffiche ? (
                  <img src={urlAffiche} alt={"Affiche détaillée " + ficheApercue.titre} />
                ) : (
                  <div style={{ padding: "40px", color: "#fff" }}>
                    <p>Affiche bientôt disponible pour cette formation.</p>
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <div>
                  <h4>{ficheApercue.titre}</h4>
                  <p>Formation pratique & certifiante · Présentiel & À distance</p>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
                  {urlAffiche && (
                    <a
                      className="btn btn-secondary"
                      href={urlAffiche}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        fontSize: "13px",
                        padding: "10px 14px",
                        border: "1px solid #d9ccde",
                        borderRadius: "8px",
                        color: "#6d2c73",
                        background: "#fff",
                        display: "inline-block"
                      }}
                    >
                      Ouvrir en plein écran
                    </a>
                  )}
                  <a
                    className="btn btn-whatsapp"
                    href={whatsappInscription(ficheApercue.titre)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Réserver ma place sur WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
