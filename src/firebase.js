import firebase from 'firebase/app';// rollup bundle issue with ESM import
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyABGd8XX7qwgUgYhq49tkQrDURvKZ1iCz0",
    authDomain: "search-pirate.firebaseapp.com",
    databaseURL: "https://search-pirate.firebaseio.com",
    projectId: "search-pirate",
    storageBucket: "search-pirate.appspot.com",
    messagingSenderId: "117720729932",
    appId: "1:117720729932:web:80d213d707ce165fba27e9",
    measurementId: "G-QDP5TM7ETR"
  };


console.log(firebase)

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
