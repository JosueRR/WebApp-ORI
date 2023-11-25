const express = require('express');
const router = express.Router();
const pool = require('../helpers/DbConfig');
const bodyParser = require('body-parser');


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
        const keys = ['IDActivo', 'Tipo', 'Estado', 'Placa', 'ResponsableNombre', 'Descripcion'];
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

/* Post for creating activo */
router.post('/create/guardar', bodyParser.json(), async (req, res) => {
    try {
        let { Placa, Descripcion, FechaAdquisicion, Estado, Proveedor, Fijo, IDResponsable, IDTipo, Observaciones } = req.body;
        const sqlQuery = `
            INSERT INTO Activo (Placa, Descripcion, FechaAdquisicion, Estado, Proveedor, ActivoFijo, IDResponsable, IDTipo, Observaciones)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
        `;
        const params = [Placa, Descripcion, FechaAdquisicion, Estado, Proveedor, Fijo, IDResponsable, IDTipo, Observaciones];
        await pool.query(sqlQuery, params);
        res.status(200).send({ message: 'Success' });
    } catch (error) {
        res.status(500).send('Error saving data from Activo ' + error);
    }
});


// Getting all Tipo
router.get('/tipo/all', async (request, response) => {
    try {
        const sqlQuery = 'SELECT IDTipo, Descripcion FROM Tipo;';
        const rows = await pool.query(sqlQuery);
        response.status(200).json(rows);
    } catch (error) {
        response.status(500).send(error.message);
    }
});

// Getting all Responsable
router.get('/responsable/all', async (request, response) => {
    try {
        const sqlQuery = 'SELECT IDResponsable, Nombre FROM Responsable;';
        const rows = await pool.query(sqlQuery);
        response.status(200).json(rows);
    } catch (error) {
        response.status(500).send(error.message);
    }
});

// Getting all Tipo
router.get('/tipo/all', async (request, response) => {
    try {
        const sqlQuery = 'SELECT IDTipo, Descripcion FROM Tipo;';
        const rows = await pool.query(sqlQuery);
        response.status(200).json(rows);
    } catch (error) {
        response.status(500).send(error.message);
    }
});

// Deleting an Activo
router.delete('/delete/:id', async (req, res) => {
    try {
        console.log('Hello from API delete, this is the id: ' +  req.params.id)
        const id = req.params.id;
        const sqlQuery = 'DELETE FROM Activo WHERE IDActivo = ?';
        await pool.query(sqlQuery, [id]);
        res.status(200).send('Activo deleted successfully.');
    } catch (error) {
        console.log('Error in deleting an activo: ' + error)
        res.status(500).send('There was a problem deleting the Activo: ' + error.message);
    }
});


module.exports = router;