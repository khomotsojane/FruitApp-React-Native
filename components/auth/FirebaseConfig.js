// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGWYBZXgDYEXp8Fm6BhJcac6rYuu4AysQ",
  authDomain: "fruitapp-1966f.firebaseapp.com",
  projectId: "fruitapp-1966f",
  storageBucket: "fruitapp-1966f.appspot.com",
  messagingSenderId: "688805810798",
  appId: "1:688805810798:web:c87b0034a4d29d44628c7f"
};

// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);
export const firebase_auth = getAuth(firebase_app);
export const firestore_db = getFirestore(firebase_app);