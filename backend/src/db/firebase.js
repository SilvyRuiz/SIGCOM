const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./sigcom-4275f-c7e8fa3b3ad3.json');

initializeApp({
  credential: cert(serviceAccount)
});
const db = getFirestore();
module.exports = db;