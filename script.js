// ---------------------------------------------------------------
// DONNÉES DE DÉMONSTRATION
// ---------------------------------------------------------------

const TALENTS = [
  {
    name: "Malo V.",
    initial: "M",
    role: "Artiste",
    city: "Paris, France",
    genre: ["Trap", "Rap mélodique"],
    desc: "Univers mélodique, textes personnels. À la recherche de prods singulières.",
    bio: "Je construis un univers à la frontière entre trap et chanson. Après deux EP auto-produits, je cherche des beatmakers et ingénieurs son pour aller plus loin sur scène et en studio.",
    cover: "cover-1",
    kind: "artist",
    since: 2021,
    collabs: 12,
    releases: 8,
    rating: 4.8,
    looking: "Prod singulière pour un EP 5 titres",
    languages: "Français · Anglais",
    available: true,
    works: ["Nuit blanche (2026)", "Vague à l'âme (2025)", "Rue Oberkampf (2024)"]
  },
  {
    name: "NOVA Beats",
    initial: "N",
    role: "Beatmaker",
    city: "Bruxelles, Belgique",
    genre: ["Drill", "Trap"],
    desc: "Des prods sombres et puissantes. Ouvert aux placements et collaborations.",
    bio: "Beatmaker depuis 2019, je signe des prods drill et trap avec une vraie identité sonore. Je collabore avec des artistes émergents et je suis ouvert aux placements sync.",
    cover: "cover-2",
    kind: "producer",
    since: 2019,
    collabs: 34,
    releases: 51,
    rating: 4.9,
    looking: "Artistes drill pour une série de singles",
    languages: "Français · Anglais · Flamand",
    available: true,
    works: ["Nuit blanche (2026)", "Drill Pack Vol.3", "Signature de minuit (2025)"]
  },
  {
    name: "KAY Studio",
    initial: "K",
    role: "Producteur",
    city: "Londres, UK",
    genre: ["R&B", "Trap"],
    desc: "Production, arrangement et direction artistique. Construisons un son.",
    bio: "Je produis et dirige des artistes de la première idée jusqu'au master final. Mon studio est équipé pour les sessions live et les enregistrements de voix.",
    cover: "cover-3",
    kind: "producer",
    since: 2017,
    collabs: 47,
    releases: 89,
    rating: 4.7,
    looking: "Talents UK/FR pour sessions studio",
    languages: "Anglais · Français",
    available: true,
    works: ["Golden Hours (2026)", "Camden Nights (2025)", "Silk Room — EP (2024)"]
  },
  {
    name: "Sanae",
    initial: "S",
    role: "Artiste",
    city: "Casablanca, Maroc",
    genre: ["Afro", "Rap mélodique"],
    desc: "Mélange de sonorités afro et rap. Recherche un beatmaker créatif.",
    bio: "Ma musique mélange les rythmes afro, le rap mélodique et la pop. Je prépare un EP en quatre langues et je cherche des prods qui mélangent modernité et chaleur.",
    cover: "cover-4",
    kind: "artist",
    since: 2020,
    collabs: 18,
    releases: 14,
    rating: 4.9,
    looking: "Beatmaker afro/mélodique pour un EP",
    languages: "Arabe · Français · Anglais",
    available: true,
    works: ["Casablanca Nights (2026)", "Miel (2025)", "Nuit douce — clip (2025)"]
  },
  {
    name: "Léo Mix",
    initial: "L",
    role: "Ingénieur son",
    city: "Lyon, France",
    genre: ["Trap", "Boom bap"],
    desc: "Mixage et mastering. Je donne à vos morceaux leur finition.",
    bio: "Ingénieur du son spécialisé mixage et mastering. J'accompagne les artistes indépendants avec des retours francs et un vrai rendu radio-ready.",
    cover: "cover-5",
    kind: "community",
    since: 2016,
    collabs: 72,
    releases: 240,
    rating: 4.8,
    looking: "3 titres gratuits à mixer pour ma démo",
    languages: "Français · Anglais",
    available: true,
    works: ["Mix EP Sanae (2026)", "Mastering collectif Drill (2025)", "30 Pro Tips Mix (2024)"]
  },
  {
    name: "RØME",
    initial: "R",
    role: "Beatmaker",
    city: "Montréal, Canada",
    genre: ["Boom bap", "R&B"],
    desc: "Samples, textures et drums organiques. Toujours partant pour créer.",
    bio: "Je fais des beats à base de samples, de textures vinyl et de drums organiques. J'aime les collaborations où le son se construit à deux.",
    cover: "cover-6",
    kind: "producer",
    since: 2018,
    collabs: 26,
    releases: 40,
    rating: 4.6,
    looking: "Artistes boom bap / R&B pour LP commun",
    languages: "Français · Anglais",
    available: true,
    works: ["Rue Sherbrooke (2026)", "Vinyl Season — tape (2025)", "Hiver lent (2024)"]
  },
  {
    name: "Yuna Ka",
    initial: "Y",
    role: "Artiste",
    city: "Dakar, Sénégal",
    genre: ["Afro", "Drill"],
    desc: "Drill sénégalaise et mélodies afro. En préparation d'une tournée.",
    bio: "Je mêle drill et afro avec des textes en wolof et français. Mon premier EP a dépassé le million d'écoutes, je prépare la suite et une tournée régionale.",
    cover: "cover-7",
    kind: "artist",
    since: 2022,
    collabs: 9,
    releases: 6,
    rating: 4.7,
    looking: "Prods drill/afro pour la tournée",
    languages: "Wolof · Français · Anglais",
    available: false,
    works: ["Dakar Drill (2026)", "Sunugaal (2025)", "Ndoffane Freestyle (2025)"]
  },
  {
    name: "Drift Kid",
    initial: "D",
    role: "Beatmaker",
    city: "Marseille, France",
    genre: ["Drill", "Trap"],
    desc: "Drill marseillaise, 808 lourdes et mélodies froides.",
    bio: "Je produis une drill sombre inspirée de la scène marseillaise. Je travaille vite et j'envoie des packs complets (intro, couplets, pont) pour que l'artiste n'ait plus qu'à poser.",
    cover: "cover-8",
    kind: "producer",
    since: 2021,
    collabs: 21,
    releases: 33,
    rating: 4.5,
    looking: "Artistes pour une compilation drill",
    languages: "Français",
    available: true,
    works: ["Calanques (2026)", "Pack Marseille Vol.2", "Nuit froide (2025)"]
  },
  {
    name: "Imane R.",
    initial: "I",
    role: "Productrice",
    city: "Rabat, Maroc",
    genre: ["R&B", "Afro"],
    desc: "Direction artistique et production exécutive pour la scène MENA.",
    bio: "Je produis et coordonne des projets d'artistes de la scène MENA. J'aime les concepts forts, les EP cohérents et les collaborations inattendues.",
    cover: "cover-9",
    kind: "producer",
    since: 2018,
    collabs: 29,
    releases: 45,
    rating: 4.8,
    looking: "Talents afro/R&B pour une compilation",
    languages: "Arabe · Français · Anglais",
    available: true,
    works: ["MENA Rising — compile (2026)", "Rabat Nights (2025)", "Atlas R&B — EP (2024)"]
  },
  {
    name: "Téo Verso",
    initial: "T",
    role: "Artiste",
    city: "Genève, Suisse",
    genre: ["Boom bap", "Rap mélodique"],
    desc: "Écriture dense, boom bap moderne. Cherche des sessions en studio.",
    bio: "Je viens du boom bap et j'écris beaucoup. Je cherche des beatmakers avec qui poser en studio, pas juste à distance — l'énergie de la session compte.",
    cover: "cover-10",
    kind: "artist",
    since: 2020,
    collabs: 15,
    releases: 11,
    rating: 4.6,
    looking: "Sessions studio à Genève / Lyon",
    languages: "Français · Anglais · Allemand",
    available: true,
    works: ["Verso (2026)", "Plan B (2025)", "Micro ouvert (2024)"]
  }
];

const OPPORTUNITIES = [
  {
    id: "opp-1",
    style: "Drill",
    title: "Single commun — été 2027",
    by: "NOVA Beats",
    desc: "Je cherche un artiste drill pour construire un single de A à Z, avec clip prévu à Bruxelles. Session de deux jours incluse.",
    deadline: "30 nov. 2026",
    reward: "50 / 50 sur les droits",
    seats: "2 places"
  },
  {
    id: "opp-2",
    style: "Afro / R&B",
    title: "Compilation Afro Europe",
    by: "Imane R.",
    desc: "Sélection de 8 titres inédits pour une compilation de la scène afro européenne. Placement rémunéré et distribution digitale.",
    deadline: "15 déc. 2026",
    reward: "Placement rémunéré",
    seats: "4 places"
  },
  {
    id: "opp-3",
    style: "Tous styles",
    title: "Freestyle collectif international",
    by: "Sanae",
    desc: "Un beat, huit artistes, huit villes. Je cherche des voix pour un freestyle collectif tourné en clip à Casablanca.",
    deadline: "5 janv. 2027",
    reward: "Visibilité + clip",
    seats: "3 places"
  },
  {
    id: "opp-4",
    style: "Mix / Mastering",
    title: "3 titres mixés gratuitement",
    by: "Léo Mix",
    desc: "Je sélectionne trois titres pour ma démo de mixage. Retours détaillés et fichiers finaux livrés en 10 jours.",
    deadline: "20 déc. 2026",
    reward: "Mix gratuit",
    seats: "3 places"
  }
];

