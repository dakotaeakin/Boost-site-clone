import Image from "next/image";
import React, { useContext, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import umbrella from "../public/umbrella.svg";
import { useRouter } from "next/router";
import { UserContext } from "../lib/context";

const Index = () => {
  const context = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    let unsubscribe;
    if (!context.user) {
      router.replace("/login");
    }
  }, [context]);

  return (
    <>
      <div className="flex justify-center w-full h-full bg-[#f1f1f1]">
        <div className="max-w-7xl">
          <div className="pt-8">Coming soon!</div>
        </div>
      </div>
    </>
  );
};

export default Index;
