import { NextPage } from "next";
import Head from "next/head";
import LandingPage from "../components/LandingPage";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>wareg</title>
        <meta name="description" content="Wareg." />
      </Head>
      <LandingPage />
    </>
  );
};

export default Index;