const MEMBERS = [
  {
    id: "mb-sanae",
    name: "Sanae",
    initial: "S",
    role: "Artiste",
    kind: "artist",
    city: "Casablanca, Maroc",
    genre: ["Afro", "Rap mélodique"],
    points: 9840,
    delta: "+24 %",
    followers: "18,2k",
    response: "~1 h",
    rating: 4.9,
    collabs: 41,
    bio: "Elle mélange afro, rap mélodique et pop. Son EP « Casablanca Nights » est l'un des projets les plus suivis de la scène MENA cette année.",
    works: ["Casablanca Nights (2026)", "Miel (2025)", "Nuit douce — clip (2025)"],
    projects: [
      { title: "EP « Casablanca Nights »", status: "En cours", people: "Sanae · Imane R." },
      { title: "Freestyle collectif international", status: "En attente", people: "Sanae · Léo Mix" }
    ]
  },
  {
    id: "mb-nova",
    name: "NOVA Beats",
    initial: "N",
    role: "Beatmaker",
    kind: "producer",
    city: "Bruxelles, Belgique",
    genre: ["Drill", "Trap"],
    points: 9210,
    delta: "+19 %",
    followers: "12,8k",
    response: "~2 h",
    rating: 4.9,
    collabs: 34,
    bio: "Ses prods drill sombres tournent en boucle dans les sessions bruxelloises. Il prépare un pack avec 8 artistes différents.",
    works: ["Drill Pack Vol.3", "Nuit blanche (2026)", "Signature de minuit (2025)"],
    projects: [
      { title: "Nuit blanche — single", status: "En cours", people: "NOVA Beats · Malo V." },
      { title: "Drill Pack Vol.4", status: "En cours", people: "NOVA Beats" }
    ]
  },
  {
    id: "mb-kay",
    name: "KAY Studio",
    initial: "K",
    role: "Producteur",
    kind: "producer",
    city: "Londres, UK",
    genre: ["R&B", "Trap"],
    points: 8930,
    delta: "+15 %",
    followers: "9,4k",
    response: "~3 h",
    rating: 4.7,
    collabs: 47,
    bio: "Producteur et directeur artistique, il fait passer les morceaux de la démo au master. Son studio de Camden accueille des sessions chaque semaine.",
    works: ["Golden Hours (2026)", "Camden Nights (2025)", "Silk Room — EP (2024)"],
    projects: [
      { title: "Golden Hours — album", status: "Terminé", people: "KAY Studio" },
      { title: "Sessions ouvertes Camden", status: "En cours", people: "KAY Studio · Toi" }
    ]
  },
  {
    id: "mb-malo",
    name: "Malo V.",
    initial: "M",
    role: "Artiste",
    kind: "artist",
    city: "Paris, France",
    genre: ["Trap", "Rap mélodique"],
    points: 8540,
    delta: "+12 %",
    followers: "15,6k",
    response: "~4 h",
    rating: 4.8,
    collabs: 12,
    bio: "Univers mélodique et textes personnels. Il peaufine un EP cinq titres et cherche des prods singulières pour sortir des sentiers battus.",
    works: ["Nuit blanche (2026)", "Vague à l'âme (2025)", "Rue Oberkampf (2024)"],
    projects: [
      { title: "Nuit blanche — single", status: "En cours", people: "Malo V. · NOVA Beats" },
      { title: "Clip « Vague à l'âme »", status: "Terminé", people: "Malo V. · KAY Studio" }
    ]
  },
  {
    id: "mb-imane",
    name: "Imane R.",
    initial: "I",
    role: "Productrice",
    kind: "producer",
    city: "Rabat, Maroc",
    genre: ["R&B", "Afro"],
    points: 8120,
    delta: "+21 %",
    followers: "8,1k",
    response: "~2 h",
    rating: 4.8,
    collabs: 29,
    bio: "Productrice exécutive de la scène MENA, elle sélectionne les titres de la compilation « Afro Europe » et adore les concepts forts.",
    works: ["MENA Rising — compile (2026)", "Rabat Nights (2025)", "Atlas R&B — EP (2024)"],
    projects: [
      { title: "Compilation Afro Europe", status: "En cours", people: "Imane R. · Sélection" },
      { title: "Atlas R&B — EP", status: "Terminé", people: "Imane R." }
    ]
  },
  {
    id: "mb-rome",
    name: "RØME",
    initial: "R",
    role: "Beatmaker",
    kind: "producer",
    city: "Montréal, Canada",
    genre: ["Boom bap", "R&B"],
    points: 7860,
    delta: "+9 %",
    followers: "6,7k",
    response: "~5 h",
    rating: 4.6,
    collabs: 26,
    bio: "Samples, textures vinyl et drums organiques. Il construit un LP commun avec une poignée d'artistes boom bap.",
    works: ["Rue Sherbrooke (2026)", "Vinyl Season — tape (2025)", "Hiver lent (2024)"],
    projects: [
      { title: "LP commun boom bap", status: "En cours", people: "RØME · 3 artistes" },
      { title: "Rue Sherbrooke — single", status: "Terminé", people: "RØME" }
    ]
  },
  {
    id: "mb-yuna",
    name: "Yuna Ka",
    initial: "Y",
    role: "Artiste",
    kind: "artist",
    city: "Dakar, Sénégal",
    genre: ["Afro", "Drill"],
    points: 7410,
    delta: "+17 %",
    followers: "21,3k",
    response: "~6 h",
    rating: 4.7,
    collabs: 9,
    bio: "Drill sénégalaise et mélodies afro, en wolof et français. Elle prépare une tournée régionale après un premier EP à plus d'un million d'écoutes.",
    works: ["Dakar Drill (2026)", "Sunugaal (2025)", "Ndoffane Freestyle (2025)"],
    projects: [
      { title: "Tournée Dakar Drill", status: "En attente", people: "Yuna Ka · équipe live" },
      { title: "Dakar Drill — EP", status: "Terminé", people: "Yuna Ka" }
    ]
  },
  {
    id: "mb-drift",
    name: "Drift Kid",
    initial: "D",
    role: "Beatmaker",
    kind: "producer",
    city: "Marseille, France",
    genre: ["Drill", "Trap"],
    points: 7050,
    delta: "+11 %",
    followers: "5,2k",
    response: "~3 h",
    rating: 4.5,
    collabs: 21,
    bio: "Drill marseillaise, 808 lourdes, mélodies froides. Il assemble une compilation drill avec des artistes de toute la France.",
    works: ["Calanques (2026)", "Pack Marseille Vol.2", "Nuit froide (2025)"],
    projects: [
      { title: "Compilation drill Marseille", status: "En cours", people: "Drift Kid · 4 artistes" }
    ]
  },
  {
    id: "mb-leo",
    name: "Léo Mix",
    initial: "L",
    role: "Ingénieur son",
    kind: "engineer",
    city: "Lyon, France",
    genre: ["Trap", "Boom bap"],
    points: 6780,
    delta: "+7 %",
    followers: "4,9k",
    response: "~8 h",
    rating: 4.8,
    collabs: 72,
    bio: "Mixage et mastering radio-ready pour artistes indépendants. Il sélectionne trois titres par mois pour sa démo de mixage gratuite.",
    works: ["Mix EP Sanae (2026)", "Mastering collectif Drill (2025)", "30 Pro Tips Mix (2024)"],
    projects: [
      { title: "3 titres mixés gratuitement", status: "En cours", people: "Léo Mix · Sélection" },
      { title: "Mix promo radio", status: "Terminé", people: "Léo Mix · Toi" }
    ]
  },
  {
    id: "mb-teo",
    name: "Téo Verso",
    initial: "T",
    role: "Artiste",
    kind: "artist",
    city: "Genève, Suisse",
    genre: ["Boom bap", "Rap mélodique"],
    points: 6390,
    delta: "+6 %",
    followers: "3,8k",
    response: "~10 h",
    rating: 4.6,
    collabs: 15,
    bio: "Écriture dense et boom bap moderne. Il privilégie les sessions en studio à Genève ou Lyon pour capter l'énergie du moment.",
    works: ["Verso (2026)", "Plan B (2025)", "Micro ouvert (2024)"],
    projects: [
      { title: "EP « Verso »", status: "En cours", people: "Téo Verso · RØME" }
    ]
  },
  {
    id: "rk-lina",
    name: "Lina S.",
    initial: "L",
    role: "Artiste",
    kind: "artist",
    city: "Lyon, France",
    genre: ["Afro", "R&B"],
    points: 2340,
    growth: "+212 %",
    followers: "4,1k",
    response: "~1 h",
    rating: 4.7,
    collabs: 6,
    rookie: true,
    bio: "Nouvelle venue sur la scène afro/R&B, elle a déjà posé sur trois projets communautaires et prépare son premier single.",
    works: ["Lyon la nuit (démo)", "Feu doux (démo)"],
    projects: [
      { title: "Premier single « Feu doux »", status: "En cours", people: "Lina S. · Drift Kid" }
    ]
  },
  {
    id: "rk-kmr",
    name: "KMR",
    initial: "K",
    role: "Beatmaker",
    kind: "producer",
    city: "Bordeaux, France",
    genre: ["Trap", "Drill"],
    points: 2180,
    growth: "+184 %",
    followers: "3,2k",
    response: "~2 h",
    rating: 4.6,
    collabs: 4,
    rookie: true,
    bio: "Ses prods trap mélodiques circulent dans les sessions étudiantes. Il cherche ses premiers placements officiels.",
    works: ["Minuit à Bordeaux (beat)", "VHS Drill (beat)"],
    projects: [
      { title: "Pack « Minuit »", status: "En cours", people: "KMR" }
    ]
  },
  {
    id: "rk-nyx",
    name: "Nyx",
    initial: "N",
    role: "Artiste",
    kind: "artist",
    city: "Lille, France",
    genre: ["Drill", "Trap"],
    points: 2040,
    growth: "+166 %",
    followers: "5,6k",
    response: "~3 h",
    rating: 4.5,
    collabs: 5,
    rookie: true,
    bio: "Drill nocturne et textes ciselés. Son freestyle « 3h du matin » est le contenu le plus partagé de la communauté ce mois-ci.",
    works: ["3h du matin (freestyle)", "Nord (démo)"],
    projects: [
      { title: "Freestyle « 3h du matin » — clip", status: "En cours", people: "Nyx · KAY Studio" }
    ]
  },
  {
    id: "rk-sami",
    name: "Sami Wave",
    initial: "S",
    role: "Producteur",
    kind: "producer",
    city: "Tunis, Tunisie",
    genre: ["R&B", "Afro"],
    points: 1890,
    growth: "+141 %",
    followers: "2,8k",
    response: "~2 h",
    rating: 4.6,
    collabs: 7,
    rookie: true,
    bio: "Il produit des instrus R&B chaleureuses et travaille avec des artistes de la scène tunisienne naissante.",
    works: ["Sidi Bou (2026)", "Nuit d'été (beat)"],
    projects: [
      { title: "EP R&B tunisien", status: "En attente", people: "Sami Wave · 2 artistes" }
    ]
  },
  {
    id: "rk-aya",
    name: "Aya B.",
    initial: "A",
    role: "Ingénieure son",
    kind: "engineer",
    city: "Paris, France",
    genre: ["Trap", "R&B"],
    points: 1740,
    growth: "+122 %",
    followers: "2,4k",
    response: "~1 h",
    rating: 4.8,
    collabs: 9,
    rookie: true,
    bio: "Jeune ingénieure du son formée en studio parisien, elle enchaîne les sessions voix et se spécialise dans le rap mélodique.",
    works: ["Sessions voix — collectif 19e", "Mix « Feu doux » (démo)"],
    projects: [
      { title: "Sessions voix du mercredi", status: "En cours", people: "Aya B. · communauté" }
    ]
  }
];

