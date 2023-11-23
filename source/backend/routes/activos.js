const express = require('express');
const router = express.Router();
const pool = require('../helpers/DbConfig');

// Getting all activos from db
router.get('/get', async (request, response) => {
    try {
        const {q} = request.query; // this is for the search bar
        const sqlQuery = `
        SELECT 
            Activo.IDActivo, 
            Tipo.Descripcion AS Tipo, 
            Activo.Placa, 
            Responsable.Nombre AS ResponsableNombre,
            Activo.ActivoFijo,
            Activo.Descripcion,
            Activo.Estado
        FROM 
            Activo
        JOIN 
            Tipo ON Activo.IDTipo = Tipo.IDTipo
        JOIN 
            Responsable ON Activo.IDResponsable = Responsable.IDResponsable;
        ;`
        const rows = await pool.query(sqlQuery)
        
        // this filters the data for the search bar
        const keys = ['IDActivo', 'Tipo', 'Estado', 'Placa', 'ResponsableNombre'];
        const search = (data) => {
            return data.filter((item) =>
              keys.some((key) => 
              item[key].toString().toLowerCase().includes(q.toLowerCase())
            ));
        };

        // Check if searchQuery is provided
        if (q) {
            response.status(200).json(search(rows));
        } else {
            response.status(200).json(rows);
        }

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
                Tipo.Descripcion AS Tipo, 
                Activo.Placa, 
                Responsable.Nombre AS ResponsableNombre,
                Activo.ActivoFijo,
                Activo.Descripcion,
                Activo.Estado
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
        
        const keys = ['IDActivo', 'Tipo', 'Estado', 'Descripcion', 'Placa', 'ResponsableNombre'];
        
        const search = (data) => {
            return data.filter((item) =>
              keys.some((key) => item[key].toLowerCase().includes(q))
            );
        };


    } catch (error) {
        response.status(500).send(error.message)
    }
});

module.exports = router;