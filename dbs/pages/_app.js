import { Router, useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { UserContext } from "../lib/firebaseLib";
import { useUserData } from "../lib/hooks";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const userData = useUserData();
  const router = useRouter();

  // useEffect(() => {
  //   router.push("/admin");
  // }, [userData.user]);

  return (
    <UserContext.Provider value={userData}>
      <div className="flex flex-col justify-start min-h-screen">
        <Navbar />
        <div className="flex-grow bg-[#fff]">
          <Component {...pageProps} />
        </div>

        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default MyApp;
