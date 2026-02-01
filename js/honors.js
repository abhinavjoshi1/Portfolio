document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("honors-container");
  if (!container) return;

  fetch("honors.json")
    .then(res => res.json())
    .then(data => {
      container.innerHTML = `
        <div class="honors-grid">
          ${data.map(item => `
            <div class="honor-card">
              <div class="honor-icon">${item.icon}</div>
              <div class="honor-text">
                <h3>${item.title}</h3>
                <p>${item.subtitle}</p>
              </div>
            </div>
          `).join("")}
        </div>
      `;
    })
    .catch(err => console.error("Honors load error:", err));
});
