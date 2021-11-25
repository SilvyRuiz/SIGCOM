const { getAllPacientes } = require('./src/db/crudPacientes.js');

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.get('/getAllPacientes', function (req, res) {

    getAllPacientes(function(arrayPacientes){
        res.json(arrayPacientes);
    })
})

app.listen(port, () => {
    console.log("running on port " + port);
})