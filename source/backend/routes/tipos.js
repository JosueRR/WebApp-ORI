const express = require('express');
const router = express.Router();
const pool = require('../helpers/DbConfig');
const bodyParser = require('body-parser');


// Getting all tipos from db
router.get('/get', async (request, response) => {
    try {
        const {q} = request.query; // this is for the search bar
        const sqlQuery = 'SELECT IDTipo, Descripcion FROM Tipo;';
        const rows = await pool.query(sqlQuery)
        
        // this filters the data for the search bar
        const keys = ['IDTipo', 'Descripcion'];
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

// Getting general info of specific tipo
router.get('/get/:id', async (request, response) => {
    try {
        const sqlQuery = `
        SELECT 
            Tipo.IDTipo, 
            Tipo.Descripcion
        FROM 
            Tipo
        WHERE 
            Tipo.IDTipo = ?;
        `;
        const rows = await pool.query(sqlQuery, request.params.id)
        response.status(200).json(rows);
    } catch (error) {
        response.status(500).send(error.message)
    }
});

/* Post for creating tipo */
router.post('/create/guardar', bodyParser.json(), async (req, res) => {
    try {
        let { Descripcion } = req.body;
        const sqlQuery = `INSERT INTO Tipo (Descripcion)VALUES (?);`;
        const params = [Descripcion];
        await pool.query(sqlQuery, params);
        res.status(200).send({ message: 'Success' });
    } catch (error) {
        res.status(500).send('Error saving data from Tipo ' + error);
    }
});

// Deleting an Tipo
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const sqlQuery = 'DELETE FROM Tipo WHERE IDTipo = ?';
        await pool.query(sqlQuery, [id]);
        res.status(200).send('Tipo deleted successfully.');
    } catch (error) {
        res.status(500).send('There was a problem deleting the Tipo: ' + error.message);
    }
});

/* Post for editing tipo */
router.post('/edit/guardar', bodyParser.json(), async (req, res) => {
    try {
        let { IDTipo, Descripcion } = req.body;
        const sqlQuery = `
            UPDATE Tipo 
            SET Descripcion = ?
            WHERE IDTipo = ?;
        `;
        const params = [Descripcion, IDTipo];
        await pool.query(sqlQuery, params);
        res.status(200).send({ message: 'Success' });
    } catch (error) {
        console.log('Error updating an tipo ' + error)
        res.status(500).send('Error updating data from Tipo ' + error);
    }
});

module.exports = router;