const TALENT_EXTRAS = {
  "Malo V.": {
    followers: "15,6k",
    response: "~4 h",
    projects: [
      { title: "Nuit blanche — single", status: "En cours" },
      { title: "EP « Vague à l'âme »", status: "Terminé" }
    ]
  },
  "NOVA Beats": {
    followers: "12,8k",
    response: "~2 h",
    projects: [
      { title: "Drill Pack Vol.4", status: "En cours" },
      { title: "Nuit blanche — single", status: "En cours" }
    ]
  },
  "KAY Studio": {
    followers: "9,4k",
    response: "~3 h",
    projects: [
      { title: "Golden Hours — album", status: "Terminé" },
      { title: "Sessions ouvertes Camden", status: "En cours" }
    ]
  },
  "Sanae": {
    followers: "18,2k",
    response: "~1 h",
    projects: [
      { title: "EP « Casablanca Nights »", status: "En cours" },
      { title: "Freestyle collectif international", status: "En attente" }
    ]
  },
  "Léo Mix": {
    followers: "4,9k",
    response: "~8 h",
    projects: [
      { title: "3 titres mixés gratuitement", status: "En cours" },
      { title: "Mix promo radio", status: "Terminé" }
    ]
  },
  "RØME": {
    followers: "6,7k",
    response: "~5 h",
    projects: [
      { title: "LP commun boom bap", status: "En cours" }
    ]
  },
  "Yuna Ka": {
    followers: "21,3k",
    response: "~6 h",
    projects: [
      { title: "Tournée Dakar Drill", status: "En attente" },
      { title: "Dakar Drill — EP", status: "Terminé" }
    ]
  },
  "Drift Kid": {
    followers: "5,2k",
    response: "~3 h",
    projects: [
      { title: "Compilation drill Marseille", status: "En cours" }
    ]
  },
  "Imane R.": {
    followers: "8,1k",
    response: "~2 h",
    projects: [
      { title: "Compilation Afro Europe", status: "En cours" },
      { title: "Atlas R&B — EP", status: "Terminé" }
    ]
  },
  "Téo Verso": {
    followers: "3,8k",
    response: "~10 h",
    projects: [
      { title: "EP « Verso »", status: "En cours" }
    ]
  }
};

const PRODUCTS = [
  {
    id: "p1",
    name: "Shure SM7B",
    cat: "Micros",
    price: 419,
    rating: 4.9,
    reviews: 128,
    icon: "🎙️",
    desc: "Le micro voix des studios rap, ultra isolé.",
    tag: "Best-seller"
  },
  {
    id: "p2",
    name: "Rode NT1 5th Gen",
    cat: "Micros",
    price: 259,
    rating: 4.8,
    reviews: 76,
    icon: "🎤",
    desc: "Condensateur XLR / USB très silencieux.",
    tag: null
  },
  {
    id: "p3",
    name: "Beyerdynamic DT 770 Pro",
    cat: "Casques",
    price: 149,
    oldPrice: 179,
    rating: 4.8,
    reviews: 212,
    icon: "🎧",
    desc: "Le casque fermé de référence en studio.",
    tag: "-17 %"
  },
  {
    id: "p4",
    name: "Sony MDR-7506",
    cat: "Casques",
    price: 119,
    rating: 4.7,
    reviews: 165,
    icon: "🎧",
    desc: "Léger, pliable, incontournable en cabine.",
    tag: null
  },
  {
    id: "p5",
    name: "Focusrite Scarlett 2i2",
    cat: "Interfaces",
    price: 189,
    rating: 4.9,
    reviews: 301,
    icon: "🎚️",
    desc: "2 entrées, préamps propres, plug & play.",
    tag: "Top ventes"
  },
  {
    id: "p6",
    name: "Universal Audio Volt 2",
    cat: "Interfaces",
    price: 199,
    rating: 4.7,
    reviews: 88,
    icon: "🔌",
    desc: "Préamp vintage et compresseur intégré.",
    tag: null
  },
  {
    id: "p7",
    name: "KRK Rokit RP5 G4 (paire)",
    cat: "Monitoring",
    price: 329,
    oldPrice: 389,
    rating: 4.6,
    reviews: 142,
    icon: "🔊",
    desc: "Monitors 5 pouces pour home studio fiable.",
    tag: "-15 %"
  },
  {
    id: "p8",
    name: "Yamaha HS5",
    cat: "Monitoring",
    price: 279,
    rating: 4.8,
    reviews: 97,
    icon: "🔉",
    desc: "La référence analytique pour mixer juste.",
    tag: null
  },
  {
    id: "p9",
    name: "Akai MPC One+",
    cat: "Contrôleurs",
    price: 699,
    rating: 4.8,
    reviews: 64,
    icon: "🎛️",
    desc: "Standalone, Wi-Fi, 16 pads — beatmaking nomade.",
    tag: "Nouveau"
  },
  {
    id: "p10",
    name: "Ableton Push 2",
    cat: "Contrôleurs",
    price: 599,
    rating: 4.7,
    reviews: 51,
    icon: "🎹",
    desc: "Contrôle total de Live, pads sensibles.",
    tag: null
  },
  {
    id: "p11",
    name: "iZotope RX 11 Elements",
    cat: "Logiciels",
    price: 99,
    oldPrice: 129,
    rating: 4.5,
    reviews: 39,
    icon: "💻",
    desc: "Restauration audio et nettoyage de prises.",
    tag: "-23 %"
  },
  {
    id: "p12",
    name: "Serato Sample",
    cat: "Logiciels",
    price: 79,
    rating: 4.6,
    reviews: 58,
    icon: "🎚️",
    desc: "Chop de samples ultra rapide et créatif.",
    tag: null
  }
];

