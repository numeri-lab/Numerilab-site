import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { expertisesList } from "../routes.js";

export default function Navigation() {
  const [dropdownOuvert, setDropdownOuvert] = useState(false);
  const [menuMobileOuvert, setMenuMobileOuvert] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Fermer les menus lors d'un changement de page
  useEffect(() => {
    setDropdownOuvert(false);
    setMenuMobileOuvert(false);
  }, [location.pathname]);

  // Fermer le dropdown en cliquant en dehors
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOuvert(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const estExpertiseActive = location.pathname.startsWith("/expertises");

  return (
    <nav className="nav-container" aria-label="Navigation principale">
      <Link className="brand" to="/">
        <img src="/uploads/symbole.png" alt="Logo NumeriLab" />
        NumeriLab
      </Link>

      {/* Bouton Hamburger Mobile */}
      <button
        type="button"
        className="nav-mobile-toggle"
        onClick={() => setMenuMobileOuvert(!menuMobileOuvert)}
        aria-expanded={menuMobileOuvert}
        aria-label="Ouvrir le menu de navigation"
      >
        <span className="nav-hamburger-line"></span>
        <span className="nav-hamburger-line"></span>
        <span className="nav-hamburger-line"></span>
      </button>

      {/* Liens principaux */}
      <div className={"links" + (menuMobileOuvert ? " links-mobile-open" : "")}>
        {/* Item Expertises avec Menu Déroulant */}
        <div
          className={"nav-dropdown" + (dropdownOuvert ? " open" : "")}
          ref={dropdownRef}
          onMouseEnter={() => setDropdownOuvert(true)}
          onMouseLeave={() => setDropdownOuvert(false)}
        >
          <div className="nav-dropdown-trigger-row">
            <NavLink
              to="/expertises"
              className={"nav-link-dropdown" + (estExpertiseActive ? " active" : "")}
            >
              Expertises
            </NavLink>
            <button
              type="button"
              className="nav-dropdown-arrow-btn"
              onClick={(e) => {
                e.stopPropagation();
                setDropdownOuvert(!dropdownOuvert);
              }}
              aria-expanded={dropdownOuvert}
              aria-label="Afficher les sous-domaines d'expertises"
            >
              <span className="nav-chevron">▾</span>
            </button>
          </div>

          {/* Panneau déroulant à deux pôles */}
          <div className="nav-dropdown-menu">
            <div className="dropdown-grid">
              <div className="dropdown-pole">
                <span className="dropdown-pole-label">Pôle Ingénierie</span>
                <NavLink to="/expertises/genie-civil" className="dropdown-subitem">
                  <strong>Génie civil</strong>
                  <small>Structures, plans 2D/3D, DQE</small>
                </NavLink>
                <NavLink to="/expertises/hydraulique" className="dropdown-subitem">
                  <strong>Hydraulique</strong>
                  <small>Eau, irrigation, forages, hydrologie</small>
                </NavLink>
              </div>

              <div className="dropdown-pole">
                <span className="dropdown-pole-label">Pôle Transformation digitale</span>
                <NavLink to="/expertises/ia-automatisation" className="dropdown-subitem">
                  <strong>IA & Automatisation</strong>
                  <small>Audit IA, assistants, intégration</small>
                </NavLink>
                <NavLink to="/expertises/digitalisation" className="dropdown-subitem">
                  <strong>Digitalisation</strong>
                  <small>Applications métiers, web, data</small>
                </NavLink>
              </div>
            </div>

            <div className="dropdown-footer">
              <NavLink to="/expertises" className="dropdown-view-all">
                Vue d’ensemble des expertises →
              </NavLink>
            </div>
          </div>
        </div>

        <NavLink to="/formations">Formations</NavLink>
        <NavLink to="/realisations">Réalisations</NavLink>
        <NavLink to="/publications">Publications</NavLink>
        <NavLink to="/notre-cabinet">Notre cabinet</NavLink>

        {/* Bouton Contact dans le menu mobile */}
        <NavLink className="visit visit-mobile-only" to="/contact">
          Contactez-nous
        </NavLink>
      </div>

      {/* Bouton Contact fixe sur Desktop */}
      <NavLink className="visit visit-desktop" to="/contact">
        Contactez-nous
      </NavLink>
    </nav>
  );
}
