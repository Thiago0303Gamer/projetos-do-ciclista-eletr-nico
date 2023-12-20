import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDkbOV52wuQFfLCSTqP6Hr9As0AZ9B7QsU",
  authDomain: "ciclista-eletronico-80f09.firebaseapp.com",
  projectId: "ciclista-eletronico-80f09",
  storageBucket: "ciclista-eletronico-80f09.appspot.com",
  messagingSenderId: "834094345781",
  appId: "1:834094345781:web:facce9636390d4260d4b7c"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
