const express = require('express');
const router = express.Router();
const pool = require('../helpers/DbConfig');
const bodyParser = require('body-parser');


// Getting all responsables from db
router.get('/get', async (request, response) => {
    try {
        const {q} = request.query; // this is for the search bar
        const sqlQuery = 'SELECT IDResponsable, Nombre FROM Responsable;';
        const rows = await pool.query(sqlQuery)
        
        // this filters the data for the search bar
        const keys = ['IDResponsable', 'Nombre'];
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

// Deleting a Responsable
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const sqlQuery = 'DELETE FROM Responsable WHERE IDResponsable = ?';
        await pool.query(sqlQuery, [id]);
        res.status(200).send('Responsable deleted successfully.');
    } catch (error) {
        res.status(500).send('There was a problem deleting the Responsable: ' + error.message);
    }
});

/* Post for creating responsable */
router.post('/create/guardar', bodyParser.json(), async (req, res) => {
    try {
        let { Nombre } = req.body;
        const sqlQuery = `INSERT INTO Responsable (Nombre)VALUES (?);`;
        const params = [Nombre];
        await pool.query(sqlQuery, params);
        res.status(200).send({ message: 'Success' });
    } catch (error) {
        res.status(500).send('Error saving data from Responsable ' + error);
    }
});

/* Post for editing responsable */
router.post('/edit/guardar', bodyParser.json(), async (req, res) => {
    try {
        let { IDResponsable, Nombre } = req.body;
        const sqlQuery = `
            UPDATE Responsable 
            SET Nombre = ?
            WHERE IDResponsable = ?;
        `;
        const params = [Nombre, IDResponsable];
        await pool.query(sqlQuery, params);
        res.status(200).send({ message: 'Success' });
    } catch (error) {
        console.log('Error updating a responsable ' + error)
        res.status(500).send('Error updating data from Responsable ' + error);
    }
});

module.exports = router;