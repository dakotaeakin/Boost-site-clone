import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { db } from "../firebase/initFirebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { createContext } from "react";

//Need to add imange reformat function

/**Returns an array of all users. Each user's data is a dictionary*/
export async function getAllUserData() {
  let users = null;
  const storage = getStorage();
  const userData = await getDocs(collection(db, "Users"));
  users = userData.docs.map((doc) => ({ ...doc.data() })); // Get user data from firestore

  for (let i = 0; i < users.length; i++) {
    //Loop through user data and get image url
    var imageRef = ref(storage, `profilePhotos/${users[i].Pic}`);
    var imageUrl = await getDownloadURL(imageRef);

    users[i].picUrl = imageUrl; //Add image url to dict
    //Add call to image reformat once availible
  }
  return users;
}
export const UserContext = createContext({ user: null, username: null });
