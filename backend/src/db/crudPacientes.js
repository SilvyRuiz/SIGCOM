const db = require('./firebase.js');

//Consultar todos los pacientes
function getAllPacientes(callback) {
    return db.collection("Pacientes").get().then((docs) => {
        var arrayPacientes = [] 
        docs.forEach((paciente) => {
             arrayPacientes.push(paciente.data());
         })

         callback(arrayPacientes);
     }).catch((error) => {
        callback('Error to get pacientas ${error}');
    });
 }


 //Consultar 1 paciente
 function getPaciente(uid, callback){
     return db.collection("Pacientes").doc(uid).get()
        .then((refDoc) => {
            callback(refDoc.data())
        })
        .catch((error) => {
            callback('Error to get pacientes ${error}');
        })
 }


//insertar  paciente
function insertPaciente(paciente, callback){
    return db.collection("Pacientes").add(paciente)
    .then((docRef) => {
        callback("Paciente ingresado con éxito");
       //callback("Success");
    })
    .catch((error) => {
        callback('Error to get pacientes ${error}');
    });
}


//Actualizar  paciente totalmente
function updatePacienteTotally(uid, paciente, callback){
    return db.collection("Pacientes").doc(uid).set(paciente)
    .then(() => {
        callback("Paciente modificado con éxito");
    }).catch((error) => {
        callback('Error to det pacientes ${error}');
    })
}

//Actualizar paciente parcialmente
function updatePacientePartially(uid, paciente, callback){
    return db.collection("Pacientes").doc(uid).update(paciente)
    .then(() => {
        callback("Paciente modificado con éxito");
    }).catch((error) => {
        callback('Error to get pacients ${error}');
    })
}

//eliminar paciente
function deletePaciente(uid, callback) {
    return db.collection("Pacientes").doc(uid).delete()
    .then(() => {
        callback("Paciente eliminado con éxito");
    }).catch((error) => {
        callback('Error to get pacients ${error}');
    })
}

//exportar métodos o funciones
module.exports = {
    getPaciente,
    getAllPacientes,
    insertPaciente,
    updatePacientePartially,
    updatePacienteTotally,
    deletePaciente
}