const DEFAULT_STATE = {
  profile: {
    name: "Your name",
    role: "Artiste",
    city: "Paris, France",
    genres: ["Trap", "Drill", "Rap mélodique"],
    bio: "Je développe mon univers musical et je cherche des créatifs motivés pour construire des projets solides, du premier kick au morceau final.",
    looking: "Un beatmaker trap pour un EP de 4 titres",
    languages: "Français · Anglais",
    goal: "Collaborations & sorties",
    available: true
  },
  projects: [
    {
      id: "prj-1",
      icon: "♫",
      title: "Nuit blanche — single",
      people: "Malo V. · NOVA Beats · Toi",
      desc: "Dernière activité : la maquette a été envoyée",
      status: "En cours",
      progress: 65
    },
    {
      id: "prj-2",
      icon: "✦",
      title: "Session freestyle internationale",
      people: "Sanae · Léo Mix · Toi",
      desc: "En attente de validation des participants",
      status: "En attente",
      progress: 20
    },
    {
      id: "prj-3",
      icon: "◈",
      title: "EP « Casablanca Nights »",
      people: "Sanae · Imane R. · Toi",
      desc: "3 titres sur 4 enregistrés, mix en préparation",
      status: "En cours",
      progress: 45
    },
    {
      id: "prj-4",
      icon: "▶",
      title: "Clip « Vague à l'âme »",
      people: "Malo V. · KAY Studio · Toi",
      desc: "Clip livré et publié le 12 octobre",
      status: "Terminé",
      progress: 100
    },
    {
      id: "prj-5",
      icon: "◎",
      title: "Mix promo radio",
      people: "Léo Mix · Toi",
      desc: "Version radio livrée pour les plateformes",
      status: "Terminé",
      progress: 100
    }
  ],
  posts: [
    {
      id: "post-1",
      author: "NOVA Beats",
      role: "Beatmaker · Bruxelles",
      initial: "N",
      type: "Sortie",
      text: "Nouveau pack de drums drill dispo : 120 BPM, 8 loops, 6 kits. DM pour le lien, je réponds à tout le monde.",
      time: "Il y a 2 h",
      likes: 24,
      liked: false,
      mine: false
    },
    {
      id: "post-2",
      author: "Sanae",
      role: "Artiste · Casablanca",
      initial: "S",
      type: "Appel à projet",
      text: "Je cherche un beatmaker afro / rap mélodique pour un EP de 4 titres. Placement possible, direction artistique déjà posée.",
      time: "Il y a 5 h",
      likes: 41,
      liked: false,
      mine: false
    },
    {
      id: "post-3",
      author: "KAY Studio",
      role: "Producteur · Londres",
      initial: "K",
      type: "Actualité",
      text: "Session studio ouverte samedi à Londres : 3 créneaux libres, micro et cabine disponibles. Premier contact par message.",
      time: "Hier",
      likes: 12,
      liked: false,
      mine: false
    },
    {
      id: "post-4",
      author: "RØME",
      role: "Beatmaker · Montréal",
      initial: "R",
      type: "Sortie",
      text: "« Rue Sherbrooke » est dispo partout depuis minuit. Merci à tous pour vos retours sur les premières versions, c'est fou.",
      time: "Hier",
      likes: 37,
      liked: false,
      mine: false
    }
  ],
  conversations: [
    {
      id: "conv-1",
      name: "NOVA Beats",
      initial: "N",
      role: "Beatmaker · Bruxelles",
      unread: 1,
      messages: [
        { from: "them", text: "Salut ! J'ai écouté ta démo, très bon groove.", time: "10:21" },
        { from: "me", text: "Merci ! Je cherche justement une prod drill pour la suite.", time: "10:30" },
        { from: "them", text: "Je t'envoie une nouvelle version ce soir.", time: "10:42" }
      ]
    },
    {
      id: "conv-2",
      name: "Sanae",
      initial: "S",
      role: "Artiste · Casablanca",
      unread: 0,
      messages: [
        { from: "them", text: "J'aime beaucoup la direction du projet !", time: "Hier" },
        { from: "me", text: "Super, on garde ce mood pour le pont ?", time: "Hier" },
        { from: "them", text: "Oui, et on peut ajouter des chœurs sur le refrain.", time: "Hier" }
      ]
    },
    {
      id: "conv-3",
      name: "Léo Mix",
      initial: "L",
      role: "Ingénieur son · Lyon",
      unread: 0,
      messages: [
        { from: "me", text: "Salut Léo, tu aurais un créneau pour mixer deux titres ?", time: "Lun." },
        { from: "them", text: "Tu peux m'envoyer les pistes séparées.", time: "Lun." }
      ]
    }
  ],
  portfolio: [
    { id: "trk-1", title: "Nuit blanche — démo", type: "Démo" },
    { id: "trk-2", title: "Rue Oberkampf", type: "Single" }
  ],
  notifications: [
    {
      id: "notif-1",
      text: "NOVA Beats t'a envoyé un message.",
      time: "10:42",
      read: false
    },
    {
      id: "notif-2",
      text: "Sanae a aimé ta publication.",
      time: "Il y a 1 h",
      read: false
    },
    {
      id: "notif-3",
      text: "Nouvel appel à projets : Compilation Afro Europe.",
      time: "Il y a 3 h",
      read: false
    },
    {
      id: "notif-4",
      text: "Ton projet « Clip Vague à l'âme » est terminé.",
      time: "Hier",
      read: true
    }
  ],
  appliedOpportunities: [],
  cart: [],
  orders: []
};

// ---------------------------------------------------------------
// ÉTAT PERSISTANT
// ---------------------------------------------------------------

const STORAGE_KEY = "rapconnect:v2";

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

const esc = value => String(value ?? "")
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&#39;");

const clone = value => JSON.parse(JSON.stringify(value));

const uid = prefix => `${prefix}-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (saved && saved.profile) {
      return {
        ...clone(DEFAULT_STATE),
        ...saved,
        profile: { ...clone(DEFAULT_STATE.profile), ...saved.profile }
      };
    }
  } catch (error) {
    console.warn("Impossible de charger les données de la démo.", error);
  }

  return clone(DEFAULT_STATE);
}

let state = loadState();
let currentUniverse = "all";
let selectedTalent = null;
let activeChat = null;
let projectFilter = "all";

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.warn("Impossible d'enregistrer les données de la démo.", error);
  }
}

function nowTime() {
  return new Date().toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit"
  });
}

function userInitial() {
  return (state.profile.name || "Y").trim().charAt(0).toUpperCase() || "Y";
}

// ---------------------------------------------------------------
// TOASTS ET NOTIFICATIONS
// ---------------------------------------------------------------

let toastTimer = null;

function showToast(message) {
  const toast = $("#toast");

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function addNotification(text) {
  state.notifications.unshift({
    id: uid("notif"),
    text,
    time: "À l'instant",
    read: false
  });

  state.notifications = state.notifications.slice(0, 20);
  saveState();
  renderNotifications();
}

const unreadNotifications = () => state.notifications.filter(n => !n.read).length;

function renderNotifications() {
  const badge = $("#notifBadge");
  const count = unreadNotifications();

  badge.textContent = count;
  badge.classList.toggle("badge-hidden", count === 0);

  $("#notifList").innerHTML = state.notifications.length
    ? state.notifications.map(n => `
        <button class="notif-item ${n.read ? "" : "unread"}" data-notif="${esc(n.id)}">
          <span class="notif-dot"></span>
          <span>
            <span class="notif-text">${esc(n.text)}</span>
            <small>${esc(n.time)}</small>
          </span>
        </button>
      `).join("")
    : '<p class="notif-empty">Aucune notification pour le moment.</p>';
}

function hideNotifications() {
  $("#notifPanel").classList.remove("show");
}

// ---------------------------------------------------------------
// UTILISATEUR ET BADGES
// ---------------------------------------------------------------

function renderUser() {
  const { profile } = state;
  const initial = userInitial();
  const city = profile.city || "—";
  const shortCity = city.split(",")[0].trim();

  $$(".js-user-name").forEach(el => { el.textContent = profile.name; });
  $$(".js-user-role").forEach(el => { el.textContent = `${profile.role} · ${shortCity}`; });
  $$(".js-user-initial").forEach(el => { el.textContent = initial; });
}

function renderBadges() {
  const activeProjects = state.projects.filter(p => p.status !== "Terminé").length;
  const unreadMessages = state.conversations.reduce((total, c) => total + c.unread, 0);
  const cartItems = state.cart.reduce((total, item) => total + item.qty, 0);

  const projectBadge = $("#navProjectCount");
  const messageBadge = $("#navMessageCount");
  const cartBadge = $("#navCartCount");

  projectBadge.textContent = activeProjects;
  projectBadge.classList.toggle("badge-hidden", activeProjects === 0);

  messageBadge.textContent = unreadMessages;
  messageBadge.classList.toggle("badge-hidden", unreadMessages === 0);

  cartBadge.textContent = cartItems;
  cartBadge.classList.toggle("badge-hidden", cartItems === 0);
}

// ---------------------------------------------------------------
// CARTES TALENTS ET FICHES
// ---------------------------------------------------------------

function talentCard(t) {
  const kindLabel =
    t.kind === "artist"
      ? "ARTISTE"
      : t.kind === "producer"
      ? "PRODUCTION"
      : "AUDIO / STUDIO";

  return `
    <article class="talent-card" data-open-talent="${esc(t.name)}">
      <div class="card-cover ${esc(t.cover)}">
        <span class="cover-label">${kindLabel}</span>
        ${t.available ? "" : '<span class="cover-label cover-busy">EN TOURNÉE</span>'}
        <div class="card-avatar">${esc(t.initial)}</div>
      </div>

      <div class="card-body">
        <div class="card-title-row">
          <h3>${esc(t.name)}</h3>
          <span class="verified">✦</span>
        </div>

        <p class="card-role">${esc(t.role)} · ${esc(t.city)}</p>
        <p class="card-desc">${esc(t.desc)}</p>

        <div class="tag-list">
          ${t.genre.map(g => `<span>${esc(g)}</span>`).join("")}
        </div>

        <div class="card-footer">
          <span class="location">⌖ ${esc(t.city.split(",")[0])} · ${t.collabs} collabs</span>
          <button class="btn btn-outline btn-card" data-contact="${esc(t.name)}">
            Collaborer ↗
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderTalentGrid() {
  const list =
    currentUniverse === "all"
      ? TALENTS.slice(0, 6)
      : currentUniverse === "community"
      ? TALENTS.filter(t => t.kind === "community" || t.kind === "artist")
      : TALENTS.filter(t => t.kind === currentUniverse);

  $("#talentGrid").innerHTML =
    list.map(talentCard).join("") ||
    '<p class="subheading">Aucun profil pour le moment.</p>';
}

