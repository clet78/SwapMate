import firebase, { getApp, getApps, initializeApp } from "firebase/app";
import {
    getFirestore
} from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCR6yHZCJUxp-w5tiMJafuwZo8SKDr4eQs",
    authDomain: "swap-mate.firebaseapp.com",
    projectId: "swap-mate",
    storageBucket: "swap-mate.appspot.com",
    messagingSenderId: "829133114643",
    appId: "1:829133114643:web:2bce05a0d6f2da7abbdee6",
    measurementId: "G-C42JWC0XWE"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const auth = getAuth()

export { app, db, storage, auth }

/***********Firebase 8************/
/**firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase**/