const admin = require('firebase-admin');
const serviceAccount = require('./sigcom-4275f-c7e8fa3b3ad3.json');

initializeApp({
    Credential: admin.credential.cert(serviceAccount);

});

const db = admin.firestore();

module.exports = db;