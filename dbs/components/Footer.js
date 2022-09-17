import React, { useContext, useEffect, useState } from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./fontawesome";
import Link from "next/link";
import { auth, googleAuthProvider } from "../firebase/initFirebase";
import { signInWithPopup } from "firebase/auth";
import { UserContext } from "../lib/firebaseLib";
import { useRouter } from "next/router";

var fb = false;

const Footer = () => {
  const { user, username } = useContext(UserContext);
  const router = useRouter();

  return (
    <>
      <div className="bg-[#f5f5f6]  bottom-0 h-32 min-w-full">
        <div className="h-32 flex items-center max-w-7xl justify-center lg:justify-between mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex flex-col text-sm font-medium text-gray-300">
            © Best Mobile
          </div>
          <div className={fb ? "" : "hidden"}>
            <FontAwesomeIcon
              className="fill-current text-gray-300"
              icon={faFacebook}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
