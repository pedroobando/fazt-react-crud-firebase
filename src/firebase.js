import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDzMicl2VO275V7J78LTsoUTr-G-A_88JA",
  authDomain: "fb-crud-react-ae59b.firebaseapp.com",
  databaseURL: "https://fb-crud-react-ae59b.firebaseio.com",
  projectId: "fb-crud-react-ae59b",
  storageBucket: "fb-crud-react-ae59b.appspot.com",
  messagingSenderId: "779181709873",
  appId: "1:779181709873:web:20cd7d41a07310f681d310",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
