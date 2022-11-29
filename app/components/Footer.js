import React, { useContext, useEffect, useState } from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./fontawesome";
import Link from "next/link";
import { auth, googleAuthProvider } from "../lib/firebase";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import { UserContext } from "../lib/context";

var fb = false;

const Footer = () => {
  const { user, username } = useContext(UserContext);
  const router = useRouter();

  return (
    <>
      <div className="bg-[#f1f1f1] shadow-inner bottom-0 h-32 min-w-full z-10">
        <div className="h-32 flex items-center max-w-7xl justify-center lg:justify-between mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex flex-col text-sm font-medium text-gray-300">
            © Best Mobile
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
