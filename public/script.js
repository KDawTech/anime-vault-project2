// -------------------------
// HOME PAGE
// -------------------------

const animeContainer = document.getElementById("anime-list");

if (animeContainer) {
    fetch("/api/anime")
        .then((response) => response.json())
        .then((animeList) => {

            animeList.forEach((anime) => {

                const card = document.createElement("article");

                card.classList.add("anime-card");

                card.innerHTML = `
                    <img src="${anime.image}" alt="${anime.title}">

                    <h3>${anime.title}</h3>

                    <p><strong>Genre:</strong> ${anime.genre}</p>

                    <p><strong>Year:</strong> ${anime.year}</p>

                    <p><strong>Rating:</strong> ${anime.rating}</p>

                    <a href="/anime/${anime.id}" role="button">
                        View Details
                    </a>
                `;

                animeContainer.appendChild(card);
            });
        })
        .catch((error) => {
            console.error("Error loading anime:", error);

            animeContainer.innerHTML = `
                <p>Unable to load anime right now.</p>
            `;
        });
}


// -------------------------
// DETAILS PAGE
// -------------------------

const detailsContainer = document.getElementById("anime-details");

if (detailsContainer) {

    const pathParts = window.location.pathname.split("/");
    const animeId = pathParts[pathParts.length - 1];

    fetch(`/api/anime/${animeId}`)
        .then((response) => {

            if (!response.ok) {
                throw new Error("Anime not found");
            }

            return response.json();
        })
        .then((anime) => {

            document.title = `${anime.title} | AnimeVault`;

            detailsContainer.innerHTML = `
                <article class="anime-details">

                    <img
                        src="${anime.image}"
                        alt="${anime.title}"
                        class="details-image"
                    >

                    <div>
                        <h1>${anime.title}</h1>

                        <p>
                            <strong>ID:</strong>
                            ${anime.id}
                        </p>

                        <p>
                            <strong>Genre:</strong>
                            ${anime.genre}
                        </p>

                        <p>
                            <strong>Year:</strong>
                            ${anime.year}
                        </p>

                        <p>
                            <strong>Rating:</strong>
                            ${anime.rating}
                        </p>

                        <p>
                            <strong>Description:</strong>
                            ${anime.description}
                        </p>
                    </div>

                </article>
            `;
        })
        .catch((error) => {
            console.error("Error loading anime:", error);

            detailsContainer.innerHTML = `
                <h2>Anime not found</h2>
                <a href="/">Return to AnimeVault</a>
            `;
        });
}