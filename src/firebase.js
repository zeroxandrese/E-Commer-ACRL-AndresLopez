import firebase from "firebase/app";
import '@firebase/firestore';

  var firebaseConfig = {
    apiKey: "AIzaSyAdH8RCf3m0UA2W-SJPMzdxLzUfczn-hlc",
    authDomain: "e-commerce-acrl.firebaseapp.com",
    projectId: "e-commerce-acrl",
    storageBucket: "e-commerce-acrl.appspot.com",
    messagingSenderId: "385293137274",
    appId: "1:385293137274:web:edacf1d92b7684b5e712c3"
  };
  
  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

 export const itemsCollection = firebase.firestore(app).collection("productos");

 export const itemsCollection2 = firebase.firestore(app).collection("pedidos");

 export const itemsCollection3 = firebase.firestore(app).collection("contactanos");