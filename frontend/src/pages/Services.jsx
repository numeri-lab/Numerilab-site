import React, { useState } from "react";

const chiffresCles = [
  { valeur: "48h", libelle: "Proposition commerciale et devis transparent sous 48h" },
  { valeur: "100%", libelle: "Études encadrées par nos formateurs ingénieurs diplômés" },
  { valeur: "5", libelle: "Pôles d’ingénierie et de compétences technologiques" },
  { valeur: "0 FCFA", libelle: "Premier échange et cadrage de faisabilité sans engagement" }
];

const domainesExpertise = [
  {
    id: "web-mobile",
    categorie: "digital",
    badge: "Pôle Digital",
    titre: "Développement Web & Applications Mobiles",
    description: "Conception de solutions logicielles sur-mesure pour PME, institutions et startups. Du site vitrine à la plateforme applicative complexe.",
    tags: ["Sites web modernes & e-commerce", "Applications métiers & SaaS", "Applications mobiles", "APIs & Bases de données"],
    sujetWhatsapp: "Développement Web ou Application Mobile"
  },
  {
    id: "btp-cao",
    categorie: "technique",
    badge: "Pôle Ingénierie & BTP",
    titre: "Conception Technique, Plans 2D/3D & SIG",
    description: "Modélisation architecturale, calculs de structures et cartographie géomatique sous la supervision d'ingénieurs en génie civil et géotechnique.",
    tags: ["Plans d’architecture AutoCAD", "Calcul de structures (Robot)", "Systèmes d’Information Géographique (ArcGIS)", "Modélisation 3D"],
    sujetWhatsapp: "Plans 2D/3D, BTP ou Cartographie SIG"
  },
  {
    id: "data-ia",
    categorie: "data",
    badge: "Pôle Data & IA",
    titre: "Data Analytics, Business Intelligence & IA",
    description: "Valorisation de vos données d'entreprise pour le pilotage stratégique et déploiement de solutions d'intelligence artificielle adaptées.",
    tags: ["Tableaux de bord Power BI & Excel", "Automatisation de scripts Python", "Nettoyage & analyse de données", "Intégration d’outils d’IA générative"],
    sujetWhatsapp: "Projet Data, Dashboard Power BI ou IA"
  },
  {
    id: "ecoles",
    categorie: "conseil",
    badge: "Pôle Éducation & Pédagogie",
    titre: "Solutions pour Écoles & Universités",
    description: "Accompagnement des établissements d’enseignement supérieur : formation des enseignants à l’IA et travaux pratiques clés en main.",
    tags: ["Formation enseignants aux outils d’IA", "Génération de supports & QCM", "Mise à disposition de salles TP", "Modules pratiques certifiants"],
    sujetWhatsapp: "Partenariat école ou formation des enseignants à l'IA"
  },
  {
    id: "entreprises",
    categorie: "conseil",
    badge: "Pôle Entreprise & Audit",
    titre: "Audit Numérique & Montée en Compétences",
    description: "Accompagnement de vos collaborateurs sur les outils numériques du quotidien, optimisation des processus et formation continue.",
    tags: ["Audit de maturité digitale", "Formation bureautique avancée (Pack Office)", "Productivité collaborative", "Cahiers des charges techniques"],
    sujetWhatsapp: "Audit numérique ou formation d'équipe en entreprise"
  }
];

const etapesDemarche = [
  {
    num: "01",
    delai: "Jour 1",
    titre: "Recueil du besoin",
    description: "Échange personnalisé avec un chargé de projet technique pour analyser vos attentes, vos contraintes et le périmètre de la mission (sans engagement)."
  },
  {
    num: "02",
    delai: "Sous 48h",
    titre: "Proposition commerciale",
    description: "Remise d’une proposition claire comprenant méthodologie détaillée, calendrier prévisionnel et chiffrage au juste prix."
  },
  {
    num: "03",
    delai: "Validation",
    titre: "Lancement de la mission",
    description: "Sélection d’une équipe dédiée parmi nos meilleurs apprenants et désignation d'un ingénieur formateur comme responsable technique."
  },
  {
    num: "04",
    delai: "En continu",
    titre: "Réalisation & Suivi agile",
    description: "Développement par itérations avec points réguliers. Vous testez et validez chaque étape intermédiaire de votre solution."
  },
  {
    num: "05",
    delai: "Finalisation",
    titre: "Recette, Livraison & Garantie",
    description: "Contrôle qualité strict, livraison des livrables complets, formation à la prise en main et période de garantie d'assistance."
  }
];

