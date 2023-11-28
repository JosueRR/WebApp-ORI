const express = require('express');
const router = express.Router();
const pool = require('../helpers/DbConfig');
const bodyParser = require('body-parser');

// Getting all proveedores from db
router.get('/get', async (request, response) => {
    try {
        const {q} = request.query; // this is for the search bar
        const sqlQuery = 'SELECT * FROM Proveedor;';
        const rows = await pool.query(sqlQuery);

        const search = (data) => {
            return data.filter((item) =>
                ['IDProveedor', 'Nombre', 'Email'].some(
                    key => item[key].toString().toLowerCase().includes(q.toLowerCase())
                )
            );
        };

        // Check if searchQuery is provided
        if (q) {
            response.status(200).json(search(rows));
        } else {
            response.status(200).json(rows);
        }
    } catch (error) {
        response.status(500).send(error.message);
    }
});

// Adding a new proveedor
router.post('/create', bodyParser.json(), async (req, res) => {
    try {
        let { Nombre, Email } = req.body;
        const sqlQuery = 'INSERT INTO Proveedor (Nombre, Email) VALUES (?, ?);';
        await pool.query(sqlQuery, [Nombre, Email]);
        res.status(200).send({ message: 'Proveedor added successfully' });
    } catch (error) {
        res.status(500).send('Error adding Proveedor: ' + error.message);
    }
});

// Editing an existing proveedor
router.post('/edit/:id', bodyParser.json(), async (req, res) => {
    try {
        const { id } = req.params;
        let { Nombre, Email } = req.body;
        const sqlQuery = 'UPDATE Proveedor SET Nombre = ?, Email = ? WHERE IDProveedor = ?;';
        await pool.query(sqlQuery, [Nombre, Email, id]);
        res.status(200).send({ message: 'Proveedor updated successfully' });
    } catch (error) {
        res.status(500).send('Error updating Proveedor: ' + error.message);
    }
});

// Deleting a proveedor
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const sqlQuery = 'DELETE FROM Proveedor WHERE IDProveedor = ?;';
        await pool.query(sqlQuery, [id]);
        res.status(200).send('Proveedor deleted successfully.');
    } catch (error) {
        res.status(500).send('Error deleting Proveedor: ' + error.message);
    }
});

module.exports = router;
