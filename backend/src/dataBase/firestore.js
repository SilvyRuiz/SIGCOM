/*const admin = require('firebase-admin');
const serviceAccount = require('./sigcom-4275f-e45fac0ec917.json');
initializeApp({
  credential: admin.credential.cert(serviceAccount) 
});
const db = admin.firestore();
*/
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./sigcom-4275f-e45fac0ec917.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();
///////////////////////////////////////////////////////////////////////////
db.collection("Especialidad").add({
    codigo: "1235",
    descripcion: "Pediatría",
    numMedicos: 1
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