const atouts = [
  {
    titre: "Rigueur des grandes écoles",
    description: "Chaque projet est supervisé par des formateurs ingénieurs diplômés d'écoles reconnues (Télécom Paris, Arts et Métiers, Sorbonne, Polytechnique Agadir, Centrale Lyon)."
  },
  {
    titre: "Tarifs adaptés & grande réactivité",
    description: "Un fonctionnement flexible et agile qui vous offre des prestations de haute qualité technique à des tarifs ajustés aux réalités économiques locales."
  },
  {
    titre: "Impact et insertion professionnelle",
    description: "En nous confiant vos projets, vous contribuez concrètement à l'emploi et à l'expérience professionnelle de jeunes talents formés à Bamako."
  }
];

const faqServices = [
  {
    q: "Qui réalise concrètement les prestations ?",
    r: "Les missions sont réalisées par des équipes projet dédiées, constituées des meilleurs apprenants formés au centre et systématiquement encadrées par nos formateurs ingénieurs qui garantissent la qualité des livrables."
  },
  {
    q: "Sous quel délai obtenons-nous un devis ?",
    r: "Dès réception de votre demande et après un premier échange de cadrage, nous nous engageons à vous faire parvenir une proposition commerciale et technique sous 48 heures ouvrées."
  },
  {
    q: "Proposez-vous une garantie après livraison ?",
    r: "Oui. Toutes nos prestations incluent une période de garantie pour corriger tout ajustement éventuel, ainsi qu'une session de prise en main pour vos équipes."
  },
  {
    q: "Intervenez-vous pour des clients hors de Bamako ?",
    r: "Oui. Grâce à nos outils collaboratifs à distance, nous réalisons des études et prestations pour des entreprises et partenaires partout au Mali et à l'international."
  }
];

