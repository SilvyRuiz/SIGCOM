const db = require('./firebase.js');

function getPaciente(callback) {
    return db.collection("Pacientes").get().then((docs) => {
        var arrayPacientes = [] 
        docs.forEach((paciente) => {
             arrayPacientes.push(paciente.data());
         })

         callback(arrayPacientes);
     })
 }

 module.exports = {getPaciente} 

/*function getPaciente() {
   db.collection("Pacientes").get().then((docs) =>{
        docs.forEach((paciente) => {
            console.log(paciente.data());
        })
    })
}
*/
/*function insertPaciente(){
    db.collection("Pacientes").add({
        apellidos: "Fuentes Ramirez",
        identificacion: "2222222222",
        direccion: "Calle 70 # 66-34",
        nombres:  "Yadelis Sofia",
        telefono: "3104444444",
        eps: "Sura",
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}
*/

//module.exports = insertPaciente;