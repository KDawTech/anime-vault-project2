const animeList = [
    {
        id: 1,
        title: "Attack on Titan",
        genre: "Action / Dark Fantasy",
        year: 2013,
        rating: "9.1/10",
        description: "Humanity fights for survival against enormous humanoid creatures known as Titans.",
        image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg"
    },

    {
        id: 2,
        title: "Death Note",
        genre: "Mystery / Psychological",
        year: 2006,
        rating: "8.6/10",
        description: "A student discovers a supernatural notebook that can kill anyone whose name is written inside.",
        image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg"
    },

    {
        id: 3,
        title: "Demon Slayer",
        genre: "Action / Fantasy",
        year: 2019,
        rating: "8.4/10",
        description: "Tanjiro becomes a demon slayer after his family is attacked by demons.",
        image: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg"
    },

    {
        id: 4,
        title: "Jujutsu Kaisen",
        genre: "Action / Supernatural",
        year: 2020,
        rating: "8.6/10",
        description: "A student joins a secret organization of sorcerers fighting dangerous curses.",
        image: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg"
    },

    {
        id: 5,
        title: "Fullmetal Alchemist: Brotherhood",
        genre: "Adventure / Fantasy",
        year: 2009,
        rating: "9.1/10",
        description: "Two brothers search for the Philosopher's Stone after a failed alchemy experiment.",
        image: "https://cdn.myanimelist.net/images/anime/1208/94745.jpg"
    }
    
];

// -------------------------
// HOME PAGE
// -------------------------

const animeContainer = document.getElementById("anime-list");

if (animeContainer) {

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
}

// DETAILS PAGE
const detailsContainer = document.getElementById("anime-details");

if (detailsContainer) {

    const pathParts = window.location.pathname.split("/");

    const animeId = Number(pathParts[pathParts.length - 1]);

    const anime = animeList.find(
        (item) => item.id === animeId
    );

    if (anime) {

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
    }
}