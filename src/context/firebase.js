// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFXAX-CA4UOmPD8LlTsNKGWG37ekq1DGU",
  authDomain: "cosmic-astrology.firebaseapp.com",
  projectId: "cosmic-astrology",
  storageBucket: "cosmic-astrology.appspot.com",
  messagingSenderId: "28563493766",
  appId: "1:28563493766:web:26450316eef7114dbc9207",
  measurementId: "G-1SSQ5HYYPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
export default app