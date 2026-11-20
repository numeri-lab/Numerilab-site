import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ projet, showDomainLink = true }) {
  const [isActive, setIsActive] = useState(false);
  const [isTemporarilyClosed, setIsTemporarilyClosed] = useState(false);
  const cardRef = useRef(null);

  if (!projet) return null;

  const isIngenierie =
    projet.pole?.includes("Ingénierie") ||
    projet.domaine === "Génie civil" ||
    projet.domaine === "Hydraulique";

  const handleCardClick = () => {
    setIsTemporarilyClosed(false);
    setIsActive(true);
  };

  const handleClose = (e) => {
    if (e) {
      e.stopPropagation();
    }
    setIsActive(false);
    setIsTemporarilyClosed(true);
    if (e?.currentTarget) {
      e.currentTarget.blur();
    }
    if (document.activeElement && typeof document.activeElement.blur === "function") {
      document.activeElement.blur();
    }
  };

  const handleMouseLeave = () => {
    setIsTemporarilyClosed(false);
  };

  useEffect(() => {
    if (!isActive) return;
    const handleClickOutside = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setIsActive(false);
        setIsTemporarilyClosed(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("touchend", handleClickOutside, { passive: true });
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("touchend", handleClickOutside);
    };
  }, [isActive]);

  return (
    <article
      ref={cardRef}
      className={`amje-hover-card project-card ${isActive ? "is-active" : ""} ${isTemporarilyClosed ? "is-forced-closed" : ""}`}
      tabIndex={0}
      onClick={handleCardClick}
      onMouseLeave={handleMouseLeave}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          handleClose(e);
        } else if (e.key === "Enter" || e.key === " ") {
          if (!isActive) {
            e.preventDefault();
            handleCardClick();
          }
        }
      }}
      aria-label={`Étude : ${projet.titre}`}
    >
      {/* 1. VISUEL DE FOND COUVRANT TOUTE LA CARTE */}
      <div className="amje-card-bg-wrap project-card-media">
        <img
          src={projet.image || "/uploads/background.png"}
          alt={projet.titre}
          className="amje-card-bg-img project-card-image"
          loading="lazy"
        />
        <div className="amje-card-scrim"></div>
      </div>

      {/* 2. ÉTAT REPOS : VISIBLE PAR DÉFAUT */}
      <div className="amje-card-idle-content">
        <div className="amje-idle-top">
          {projet.domaine && (
            <span
              className={`amje-domain-badge ${
                isIngenierie ? "badge-ingenierie domain-ingenierie" : "badge-digital domain-digital"
              }`}
            >
              {projet.domaine}
            </span>
          )}
          <span className="amje-card-hint">
            <span className="hint-text">Découvrir l'étude</span>
            <span className="hint-icon" aria-hidden="true">+</span>
          </span>
        </div>

        <div className="amje-idle-bottom">
          <h3 className="amje-idle-title project-title">{projet.titre}</h3>

          {projet.tags && projet.tags.length > 0 && (
            <div className="amje-idle-tags project-tags-list">
              {projet.tags.map((tag, idx) => (
                <span key={idx} className="amje-idle-tag-pill project-tag-item">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 3. VOLET AU SURVOL : COULISSE ET RÉVÈLE LES INFORMATIONS (FORMAT AMJE) */}
      <div
        className="amje-card-overlay-drawer"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="amje-drawer-header">
          <span
            className={`amje-domain-badge ${
              isIngenierie ? "badge-ingenierie domain-ingenierie" : "badge-digital domain-digital"
            }`}
          >
            {projet.domaine}
          </span>
          <button
            type="button"
            className="amje-drawer-close"
            onClick={handleClose}
            onTouchEnd={(e) => {
              e.stopPropagation();
              handleClose(e);
            }}
            aria-label="Fermer les détails"
          >
            ×
          </button>
        </div>

        <h3 className="amje-drawer-title">{projet.titre}</h3>

        {projet.tags && projet.tags.length > 0 && (
          <div className="amje-drawer-tags">
            {projet.tags.map((tag, idx) => (
              <span key={idx} className="amje-drawer-tag-pill">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="amje-drawer-body">
          {/* Bloc 1 : Le besoin */}
          <div className="amje-drawer-section">
            <h4 className="amje-drawer-label">
              <span className="amje-dot besoin-dot"></span>
              Le besoin :
            </h4>
            <p className="amje-drawer-text">{projet.contexte}</p>
          </div>

          {/* Bloc 2 : Notre intervention */}
          <div className="amje-drawer-section">
            <h4 className="amje-drawer-label">
              <span className="amje-dot intervention-dot"></span>
              Notre intervention :
            </h4>
            <p className="amje-drawer-text">{projet.intervention}</p>
          </div>

          {/* Bloc 3 : Le résultat & livrables */}
          <div className="amje-drawer-section result-section">
            <h4 className="amje-drawer-label">
              <span className="amje-dot resultat-dot"></span>
              Le résultat :
            </h4>
            {projet.resultat && (
              <p className="amje-drawer-text result-highlight">
                {projet.resultat}
              </p>
            )}
            {projet.livrables && (
              <div className="amje-drawer-livrables">
                <strong>Livrables remis :</strong> {projet.livrables}
              </div>
            )}
          </div>
        </div>

        <div className="amje-drawer-footer project-card-footer">
          {showDomainLink && projet.domaineSlug ? (
            <Link
              to={`/expertises/${projet.domaineSlug}`}
              className="amje-drawer-action-btn project-card-link"
            >
              Consulter l'expertise {projet.domaine} →
            </Link>
          ) : (
            <a href="#contact-detail" className="amje-drawer-action-btn project-card-link">
              Étudier un cas similaire avec nos ingénieurs →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