function openTalent(name) {
  const t = TALENTS.find(item => item.name === name);

  if (!t) return;

  const extra = TALENT_EXTRAS[t.name] || {};

  $("#talentBody").innerHTML = `
    <div class="talent-hero ${esc(t.cover)}">
      <span class="cover-label">${t.kind === "artist" ? "ARTISTE" : t.kind === "producer" ? "PRODUCTION" : "AUDIO / STUDIO"}</span>
      <div class="card-avatar talent-avatar">${esc(t.initial)}</div>
    </div>

    <div class="talent-head">
      <div>
        <h2>${esc(t.name)} <span class="verified">✦</span></h2>
        <p class="card-role">${esc(t.role)} · ${esc(t.city)} · depuis ${t.since}</p>
      </div>
      <span class="pill ${t.available ? "pill-green" : "pill-muted"}">
        ${t.available ? "● DISPONIBLE" : "○ EN TOURNÉE"}
      </span>
    </div>

    <p class="modal-note">${esc(t.bio)}</p>

    <div class="tag-list">
      ${t.genre.map(g => `<span>${esc(g)}</span>`).join("")}
    </div>

    <div class="talent-stats">
      <div><small>COLLABS</small><strong>${t.collabs}</strong></div>
      <div><small>SORTIES</small><strong>${t.releases}</strong></div>
      <div><small>NOTE</small><strong>${t.rating} ★</strong></div>
    </div>

    <div class="detail-line"><span>Followers</span><strong>${esc(extra.followers || "—")}</strong></div>
    <div class="detail-line"><span>Réponse moyenne</span><strong>${esc(extra.response || "—")}</strong></div>
    <div class="detail-line"><span>Recherche</span><strong>${esc(t.looking)}</strong></div>
    <div class="detail-line"><span>Langues</span><strong>${esc(t.languages)}</strong></div>

    <div class="panel-title talent-works-title"><h3>Dernières sorties</h3></div>
    <ul class="release-list">
      ${t.works.map(w => `<li>♫ ${esc(w)}</li>`).join("")}
    </ul>

    ${extra.projects && extra.projects.length ? `
      <div class="panel-title talent-works-title"><h3>Projets récents</h3></div>
      <ul class="member-projects">
        ${extra.projects.map(p => `
          <li>
            <span>${esc(p.title)}</span>
            <span class="status ${p.status === "En attente" ? "pending" : p.status === "Terminé" ? "done" : ""}">${esc(p.status)}</span>
          </li>
        `).join("")}
      </ul>
    ` : ""}

    <div class="talent-actions">
      <button class="btn btn-primary" data-contact="${esc(t.name)}">Proposer une collab ↗</button>
      <button class="btn btn-outline" data-message="${esc(t.name)}">Envoyer un message</button>
    </div>
  `;

  openModal("talentBackdrop");
}

// ---------------------------------------------------------------
// FIL D'ACTUALITÉS
// ---------------------------------------------------------------

function postCard(p) {
  const typeClass = p.type === "Sortie" ? "type-release" : p.type === "Appel à projet" ? "type-call" : "type-news";

  return `
    <article class="post-card">
      <div class="post-head">
        <span class="avatar">${esc(p.initial)}</span>

        <div class="post-meta">
          <strong>${esc(p.author)} ${p.mine ? '<span class="you-tag">TOI</span>' : ""}</strong>
          <small>${esc(p.role)} · ${esc(p.time)}</small>
        </div>

        <span class="post-type ${typeClass}">${esc(p.type)}</span>
      </div>

      <p class="post-text">${esc(p.text)}</p>

      <div class="post-actions">
        <button class="post-action ${p.liked ? "liked" : ""}" data-like="${esc(p.id)}" aria-label="J'aime">
          ♥ ${p.likes}
        </button>
        <button class="post-action" data-message="${esc(p.author)}" ${p.mine ? "disabled" : ""}>
          ✉ Répondre
        </button>
      </div>
    </article>
  `;
}

function renderFeed() {
  $("#feedList").innerHTML = state.posts.map(postCard).join("");
}

function toggleLike(id) {
  const post = state.posts.find(p => p.id === id);

  if (!post) return;

  post.liked = !post.liked;
  post.likes += post.liked ? 1 : -1;

  saveState();
  renderFeed();
}

// ---------------------------------------------------------------
// APPELS À PROJETS
// ---------------------------------------------------------------

function opportunityCard(o) {
  const applied = state.appliedOpportunities.includes(o.id);

  return `
    <article class="opportunity-card">
      <div class="opp-top">
        <span class="opp-style">${esc(o.style)}</span>
        <span class="opp-seats">${esc(o.seats)}</span>
      </div>

      <h3>${esc(o.title)}</h3>
      <p class="opp-by">par <strong>${esc(o.by)}</strong></p>
      <p class="opp-desc">${esc(o.desc)}</p>

      <div class="opp-meta">
        <span>⏱ ${esc(o.deadline)}</span>
        <span>✦ ${esc(o.reward)}</span>
      </div>

      <button class="btn ${applied ? "btn-applied" : "btn-outline"} btn-full"
        data-apply="${esc(o.id)}" ${applied ? "disabled" : ""}>
        ${applied ? "Candidature envoyée ✓" : "Candidater ↗"}
      </button>
    </article>
  `;
}

function renderOpportunities() {
  const markup = OPPORTUNITIES.map(opportunityCard).join("");

  $("#opportunityGrid").innerHTML = markup;
  $("#opportunityGridExplore").innerHTML = markup;
}

function applyOpportunity(id) {
  const opp = OPPORTUNITIES.find(o => o.id === id);

  if (!opp || state.appliedOpportunities.includes(id)) return;

  state.appliedOpportunities.push(id);
  saveState();

  renderOpportunities();
  addNotification(`Candidature envoyée pour « ${opp.title} ».`);
  showToast(`Candidature envoyée à ${opp.by} !`);
}

// ---------------------------------------------------------------
// CLASSEMENTS
// ---------------------------------------------------------------

const TOP_MEMBERS = () =>
  MEMBERS.filter(m => !m.rookie).sort((a, b) => b.points - a.points);

const ROOKIE_MEMBERS = () =>
  MEMBERS.filter(m => m.rookie).sort((a, b) => b.points - a.points).slice(0, 5);

const pointsLabel = m => `${m.points.toLocaleString("fr-FR")} pts`;

function memberBadge(m) {
  if (m.kind === "artist") return '<span class="badge-artist">ARTISTE</span>';
  if (m.kind === "producer") return '<span class="badge-producer">PROD</span>';
  return '<span class="badge-engineer">STUDIO</span>';
}

function orb(m, size) {
  const index = (m.name.length % 6) + 1;

  return `
    <span class="orb orb-${index} ${size || ""}">
      <span class="orb-shine"></span>
      <span class="orb-initial">${esc(m.initial)}</span>
    </span>
  `;
}

function chartCard(m, rank, duplicate) {
  const medal = rank <= 3 ? `medal-${rank}` : "";

  return `
    <button class="chart-card ${medal}" data-member="${esc(m.id)}"${duplicate ? ' aria-hidden="true" tabindex="-1"' : ""}>
      <span class="chart-rank">#${rank}</span>
      ${orb(m)}
      <span class="chart-name">${esc(m.name)}</span>
      <span class="chart-role">${esc(m.role)}</span>
      <span class="chart-points">${pointsLabel(m)}</span>
      ${memberBadge(m)}
    </button>
  `;
}

function renderCharts() {
  const list = TOP_MEMBERS();
  const cards = list.map((m, i) => chartCard(m, i + 1)).join("");

  $("#chartTrack").innerHTML =
    cards + list.map((m, i) => chartCard(m, i + 1, true)).join("");
}

function renderRookies() {
  const list = ROOKIE_MEMBERS();
  const max = Math.max(...list.map(m => m.points), 1);

  $("#rookieGrid").innerHTML = list.map((m, i) => `
    <button class="rookie-card" data-member="${esc(m.id)}">
      <span class="rookie-top">
        ${orb(m, "orb-sm")}
        <span class="rookie-rank">#${i + 1}</span>
      </span>
      <strong>${esc(m.name)}</strong>
      <small>${esc(m.role)} · ${esc(m.city.split(",")[0])}</small>
      <span class="rookie-stats">
        <span>${pointsLabel(m)}</span>
        <span class="growth">${esc(m.growth)}</span>
      </span>
      <span class="rookie-bar"><i style="width:${Math.round((m.points / max) * 100)}%"></i></span>
    </button>
  `).join("");
}

