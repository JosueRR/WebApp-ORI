const express = require('express');
const router = express.Router();
const pool = require('../helpers/DbConfig');

// Getting all activos from db
router.get('/get', async (request, response) => {
    try {
        const sqlQuery = 'SELECT * FROM Responsable;'
        const rows = await pool.query(sqlQuery)
        /* Query in case it needs params 
        const rows = await pool.query(sqlQuery, request.params.NOMBRE_DEL_PARAM)
        */
       response.status(200).json(rows);
    } catch (error) {
        response.status(500).send(error.message)
    }
});

module.exports = router;