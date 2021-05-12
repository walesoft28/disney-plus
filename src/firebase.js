import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCZVIxlFTm1-DEcd5LMTMVPa5IL-X7G_oI",
  authDomain: "disney-plus-8a623.firebaseapp.com",
  projectId: "disney-plus-8a623",
  storageBucket: "disney-plus-8a623.appspot.com",
  messagingSenderId: "1063306517694",
  appId: "1:1063306517694:web:a119c7ed5a586a251d92ef",
  measurementId: "G-6STBQWTWPT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
