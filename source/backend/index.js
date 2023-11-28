// Node server for serving API endpoints, using Express.

/* Needed packages for Express & MariaDB */
const express = require('express');
const bodyParser = require('body-parser');
const pool = require('../backend/helpers/DbConfig');
const dotenv = require("dotenv");

/* APIs routes */
const activos = require('./routes/activos');
const proveedores = require('./routes/proveedores');

const tipos = require('./routes/tipos');
const responsables = require('./routes/responsables');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

/* Setting APIs routes in server */
app.use('/backend/activos', activos)
app.use('/backend/proveedores', proveedores)

app.use('/backend/tipos', tipos)
app.use('/backend/responsables', responsables)

// Sets JSON as communication language
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.listen(PORT, ()=> console.log(`Server running on port ${PORT}...`));
