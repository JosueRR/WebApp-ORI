const express = require('express');
const router = express.Router();
const pool = require('../helpers/DbConfig');

// Getting bitacora for a specific activo
router.get('/bitacora/:IDActivo', async (request, response) => {
    try {
        const sqlQuery = 'SELECT DATE_FORMAT(FechaAccion, "%Y-%m-%d %H:%i:%s") AS FechaAccion, EstadoPropuesto, Usuario FROM Bitacora WHERE IDActivo = ?';
        const rows = await pool.query(sqlQuery, request.params.IDActivo);

        response.status(200).json(rows);
        
    } catch (error) {
        response.status(500).send(error.message);
    }
});

module.exports = router;