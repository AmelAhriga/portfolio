const revealItems = document.querySelectorAll(".reveal");
const homeView = document.querySelector("[data-home-view]");
const categoryViews = document.querySelectorAll("[data-category-view]");
const projectViews = document.querySelectorAll("[data-project-view]");

// Maps each project id to the category it should return to when there is
// no other context (e.g. a direct link straight to a project).
const defaultCategoryForProject = {
  bysaphir: "photography",
  "soumy-gold": "photography",
  "sweet-cloud": "3d",
};

let lastCategoryId = null;

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

const hideAllViews = () => {
  homeView.hidden = true;
  categoryViews.forEach((view) => {
    view.hidden = true;
  });
  projectViews.forEach((view) => {
    view.hidden = true;
  });
};

const showHome = (scrollToTop = true) => {
  hideAllViews();
  homeView.hidden = false;
  if (scrollToTop) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const showCategory = (categoryId, scrollToTop = true) => {
  const matching = Array.from(categoryViews).find(
    (view) => view.dataset.categoryView === categoryId
  );
  if (!matching) {
    showHome(scrollToTop);
    return;
  }
  hideAllViews();
  matching.hidden = false;
  lastCategoryId = categoryId;
  if (scrollToTop) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const showProject = (projectId, categoryId, scrollToTop = true) => {
  const matching = Array.from(projectViews).find(
    (view) => view.dataset.projectView === projectId
  );
  if (!matching) {
    showHome(scrollToTop);
    return;
  }
  hideAllViews();
  matching.hidden = false;
  lastCategoryId = categoryId || defaultCategoryForProject[projectId] || null;

  const backButton = matching.querySelector("[data-back-to-category]");
  if (backButton && lastCategoryId) {
    backButton.dataset.backToCategory = lastCategoryId;
  }

  if (scrollToTop) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

// Home: brand mark and any [data-open-home] element go back to the homepage.
document.querySelectorAll("[data-open-home]").forEach((el) => {
  el.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.hash = "";
    showHome();
  });
});

// Nav links that scroll to a section on the homepage (e.g. "Mijn projecten").
document.querySelectorAll("[data-scroll-to]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.scrollTo);
    if (!target) return;
    history.replaceState(null, "", `#${button.dataset.scrollTo}`);
    showHome(false);
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});

// Homepage category tiles and nav links that open a category directly.
document.querySelectorAll("[data-open-category]").forEach((button) => {
  button.addEventListener("click", () => {
    const categoryId = button.dataset.openCategory;
    window.location.hash = categoryId;
    showCategory(categoryId);
  });
});

// Project cards inside a category grid.
document.querySelectorAll("[data-open-project]").forEach((button) => {
  button.addEventListener("click", () => {
    const projectId = button.dataset.openProject;
    const categoryId =
      button.dataset.projectCategory || defaultCategoryForProject[projectId];
    window.location.hash = `${categoryId}/${projectId}`;
    showProject(projectId, categoryId);
  });
});

// Back button inside a category view always returns home.
document.querySelectorAll("[data-back-to-home]").forEach((button) => {
  button.addEventListener("click", () => {
    window.location.hash = "";
    showHome();
  });
});

// Back button inside a project view returns to the category it was opened
// from (falling back to that project's default category).
document.querySelectorAll("[data-back-to-category]").forEach((button) => {
  button.addEventListener("click", () => {
    const categoryId = button.dataset.backToCategory || lastCategoryId;
    if (categoryId) {
      window.location.hash = categoryId;
      showCategory(categoryId);
    } else {
      window.location.hash = "";
      showHome();
    }
  });
});

const knownCategoryIds = Array.from(categoryViews).map(
  (view) => view.dataset.categoryView
);

const syncViewFromHash = () => {
  const hash = window.location.hash.replace("#", "");

  if (!hash) {
    showHome(false);
    return;
  }

  if (hash.includes("/")) {
    const [categoryId, projectId] = hash.split("/");
    showProject(projectId, categoryId, false);
    return;
  }

  if (knownCategoryIds.includes(hash)) {
    showCategory(hash, false);
    return;
  }

  const targetSection = document.getElementById(hash);
  if (targetSection) {
    showHome(false);
    requestAnimationFrame(() => {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return;
  }

  showHome(false);
};

window.addEventListener("hashchange", syncViewFromHash);
syncViewFromHash();

// ---------------------------------------------------------------------------
// Hero: rotating role (designer / developer / fotograaf).
// ---------------------------------------------------------------------------
const hero = document.querySelector("[data-hero]");

if (hero) {
  const roleEl = hero.querySelector("[data-hero-role]");
  const roleIds = ["designer", "developer", "photographer"];
  let roleIndex = 0;

  const renderRole = () => {
    const dictionary =
      translations[document.documentElement.lang] || translations.nl;
    hero.dataset.role = roleIds[roleIndex];
    roleEl.textContent = dictionary["hero.roles"].split("|")[roleIndex];
  };

  const nextRole = () => {
    roleEl.classList.add("is-leaving");
    setTimeout(() => {
      roleIndex = (roleIndex + 1) % roleIds.length;
      roleEl.classList.remove("is-leaving");
      roleEl.classList.add("is-entering");
      renderRole();
      // Force a reflow so the enter transition starts from below.
      void roleEl.offsetWidth;
      roleEl.classList.remove("is-entering");
    }, 500);
  };

  renderRole();
  document.addEventListener("portfolio:lang", renderRole);
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setInterval(nextRole, 3200);
  }
}

// ---------------------------------------------------------------------------
// Contact: current year in the footer.
// ---------------------------------------------------------------------------
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// ---------------------------------------------------------------------------
// Language switcher (NL is the main language, FR and EN are optional).
// ---------------------------------------------------------------------------
const supportedLanguages = ["nl", "fr", "en"];
const defaultLanguage = "nl";

const getSavedLanguage = () => {
  try {
    return localStorage.getItem("portfolio-lang");
  } catch (error) {
    return null;
  }
};

const saveLanguage = (lang) => {
  try {
    localStorage.setItem("portfolio-lang", lang);
  } catch (error) {
    // Storage can be blocked (private mode); the page still works.
  }
};

const applyLanguage = (lang) => {
  const dictionary = translations[lang] || translations[defaultLanguage];
  const translate = (key) => dictionary[key] ?? translations[defaultLanguage][key];

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = translate(el.dataset.i18n);
    if (value !== undefined) el.textContent = value;
  });
  // Only used for our own strings that contain simple markup (<em>).
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const value = translate(el.dataset.i18nHtml);
    if (value !== undefined) el.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const value = translate(el.dataset.i18nAlt);
    if (value !== undefined) el.alt = value;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const value = translate(el.dataset.i18nAria);
    if (value !== undefined) el.setAttribute("aria-label", value);
  });
  document.querySelectorAll("[data-i18n-content]").forEach((el) => {
    const value = translate(el.dataset.i18nContent);
    if (value !== undefined) el.setAttribute("content", value);
  });

  document.dispatchEvent(new CustomEvent("portfolio:lang", { detail: lang }));

  document.querySelectorAll("[data-set-lang]").forEach((button) => {
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.setLang === lang)
    );
  });
};

document.querySelectorAll("[data-set-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.dataset.setLang;
    saveLanguage(lang);
    applyLanguage(lang);
  });
});

const savedLanguage = getSavedLanguage();
applyLanguage(
  supportedLanguages.includes(savedLanguage) ? savedLanguage : defaultLanguage
);
