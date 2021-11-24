const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./sigcom-4275f-7e19b1b56e6d.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

//module.exports = db;

/*const admin = require('firebase-admin');
const serviceAccount = require('./sigcom-4275f-c7e8fa3b3ad3.json');
initializeApp({
  credential: admin.credential.cert(serviceAccount) 
});
const db = admin.firestore();
*/
///////////////////////////////////////////////////////////////////////////

db.collection("Especialidad").add({
    codigo: "1236",
    descripcion: "OdontologÍa",
    numMedicos: 1
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});

