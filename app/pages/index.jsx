import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../lib/context";
import Dashboard from "../components/dashboard";
import Head from "next/head";

export async function getStaticProps() {
  const data = {
    dueDate: "2022-12-22",
    amount: "25.00",
  };
  return {
    props: {
      billData: data,
    },
  };
}

const Index = ({ billData }) => {
  const context = useContext(UserContext);
  const router = useRouter();

  return (
    <>
      <Dashboard billData={billData} />
    </>
  );
};

export default Index;

Index.requireAuth = true;
