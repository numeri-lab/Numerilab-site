import React, { useState } from "react";

function Visite() {
  return <footer id="visite">
    <small>Parlons de votre projet</small>
    <h2>Retrouvez-nous<br />à Missabougou<span>.</span></h2>
    <div className="cols">
      <div><p>Station CORRIDOR · Missabougou, Bamako, Mali</p>
        <p>Lundi–vendredi · 8 h–18 h<br />Samedi · 9 h–13 h</p>
        <a className="btn" href="https://www.google.com/maps/search/?api=1&amp;query=Station+CORRIDOR+Missabougou+Bamako">Rechercher sur la carte</a>
      </div>
      <div className="coordonnees">
        <a href="tel:+22376547591">+223 76 54 75 91</a>
        <a href="mailto:numerilab223@gmail.com">numerilab223@gmail.com</a>
        <a className="btn" href="https://wa.me/22376547591">Écrire sur WhatsApp</a>
      </div>
    </div>
    <hr /><div className="bottom"><strong>NumeriLab</strong><a href="#accueil">Retour en haut</a></div>
  </footer>;
}


export default Visite;
