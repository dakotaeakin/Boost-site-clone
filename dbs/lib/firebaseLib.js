import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { db } from "../firebase/initFirebase";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getDocs, getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import { collection, doc, setDoc } from "firebase/firestore";
import {
  getAuth,
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
export const db = getFirestore(app);
//storage
const storage = getStorage();
export const storageRef = ref(storage);

export const signIn = signInWithEmailAndPassword;
export const createUser = createUserWithEmailAndPassword;
export const auth = getAuth(app);

/**Returns an array of all users. Each user's data is a dictionary*/
export async function getAllUserData() {
  let users = null;
  const userData = await getDocs(collection(db, "Users"));
  users = userData.docs.map((doc) => ({ ...doc.data() })); // Get user data from firestore
  /*
  Will change for loop so that if a image is added or changed to a user profile the download url 
  will be added to userData to avoid needing to retieve it each time.
  */
  for (let i = 0; i < users.length; i++) { 
    //Loop through user data and get image url
    var imageRef = ref(storage, `profilePhotos/${users[i].Pic}`);
    var imageUrl = await getDownloadURL(imageRef);

    users[i].picUrl = imageUrl; //Add image url to dict
    //Add call to image reformat once availible
  }
  return users;
}

export async function updateUser(dict, uid) {
  await setDoc(doc(db, "users", uid), {
    firstName: dict.firstName,
    lastName: dict.lastName,
    email: dict.email,
  });
}
