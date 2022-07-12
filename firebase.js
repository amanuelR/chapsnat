// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firebase-firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAogY8IqVs108usL_BOpcP3DKzEv0yRC28",
  authDomain: "chapsnat-71a36.firebaseapp.com",
  projectId: "chapsnat-71a36",
  storageBucket: "chapsnat-71a36.appspot.com",
  messagingSenderId: "726207028965",
  appId: "1:726207028965:web:7c9fc56092b2f556c33e0c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let firestore = firebase.firestore();
export default firestore;