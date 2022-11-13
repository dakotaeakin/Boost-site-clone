import Image from "next/image";
import React, { useContext, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import umbrella from "../public/umbrella.svg";
import { useRouter } from "next/router";
import { UserContext } from "../lib/context";
import DashboardSideMenu from "../components/DashboardSideMenu";
import DashboardHeader from "../components/DashboardHeader";
import DashboardDevices from "../components/DashboardDevices";
import DashboardExtras from "../components/DashboardExtras";
import DashboardFooter from "../components/DashboardFooter";

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
        <div className="max-w-7xl w-full flex justify-around">
          <div>
            <DashboardSideMenu />
          </div>
          <div className="flex flex-col space-y-8">
            <DashboardHeader />
            <div className="flex space-x-8">
              <DashboardDevices />
              <DashboardExtras />
            </div>
            <DashboardFooter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
