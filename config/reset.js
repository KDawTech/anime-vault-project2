require('./dotenv.js')

const pool = require('./database.js')
const animeData = require('../data/anime.js')


const createAnimeTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS anime;

        CREATE TABLE anime (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            genre VARCHAR(255) NOT NULL,
            year INTEGER NOT NULL,
            rating VARCHAR(10) NOT NULL,
            description TEXT NOT NULL,
            image VARCHAR(500) NOT NULL
        );
    `

    try {
        await pool.query(createTableQuery)
        console.log('✅ anime table created successfully')
    }
    catch (error) {
        console.error('❌ error creating anime table:', error)
        throw error
    }
}


const seedAnimeTable = async () => {
    try {
        await createAnimeTable()

        for (const anime of animeData) {

            const insertQuery = `
                INSERT INTO anime
                (title, genre, year, rating, description, image)
                VALUES ($1, $2, $3, $4, $5, $6)
            `

            const values = [
                anime.title,
                anime.genre,
                anime.year,
                anime.rating,
                anime.description,
                anime.image
            ]

            await pool.query(insertQuery, values)

            console.log(`✅ ${anime.title} added successfully`)
        }
    }
    catch (error) {
        console.error('❌ error seeding anime table:', error)
    }
    finally {
        await pool.end()
    }
}


seedAnimeTable()