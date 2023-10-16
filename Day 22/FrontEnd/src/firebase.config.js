// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5Ej4eO87s9vvdigS3QPFIeeu5LTGzC_I",
  authDomain: "essentia-425e8.firebaseapp.com",
  projectId: "essentia-425e8",
  storageBucket: "essentia-425e8.appspot.com",
  messagingSenderId: "509342281312",
  appId: "1:509342281312:web:f483d81eb11e256e9d9d05",
  measurementId: "G-Z39ET5PTRW", 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app)