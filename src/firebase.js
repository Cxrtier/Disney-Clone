import { initializeApp } from "firebase/app"
import { GoogleAuthProvider, getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import firebase from "firebase/compat/app"
import { getStorage } from "firebase/storage"
import "firebase/compat/auth";

import "firebase/compat/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCP7y8BIpSq_mgJC7-Ja3Adtf9E5IK4CLo",
    authDomain: "disneyplus-clone-a5fe4.firebaseapp.com",
    projectId: "disneyplus-clone-a5fe4",
    storageBucket: "disneyplus-clone-a5fe4.appspot.com",
    messagingSenderId: "456976478793",
    appId: "1:456976478793:web:cbc7c7283d04173b88c598",
    measurementId: "G-7W5LBZ9K3Q"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const firestore = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const db = firebase.firestore()

 
export {auth,db,storage,provider};