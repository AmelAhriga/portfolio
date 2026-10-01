const revealItems = document.querySelectorAll(".reveal");

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

// Header: show its white bar only once the page is scrolled.
const siteHeader = document.querySelector(".site-header");

if (siteHeader) {
  const updateHeader = () => {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

// Home: brand mark and any [data-open-home] element go to the homepage.
document.querySelectorAll("[data-open-home]").forEach((el) => {
  el.addEventListener("click", (event) => {
    event.preventDefault();
    if (document.querySelector("[data-home-view]")) {
      history.replaceState(null, "", window.location.pathname);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = "index.html";
    }
  });
});

// Nav links that scroll to a section (e.g. "Mijn projecten"). When that
// section is not on the current page, go to it on the homepage instead.
document.querySelectorAll("[data-scroll-to]").forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.dataset.scrollTo;
    const target = document.getElementById(id);
    if (!target) {
      window.location.href = `index.html#${id}`;
      return;
    }
    history.replaceState(null, "", `#${id}`);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Back button on a project page returns to where the visitor came from on
// this site (homepage or projects.html), or to all projects otherwise.
document.querySelectorAll("[data-back-to-projects]").forEach((button) => {
  button.addEventListener("click", () => {
    const cameFromSite =
      document.referrer &&
      new URL(document.referrer).origin === window.location.origin;
    if (cameFromSite && history.length > 1) {
      history.back();
    } else {
      window.location.href = "projects.html";
    }
  });
});

// ---------------------------------------------------------------------------
// Figma prototype: switch between the desktop and phone views. Each button
// loads its own prototype through data-prototype-src.
// ---------------------------------------------------------------------------
document.querySelectorAll("[data-prototype-switch]").forEach((group) => {
  const frame = group
    .closest(".detail-section")
    .querySelector("[data-prototype]");
  const iframe = frame.querySelector("iframe");
  const buttons = group.querySelectorAll("[data-prototype-view]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      frame.dataset.view = button.dataset.prototypeView;
      const src = button.dataset.prototypeSrc;
      if (src && iframe.getAttribute("src") !== src) {
        iframe.setAttribute("src", src);
      }
      buttons.forEach((other) => {
        other.setAttribute("aria-pressed", String(other === button));
      });
    });
  });
});

// ---------------------------------------------------------------------------
// Contact: current year in the footer.
// ---------------------------------------------------------------------------
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// ---------------------------------------------------------------------------
// Language switcher (NL is the main language, FR is optional).
// ---------------------------------------------------------------------------
const supportedLanguages = ["nl", "fr"];
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