function openMember(id) {
  const m = MEMBERS.find(item => item.id === id);

  if (!m) return;

  const list = m.rookie ? ROOKIE_MEMBERS() : TOP_MEMBERS();
  const rank = list.findIndex(item => item.id === m.id) + 1;
  const rankLabel = m.rookie ? `ROOKIE #${rank}` : `#${rank} DU MOIS`;

  $("#memberBody").innerHTML = `
    <div class="member-hero ${esc(m.kind)}-hero">
      <span class="member-badges">
        ${memberBadge(m)}
        <span class="member-rank-pill">${rankLabel}</span>
      </span>
      ${orb(m, "orb-xl")}
    </div>

    <div class="talent-head">
      <div>
        <h2>${esc(m.name)}</h2>
        <p class="card-role">${esc(m.role)} · ${esc(m.city)}</p>
      </div>
      <span class="pill pill-green">● DISPONIBLE</span>
    </div>

    <p class="modal-note">${esc(m.bio)}</p>

    <div class="tag-list">${m.genre.map(g => `<span>${esc(g)}</span>`).join("")}</div>

    <div class="talent-stats member-stats">
      <div><small>POINTS</small><strong>${m.points.toLocaleString("fr-FR")}</strong></div>
      <div><small>FOLLOWERS</small><strong>${esc(m.followers)}</strong></div>
      <div><small>NOTE</small><strong>${m.rating} ★</strong></div>
      <div><small>RÉPONSE</small><strong>${esc(m.response)}</strong></div>
      <div><small>COLLABS</small><strong>${m.collabs}</strong></div>
      <div><small>PROGRESSION</small><strong class="up">${esc(m.delta || m.growth)}</strong></div>
    </div>

    <div class="panel-title talent-works-title"><h3>Projets</h3></div>
    <ul class="member-projects">
      ${m.projects.map(p => `
        <li>
          <span>${esc(p.title)}</span>
          <span class="status ${p.status === "En attente" ? "pending" : p.status === "Terminé" ? "done" : ""}">${esc(p.status)}</span>
        </li>
      `).join("")}
    </ul>

    <div class="panel-title talent-works-title"><h3>Dernières sorties</h3></div>
    <ul class="release-list">
      ${m.works.map(w => `<li>♫ ${esc(w)}</li>`).join("")}
    </ul>

    <div class="talent-actions">
      <button class="btn btn-primary" data-contact="${esc(m.name)}">Proposer une collab ↗</button>
      <button class="btn btn-outline" data-message="${esc(m.name)}">Envoyer un message</button>
    </div>
  `;

  openModal("memberBackdrop");
}

// ---------------------------------------------------------------
// MARKETPLACE
// ---------------------------------------------------------------

let marketCat = "all";

const money = value =>
  value.toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0
  });

const CAT_CLASS = {
  "Micros": "micros",
  "Casques": "casques",
  "Interfaces": "interfaces",
  "Monitoring": "monitoring",
  "Contrôleurs": "controleurs",
  "Logiciels": "logiciels"
};

function productCard(p) {
  return `
    <article class="product-card">
      <div class="product-art cat-${CAT_CLASS[p.cat] || "autre"}">
        <span class="product-icon">${p.icon}</span>
        ${p.tag ? `<span class="product-tag">${esc(p.tag)}</span>` : ""}
      </div>

      <div class="product-body">
        <span class="product-cat">${esc(p.cat)}</span>
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.desc)}</p>
        <span class="product-rating">★ ${p.rating} <small>· ${p.reviews} avis</small></span>

        <div class="product-foot">
          <span class="product-price">
            ${money(p.price)}
            ${p.oldPrice ? `<s>${money(p.oldPrice)}</s>` : ""}
          </span>
          <button class="btn btn-primary btn-small" data-add-cart="${esc(p.id)}">Ajouter</button>
        </div>
      </div>
    </article>
  `;
}

function renderMarketplace() {
  const list = PRODUCTS.filter(p => marketCat === "all" || p.cat === marketCat);

  $("#productGrid").innerHTML = list.length
    ? list.map(productCard).join("")
    : `<div class="empty-state">
        <span>▣</span>
        <strong>Aucun article dans cette catégorie</strong>
        <p>Change de filtre pour voir le reste du matériel.</p>
      </div>`;
}

function cartCount() {
  return state.cart.reduce((total, item) => total + item.qty, 0);
}

function cartEntries() {
  return state.cart
    .map(item => ({ ...item, product: PRODUCTS.find(p => p.id === item.id) }))
    .filter(entry => entry.product);
}

function cartTotal() {
  return cartEntries().reduce((total, entry) => total + entry.product.price * entry.qty, 0);
}

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) return;

  const item = state.cart.find(entry => entry.id === id);

  if (item) item.qty += 1;
  else state.cart.push({ id, qty: 1 });

  saveState();
  renderCart();
  renderBadges();
  showToast(`${product.name} ajouté au panier.`);
}

function changeQty(id, delta) {
  const item = state.cart.find(entry => entry.id === id);

  if (!item) return;

  item.qty += delta;

  if (item.qty <= 0) state.cart = state.cart.filter(entry => entry.id !== id);

  saveState();
  renderCart();
  renderBadges();
}

function renderCart() {
  const entries = cartEntries();
  const count = cartCount();

  $("#cartCount").textContent = count;
  $("#navCartCount").textContent = count;
  $("#navCartCount").classList.toggle("badge-hidden", count === 0);

  if (!entries.length) {
    $("#cartBody").innerHTML = `
      <div class="empty-state cart-empty">
        <span>🛒</span>
        <strong>Ton panier est vide</strong>
        <p>Ajoute du matériel depuis la marketplace.</p>
      </div>`;
    $("#cartTotal").innerHTML = "";
    $("#checkoutBtn").disabled = true;
    return;
  }

  $("#cartBody").innerHTML = entries.map(entry => `
    <div class="cart-item">
      <span class="cart-icon">${entry.product.icon}</span>

      <div class="cart-info">
        <strong>${esc(entry.product.name)}</strong>
        <small>${money(entry.product.price)} · ${esc(entry.product.cat)}</small>
      </div>

      <div class="qty">
        <button data-qty="${esc(entry.id)}" data-delta="-1" aria-label="Retirer un">−</button>
        <span>${entry.qty}</span>
        <button data-qty="${esc(entry.id)}" data-delta="1" aria-label="Ajouter un">+</button>
      </div>

      <strong class="cart-line">${money(entry.product.price * entry.qty)}</strong>
    </div>
  `).join("");

  $("#cartTotal").innerHTML = `
    <span>Sous-total · ${count} article${count > 1 ? "s" : ""}</span>
    <strong>${money(cartTotal())}</strong>
  `;
  $("#checkoutBtn").disabled = false;
}

function openCart() {
  renderCart();
  openModal("cartBackdrop");
}

// ---------------------------------------------------------------
// EXPLORER
// ---------------------------------------------------------------

function renderExplore() {
  const q = $("#exploreSearch").value.trim().toLowerCase();
  const role = $("#roleFilter").value;
  const genre = $("#genreFilter").value;

  const list = TALENTS.filter(t => {
    const text = `${t.name} ${t.role} ${t.city} ${t.desc} ${t.genre.join(" ")}`.toLowerCase();

    return (
      text.includes(q) &&
      (role === "all" || t.role === role) &&
      (genre === "all" || t.genre.includes(genre))
    );
  });

  $("#exploreGrid").innerHTML =
    list.map(talentCard).join("") ||
    `<div class="empty-state">
      <span>⌕</span>
      <strong>Aucun résultat</strong>
      <p>Essaie un autre nom, style ou ville.</p>
    </div>`;

  $("#resultCount").textContent = `${list.length} talent${list.length > 1 ? "s" : ""}`;
}

// ---------------------------------------------------------------
// PROJETS
// ---------------------------------------------------------------

function renderProjects() {
  const counts = {
    "En cours": state.projects.filter(p => p.status === "En cours").length,
    "En attente": state.projects.filter(p => p.status === "En attente").length,
    "Terminé": state.projects.filter(p => p.status === "Terminé").length
  };

  $("#statCourse").textContent = String(counts["En cours"]).padStart(2, "0");
  $("#statPending").textContent = String(counts["En attente"]).padStart(2, "0");
  $("#statDone").textContent = String(counts["Terminé"]).padStart(2, "0");

  const list = state.projects.filter(p => projectFilter === "all" || p.status === projectFilter);

  $("#projectList").innerHTML = list.length
    ? list.map(p => `
        <div class="project-item">
          <div class="project-icon">${esc(p.icon)}</div>

          <div class="project-detail">
            <strong>${esc(p.title)}</strong>
            <p>${esc(p.people)} · ${esc(p.desc)}</p>
            <div class="project-progress"><span style="width:${p.progress}%"></span></div>
          </div>

          <span class="status ${p.status === "En attente" ? "pending" : p.status === "Terminé" ? "done" : ""}">
            ${esc(p.status)}
          </span>

          ${p.status === "Terminé"
            ? ""
            : `<button class="btn btn-outline btn-tiny" data-advance="${esc(p.id)}">Avancer</button>`}
        </div>
      `).join("")
    : `<div class="empty-state">
        <span>▤</span>
        <strong>Aucun projet ici</strong>
        <p>Crée un projet ou change de filtre.</p>
      </div>`;

  $$("#projectTabs [data-project-filter]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.projectFilter === projectFilter);
  });

  renderBadges();
}

function advanceProject(id) {
  const project = state.projects.find(p => p.id === id);

  if (!project || project.status === "Terminé") return;

  if (project.status === "En attente") {
    project.status = "En cours";
    project.progress = Math.max(project.progress, 35);
  } else {
    project.status = "Terminé";
    project.progress = 100;
  }

  saveState();
  renderProjects();
  renderBadges();

  showToast(
    project.status === "Terminé"
      ? `« ${project.title} » est terminé. Bien joué !`
      : `« ${project.title} » passe en cours.`
  );
}

// ---------------------------------------------------------------
// MESSAGERIE
// ---------------------------------------------------------------

const REPLIES = [
  "Bien reçu ! Je regarde ça et je te dis.",
  "Ça marche pour moi. On cale un appel cette semaine ?",
  "Top, je t'envoie les pistes séparées ce soir.",
  "J'adore la direction. On continue comme ça.",
  "Merci pour le message ! Je te réponds en détail demain.",
  "Oui carrément, on peut partir sur ce mood."
];

