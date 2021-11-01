// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFWhmLYN4UaqfETo-E0M7oJM9NMDSJqEk",
  authDomain: "tinder-2-1a70d.firebaseapp.com",
  projectId: "tinder-2-1a70d",
  storageBucket: "tinder-2-1a70d.appspot.com",
  messagingSenderId: "463366353489",
  appId: "1:463366353489:web:b4745e951074b2af113e70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { auth };
