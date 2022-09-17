import { FirebaseError } from "firebase/app";
import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import { db, dict, readTests, users } from "../firebase/initFirebase";
import { getAllUserData, postToJSON } from "../lib/firebaseLib";

export async function getStaticProps() {
  //Get data before page rendor
  const users = await getAllUserData();
  // console.log(users);
  return { props: { users } };
}

const about = ({ users }) => {
  return (
    <>
      <div className="flex flex-col justify-start bg-gray-600">
        <div
          className="max-w-7xl py-8 mx-auto px- sm:px-6 lg:px-8 
          flex items-center justify-center gap-8
          flex-wrap"
        >
          {users.map((user) => (
            <ProfileCard name={user.Name} bio={user.Bio} pic={user.picUrl} />
          ))}
        </div>
      </div>
    </>
  );
};

export default about;
