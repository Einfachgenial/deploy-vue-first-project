// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDTyyUAPW9RBbQoZdK20RL0j_Q7-Ezt_fY",
    authDomain: "genia-website.firebaseapp.com",
    databaseURL: "https://genia-website-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "genia-website",
    storageBucket: "genia-website.appspot.com",
    messagingSenderId: "273470065520",
    appId: "1:273470065520:web:98a06233ba378763ac9db5",
    measurementId: "G-N1PVKGQ2EG"
  };

// Initialize Firebase
const fireBase = initializeApp(firebaseConfig);
//console.log(fireBase)
export default getFirestore(fireBase);