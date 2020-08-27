import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA2NjqYeqnC20FKKqjMsGxj1TRTpW1f_gY",
  authDomain: "rizzleassignment.firebaseapp.com",
  databaseURL: "https://rizzleassignment.firebaseio.com",
  projectId: "rizzleassignment",
  storageBucket: "rizzleassignment.appspot.com",
  messagingSenderId: "141770829616",
  appId: "1:141770829616:web:565f491ca96c85e911a2f5",
  measurementId: "G-NG487629RT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
