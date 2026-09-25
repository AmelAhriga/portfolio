const revealItems = document.querySelectorAll(".reveal");
const homeView = document.querySelector("[data-home-view]");
const projectViews = document.querySelectorAll("[data-project-view]");
const projectButtons = document.querySelectorAll("[data-open-project]");
const backButtons = document.querySelectorAll("[data-back-to-home]");

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

const showHome = (scrollToTop = true) => {
  homeView.hidden = false;
  projectViews.forEach((view) => {
    view.hidden = true;
  });
  if (scrollToTop) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const showProject = (projectId) => {
  homeView.hidden = true;
  projectViews.forEach((view) => {
    view.hidden = view.dataset.projectView !== projectId;
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
};

projectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const projectId = button.dataset.openProject;
    window.location.hash = projectId;
    showProject(projectId);
  });
});

backButtons.forEach((button) => {
  button.addEventListener("click", () => {
    window.location.hash = "";
    showHome();
  });
});

const syncViewFromHash = () => {
  const projectId = window.location.hash.replace("#", "");
  const matchingProject = Array.from(projectViews).find(
    (view) => view.dataset.projectView === projectId
  );

  if (matchingProject) {
    showProject(projectId);
    return;
  }

  showHome(false);

  if (projectId) {
    const targetSection = document.getElementById(projectId);
    if (targetSection) {
      requestAnimationFrame(() => {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.addEventListener("hashchange", syncViewFromHash);
syncViewFromHash();
