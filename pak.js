fetch('apps.json')
  .then(res => res.json())
  .then(apps => {
    const main = document.getElementById('apps');

    apps.forEach(app => {
      const isArchive = app.url.includes('archive.org');

      const section = document.createElement('section');
      section.innerHTML = `
        <h1>
          ${app.title}
          ${isArchive ? `<span class="badge archive">Internet Archive</span>` : ``}
        </h1>

        ${app.description ? `<p>${app.description}</p>` : ''}

        ${isArchive ? `
          <p class="note">
            ⚠️ This download is hosted on the Internet Archive.
          </p>
        ` : app.note ? `<p class="note">${app.note}</p>` : ''}

        <p>
          <button onclick="location.href='${app.url}'">
            Download
          </button>
        </p>
      `;

      main.appendChild(section);
      main.appendChild(document.createElement('hr'));
    });
  });
