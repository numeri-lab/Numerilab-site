export const articleALaUne = {
  id: "agents-ia-nouveaux-usages",
  slug: "agents-ia-nouveaux-usages",
  thematique: "Intelligence artificielle",
  format: "Décryptage",
  titre: "Les agents IA : vers de nouveaux usages ?",
  chapo: "De l'automatisation de tâches répétitives à la prise de décision assistée, comment les agents autonomes redéfinissent la productivité et les flux de travail en entreprise.",
  auteur: "Habibata Samaké",
  auteurRole: "Ingénieure en intelligence artificielle — Télécom Paris",
  auteurAvatar: "/uploads/equipe/habibata.jpg",
  date: "10 novembre 2026",
  tempsLecture: "5 min de lecture",
  image: "/uploads/publications/agents-ia.jpg",
  illustrationType: "network-graph",
  essentiel: [
    "Les agents IA dépassent la simple génération de texte en exécutant des séquences d'actions multi-outils autonomes.",
    "L'intégration avec les bases de données d'entreprise et les API métiers exige une traçabilité et des garde-fous stricts.",
    "La valeur ajoutée réside dans des cas d'usage ciblés : support technique, traitement de flux documentaires et aide à la décision."
  ],
  sections: [
    {
      titre: "Du modèle conversationnel à l'agent autonome",
      contenu: [
        "Les premières vagues d'adoption de l'intelligence artificielle générative se sont concentrées sur les interfaces de discussion et la rédaction assistée. Si ces usages ont démontré la puissance des modèles de fondation, ils restaient confinés à des requêtes passives : l'utilisateur pose une question, le modèle formule une réponse.",
        "L'émergence des architectures d'agents autonomes marque une rupture fondamentale. Un agent ne se contente plus de répondre : il planifie une succession d'étapes, interroge des outils spécialisés (bases SQL, CRM, API externes, calculateurs), analyse les résultats intermédiaires et ajuste sa stratégie jusqu'à l'atteinte d'un objectif opérationnel."
      ]
    },
    {
      titre: "Les cas d'usage concrets dans les organisations",
      contenu: [
        "Dans l'environnement de travail moderne, l'agent IA trouve sa pleine utilité dans la réduction des tâches chronophages à faible valeur ajoutée :",
        "• Qualification et routage automatisé des dossiers entrants : analyse sémantique des pièces jointes, extraction des données clés et mise à jour des systèmes internes.",
        "• Recherche et synthèse documentaire avancée (RAG) : interrogation instantanée de bases de connaissances internes, notes de service et procédures réglementaires avec citation exacte des sources.",
        "• Surveillance et alertes proactives : détection d'anomalies dans les flux financiers, les plannings de chantiers ou les consommations énergétiques."
      ]
    },
    {
      titre: "Exigences de sécurité et traçabilité opérationnelle",
      contenu: [
        "Le déploiement d'agents autonomes ne saurait se faire sans un cadre de gouvernance rigoureux. Chez NumeriLab, nous appliquons le principe du « Human in the loop » : chaque décision critique (engagement financier, modification de plans, transmission de rapports officiels) reste soumise à la validation expresse d'un responsable humain.",
        "De plus, la protection de la souveraineté des données d'entreprise impose d'héberger les pipelines d'inférence au sein d'environnements privés et sécurisés, interdisant tout réentraînement non consenti par des plateformes tierces."
      ]
    }
  ],
  sources: [
    "NumeriLab Research — Benchmark des architectures d'agents autonomes en milieu professionnel (2026)",
    "Télécom Paris — Travaux sur la sécurité et la traçabilité des modèles d'IA générative",
    "OpenAI & Anthropic — Guidelines on tool use and agentic workflows"
  ]
};

