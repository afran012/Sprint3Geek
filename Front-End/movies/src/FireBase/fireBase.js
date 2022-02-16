// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU283NHWxKW4QUmiS3J7AasiFaJXnUFjo",
  authDomain: "sprint3movies.firebaseapp.com",
  projectId: "sprint3movies",
  storageBucket: "sprint3movies.appspot.com",
  messagingSenderId: "504174554509",
  appId: "1:504174554509:web:9432414f018ef250f221c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

const google = new GoogleAuthProvider()

export { app , db , google }