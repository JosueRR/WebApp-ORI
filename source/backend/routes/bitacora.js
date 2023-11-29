const express = require('express');
const router = express.Router();
const pool = require('../helpers/DbConfig');

// Getting all proveedores from db
router.get('/bitacora', async (request, response) => {
    try {
        const IDActivo = req.params.IDActivo;
        const {q} = request.query; // this is for the search bar
        const sqlQuery = 'SELECT Usuario, EstadoPropuesto, FechaAccion FROM Bitacora WHERE IDActivo = ?';
        const rows = await pool.query(sqlQuery);

        pool.query(query, [IDActivo], (err, results) => {
            if (err) {
                console.error('Error al realizar la consulta: ' + err.stack);
                response.status(500).json({ error: 'Error al obtener datos de la base de datos' });
                return;
            }
        });

        const activoQuery = 'SELECT Nombre FROM Activo WHERE IDActivo = ?';
        const [activoResult] = await pool.query(activoQuery, [IDActivo]);

        if (!activoResult || activoResult.length === 0) {
            res.status(404).json({ error: 'Activo no encontrado' });
            return;
        }

        response.json({ nombreActivo, bitacora: results });
        
    } catch (error) {
        response.status(500).send(error.message);
    }
});