function conversationPreview(conv) {
  const last = conv.messages[conv.messages.length - 1];

  if (!last) return "Nouvelle conversation";

  return `${last.from === "me" ? "Toi : " : ""}${last.text}`;
}

function renderConversations() {
  $("#conversationList").innerHTML = state.conversations.map(c => `
    <button class="conversation ${activeChat === c.id ? "active" : ""}" data-chat="${esc(c.id)}">
      <span class="avatar">${esc(c.initial)}</span>

      <span class="conversation-info">
        <strong>${esc(c.name)}</strong>
        <small>${esc(conversationPreview(c))}</small>
      </span>

      <span class="conversation-side">
        <small>${esc(c.messages.length ? c.messages[c.messages.length - 1].time : "")}</small>
        ${c.unread ? `<i class="unread-dot">${c.unread}</i>` : ""}
      </span>
    </button>
  `).join("");
}

function renderChat() {
  const panel = $("#chatPanel");
  const conv = state.conversations.find(c => c.id === activeChat);

  if (!conv) {
    panel.innerHTML = `
      <div class="chat-empty">
        <div class="chat-symbol">✉</div>
        <h3>Choisis une conversation</h3>
        <p>Les bonnes collaborations commencent souvent par un message.</p>
      </div>
    `;
    return;
  }

  panel.innerHTML = `
    <div class="chat-head">
      <span class="avatar">${esc(conv.initial)}</span>
      <div>
        <strong>${esc(conv.name)}</strong>
        <small>${esc(conv.role)}</small>
      </div>
      <button class="btn btn-outline btn-tiny chat-profile" data-open-talent="${esc(conv.name)}">Voir le profil</button>
    </div>

    <div class="chat-messages" id="chatMessages">
      <div class="msg-day">Aujourd'hui</div>
      ${conv.messages.map(m => `
        <div class="msg-row ${m.from}">
          <div class="bubble">${esc(m.text)}</div>
        </div>
      `).join("")}
    </div>

    <form class="chat-input" id="chatForm">
      <input class="input" id="chatText" type="text" autocomplete="off"
        placeholder="Écris un message à ${esc(conv.name)}...">
      <button class="btn btn-primary" type="submit">Envoyer</button>
    </form>
  `;

  scrollChat();
}

function scrollChat() {
  const area = $("#chatMessages");

  if (area) area.scrollTop = area.scrollHeight;
}

function openChat(id) {
  const conv = state.conversations.find(c => c.id === id);

  if (!conv) return;

  activeChat = id;
  conv.unread = 0;
  saveState();

  renderConversations();
  renderChat();
  renderBadges();
}

function getConversation(name) {
  return state.conversations.find(c => c.name === name);
}

function startConversation(name) {
  let conv = getConversation(name);

  if (conv) return conv;

  const talent = TALENTS.find(t => t.name === name);

  conv = {
    id: uid("conv"),
    name,
    initial: talent ? talent.initial : name.charAt(0).toUpperCase(),
    role: talent ? `${talent.role} · ${talent.city}` : "Talent RAP CONNECT",
    unread: 0,
    messages: []
  };

  state.conversations.unshift(conv);
  saveState();

  return conv;
}

function sendMessage(text) {
  const conv = state.conversations.find(c => c.id === activeChat);

  if (!conv || !text.trim()) return;

  conv.messages.push({ from: "me", text: text.trim(), time: nowTime() });
  saveState();
  renderConversations();
  renderChat();

  const area = $("#chatMessages");

  if (area) {
    area.insertAdjacentHTML(
      "beforeend",
      `<div class="msg-row them typing-row"><div class="bubble typing">écrit…</div></div>`
    );
    area.scrollTop = area.scrollHeight;
  }

  const convId = conv.id;

  setTimeout(() => {
    const target = state.conversations.find(c => c.id === convId);

    if (!target) return;

    target.messages.push({
      from: "them",
      text: REPLIES[Math.floor(Math.random() * REPLIES.length)],
      time: nowTime()
    });

    const isOpen = activeChat === convId && $("#page-messages").classList.contains("active");

    if (!isOpen) target.unread += 1;

    saveState();
    renderConversations();
    renderBadges();

    if (isOpen) {
      renderChat();
      scrollChat();
    } else {
      addNotification(`${target.name} t'a répondu.`);
    }
  }, 1800);
}

// ---------------------------------------------------------------
// PROFIL
// ---------------------------------------------------------------

function renderProfile() {
  const { profile } = state;

  $("#profileName").textContent = profile.name;
  $("#profileMeta").textContent = `${profile.role} · ${profile.city}`;
  $("#profileBio").textContent = profile.bio;
  $("#profileLooking").textContent = profile.looking || "—";
  $("#profileLanguages").textContent = profile.languages || "—";
  $("#profileGoal").textContent = profile.goal || "—";

  const status = $("#profileStatus");

  status.textContent = profile.available
    ? "● DISPONIBLE POUR COLLABORER"
    : "○ EN PAUSE — REVIENS BIENTÔT";
  status.classList.toggle("pill-green", profile.available);
  status.classList.toggle("pill-muted", !profile.available);

  $("#profileGenres").innerHTML = profile.genres
    .map(g => `<span>${esc(g)}</span>`)
    .join("");

  $("#profileProjects").textContent = state.projects.length;
  $("#profileTracks").textContent = state.portfolio.length;
  $("#profileCollabs").textContent = state.conversations.length;

  renderPortfolio();
}

function renderPortfolio() {
  $("#portfolioList").innerHTML = state.portfolio.length
    ? state.portfolio.map(track => `
        <div class="portfolio-item">
          <span class="portfolio-icon">♫</span>
          <div>
            <strong>${esc(track.title)}</strong>
            <small>${esc(track.type)}</small>
          </div>
          <button class="portfolio-remove" data-remove-track="${esc(track.id)}" aria-label="Retirer ce son">×</button>
        </div>
      `).join("")
    : `<div class="portfolio-placeholder">
        <span>♫</span>
        <strong>Ton prochain son commence ici</strong>
        <small>Ajoute tes morceaux, démos et projets.</small>
      </div>`;
}

// ---------------------------------------------------------------
// MODALES
// ---------------------------------------------------------------

function openModal(id) {
  $("body").classList.add("modal-open");
  $(`#${id}`).classList.add("show");
}

function closeModal(id) {
  $(`#${id}`).classList.remove("show");

  if (!$(".modal-backdrop.show")) {
    $("body").classList.remove("modal-open");
  }
}

function closeAllModals() {
  $$(".modal-backdrop.show").forEach(el => el.classList.remove("show"));
  $("body").classList.remove("modal-open");
  hideNotifications();
}

function openCollab(name) {
  selectedTalent = name;

  $("#collabTitle").textContent = `Collaborer avec ${name}`;
  $("#collabMessage").value = "";

  closeAllModals();
  openModal("collabBackdrop");
  setTimeout(() => $("#collabMessage").focus(), 60);
}

function openMessageTo(name) {
  const conv = startConversation(name);

  closeAllModals();
  navigate("messages");
  openChat(conv.id);
}

function openPost() {
  $("#postText").value = "";
  $("#postType").value = "Actualité";
  openModal("postBackdrop");
  setTimeout(() => $("#postText").focus(), 60);
}

function openProject() {
  $("#projectForm").reset();
  openModal("projectBackdrop");
  setTimeout(() => $("#projectTitle").focus(), 60);
}

function openProfileEditor() {
  const { profile } = state;

  $("#pfName").value = profile.name;
  $("#pfRole").value = profile.role;
  $("#pfCity").value = profile.city;
  $("#pfGenres").value = profile.genres.join(", ");
  $("#pfBio").value = profile.bio;
  $("#pfLooking").value = profile.looking;
  $("#pfLanguages").value = profile.languages;
  $("#pfGoal").value = profile.goal;
  $("#pfAvailable").checked = profile.available;

  openModal("profileBackdrop");
}

function openTrackForm() {
  $("#trackForm").reset();
  openModal("trackBackdrop");
  setTimeout(() => $("#trackTitle").focus(), 60);
}

// ---------------------------------------------------------------
// NAVIGATION
// ---------------------------------------------------------------

const PAGE_NAMES = {
  home: "Accueil",
  explore: "Explorer",
  projects: "Projets",
  messages: "Messages",
  profile: "Mon profil"
};

function navigate(page) {
  $$(".page").forEach(p => {
    p.classList.toggle("active", p.id === `page-${page}`);
  });

  $$(".nav-link[data-page], .mobile-nav [data-page]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.page === page);
  });

  $("#breadcrumb").innerHTML = `Ton espace créatif <span>/</span> ${PAGE_NAMES[page] || "Accueil"}`;

  if (page === "explore") renderExplore();
  if (page === "projects") renderProjects();
  if (page === "marketplace") {
    renderMarketplace();
    renderCart();
  }
  if (page === "messages") {
    renderConversations();
    renderChat();
  }

  hideNotifications();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ---------------------------------------------------------------
// ÉVÉNEMENTS
// ---------------------------------------------------------------

