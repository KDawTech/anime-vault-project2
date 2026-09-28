const express = require('express')
const pool = require('../config/database.js')

const router = express.Router()


// GET all anime
router.get('/', async (req, res) => {
    try {
        const results = await pool.query(
            'SELECT * FROM anime ORDER BY id ASC'
        )

        res.status(200).json(results.rows)
    }
    catch (error) {
        console.error(error)
        res.status(500).json({
            error: 'Unable to retrieve anime'
        })
    }
})


// GET one anime by ID
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id

        const results = await pool.query(
            'SELECT * FROM anime WHERE id = $1',
            [id]
        )

        if (results.rows.length === 0) {
            return res.status(404).json({
                error: 'Anime not found'
            })
        }

        res.status(200).json(results.rows[0])
    }
    catch (error) {
        console.error(error)
        res.status(500).json({
            error: 'Unable to retrieve anime'
        })
    }
})


module.exports = router