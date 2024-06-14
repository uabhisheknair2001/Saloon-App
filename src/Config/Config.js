import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'



const firebaseConfig = {
  apiKey: "AIzaSyAwS4zRA_YYOrBONnzMTKz90Dm_IMlHFJ4",
  authDomain: "salon-3c2ae.firebaseapp.com",
  projectId: "salon-3c2ae",
  storageBucket: "salon-3c2ae.appspot.com",
  messagingSenderId: "340474917297",
  appId: "1:340474917297:web:5c8fca426c404939594d90",
  measurementId: "G-G8S25L44JS"
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}