export const articlesSecondaires = [
  {
    id: "irrigation-dimensionnement",
    slug: "irrigation-dimensionnement",
    thematique: "Ingénierie",
    format: "Analyse",
    titre: "Irrigation : comprendre les choix de dimensionnement",
    chapo: "Optimiser les débits, limiter les pertes de charge et sécuriser l'approvisionnement en eau pour les périmètres agricoles sahéliens.",
    auteur: "Jiddou Ag Toutta",
    auteurRole: "Ingénieur en génie civil et hydraulique — École Polytechnique d'Agadir",
    auteurAvatar: "/uploads/equipe/jiddou.jpg",
    date: "8 novembre 2026",
    tempsLecture: "4 min de lecture",
    image: "/uploads/publications/irrigation.jpg",
    illustrationType: "hydraulics",
    essentiel: [
      "Le dimensionnement hydraulique doit être corrélé aux cycles saisonniers d'évapotranspiration et à la rétention d'eau du sol.",
      "Le goutte-à-goutte permet une économie d'eau moyenne de 30 à 40 % par rapport aux méthodes d'irrigation par submersion.",
      "Le couplage avec le pompage solaire photovoltaïque réduit les coûts d'exploitation et stabilise les rendements."
    ],
    sections: [
      {
        titre: "L'impératif de l'efficience hydrique en zone sahélienne",
        contenu: [
          "L'accès à l'eau constitue le premier facteur limitant du développement agricole dans notre région. Pourtant, de nombreux projets d'irrigation souffrent d'un surdimensionnement coûteux ou, à l'inverse, d'une sous-estimation des débits de pointe nécessaires aux cultures maraîchères pendant les mois les plus chauds.",
          "Une étude de dimensionnement rigoureuse débute obligatoirement par le calcul du bilan hydrique journalier, croisant la pédologie, le coefficient cultural (Kc) et les données météorologiques locales."
        ]
      },
      {
        titre: "Sélection des réseaux et calcul des pertes de charge",
        contenu: [
          "Le choix de la technologie d'irrigation conditionne le dimensionnement des équipements. Le système de goutte-à-goutte localisé apporte l'eau directement au système racinaire, minimisant les pertes par évaporation.",
          "Cependant, ce système exige une pression constante et une filtration minutieuse pour éviter le colmatage des goutteurs. Les ingénieurs de NumeriLab établissent les profils piézométriques, calculent les hauteurs manométriques totales (HMT) et dimensionnent les stations de surpression solaire adaptées."
        ]
      }
    ],
    sources: [
      "FAO — Irrigation and Drainage Paper 56: Crop evapotranspiration",
      "NumeriLab Pôle Ingénierie — Retours d'expérience sur 15 périmètres maraîchers au Mali"
    ]
  },
  {
    id: "mutations-ecosystemes-technologiques",
    slug: "mutations-ecosystemes-technologiques",
    thematique: "Innovation & Afrique",
    format: "Décryptage",
    titre: "Les mutations des écosystèmes technologiques",
    chapo: "L'essor des solutions numériques souveraines et l'émergence de nouveaux pôles de compétences techniques en Afrique de l'Ouest.",
    auteur: "Abdoulaye Sall",
    auteurRole: "Ingénieur généraliste — Arts et Métiers ParisTech",
    auteurAvatar: "/uploads/equipe/abdoulaye.jpg",
    date: "5 novembre 2026",
    tempsLecture: "6 min de lecture",
    image: "/uploads/publications/ecosysteme-tech.jpg",
    illustrationType: "innovation",
    essentiel: [
      "L'Afrique de l'Ouest voit émerger des besoins croissants en infrastructures numériques adaptées aux réalités locales.",
      "La formation d'ingénieurs généralistes et de développeurs de haut niveau est la condition sine qua non de la souveraineté digitale.",
      "L'hybridation entre compétences d'ingénierie physique et maîtrise du logiciel transforme les PME régionales."
    ],
    sections: [
      {
        titre: "Un saut qualitatif dans les attentes des entreprises",
        contenu: [
          "Pendant longtemps, la numérisation des entreprises ouest-africaines s'est résumée à l'adoption d'outils bureautiques standards ou à la création de simples sites vitrines. Aujourd'hui, les organisations recherchent des progiciels métiers sur mesure, des applications de suivi d'exploitation et des architectures d'intégration robustes.",
          "Cette maturité grandissante crée une forte demande pour des cabinets capables de concevoir des solutions pérennes, documentées et conformes aux meilleures normes internationales."
        ]
      },
      {
        titre: "Le rôle moteur du développement des compétences",
        contenu: [
          "Pour accompagner ce mouvement, la transmission de savoir-faire d'excellence est indispensable. NumeriLab combine son activité d'études avec des parcours de formation certifiants afin de former une génération d'ingénieurs immédiatement opérationnels sur les projets structurants de notre continent."
        ]
      }
    ],
    sources: [
      "Rapport TechCabal — State of Tech in Africa",
      "NumeriLab — Enquête sur les besoins en compétences numériques des entreprises (Bamako, 2026)"
    ]
  }
];

