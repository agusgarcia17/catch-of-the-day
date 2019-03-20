import Rebase from "re-base";
import firebase from "firebase";
require('firebase/auth');

const firebaseApp = firebase.initializeApp({ //create App
        apiKey: "AIzaSyDhZcVj3N4ye7LPJWAb95-0LNldB8P-iWI",
        authDomain: "catch-of-the-day-agus-garcia.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-agus-garcia.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database()); //create rebase binding

export {firebaseApp};

export default base;