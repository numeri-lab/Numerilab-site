export const cabinetIntro = {
  eyebrow: "À PROPOS DE NUMERILAB",
  titre: "Des compétences réunies pour concevoir, transformer et transmettre.",
  description:
    "NumeriLab est un cabinet d’ingénierie, de conseil et de solutions numériques basé à Bamako, au Mali. Nous réunissons des ingénieurs et spécialistes formés dans des établissements de référence à l’international, au service des projets techniques, de la transformation digitale et du développement des compétences.",
  ambition: {
    kicker: "NOTRE AMBITION",
    texte:
      "Mettre l’expertise technique et numérique au service des organisations, tout en contribuant au développement des compétences."
  }
};

export const missionVision = {
  mission: {
    label: "Notre Mission",
    texte:
      "Accompagner les organisations et porteurs de projets par des prestations d’ingénierie et de transformation digitale, tout en contribuant au développement des compétences techniques et numériques."
  },
  vision: {
    label: "Notre Vision",
    texte:
      "Contribuer à un environnement où les organisations et les talents disposent des compétences et solutions nécessaires pour répondre à leurs défis techniques et numériques."
  }
};

export const domainesIntervention = [
  {
    id: "ingenierie",
    pole: "PÔLE INGÉNIERIE",
    titre: "Ingénierie & Études techniques",
    description:
      "Études de conception, calculs de structures, métrés et dimensionnement de réseaux hydrauliques et d'équipements de pompage.",
    domaines: [
      { nom: "Génie civil", chemin: "/expertises/genie-civil" },
      { nom: "Hydraulique", chemin: "/expertises/hydraulique" }
    ],
    lien: "/expertises"
  },
  {
    id: "digital",
    pole: "PÔLE TRANSFORMATION DIGITALE",
    titre: "Transformation digitale & IA",
    description:
      "Déploiement d'assistants IA, automatisation de flux documentaires, création d'applications métiers sur mesure et reporting décisionnel.",
    domaines: [
      { nom: "IA & Automatisation", chemin: "/expertises/ia-automatisation" },
      { nom: "Digitalisation", chemin: "/expertises/digitalisation" }
    ],
    lien: "/expertises"
  },
  {
    id: "formation",
    pole: "ACTIVITÉ TRANSVERSALE",
    titre: "Formation & développement des compétences",
    description:
      "Programmes pratiques et certifiants en présentiel et en ligne (IA, Data, Programmation, CAO) pour étudiants, professionnels et entreprises.",
    domaines: [
      { nom: "Intelligence artificielle", chemin: "/formations" },
      { nom: "Bureautique & Data", chemin: "/formations" },
      { nom: "Programmation & CAO", chemin: "/formations" }
    ],
    lien: "/formations"
  }
];

export const ecolesEquipe = [
  "Télécom Paris",
  "Arts et Métiers ParisTech",
  "École Polytechnique (l'X)",
  "École Centrale de Lyon",
  "Sorbonne Université",
  "ENSA Tanger",
  "École Polytechnique d’Agadir"
];

// Profils de l'équipe (sourcés depuis equipe.json)
import membresEquipe from "./equipe.json";
export { membresEquipe };