export const toutesLesPublications = [
  {
    id: "ia-et-nouveaux-metiers",
    slug: "ia-et-nouveaux-metiers",
    thematique: "Intelligence artificielle",
    format: "Analyse",
    titre: "IA et nouveaux métiers",
    chapo: "Quels impacts l'intelligence artificielle a-t-elle sur les profils d'ingénieurs et les compétences indispensables en entreprise ?",
    auteur: "Habibata Samaké",
    auteurRole: "Ingénieure en intelligence artificielle — Télécom Paris",
    auteurAvatar: "/uploads/equipe/habibata.jpg",
    date: "3 novembre 2026",
    tempsLecture: "6 min",
    image: "/uploads/publications/ia-metiers.jpg",
    essentiel: [
      "L'IA ne remplace pas l'ingénieur, elle transforme ses prérogatives vers l'analyse critique et le cadrage technique.",
      "Les compétences de prompt engineering avancé, d'évaluation de modèles et de sécurisation des flux deviennent indispensables.",
      "Les profils hybrides associant expertise métier et culture data sont les plus recherchés."
    ],
    sections: [
      {
        titre: "La redéfinition du rôle de l'ingénieur",
        contenu: [
          "L'automatisation accélérée de l'écriture de code ou du dimensionnement préliminaire déplace la valeur ajoutée de l'ingénieur vers l'analyse critique, la validation des hypothèses et l'architecture globale des systèmes.",
          "Savoir vérifier la pertinence d'un résultat calculé par une IA devient plus stratégique que la simple exécution du calcul."
        ]
      }
    ],
    sources: ["World Economic Forum — The Future of Jobs Report"]
  },
  {
    id: "donnees-performance",
    slug: "donnees-performance",
    thematique: "Transformation digitale",
    format: "Décryptage",
    titre: "Données & performance",
    chapo: "De la donnée brute aux tableaux de bord décisionnels en temps réel : bâtir une architecture de reporting robuste.",
    auteur: "Oumar Diallo",
    auteurRole: "Ingénieur en Data Analytics — École Centrale de Lyon",
    auteurAvatar: "/uploads/equipe/oumar.jpg",
    date: "1er novembre 2026",
    tempsLecture: "5 min",
    image: "/uploads/publications/data-performance.jpg",
    essentiel: [
      "Centraliser et assainir les données existantes est un prérequis incontournable avant tout projet de Business Intelligence.",
      "Les tableaux de bord doivent être orientés sur 3 à 5 indicateurs clés d'action (KPI) pour éviter la surcharge cognitive.",
      "L'automatisation des flux élimine les retards de consolidation hebdomadaires ou mensuels."
    ],
    sections: [
      {
        titre: "Le piège de la profusion de données non qualifiées",
        contenu: [
          "Beaucoup d'organisations collectent des quantités importantes de données dans des tableurs hétérogènes. Sans modélisation relationnelle unifiée, ces données restent des silos inexploités.",
          "En mettant en place une architecture décisionnelle moderne (Power BI, scripts de synchronisation automatique), la direction générale dispose d'un pilotage instantané de sa trésorerie et de ses opérations."
        ]
      }
    ],
    sources: ["Gartner Data & Analytics Trends", "NumeriLab Pôle Data"]
  },
  {
    id: "hydraulique-durable",
    slug: "hydraulique-durable",
    thematique: "Ingénierie",
    format: "Dossier",
    titre: "Hydraulique durable",
    chapo: "Sécurisation de l'accès à l'eau et dimensionnement des forages communautaires face aux aléas climatiques sahéliens.",
    auteur: "Jiddou Ag Toutta",
    auteurRole: "Ingénieur en génie civil et hydraulique — École Polytechnique d'Agadir",
    auteurAvatar: "/uploads/equipe/jiddou.jpg",
    date: "28 octobre 2026",
    tempsLecture: "8 min",
    image: "/uploads/publications/hydraulique-durable.jpg",
    essentiel: [
      "Les essais de pompage par paliers permettent de déterminer le débit critique sans risquer l'ensablement du forage.",
      "L'autonomie solaire photovoltaïque offre une rentabilité remarquable en milieu rural isolé.",
      "La maintenance préventive et le suivi piézométrique garantissent la pérennité de l'ouvrage sur plus de 15 ans."
    ],
    sections: [
      {
        titre: "Le diagnostic hydrogéologique préalable",
        contenu: [
          "Un forage communautaire durable nécessite une interprétation rigoureuse des essais de pompage pour fixer le débit d'exploitation sécurisé. Négliger cette étape conduit souvent à un tarissement précoce du captage.",
          "Chez NumeriLab, nous combinons les mesures de terrain avec la modélisation cartographique pour localiser les zones de recharge favorables."
        ]
      }
    ],
    sources: ["Direction Nationale de l'Hydraulique du Mali", "NumeriLab Études"]
  },
  {
    id: "dematerialisation-processus",
    slug: "dematerialisation-processus",
    thematique: "Transformation digitale",
    format: "Dossier",
    titre: "Dématérialiser sans complexifier",
    chapo: "Comment moderniser les circuits de validation internes et le suivi administratif sans alourdir le quotidien des équipes.",
    auteur: "Cheickna Barro",
    auteurRole: "Ingénieur en systèmes d'information — ENSA Tanger",
    auteurAvatar: "/uploads/equipe/cheickna.jpg",
    date: "24 octobre 2026",
    tempsLecture: "6 min",
    image: "/uploads/publications/dematerialisation.jpg",
    essentiel: [
      "Remplacer le papier par un PDF statique n'est pas une dématérialisation efficace.",
      "Les formulaires dynamiques avec circuits conditionnels réduisent les délais de validation de 70 %.",
      "L'accessibilité sur smartphone est essentielle pour les collaborateurs sur le terrain."
    ],
    sections: [
      {
        titre: "Repenser les circuits avant de coder",
        contenu: [
          "La numérisation d'un processus commence par la simplification de ses règles de gestion. Automatiser un circuit inutilement complexe ne fait qu'accélérer l'inefficacité.",
          "Les applications web développées par NumeriLab intègrent des notifications instantanées et des tableaux de bord de suivi pour éliminer les retards administratifs."
        ]
      }
    ],
    sources: ["Revue des Systèmes d'Information d'Entreprise"]
  },
  {
    id: "competences-ingenierie-demain",
    slug: "competences-ingenierie-demain",
    thematique: "Compétences & métiers",
    format: "Analyse",
    titre: "L'ingénieur de demain en Afrique",
    chapo: "La double compétence technique et digitale : un impératif pour accélérer l'industrialisation et l'indépendance technologique.",
    auteur: "Abdoulaye Sall",
    auteurRole: "Ingénieur généraliste — Arts et Métiers ParisTech",
    auteurAvatar: "/uploads/equipe/abdoulaye.jpg",
    date: "20 octobre 2026",
    tempsLecture: "7 min",
    image: "/uploads/publications/ingenieur-demain.jpg",
    essentiel: [
      "Les grands chantiers d'infrastructures exigent désormais la maîtrise conjointe des normes physiques et des outils numériques (BIM, CAO, SIG).",
      "L'apprentissage par projets réels garantit l'employabilité immédiate des jeunes diplômés.",
      "NumeriLab crée des passerelles continues entre son bureau d'études et son centre de formation."
    ],
    sections: [
      {
        titre: "La fin du cloisonnement disciplinaire",
        contenu: [
          "L'ingénieur de construction ne peut plus ignorer les outils de simulation numérique, pas plus que le développeur ne peut ignorer les contraintes physiques des installations qu'il pilote.",
          "Promouvoir cette culture de l'excellence technique et de l'interdisciplinarité est au cœur de la vocation de NumeriLab."
        ]
      }
    ],
    sources: ["UNESCO Science Report", "NumeriLab Vision"]
  },
  {
    id: "fintech-data-decision",
    slug: "fintech-data-decision",
    thematique: "Innovation & Afrique",
    format: "Décryptage",
    titre: "Data Analytics et décision financière",
    chapo: "Optimiser la gestion de trésorerie et le pilotage des investissements grâce à l'analyse prédictive.",
    auteur: "Fatoumata Madiou Traoré",
    auteurRole: "Spécialiste en Data Analytics & Finance d'entreprise — École polytechnique (l'X)",
    auteurAvatar: "/uploads/equipe/fatoumata.jpg",
    date: "15 octobre 2026",
    tempsLecture: "5 min",
    image: "/uploads/publications/finance-analytics.jpg",
    essentiel: [
      "L'anticipation des besoins en fonds de roulement protège les PME des tensions de trésorerie imprévues.",
      "Les modèles statistiques permettent de simuler les scénarios de taux et de change sur les approvisionnements importés.",
      "La clarté des reportings financiers est déterminante pour rassurer les banques et investisseurs partenaires."
    ],
    sections: [
      {
        titre: "Allier rigueur financière et modélisation algorithmique",
        contenu: [
          "La finance d'entreprise moderne ne se limite plus au bilan comptable a posteriori. Elle s'appuie sur des modèles prévisionnels en temps réel qui éclairent chaque décision d'investissement.",
          "Cette expertise permet aux dirigeants de piloter leur croissance avec une visibilité renforcée."
        ]
      }
    ],
    sources: ["Revue Française de Gestion", "NumeriLab Corporate Finance"]
  }
];

export const tousLesArticles = [
  articleALaUne,
  ...articlesSecondaires,
  ...toutesLesPublications
];

export const getArticleBySlug = (slug) => {
  return tousLesArticles.find((art) => art.slug === slug || art.id === slug) || null;
};

export const thematiques = [
  "Tous",
  "Intelligence artificielle",
  "Ingénierie",
  "Transformation digitale",
  "Innovation & Afrique",
  "Compétences & métiers"
];

export const formats = [
  "Tous les formats",
  "Analyse",
  "Décryptage",
  "Dossier"
];
