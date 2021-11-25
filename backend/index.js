const { getPaciente } = require('./src/db/crud.js');
//const insertPaciente = require('./src/db/crud.js');
//insertPaciente();
//getPaciente();

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.get('/get-pacientes', function (req, res) {

    getPaciente(function(arrayPacientes){
        res.json(arrayPacientes);
    })
})

app.listen(port, () => {
    console.log("running on port " + port);
})