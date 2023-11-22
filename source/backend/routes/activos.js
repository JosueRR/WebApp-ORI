const express = require('express');
const router = express.Router();
const pool = require('../helpers/DbConfig');

// Getting all activos from db
router.get('/get', async (request, response) => {
    try {
        const sqlQuery = `
        SELECT 
            Activo.IDActivo, 
            Tipo.Descripcion AS TipoDescripcion, 
            Activo.Placa, 
            Responsable.Nombre AS ResponsableNombre
        FROM 
            Activo
        JOIN 
            Tipo ON Activo.IDTipo = Tipo.IDTipo
        JOIN 
            Responsable ON Activo.IDResponsable = Responsable.IDResponsable;
        ;`


        const rows = await pool.query(sqlQuery)
       response.status(200).json(rows);
    } catch (error) {
        response.status(500).send(error.message)
    }
});

// Getting general info of specific activo
router.get('/get/:id', async (request, response) => {
    try {
        const sqlQuery = `
            SELECT 
                Activo.IDActivo, 
                Tipo.Descripcion AS TipoDescripcion, 
                Activo.Placa, 
                Responsable.Nombre AS ResponsableNombre
            FROM 
                Activo
            JOIN 
                Tipo ON Activo.IDTipo = Tipo.IDTipo
            JOIN 
                Responsable ON Activo.IDResponsable = Responsable.IDResponsable
            WHERE 
                Activo.IDActivo = ?;
        `;
        const rows = await pool.query(sqlQuery, request.params.id)
        response.status(200).json(rows);
    } catch (error) {
        response.status(500).send(error.message)
    }
});

module.exports = router;