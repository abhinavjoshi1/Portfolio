document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggle = document.getElementById("themeToggle");
  const links = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll(".content-section");

  /* THEME TOGGLE */
  if (toggle) {
    toggle.addEventListener("click", () => {
      body.classList.toggle("dark");
      toggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
    });
  }

  /* TAB SWITCHING */
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const targetId = link.dataset.section;
      if (!targetId) return;

      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      sections.forEach(section => {
        section.classList.toggle("active", section.id === targetId);
      });
    });
  });

  /* DEFAULT TAB with safe check */
  const defaultTab = document.querySelector('nav a[data-section="blogs"]');
  if (defaultTab) {
    defaultTab.click();
  } else {
    // Fallback: activate first available tab
    const firstTab = document.querySelector('nav a[data-section]');
    if (firstTab) {
      firstTab.click();
    }
  }

  /* VISITOR COUNTER */
  fetch("https://api.counterapi.dev/v1/abhinavjosh1/first-counter-2646/up")
    .then(res => res.json())
    .then(data => {
      const counter = document.getElementById("visit-count");
      if (counter) counter.textContent = data.count;
    })
    .catch(err => console.error("Counter error:", err));
});