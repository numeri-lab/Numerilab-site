export const expertisesData = {
  "genie-civil": {
    id: "genie-civil",
    titre: "Génie civil",
    pole: "Pôle Ingénierie",
    imageBg: "/uploads/genie-civil.png",
    kicker: "PÔLE INGÉNIERIE / ÉTUDES TECHNIQUES",
    heroTitre: "Concevoir, dimensionner et estimer vos projets de construction",
    heroPitch: "NumeriLab réalise des études techniques pour accompagner la préparation de vos projets de bâtiment, de la conception des plans aux calculs de structures et aux estimations de coûts.",
    ctaTexte: "Demander une étude technique",
    titreFormulaire: "Un projet de construction ? Parlons de votre étude technique.",
    introPrestations: "Des prestations d'ingénierie rigoureuses pour fiabiliser la conception et le dimensionnement de vos ouvrages avant tout engagement de travaux.",
    prestations: [
      {
        titre: "Conception de plans 2D et maquettes numériques 3D",
        description: "Élaboration des plans d’architecture et d’exécution, vues en coupe, façades et maquettes numériques complètes pour la visualisation spatiale et la coordination technique.",
        livrables: "Plans 2D côtés, coupes, façades, détails constructifs, vues et maquettes 3D."
      },
      {
        titre: "Études, modélisation et dimensionnement des structures",
        description: "Modélisation numérique filaire et surfacique sous logiciels de calcul agréés. Vérification des descentes de charges, dimensionnement du béton armé et charpentes métalliques selon les normes en vigueur.",
        livrables: "Notes de calcul de structures, plans de ferraillage, notes de dimensionnement et documents techniques."
      },
      {
        titre: "Métrés et devis quantitatifs et estimatifs (DQE)",
        description: "Évaluation précise des quantités d'ouvrages, décomposition méthodique des postes de travaux et estimation budgétaire prévisionnelle pour optimiser vos coûts de réalisation.",
        livrables: "Bordereaux de prix unitaires (BPU), métrés détaillés et devis quantitatifs et estimatifs (DQE)."
      }
    ],
    livrablesSynthese: [
      "Plans d'exécution 2D côtés et coupes de principe",
      "Maquettes numériques 3D de synthèse de projet",
      "Notes de calcul réglementaires et dimensionnement des armatures",
      "Devis quantitatifs et estimatifs prévisionnels (DQE) détaillés"
    ],
    realisations: [
      {
        id: "gc-batiment-r2",
        titre: "Dimensionnement structurel d'un bâtiment R+2 à usage mixte",
        domaine: "Génie civil",
        domaineSlug: "genie-civil",
        pole: "Pôle Ingénierie",
        image: "/uploads/roboanalysis.avif",
        tags: ["Robot Structural Analysis", "Béton armé", "Eurocodes / BAEL"],
        contexte: "Projet de construction d'un immeuble commercial et résidentiel nécessitant une reprise de charges optimisée et un ferraillage normé.",
        intervention: "Modélisation complète sous Robot Structural Analysis, descente de charges statiques et dynamiques, dimensionnement des semelles, poteaux et poutres.",
        livrables: "Note de calcul complète, plans de coffrage et ferraillage validés, quantitatif prévisionnel.",
        resultat: "Structure sécurisée conforme aux règles Eurocodes/BAEL et optimisation de 12 % sur le ratio d'acier."
      },
      {
        id: "gc-dce-bureaux",
        titre: "Élaboration du dossier de plans d'exécution et DQE d'un complexe de bureaux",
        domaine: "Génie civil",
        domaineSlug: "genie-civil",
        pole: "Pôle Ingénierie",
        image: "/uploads/autocad.webp",
        tags: ["AutoCAD", "Plans 2D / Coupes", "DQE / Métrés"],
        contexte: "Nécessité de cadrer techniquement et financièrement l'appel d'offres pour la réalisation d'un bâtiment administratif.",
        intervention: "Production des plans d'architecture sous AutoCAD, établissement des métrés précis de gros œuvre et second œuvre, consolidation du DQE.",
        livrables: "Jeu complet de plans d'exécution au format PDF et DWG, bordereau estimatif consolidé.",
        resultat: "Dossier de consultation des entreprises (DCE) finalisé sans réserves pour la consultation des entreprises."
      }
    ]
  },

  "hydraulique": {
    id: "hydraulique",
    titre: "Hydraulique",
    pole: "Pôle Ingénierie",
    imageBg: "/uploads/hydraulique.png",
    kicker: "PÔLE INGÉNIERIE / ÉTUDES HYDRAULIQUES",
    heroTitre: "Des études hydrauliques adaptées aux besoins de vos projets",
    heroPitch: "NumeriLab accompagne les projets d’irrigation, d’approvisionnement en eau et d’aménagement hydraulique par des études, des calculs et des modélisations adaptés aux données disponibles.",
    ctaTexte: "Présenter votre projet hydraulique",
    titreFormulaire: "Un projet hydraulique ? Étudions ensemble vos besoins.",
    introPrestations: "Des études techniques spécialisées pour sécuriser l'accès à la ressource en eau, dimensionner les réseaux de distribution et prévenir les aléas d'inondation.",
    prestations: [
      {
        titre: "Évaluation des besoins en eau des cultures et périmètres agricoles",
        description: "Calcul rigoureux des bilans hydriques selon la pédologie, le type de culture, l'évapotranspiration locale et les cycles saisonniers pour calibrer au juste besoin l'apport d'eau.",
        livrables: "Rapport d’étude agronomique et hydrique, hypothèses de calcul et bilan des volumes nécessaires."
      },
      {
        titre: "Conception et dimensionnement de systèmes d’irrigation localisée",
        description: "Dimensionnement hydraulique des réseaux (goutte-à-goutte, aspersion, canaux), calculs de pertes de charge, sélection de la tuyauterie et des régulateurs de pression.",
        livrables: "Plans de réseaux hydrauliques, notes de dimensionnement hydraulique, nomenclature et choix d’équipements."
      },
      {
        titre: "Dimensionnement d’équipements de forage et de pompage",
        description: "Analyse des données hydrogéologiques (débit critique, rabattement, niveau piézométrique), sélection de la pompe immergée (solaire ou réseau) et dimensionnement du refoulement.",
        livrables: "Notes de calcul de la hauteur manométrique totale (HMT), courbe caractéristique et spécifications techniques du pompage."
      },
      {
        titre: "Études hydrologiques et simulations d’inondation",
        description: "Caractérisation des bassins versants, estimation des débits de crue pour différentes périodes de retour et modélisation des écoulements pour la protection des zones vulnérables.",
        livrables: "Scénarios hydrologiques, cartographie des zones inondables et rapport de simulation hydraulique."
      }
    ],
    livrablesSynthese: [
      "Rapports d'études et bilans hydriques complets",
      "Plans d'implantation des réseaux d'irrigation et canalisations",
      "Notes de calcul de dimensionnement de pompes et forages (HMT, débit)",
      "Cartes thématiques et modélisations des zones inondables"
    ],
    realisations: [
      {
        id: "hyd-irrigation-5ha",
        titre: "Dimensionnement d'un système d'irrigation goutte-à-goutte pour un périmètre maraîcher de 5 hectares",
        domaine: "Hydraulique",
        domaineSlug: "hydraulique",
        pole: "Pôle Ingénierie",
        image: "/uploads/hydraulique.png",
        tags: ["Irrigation localisée", "Pompage solaire", "Bilan hydrique"],
        contexte: "Optimisation de l'usage de l'eau sur une exploitation agricole périurbaine soumise à des pénuries saisonnières.",
        intervention: "Calcul des besoins en pointe des cultures, tracé des réseaux tertiaires et secondaires, dimensionnement du stockage et d'une station de pompage solaire.",
        livrables: "Plans de pose du réseau, note de calcul hydraulique, fiche de spécification des pompes solaires.",
        resultat: "Réduction estimée de 35 % de la consommation d'eau par rapport à l'irrigation traditionnelle gravitaire."
      },
      {
        id: "hyd-forage-communautaire",
        titre: "Étude hydrogéologique et dimensionnement du pompage d'un forage communautaire",
        domaine: "Hydraulique",
        domaineSlug: "hydraulique",
        pole: "Pôle Ingénierie",
        image: "/uploads/arcgis.jpeg",
        tags: ["Hydrogéologie", "Pompage autonome", "ArcGIS / Cartographie"],
        contexte: "Alimentation en eau potable d'une collectivité nécessitant une adduction sécurisée à partir d'un forage profond.",
        intervention: "Interprétation des essais de pompage, calcul du débit d'exploitation durable, dimensionnement de la colonne d'exhaure et du réservoir surélevé.",
        livrables: "Note de calcul HMT/débit, schéma technique d'installation et prescriptions d'exploitation.",
        resultat: "Adduction dimensionnée pour subvenir aux besoins de 1 200 personnes avec un pompage autonome fiabilisé."
      }
    ]
  },

  "ia-automatisation": {
    id: "ia-automatisation",
    titre: "IA & Automatisation",
    pole: "Pôle Transformation digitale",
    imageBg: "/uploads/automatisation.png",
    kicker: "PÔLE TRANSFORMATION DIGITALE / INTELLIGENCE ARTIFICIELLE",
    heroTitre: "L’IA et l’automatisation au service de vos activités",
    heroPitch: "Nous analysons vos processus, identifions les possibilités d’amélioration et développons des solutions d’intelligence artificielle et d’automatisation adaptées aux usages de votre organisation.",
    ctaTexte: "Demander un diagnostic IA",
    titreFormulaire: "Et si vos processus gagnaient en efficacité ?",
    introPrestations: "Des solutions concrètes d’IA appliquée et d’automatisation de flux pour éliminer les tâches répétitives, assister vos collaborateurs et valoriser vos données internes.",
    prestations: [
      {
        titre: "Audit IA, digitalisation & automatisation",
        description: "Analyse approfondie de vos processus métiers actuels, identification des goulots d’étranglement et cartographie des opportunités réelles de simplification par l’IA.",
        livrables: "Cartographie des processus, registre d’opportunités, matrice de priorisation (impact/effort), estimation argumentée des gains et feuille de route."
      },
      {
        titre: "Assistants IA spécialisés",
        description: "Conception et déploiement d’assistants virtuels connectés à vos bases documentaires (RAG, bases de connaissances internes, procédures internes) pour accélérer la recherche d'information.",
        livrables: "Assistant opérationnel personnalisé, interface adaptée aux utilisateurs, guide d'utilisation et accompagnement au changement."
      },
      {
        titre: "Automatisation des processus métiers",
        description: "Mise en place de flux de travail intelligents automatisant le traitement de documents, la saisie récurrente de données, la notification et l'intégration inter-logiciels.",
        livrables: "Workflows automatisés fonctionnels, connecteurs d’API, journalisation des flux et procédures d’exploitation."
      },
      {
        titre: "Intégration de solutions IA",
        description: "Intégration transparente de modèles d'IA générative et de traitement du langage naturel (NLP) au cœur de vos outils logiciels ou applications existantes.",
        livrables: "Configuration technique, protocoles de tests, déploiement sécurisé et transfert de compétences."
      }
    ],
    livrablesSynthese: [
      "Rapport d'audit IA et feuille de route d'automatisation priorisée",
      "Assistants IA configurés sur vos documents internes d'entreprise",
      "Workflows automatisés sans friction entre vos outils de travail",
      "Documentation technique et sessions de prise en main pour les équipes"
    ],
    realisations: [
      {
        id: "ia-factures-ocr",
        titre: "Automatisation du traitement des devis et factures fournisseurs",
        domaine: "IA & Automatisation",
        domaineSlug: "ia-automatisation",
        pole: "Pôle Transformation digitale",
        image: "/uploads/automatisation.png",
        tags: ["OCR intelligent", "LLM", "Intégration API"],
        contexte: "Une entreprise régionale consacrait plus de 15 heures par semaine à la saisie manuelle de factures scannées dans son outil de comptabilité.",
        intervention: "Déploiement d'un pipeline d'extraction automatisée (OCR intelligent + LLM pour la structuration des données) et injection directe via API.",
        livrables: "Flux d'automatisation opérationnel, interface de validation des anomalies, documentation d'exploitation.",
        resultat: "80 % de temps économisé sur la saisie administrative et quasi-élimination des erreurs de ressaisie."
      },
      {
        id: "ia-rag-normes",
        titre: "Assistant documentaire pour l'accès aux normes et procédures techniques",
        domaine: "IA & Automatisation",
        domaineSlug: "ia-automatisation",
        pole: "Pôle Transformation digitale",
        image: "/uploads/IA.webp",
        tags: ["RAG", "Base vectorielle", "IA générative"],
        contexte: "Un bureau technique disposait de plus de 800 documents de normes et manuels techniques difficilement exploitables rapidement par les équipes terrain.",
        intervention: "Conception d'un assistant IA basé sur une architecture RAG sécurisée en local, permettant d'interroger la base documentaire en langage naturel avec citation des pages sources.",
        livrables: "Application web d'interrogation, index vectoriel structuré, sessions de formation des ingénieurs.",
        resultat: "Temps de recherche documentaire divisé par 4 et accès instantané aux références exactes sur le terrain."
      }
    ]
  },

  "digitalisation": {
    id: "digitalisation",
    titre: "Digitalisation",
    pole: "Pôle Transformation digitale",
    imageBg: "/uploads/digitalisation.png",
    kicker: "PÔLE TRANSFORMATION DIGITALE / SOLUTIONS LOGICIELLES",
    heroTitre: "Des solutions numériques conçues autour de vos besoins",
    heroPitch: "NumeriLab conçoit et déploie des outils numériques pour moderniser les opérations, simplifier la gestion et améliorer l’accès à l’information.",
    ctaTexte: "Discuter de votre solution numérique",
    titreFormulaire: "Un projet de digitalisation ? Construisons la solution adaptée.",
    introPrestations: "Des plateformes web et applications sur mesure adaptées aux réalités des entreprises africaines, alliant robustesse, simplicité d'usage et haute disponibilité.",
    prestations: [
      {
        titre: "Sites institutionnels et plateformes web",
        description: "Création de sites internet professionnels, portails d'information et plateformes web interactives pour valoriser votre activité et renforcer votre présence digitale.",
        livrables: "Site web ou plateforme fonctionnelle, design responsive adapté aux mobiles, code documenté et interface d'administration."
      },
      {
        titre: "Applications métiers et outils de gestion",
        description: "Développement d’applications sur mesure répondant aux problématiques opérationnelles spécifiques de votre entreprise (gestion de stocks, suivi des interventions, RH).",
        livrables: "Application web/mobile personnalisée, environnement de tests, documentation utilisateur et technique."
      },
      {
        titre: "Dématérialisation des procédures",
        description: "Remplacement des formulaires papier et circuits manuels par des parcours numériques fluides avec validation hiérarchique et suivi d’avancement en temps réel.",
        livrables: "Formulaires dynamiques, circuits de validation configurés, traçabilité et historique d'audit."
      },
      {
        titre: "Data, reporting et tableaux de bord",
        description: "Consolidation de vos sources de données éparses, structuration de bases de données et conception de tableaux de bord interactifs pour piloter votre activité en temps réel.",
        livrables: "Bases de données structurées, tableaux de bord interactifs (Power BI / web) et rapports d’indicateurs clés."
      }
    ],
    livrablesSynthese: [
      "Plateformes web et applications métiers prêtes à l'emploi",
      "Formulaires et workflows de dématérialisation opérationnels",
      "Tableaux de bord de pilotage décisionnel interactifs",
      "Documentation complète et code source sous assurance qualité"
    ],
    realisations: [
      {
        id: "dig-suivi-chantiers",
        titre: "Plateforme de gestion opérationnelle et suivi de chantiers",
        domaine: "Digitalisation",
        domaineSlug: "digitalisation",
        pole: "Pôle Transformation digitale",
        image: "/uploads/digitalisation.png",
        tags: ["Application Web", "Gestion de chantiers", "Temps réel"],
        contexte: "Une entreprise du secteur technique souhaitait suivre en direct l'avancement de ses chantiers, la consommation des matériaux et les rapports journaliers.",
        intervention: "Conception d'une application web responsive accessible sur mobile pour les chefs de chantier et d'un tableau de bord centralisé pour la direction.",
        livrables: "Application web déployée, base de données sécurisée, tableau de bord de suivi financier et matériel.",
        resultat: "Visibilité en temps réel sur 100 % des chantiers actifs et réduction des retards de reporting de 3 jours à un instantané."
      },
      {
        id: "dig-powerbi-stocks",
        titre: "Conception d'un tableau de bord de pilotage commercial et stocks",
        domaine: "Digitalisation",
        domaineSlug: "digitalisation",
        pole: "Pôle Transformation digitale",
        image: "/uploads/powerbi1.png",
        tags: ["Power BI", "Data Analytics", "Pilotage stocks"],
        contexte: "Un distributeur de pièces techniques éprouvait des difficultés à anticiper ses ruptures de stocks et à consolider ses ventes multi-boutiques.",
        intervention: "Nettoyage des données existantes, modélisation relationnelle et création d'un rapport interactif Power BI avec alertes de seuils critiques.",
        livrables: "Rapport décisionnel automatisé, procédures de mise à jour des données, guide utilisateur.",
        resultat: "Baisse de 25 % des ruptures de stock constatées sur le premier trimestre d'exploitation."
      }
    ]
  }
};

export const toutesLesRealisations = [
  ...expertisesData["genie-civil"].realisations,
  ...expertisesData["hydraulique"].realisations,
  ...expertisesData["ia-automatisation"].realisations,
  ...expertisesData["digitalisation"].realisations
];

