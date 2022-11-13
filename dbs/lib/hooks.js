import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/initFirebase";
import { UserContext } from "./context";

// Custom hook to read  auth record and user profile doc
export function useUserData() {
  const [user] = useAuthState(auth);
  const [firstName, setFirstName] = useState(null);

  // console.log(user);
  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe;
    if (user) {
      const ref = doc(getFirestore(), "users", user.uid);
      unsubscribe = onSnapshot(ref, (doc) => {
        setFirstName(doc.data()?.firstName);
      });
    } else {
      setFirstName(null);
    }

    return unsubscribe;
  }, [user]);
  return { user, firstName };
}

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function useOutsideAlerter(ref) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        alert("You clicked outside of me!");
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
