//creamos objeto
const dbP = require('./src/db/crudPacientes.js');

const express = require('express');
const db = require("./src/db/firebase.js");
const app = express();
const port = 3000;

app.use(express.json());
//API'S 
//ruta para consultar todos los pacientes
app.get('/pacientes', function (req, res) {
    dbP.getAllPacientes(function(arrayPacientes){
        res.json(arrayPacientes);
    })
})

//ruta para consultar 1 paciente específico
app.get('/pacientes/:id', function (req, res) {
    const uid = req.params.id; 
    dbP.getPaciente(uid, function(refDoc){
        res.json(refDoc);
    })   
})

//ruta para Insertar paciente en base de datos
app.post('/pacientes', function(req, res){
    const paciente = req.body;
    dbP.insertPaciente(paciente, function(status){
        res.json(status);
    })
})

//ruta Actualizar totalmente 1 paciente
app.put('/pacientes/:id', function(req, res){
    const uid = req.params.id;
    const paciente = req.body;
    dbP.updatePacienteTotally(uid, paciente, function(status){
        res.json(status);
    })
})

//Actualizar parcially paciente
app.patch('/pacientes/:id', function(req, res){
    const uid = req.params.id;
    const paciente = req.body;
    dbP.updatePacientePartially(uid, paciente, function(status){
        res.json(status);
    })
})

//Eliminar 1 paciente 
app.delete('/pacientes/:id', function(req, res){
    const uid = req.params.id;
    dbP.deletePaciente(uid, function(status){
        res.json(status);
    })
})



app.listen(port, () => {
    console.log("running on port " + port);
})