function Services() {
  const [filtre, setFiltre] = useState("tous");
  const [projetType, setProjectType] = useState("Développement Web & Mobile");

  const domainesAffiches = filtre === "tous"
    ? domainesExpertise
    : domainesExpertise.filter(d => d.categorie === filtre);

  const whatsappLien = (sujet) =>
    "https://wa.me/22376547591?text=" +
    encodeURIComponent("Bonjour NumeriLab, je souhaite demander un devis / échanger pour un projet de prestation : " + sujet + ".");

  return (
    <div className="amje-page">
      <section className="amje-hero-section">
        <div className="amje-hero-badge">Bureau d’études & Conseil technique</div>
        <h2>L’ingénierie et le numérique au service de vos projets<span>.</span></h2>
        <p className="amje-intro-text">
          Le bureau d’études de <strong>NumeriLab</strong> mobilise l’expertise de ses ingénieurs formateurs et les compétences de ses apprenants pour accompagner les entreprises et les établissements scolaires dans leurs projets numériques et techniques.
        </p>
        <div className="amje-quick-actions">
          <a className="btn" href="#devis-express">Demander un devis sous 48h</a>
          <a className="outline-dark" href="#domaines">Découvrir nos pôles de compétences</a>
        </div>

        <div className="amje-stats">
          {chiffresCles.map(stat => (
            <div key={stat.valeur} className="stat-item">
              <div className="stat-value">{stat.valeur}</div>
              <div className="stat-label">{stat.libelle}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="amje-block" id="domaines">
        <div className="amje-block-header">
          <small>Nos pôles d’expertise</small>
          <h3>Nos domaines de compétences<span>.</span></h3>
          <p>
            Nous intervenons sur l’ensemble du cycle de vie de vos projets techniques, du développement logiciel à la conception industrielle, aux plans techniques et à l’intelligence artificielle.
          </p>
        </div>

        <div className="filter-bar" role="tablist" aria-label="Filtrer les pôles de compétences">
          {[
            { id: "tous", label: "Tous nos pôles" },
            { id: "digital", label: "Développement & Digital" },
            { id: "technique", label: "Génie Civil & BTP" },
            { id: "data", label: "Data & IA" },
            { id: "conseil", label: "Conseil & Écoles" }
          ].map(f => (
            <button
              key={f.id}
              type="button"
              className={"filter-btn" + (filtre === f.id ? " active" : "")}
              onClick={() => setFiltre(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="domains-grid">
          {domainesAffiches.map(domaine => (
            <article key={domaine.id} className="domain-card">
              <div>
                <span className="domain-card-badge">{domaine.badge}</span>
                <h4>{domaine.titre}</h4>
                <p>{domaine.description}</p>
                <ul className="tags-list">
                  {domaine.tags.map(tag => (
                    <li key={tag} className="tag-pill">{tag}</li>
                  ))}
                </ul>
              </div>
              <div className="domain-card-footer">
                <a href={whatsappLien(domaine.sujetWhatsapp)}>
                  Demander une étude pour ce pôle
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="amje-block" id="demarche">
        <div className="amje-block-header">
          <small>Méthodologie & Rigueur</small>
          <h3>Notre démarche d’accompagnement<span>.</span></h3>
          <p>
            Chaque mission suit un processus rigoureux et transparent inspiré des standards des bureaux d’études industriels pour garantir le respect des délais et de votre cahier des charges.
          </p>
        </div>

        <div className="process-grid">
          {etapesDemarche.map(etape => (
            <div key={etape.num} className="process-card">
              <div className="process-header">
                <span className="process-step-num">{etape.num}</span>
                <span className="process-step-delai">{etape.delai}</span>
              </div>
              <h4>{etape.titre}</h4>
              <p>{etape.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="amje-block" id="atouts">
        <div className="amje-block-header">
          <small>La valeur ajoutée NumeriLab</small>
          <h3>Pourquoi nous confier votre étude ?<span>.</span></h3>
        </div>

        <div className="advantages-grid">
          {atouts.map(atout => (
            <div key={atout.titre} className="advantage-card">
              <h4>{atout.titre}</h4>
              <p>{atout.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="quote-box" id="devis-express">
        <h3>Vous avez un projet en tête ? Obtenez votre devis sous 48h<span>.</span></h3>
        <p>
          Sélectionnez la typologie de votre mission pour initier l’échange directement avec notre équipe :
        </p>

        <div className="project-selector" aria-label="Choisir le type de projet">
          {[
            "Développement Web & Mobile",
            "Génie Civil & Plans BTP",
            "Data Analytics & IA",
            "Formation Écoles / Universités",
            "Audit Numérique Entreprise"
          ].map(type => (
            <button
              key={type}
              type="button"
              className={"project-chip" + (projetType === type ? " selected" : "")}
              onClick={() => setProjectType(type)}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="quote-actions">
          <a className="btn" href={whatsappLien(projetType)}>
            Lancer ma demande sur WhatsApp ({projetType})
          </a>
          <div className="quote-contact-direct">
            Ou par email : <a href={`mailto:numerilab223@gmail.com?subject=${encodeURIComponent("Demande de devis - " + projetType)}`}>numerilab223@gmail.com</a> · Tél : <a href="tel:+22376547591">+223 76 54 75 91</a>
          </div>
        </div>
      </section>

      <section className="amje-block services-faq" id="faq-services">
        <div className="amje-block-header">
          <small>Questions fréquentes</small>
          <h3>Tout savoir sur nos prestations<span>.</span></h3>
        </div>

        {faqServices.map(item => (
          <details key={item.q}>
            <summary>{item.q}<span /></summary>
            <article>{item.r}</article>
          </details>
        ))}
      </section>
    </div>
  );
}


export default Services;
