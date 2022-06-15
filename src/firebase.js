import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBDIfY5FRk_R05OwEt4IexQwbACPFh0FfI",
  authDomain: "eshop-a08bb.firebaseapp.com",
  projectId: "eshop-a08bb",
  storageBucket: "eshop-a08bb.appspot.com",
  messagingSenderId: "1040994581214",
  appId: "1:1040994581214:web:33e919ef0e21b44b59e04f",
  measurementId: "G-BTT2KWKZ8Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

