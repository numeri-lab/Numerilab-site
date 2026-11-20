import React from "react";
function Questions() {
  return <section className="questions" aria-labelledby="questions-titre">
    <h2 id="questions-titre">Questions fréquentes<span>.</span></h2>
    <details><summary>Comment s’inscrire ?<span /></summary><article>Écrivez-nous sur WhatsApp en précisant la formation souhaitée. Notre équipe vous accompagne pour choisir votre session.</article></details>
    <details><summary>Quel niveau faut-il avoir ?<span /></summary><article>Une connaissance de base de l’ordinateur suffit pour commencer. Les parcours accueillent notamment les débutants et les étudiants.</article></details>
    <details><summary>Peut-on suivre les cours à distance ?<span /></summary><article>Oui, les formations sont proposées au centre et à distance.</article></details>
    <details><summary>Un certificat est-il délivré ?<span /></summary><article>Un certificat NumeriLab est remis après le parcours et les mini-projets.</article></details>
    <details><summary>Quand commence la prochaine session ?<span /></summary><article><a href="https://wa.me/22376547591">Contactez l’équipe</a> pour confirmer les dates, le tarif et les places disponibles.</article></details>
  </section>;
}


export default Questions;
