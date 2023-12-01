const express = require('express');
const router = express.Router();
const pool = require('../helpers/DbConfig');

// Getting bitacora for a specific activo
router.get('/bitacora/:IDActivo', async (request, response) => {
    try {
        const IDActivo = request.params.IDActivo;
        const sqlQuery = 'SELECT FechaAccion, EstadoPropuesto, Usuario FROM Bitacora WHERE IDActivo = ?';
        const rows = await pool.query(sqlQuery, [IDActivo]);

        response.json({ bitacora: rows });
        
    } catch (error) {
        response.status(500).send(error.message);
    }
});