// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  updateProfile,
  signOut
 } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDVewqG-xhKY-Jnw4RSK7cHe3gipLYoe2g",
  authDomain: "gamelist-c232a.firebaseapp.com",
  databaseURL: "https://gamelist-c232a-default-rtdb.firebaseio.com",
  projectId: "gamelist-c232a",
  storageBucket: "gamelist-c232a.appspot.com",
  messagingSenderId: "899831435049",
  appId: "1:899831435049:web:84e600787f6883c6dab138"
};

// Initialize Firebase
if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { 
  db, 
  auth, 
  firebase, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  updateProfile,
  signOut
};