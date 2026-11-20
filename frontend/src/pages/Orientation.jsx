import React from "react";
import { Link } from "react-router-dom";

const whatsapp = "https://wa.me/22376547591?text=" + encodeURIComponent(
  "Bonjour NumeriLab, je souhaite des informations sur le programme d’orientation et de construction de carrière. Quelles sont les prochaines disponibilités et les modalités ?"
);

const preparation = [
  ["Votre parcours", "Notez vos études, expériences, projets et activités, y compris les expériences associatives."],
  ["Vos centres d’intérêt", "Identifiez les tâches que vous aimez et les domaines du numérique que vous souhaitez découvrir."],
  ["Vos supports", "Rassemblez votre CV, une offre qui vous intéresse et le lien de votre profil LinkedIn si vous en avez un."]
];

export default function Orientation() {
  return <div className="orientation-page">
    <section className="split orientation-intro">
      <div>
        <small>Orientation et construction de carrière</small>
        <h2>Donnez une direction<br />à votre <em>parcours.</em></h2>
        <p>Quel métier découvrir ? Quelles compétences développer ? Comment présenter votre expérience ? NumeriLab vous accompagne pour explorer vos possibilités et préparer votre entrée dans le monde professionnel.</p>
        <div className="actions">
          <a className="btn" href={whatsapp}>Échanger sur mon parcours</a>
          <a className="orientation-link" href="#programme-orientation">Découvrir le programme</a>
        </div>
      </div>
      <img src="/uploads/mentor-student.jpg" alt="Échange autour d’un parcours de formation" />
    </section>

    <section className="orientation-section orientation-programme" id="programme-orientation" aria-labelledby="programme-titre">
      <small>Le programme NumeriLab</small>
      <h2 id="programme-titre">Deux séances pour avancer.</h2>
      <div className="orientation-sessions">
        <article>
          <small>Séance 01</small>
          <h3>Explorer les métiers du numérique</h3>
          <p>Faire le lien entre vos centres d’intérêt et les possibilités professionnelles.</p>
          <ul>
            <li>Découvrir l’écosystème numérique et ses acteurs.</li>
            <li>Comprendre les métiers et les différentes filières.</li>
            <li>Explorer des applications concrètes et des projets réels.</li>
            <li>Identifier les domaines qui correspondent à vos intérêts.</li>
          </ul>
          <p className="orientation-objective"><strong>Objectif de la séance</strong><br />Préciser les pistes professionnelles que vous souhaitez explorer.</p>
        </article>
        <article>
          <small>Séance 02</small>
          <h3>Construire son profil professionnel</h3>
          <p>Mettre en valeur vos compétences et préparer vos candidatures.</p>
          <ul>
            <li>Structurer un CV qui présente clairement votre parcours.</li>
            <li>Rédiger une lettre de motivation adaptée à votre candidature.</li>
            <li>Créer ou améliorer votre profil LinkedIn.</li>
            <li>Préparer votre présentation et vos réponses en entretien.</li>
          </ul>
          <p className="orientation-objective"><strong>Objectif de la séance</strong><br />Mieux présenter votre expérience et expliquer votre projet professionnel.</p>
        </article>
      </div>
    </section>

    <section className="orientation-section" aria-labelledby="preparation-titre">
      <small>Avant notre échange</small>
      <h2 id="preparation-titre">Préparer votre réflexion.</h2>
      <p className="orientation-lead">Quelques éléments à rassembler pour partir de votre situation et de vos envies.</p>
      <div className="orientation-preparation">
        {preparation.map(([titre, description]) => <div key={titre}>
          <h3>{titre}</h3><p>{description}</p>
        </div>)}
      </div>
    </section>

    <section className="orientation-section orientation-contact" aria-labelledby="orientation-contact-titre">
      <div>
        <small>Votre prochaine étape</small>
        <h2 id="orientation-contact-titre">Parlons de votre projet.</h2>
        <p>Présentez-nous votre situation et ce que vous souhaitez travailler. L’équipe vous précisera les disponibilités et les modalités du programme.</p>
        <div className="actions">
          <a className="btn" href={whatsapp}>Contacter l’équipe sur WhatsApp</a>
          <a className="orientation-link" href="mailto:numerilab223@gmail.com?subject=Orientation%20et%20carri%C3%A8re">Nous écrire par email</a>
        </div>
      </div>
      <div className="orientation-next">
        <h3>Un domaine vous intéresse déjà ?</h3>
        <p>Consultez les programmes pour découvrir les outils et les projets abordés en formation.</p>
        <Link to="/formations.html">Explorer les formations</Link>
      </div>
    </section>
  </div>;
}
