import firebase from "firebase/app";
import firestore from "firebase/firestore";

var config = {
  apiKey: "AIzaSyBVR3G2yJroO8JkcTZKUa0bzKJHxntPAa8",
  authDomain: "vue-chat-b2608.firebaseapp.com",
  databaseURL: "https://vue-chat-b2608.firebaseio.com",
  projectId: "vue-chat-b2608",
  storageBucket: "vue-chat-b2608.appspot.com",
  messagingSenderId: "1034098598935",
  appId: "1:1034098598935:web:0c7bd1302e80d6bd58e852",
  measurementId: "G-J400GY5FRV"
};

 const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true});

  export default firebaseApp.firestore();