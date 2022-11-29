import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../lib/context";
import Dashboard from "./Dashboard";
import Login from "./Login/login";

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
      <Dashboard />
    </>
  );
};

export default Index;
