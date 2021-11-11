import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBqEHZikD1eNiklIlcO5_IL6wRP205Q-qk",
  authDomain: "instagram-clone-react-400cb.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-400cb-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-react-400cb",
  storageBucket: "instagram-clone-react-400cb.appspot.com",
  messagingSenderId: "610613189420",
  appId: "1:610613189420:web:66d1e67396fae45dbf2a89",
  measurementId: "G-K9506QPVFV"

});


const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export {db, auth, storage };


