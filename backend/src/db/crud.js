const db = require('./firebase.js');

function getEspecialidad() {
   db.collection("Especialidad").get().then((docs) =>{
        docs.forEach((especialidad) => {
            console.log(especialidad.data());
        })
    })
   
    /*db.collection("").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    });
   */ 
}

module.exports = getEspecialidad;