document.addEventListener("click", event => {
  const pageBtn = event.target.closest("[data-page]");

  if (pageBtn) {
    navigate(pageBtn.dataset.page);
    return;
  }

  const contactBtn = event.target.closest("[data-contact]");
  if (contactBtn) {
    openCollab(contactBtn.dataset.contact);
    return;
  }

  const talentBtn = event.target.closest("[data-open-talent]");
  if (talentBtn) {
    openTalent(talentBtn.dataset.openTalent);
    return;
  }

  const messageBtn = event.target.closest("[data-message]");
  if (messageBtn) {
    openMessageTo(messageBtn.dataset.message);
    return;
  }

  const chatBtn = event.target.closest("[data-chat]");
  if (chatBtn) {
    openChat(chatBtn.dataset.chat);
    return;
  }

  const likeBtn = event.target.closest("[data-like]");
  if (likeBtn) {
    toggleLike(likeBtn.dataset.like);
    return;
  }

  const applyBtn = event.target.closest("[data-apply]");
  if (applyBtn) {
    applyOpportunity(applyBtn.dataset.apply);
    return;
  }

  const advanceBtn = event.target.closest("[data-advance]");
  if (advanceBtn) {
    advanceProject(advanceBtn.dataset.advance);
    return;
  }

  const memberBtn = event.target.closest("[data-member]");
  if (memberBtn) {
    openMember(memberBtn.dataset.member);
    return;
  }

  const addCartBtn = event.target.closest("[data-add-cart]");
  if (addCartBtn) {
    addToCart(addCartBtn.dataset.addCart);
    return;
  }

  const qtyBtn = event.target.closest("[data-qty]");
  if (qtyBtn) {
    changeQty(qtyBtn.dataset.qty, Number(qtyBtn.dataset.delta));
    return;
  }

  const removeTrackBtn = event.target.closest("[data-remove-track]");
  if (removeTrackBtn) {
    state.portfolio = state.portfolio.filter(t => t.id !== removeTrackBtn.dataset.removeTrack);
    saveState();
    renderProfile();
    showToast("Son retiré du portfolio.");
    return;
  }

  const notifItem = event.target.closest("[data-notif]");
  if (notifItem) {
    const notif = state.notifications.find(n => n.id === notifItem.dataset.notif);

    if (notif) {
      notif.read = true;
      saveState();
      renderNotifications();
    }
    return;
  }

  const closeBtn = event.target.closest("[data-close]");
  if (closeBtn) {
    closeModal(closeBtn.dataset.close);
    return;
  }

  if (event.target.classList.contains("modal-backdrop")) {
    closeModal(event.target.id);
    return;
  }

  if (!event.target.closest("#notifPanel") && !event.target.closest("#notifBtn")) {
    hideNotifications();
  }
});

document.addEventListener("submit", event => {
  event.preventDefault();

  if (event.target.id === "collabForm") {
    const message = $("#collabMessage").value.trim();

    if (!message) {
      showToast("Ajoute un petit message avant d'envoyer.");
      return;
    }

    const type = $("#collabType").value;
    const conv = startConversation(selectedTalent);
    const line = `Proposition de collaboration (${type}) : ${message}`;

    conv.messages.push({ from: "me", text: line, time: nowTime() });
    saveState();

    closeModal("collabBackdrop");
    renderConversations();
    addNotification(`Proposition envoyée à ${selectedTalent}.`);
    showToast(`Proposition préparée pour ${selectedTalent} !`);
  }

  if (event.target.id === "postForm") {
    const text = $("#postText").value.trim();

    if (!text) {
      showToast("Écris quelques mots avant de publier.");
      return;
    }

    state.posts.unshift({
      id: uid("post"),
      author: state.profile.name,
      role: `${state.profile.role} · ${state.profile.city.split(",")[0]}`,
      initial: userInitial(),
      type: $("#postType").value,
      text,
      time: "À l'instant",
      likes: 0,
      liked: false,
      mine: true
    });

    saveState();
    renderFeed();
    closeModal("postBackdrop");
    showToast("Publication partagée sur le fil !");
  }

  if (event.target.id === "projectForm") {
    const title = $("#projectTitle").value.trim();

    if (!title) {
      showToast("Donne un titre à ton projet.");
      return;
    }

    const status = $("#projectStatus").value;

    state.projects.unshift({
      id: uid("prj"),
      icon: "✦",
      title,
      people: $("#projectPeople").value.trim() || "Toi",
      desc: $("#projectDesc").value.trim() || "Projet créé à l'instant",
      status,
      progress: status === "En cours" ? 35 : 10
    });

    saveState();
    projectFilter = "all";
    renderProjects();
    renderBadges();
    renderProfile();
    closeModal("projectBackdrop");
    showToast("Nouveau projet créé !");
  }

  if (event.target.id === "profileForm") {
    const name = $("#pfName").value.trim();

    if (!name) {
      showToast("Le nom d'artiste est obligatoire.");
      return;
    }

    state.profile = {
      name,
      role: $("#pfRole").value,
      city: $("#pfCity").value.trim() || "—",
      genres: $("#pfGenres").value.split(",").map(g => g.trim()).filter(Boolean),
      bio: $("#pfBio").value.trim(),
      looking: $("#pfLooking").value.trim(),
      languages: $("#pfLanguages").value.trim(),
      goal: $("#pfGoal").value.trim(),
      available: $("#pfAvailable").checked
    };

    saveState();
    renderUser();
    renderProfile();
    closeModal("profileBackdrop");
    showToast("Profil mis à jour !");
  }

  if (event.target.id === "trackForm") {
    const title = $("#trackTitle").value.trim();

    if (!title) {
      showToast("Donne un titre à ton son.");
      return;
    }

    state.portfolio.unshift({
      id: uid("trk"),
      title,
      type: $("#trackType").value
    });

    saveState();
    renderProfile();
    closeModal("trackBackdrop");
    showToast("Son ajouté au portfolio !");
  }

  if (event.target.id === "chatForm") {
    const input = $("#chatText");

    sendMessage(input.value);
    input.value = "";
    input.focus();
  }
});

$("#openPost").addEventListener("click", openPost);
$("#openPostInline").addEventListener("click", openPost);
$("#newProject").addEventListener("click", openProject);
$("#editProfile").addEventListener("click", openProfileEditor);
$("#addTrack").addEventListener("click", openTrackForm);
$("#settingsBtn").addEventListener("click", () => openModal("settingsBackdrop"));

$("#resetDemo").addEventListener("click", () => {
  if (!confirm("Réinitialiser toutes les données de la démo ?")) return;

  localStorage.removeItem(STORAGE_KEY);
  state = clone(DEFAULT_STATE);
  activeChat = null;
  projectFilter = "all";
  currentUniverse = "all";
  marketCat = "all";
  saveState();

  $$("#marketTabs [data-market-cat]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.marketCat === "all");
  });

  renderUser();
  renderTalentGrid();
  renderFeed();
  renderOpportunities();
  renderCharts();
  renderRookies();
  renderMarketplace();
  renderCart();
  renderExplore();
  renderProjects();
  renderConversations();
  renderChat();
  renderProfile();
  renderNotifications();
  renderBadges();

  closeModal("settingsBackdrop");
  showToast("Démo réinitialisée.");
});

$("#notifBtn").addEventListener("click", event => {
  event.stopPropagation();
  $("#notifPanel").classList.toggle("show");
  renderNotifications();
});

$("#markAllRead").addEventListener("click", () => {
  state.notifications.forEach(n => { n.read = true; });
  saveState();
  renderNotifications();
});

$("#openCart").addEventListener("click", openCart);
$("#openCartAlt").addEventListener("click", openCart);

$("#checkoutBtn").addEventListener("click", () => {
  if (!state.cart.length) return;

  const total = cartTotal();
  const count = cartCount();

  state.orders.unshift({
    id: uid("order"),
    total,
    count,
    time: "À l'instant"
  });

  state.cart = [];
  saveState();

  renderCart();
  renderBadges();
  closeModal("cartBackdrop");

  addNotification(`Commande confirmée · ${count} article${count > 1 ? "s" : ""} · ${money(total)}.`);
  showToast("Commande confirmée — merci !");
});

$$("#marketTabs [data-market-cat]").forEach(button => {
  button.addEventListener("click", () => {
    marketCat = button.dataset.marketCat;

    $$("#marketTabs [data-market-cat]").forEach(btn => {
      btn.classList.toggle("active", btn === button);
    });

    renderMarketplace();
  });
});

$$(".universe-tab[data-universe]").forEach(button => {
  button.addEventListener("click", () => {
    $$(".universe-tab[data-universe]").forEach(tab => tab.classList.remove("active"));
    button.classList.add("active");
    currentUniverse = button.dataset.universe;
    renderTalentGrid();
  });
});

$$("#projectTabs [data-project-filter]").forEach(button => {
  button.addEventListener("click", () => {
    projectFilter = button.dataset.projectFilter;
    renderProjects();
  });
});

$("#exploreSearch").addEventListener("input", renderExplore);
$("#roleFilter").addEventListener("change", renderExplore);
$("#genreFilter").addEventListener("change", renderExplore);

$("#globalSearch").addEventListener("keydown", event => {
  if (event.key !== "Enter") return;

  navigate("explore");
  $("#exploreSearch").value = event.target.value;
  renderExplore();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeAllModals();
});

// ---------------------------------------------------------------
// INITIALISATION
// ---------------------------------------------------------------

$("#todayLabel").textContent = new Intl.DateTimeFormat("fr-FR", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
}).format(new Date()).toUpperCase();

renderUser();
renderTalentGrid();
renderFeed();
renderOpportunities();
renderCharts();
renderRookies();
renderMarketplace();
renderCart();
renderExplore();
renderProjects();
renderConversations();
renderChat();
renderProfile();
renderNotifications();
renderBadges();
