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
      <div className="flex flex-col justify-between h-full bg-[#f1f1f1]">
        <div className="max-w-7xl pt-8 h-full mx-auto px-2 sm:px-6 lg:px-8 flex flex-col items-center md:items-start md:flex-row md:justify-between">
          Coming soon!
        </div>
      </div>
    </>
  );
};

export default Index;
