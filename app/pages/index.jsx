import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../lib/context";
import Dashboard from "./Dashboard";

const Index = () => {
  const context = useContext(UserContext);
  const router = useRouter();

  return (
    <>
      <Dashboard />
    </>
  );
};

export default Index;

Index.requireAuth = true;
