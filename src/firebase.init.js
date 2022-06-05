// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKmvm4lUNZ7u77VHuOwwZ-oh1VNODiouQ",
    authDomain: "ars-car-parts.firebaseapp.com",
    projectId: "ars-car-parts",
    storageBucket: "ars-car-parts.appspot.com",
    messagingSenderId: "937446296971",
    appId: "1:937446296971:web:23d5e3c610c7574b52338e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;