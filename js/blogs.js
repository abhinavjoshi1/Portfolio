fetch("blogs/index.json")
  .then(res => res.json())
  .then(blogs => {
    blogs.sort((a, b) => new Date(b.date) - new Date(a.date));

    const container = document.getElementById("blogs-container");

    blogs.forEach((blog, i) => {
      if (i % 2 === 0) {
        const divider = document.createElement("div");
        divider.className = "blog-divider";
        divider.innerHTML = `<span>${Math.floor(i / 2) + 1}.</span>`;
        container.appendChild(divider);
      }

      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <div>
          <h3>${blog.title}</h3>
          <p>${blog.subtitle}</p>
        </div>
        <span>${blog.date}</span>
      `;

      card.onclick = () => {
        window.location.href =
          `/blogs/blogs.html?post=${blog.file}`;
      };

      container.appendChild(card);
    });
  });
