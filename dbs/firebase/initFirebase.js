import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { DocumentSnapshot, getDocs, getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYXA9DGzIXz6OTYWIMJ-IYo2rfRtYl7sY",
  authDomain: "best-mobile-54ac7.firebaseapp.com",
  projectId: "best-mobile-54ac7",
  storageBucket: "best-mobile-54ac7.appspot.com",
  messagingSenderId: "533292531665",
  appId: "1:533292531665:web:f3239ca9eeec81e6196af0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//cloud firestore database
const db = getFirestore(app);
//storage
const storage = getStorage();
const storageRef = ref(storage);

export { db };
export { storageRef };

export const signIn = signInWithEmailAndPassword;
export const createUser = createUserWithEmailAndPassword;
export const auth = getAuth(app);
