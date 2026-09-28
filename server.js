require('./config/dotenv.js')

const express = require("express");
const path = require("path");
const animeRouter = require('./routes/anime.js');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use('/api/anime', animeRouter);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});


// Detail page route
app.get("/anime/:id", (req, res) => {
    const validAnimeIds = ["1", "2", "3", "4", "5"];

    if (!validAnimeIds.includes(req.params.id)) {
        return res.status(404).sendFile(
            path.join(__dirname, "public", "404.html")
        );
    }

    res.sendFile(
        path.join(__dirname, "public", "details.html")
    );
});


// 404 page
app.use((req, res) => {
    res.status(404).sendFile(
        path.join(__dirname, "public", "404.html")
    );
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});