// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a444e.firebaseapp.com",
  projectId: "mern-estate-a444e",
  storageBucket: "mern-estate-a444e.appspot.com",
  messagingSenderId: "2816596471",
  appId: "1:2816596471:web:1478286088e6e6d3e976f2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);