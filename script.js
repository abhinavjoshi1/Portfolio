const body = document.body;
const toggle = document.getElementById("themeToggle");
const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll(".content-section");


/* THEME TOGGLE */


toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  toggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});


/* TAB SWITCHING (SMOOTH) */


links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.dataset.section;

    /* nav active state */
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    /* section switch */
    sections.forEach(section => {
      section.classList.toggle(
        "active",
        section.id === targetId
      );
    });
  });
});


/* DEFAULT TAB */


document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('[data-section="Blogs"]').click();
});
