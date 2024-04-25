// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ14XF3yFTlFpZtMBbfG0yZsGxT8wDtWc",
  authDomain: "exploreasiaparadise.firebaseapp.com",
  projectId: "exploreasiaparadise",
  storageBucket: "exploreasiaparadise.appspot.com",
  messagingSenderId: "421594993301",
  appId: "1:421594993301:web:e51a40fd3b1d0abdd7819c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
