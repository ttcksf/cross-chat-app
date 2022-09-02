import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD-I6ctfaaBVmGcG5LSdJSFP84Vw8gm1QM",
  authDomain: "cross-chat-app.firebaseapp.com",
  projectId: "cross-chat-app",
  storageBucket: "cross-chat-app.appspot.com",
  messagingSenderId: "1024484995371",
  appId: "1:1024484995371:web:bdee630a4f8bce97a6556e",
  measurementId: "G-QRT1YSE6ZJ",
});

//firestore
const db = firebaseApp.firestore();
//authentication
const auth = firebase.auth();

export { db, auth };
