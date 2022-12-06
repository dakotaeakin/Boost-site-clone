import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../lib/context";
import Dashboard from "./dashboard";

export async function getStaticProps() {
  const billData = {
    dueDate: "2022-12-22",
    amount: "25.00",
  };
  return {
    props: {
      test: billData,
    },
  };
}

const Index = ({ test }) => {
  console.log(test);
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
