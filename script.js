// DONNÉES DE DÉMONSTRATION

const talents = [
  {
    name: "Malo V.",
    initial: "M",
    role: "Artiste",
    city: "Paris, France",
    genre: ["Trap", "Rap mélodique"],
    desc: "Univers mélodique, textes personnels. À la recherche de prods singulières.",
    cover: "cover-1",
    kind: "artist"
  },
  {
    name: "NOVA Beats",
    initial: "N",
    role: "Beatmaker",
    city: "Bruxelles, Belgique",
    genre: ["Drill", "Trap"],
    desc: "Des prods sombres et puissantes. Ouvert aux placements et collaborations.",
    cover: "cover-2",
    kind: "producer"
  },
  {
    name: "KAY Studio",
    initial: "K",
    role: "Producteur",
    city: "Londres, UK",
    genre: ["R&B", "Trap"],
    desc: "Production, arrangement et direction artistique. Construisons un son.",
    cover: "cover-3",
    kind: "producer"
  },
  {
    name: "Sanae",
    initial: "S",
    role: "Artiste",
    city: "Casablanca, Maroc",
    genre: ["Afro", "Rap mélodique"],
    desc: "Mélange de sonorités afro et rap. Recherche un beatmaker créatif.",
    cover: "cover-4",
    kind: "artist"
  },
  {
    name: "Léo Mix",
    initial: "L",
    role: "Ingénieur son",
    city: "Lyon, France",
    genre: ["Trap", "Boom bap"],
    desc: "Mixage et mastering. Je donne à vos morceaux leur finition.",
    cover: "cover-5",
    kind: "community"
  },
  {
    name: "RØME",
    initial: "R",
    role: "Beatmaker",
    city: "Montréal, Canada",
    genre: ["Boom bap", "R&B"],
    desc: "Samples, textures et drums organiques. Toujours partant pour créer.",
    cover: "cover-6",
    kind: "producer"
  }
];

const projects = [
  {
    icon: "♫",
    title: "Nuit blanche — single",
    people: "Malo V. · NOVA Beats · Toi",
    desc: "Dernière activité : la maquette a été envoyée",
    status: "En cours"
  },
  {
    icon: "✦",
    title: "Session freestyle internationale",
    people: "Sanae · Léo Mix · Toi",
    desc: "En attente de validation des participants",
    status: "En attente"
  }
];

const conversations = [
  {
    initial: "N",
    name: "NOVA Beats",
    message: "Je t'envoie une nouvelle version ce soir.",
    time: "10:42"
  },
  {
    initial: "S",
    name: "Sanae",
    message: "J'aime beaucoup la direction du projet !",
    time: "Hier"
  },
  {
    initial: "L",
    name: "Léo Mix",
    message: "Tu peux m'envoyer les pistes séparées.",
    time: "Lun."
  }
];


// RACCOURCIS HTML

const $ = selector => document.querySelector(selector);

const $$ = selector => [
  ...document.querySelectorAll(selector)
];

let currentUniverse = "all";
let selectedTalent = null;


// CRÉATION DES CARTES DE PROFILS

function card(t) {
  return `
    <article class="talent-card">

      <div class="card-cover ${t.cover}">

        <span class="cover-label">
          ${
            t.kind === "artist"
              ? "ARTISTE"
              : t.kind === "producer"
              ? "PRODUCTION"
              : "AUDIO / STUDIO"
          }
        </span>

        <div class="card-avatar">
          ${t.initial}
        </div>

      </div>

      <div class="card-body">

        <div class="card-title-row">
          <h3>${t.name}</h3>
          <span class="verified">✦</span>
        </div>

        <p class="card-role">${t.role}</p>

        <p class="card-desc">
          ${t.desc}
        </p>

        <div class="tag-list">
          ${t.genre.map(g => `<span>${g}</span>`).join("")}
        </div>

        <div class="card-footer">

          <span class="location">
            ⌖ ${t.city}
          </span>

          <button
            class="btn btn-outline btn-card"
            data-contact="${t.name}">
            Collaborer ↗
          </button>

        </div>
      </div>
    </article>
  `;
}


// AFFICHER L'ACCUEIL

function renderHome() {

  const list =
    currentUniverse === "all"
      ? talents.slice(0, 3)
      : currentUniverse === "community"
      ? talents.filter(
          t => t.kind === "community" || t.kind === "artist"
        )
      : talents.filter(
          t => t.kind === currentUniverse
        );

  $("#talentGrid").innerHTML =
    list.map(card).join("") ||
    '<p class="subheading">Aucun profil pour le moment.</p>';

  bindContact();
}


// AFFICHER LES RÉSULTATS DE RECHERCHE

function renderExplore() {

  const q = $("#exploreSearch").value.toLowerCase();
  const role = $("#roleFilter").value;
  const genre = $("#genreFilter").value;

  const list = talents.filter(t => {

    const text =
      `${t.name} ${t.role} ${t.city} ${t.desc}`.toLowerCase();

    return (
      text.includes(q) &&
      (role === "all" || t.role === role) &&
      (genre === "all" || t.genre.includes(genre))
    );

  });

  $("#exploreGrid").innerHTML =
    list.map(card).join("") ||
    '<p class="subheading">Aucun résultat. Essaie d’autres filtres.</p>';

  $("#resultCount").textContent =
    `${list.length} talent${list.length > 1 ? "s" : ""}`;

  bindContact();
}


