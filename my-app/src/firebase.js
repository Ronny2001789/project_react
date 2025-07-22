// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyj2cbDdeCI9R2WbTX9yBwg6lweksKAzg",
  authDomain: "projectofreact-aa671.firebaseapp.com",
  databaseURL: "https://projectofreact-aa671-default-rtdb.firebaseio.com",
  projectId: "projectofreact-aa671",
  storageBucket: "projectofreact-aa671.firebasestorage.app",
  messagingSenderId: "897757674304",
  appId: "1:897757674304:web:468aafc1c1d2269d4698a5",
  measurementId: "G-7MGBC16EZR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
