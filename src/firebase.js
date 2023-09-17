// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsnENYNslQQeiONYnBeUlL9RIKBgxiYmM",
  authDomain: "netflix-clone-90e5d.firebaseapp.com",
  projectId: "netflix-clone-90e5d",
  storageBucket: "netflix-clone-90e5d.appspot.com",
  messagingSenderId: "836653828102",
  appId: "1:836653828102:web:7bb81e62def7d90f0adb87"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);