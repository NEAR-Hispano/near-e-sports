// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJJUbfo0PkzMcrXE7za_-CVKYybeImqoQ",
  authDomain: "near-e-sports-tournament.firebaseapp.com",
  projectId: "near-e-sports-tournament",
  storageBucket: "near-e-sports-tournament.appspot.com",
  messagingSenderId: "777636339118",
  appId: "1:777636339118:web:7ff4fb73d0bdf70e333c3f",
  measurementId: "G-RVSW38FFKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(app);

export { db, storage }