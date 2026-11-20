import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation, Link } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import Accueil from "./pages/Accueil.jsx";
import Expertises from "./pages/Expertises.jsx";
import ExpertiseDetaillee from "./pages/ExpertiseDetaillee.jsx";
import Formations from "./pages/Formations.jsx";
import Realisations from "./pages/Realisations.jsx";
import Publications from "./pages/Publications.jsx";
import ArticleDetail from "./pages/ArticleDetail.jsx";
import NotreCabinet from "./pages/NotreCabinet.jsx";
import Visite from "./pages/Visite.jsx";

function Rubrique({ titre, children }) {
  return (
    <>
      <header className="rubrique" id="accueil">
        <Navigation />
        <div className="intro">
          <Link to="/">Accueil</Link> / {titre}
          <h1>{titre}<span>.</span></h1>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
}

function Pages() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const titres = {
      "/": "Cabinet d’ingénierie & Solutions numériques",
      "/expertises": "Nos expertises",
      "/formations": "Nos formations",
      "/realisations": "Nos réalisations",
      "/publications": "Publications & Analyses",
      "/notre-cabinet": "Notre cabinet",
      "/contact": "Contact & Devis"
    };
    const titreActuel = titres[pathname] || "Cabinet d'ingénierie";
    document.title = `${titreActuel} · NumeriLab`;
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Accueil />} />

      {/* Routes Expertises */}
      <Route
        path="/expertises"
        element={<Rubrique titre="Nos expertises"><Expertises /></Rubrique>}
      />
      {/* Routes Pages détaillées d'expertise (Hero avec image de fond dédiée) */}
      <Route
        path="/expertises/genie-civil"
        element={<ExpertiseDetaillee domaineKey="genie-civil" />}
      />
      <Route
        path="/expertises/hydraulique"
        element={<ExpertiseDetaillee domaineKey="hydraulique" />}
      />
      <Route
        path="/expertises/ia-automatisation"
        element={<ExpertiseDetaillee domaineKey="ia-automatisation" />}
      />
      <Route
        path="/expertises/digitalisation"
        element={<ExpertiseDetaillee domaineKey="digitalisation" />}
      />

      {/* Formations */}
      <Route
        path="/formations"
        element={<Formations />}
      />

      {/* Réalisations */}
      <Route
        path="/realisations"
        element={<Rubrique titre="Nos réalisations"><Realisations /></Rubrique>}
      />

      {/* Publications (Listing et page article dédiée) */}
      <Route
        path="/publications"
        element={<Publications />}
      />
      <Route
        path="/publications/:slug"
        element={<ArticleDetail />}
      />

      {/* Notre cabinet */}
      <Route
        path="/notre-cabinet"
        element={<NotreCabinet />}
      />

      {/* Contact */}
      <Route
        path="/contact"
        element={<Rubrique titre="Contactez-nous"><Visite /></Rubrique>}
      />

      {/* Redirections depuis les anciennes URLs */}
      <Route path="/index.html" element={<Navigate to="/" replace />} />
      <Route path="/formations.html" element={<Navigate to="/formations" replace />} />
      <Route path="/prestation-de-service.html" element={<Navigate to="/expertises" replace />} />
      <Route path="/centre.html" element={<Navigate to="/formations" replace />} />
      <Route path="/orientation.html" element={<Navigate to="/formations" replace />} />
      <Route path="/equipe.html" element={<Navigate to="/notre-cabinet" replace />} />
      <Route path="/nous-trouver.html" element={<Navigate to="/contact" replace />} />
      <Route path="/etudes-de-cas.html" element={<Navigate to="/realisations" replace />} />

      {/* 404 */}
      <Route
        path="*"
        element={
          <main className="questions" style={{ textAlign: "center", padding: "80px 20px" }}>
            <h1>Page introuvable</h1>
            <p style={{ margin: "20px 0" }}>La page que vous recherchez n'existe pas ou a été déplacée.</p>
            <Link to="/" className="btn">Retour à l’accueil</Link>
          </main>
        }
      />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
}