// BOUTONS DE COLLABORATION

function bindContact() {

  $$("[data-contact]").forEach(button => {

    button.addEventListener("click", () => {

      selectedTalent = button.dataset.contact;

      $("#modalTitle").textContent =
        `Collaborer avec ${selectedTalent}`;

      $("#modalBackdrop").classList.add("show");

      $("#collabMessage").focus();

    });

  });

}


// NOTIFICATIONS

function showToast(message) {

  const toast = $("#toast");

  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);

}


// NAVIGATION ENTRE LES PAGES

function navigate(page) {

  $$(".page").forEach(p => {

    p.classList.toggle(
      "active",
      p.id === `page-${page}`
    );

  });

  $$("[data-page]").forEach(button => {

    button.classList.toggle(
      "active",
      button.dataset.page === page
    );

  });

  const names = {
    home: "Accueil",
    explore: "Explorer",
    projects: "Projets",
    messages: "Messages",
    profile: "Mon profil"
  };

  $("#breadcrumb").innerHTML =
    `Ton espace créatif <span>/</span> ${names[page]}`;

  if (page === "explore") {
    renderExplore();
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


// ACTIVER LA NAVIGATION

$$("[data-page]").forEach(button => {

  button.addEventListener("click", () => {

    navigate(button.dataset.page);

  });

});


// CHANGEMENT D'UNIVERS

$$(".universe-tab").forEach(button => {

  button.addEventListener("click", () => {

    $$(".universe-tab").forEach(tab => {
      tab.classList.remove("active");
    });

    button.classList.add("active");

    currentUniverse = button.dataset.universe;

    renderHome();

  });

});


// FILTRES DE RECHERCHE

$("#exploreSearch").addEventListener(
  "input",
  renderExplore
);

$("#roleFilter").addEventListener(
  "change",
  renderExplore
);

$("#genreFilter").addEventListener(
  "change",
  renderExplore
);


// RECHERCHE GÉNÉRALE

$("#globalSearch").addEventListener("keydown", event => {

  if (event.key === "Enter") {

    navigate("explore");

    $("#exploreSearch").value = event.target.value;

    renderExplore();

  }

});


// BOUTONS DE DÉMONSTRATION

$("#openPost").addEventListener("click", () => {

  showToast(
    "La publication sera disponible dans la prochaine version."
  );

});

$("#newProject").addEventListener("click", () => {

  showToast(
    "Ton espace de création de projet arrive bientôt."
  );

});

$("#editProfile").addEventListener("click", () => {

  showToast(
    "L'édition du profil sera bientôt disponible."
  );

});


// FERMER LA FENÊTRE DE COLLABORATION

$("#closeModal").addEventListener("click", () => {

  $("#modalBackdrop").classList.remove("show");

});

$("#modalBackdrop").addEventListener("click", event => {

  if (event.target.id === "modalBackdrop") {

    event.currentTarget.classList.remove("show");

  }

});


// ENVOYER UNE PROPOSITION DE COLLABORATION

$("#modalForm").addEventListener("submit", event => {

  event.preventDefault();

  const message = $("#collabMessage").value.trim();

  if (!message) {

    showToast(
      "Ajoute un petit message avant d'envoyer."
    );

    return;

  }

  $("#modalBackdrop").classList.remove("show");

  $("#collabMessage").value = "";

  showToast(
    `Proposition préparée pour ${selectedTalent} !`
  );

});


// AFFICHER LES PROJETS

$("#projectList").innerHTML = projects.map(p => `

  <div class="project-item">

    <div class="project-icon">
      ${p.icon}
    </div>

    <div class="project-detail">

      <strong>${p.title}</strong>

      <p>
        ${p.people} · ${p.desc}
      </p>

    </div>

    <span class="status ${
      p.status === "En attente" ? "pending" : ""
    }">
      ${p.status}
    </span>

  </div>

`).join("");


// AFFICHER LES CONVERSATIONS

$("#conversationList").innerHTML =
  conversations.map((c, i) => `

    <button
      class="conversation ${i === 0 ? "active" : ""}"
      data-chat="${c.name}">

      <span class="avatar">
        ${c.initial}
      </span>

      <span>
        <strong>${c.name}</strong>
        <small>${c.message}</small>
      </span>

      <small>${c.time}</small>

    </button>

  `).join("");


// OUVRIR UNE CONVERSATION

$$("[data-chat]").forEach(button => {

  button.addEventListener("click", () => {

    $$(".conversation").forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    $(".chat-empty").innerHTML = `

      <div class="chat-symbol">✉</div>

      <h3>${button.dataset.chat}</h3>

      <p>
        La messagerie complète sera connectée dans la prochaine version.
      </p>

    `;

  });

});


// INITIALISATION

$("#sideName").textContent =
  $("#profileName").textContent = "Your name";

renderHome();

renderExplore();