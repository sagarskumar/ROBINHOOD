import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCBM4M1HXnz-pFNrv22ByjCjmDSTA0v11k",
    authDomain: "robinhood-e0acc.firebaseapp.com",
    databaseURL: "https://robinhood-18491.firebaseio.com",
    projectId: "robinhood-e0acc",
    storageBucket: "robinhood-e0acc.appspot.com",
    messagingSenderId: "1069882289107",
    appId: "1:1069882289107:web:38b7e80ece43bf174e9d26",
    measurementId: "G-EFJRF2GST1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };

