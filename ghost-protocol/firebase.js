// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAigEM_bdif8wFHNmRolszG0Tm33yspD0w",
    authDomain: "ghostchat-app-01.firebaseapp.com",
    projectId: "ghostchat-app-01",
    storageBucket: "ghostchat-app-01.firebasestorage.app",
    messagingSenderId: "701393263235",
    appId: "1:701393263235:web:57cffa7e740d85d342d9b6",
    measurementId: "G-WJ0DJR065Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);