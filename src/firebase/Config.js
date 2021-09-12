import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB_TagHAEQiQ2LitXgL_aZc1tDx8PaAXVM",
    authDomain: "react-gallery-4c360.firebaseapp.com",
    projectId: "react-gallery-4c360",
    storageBucket: "react-gallery-4c360.appspot.com",
    messagingSenderId: "265488491925",
    appId: "1:265488491925:web:de8a7b14960941bb53c29c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage  = firebase.storage()
const store = firebase.firestore()
const timeStamp = firebase.firestore.FieldValue.serverTimestamp

export { storage, store, timeStamp }