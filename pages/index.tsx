import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Testimonies from '../components/Landingpage/Testimonies';
import AboutUs from '@/components/Landingpage/AboutUs';
import Landingpage from '@/components/Landingpage/Landingpage';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wareg</title>
        <meta name="description" content="Wareg." />
      </Head>
      <Landingpage />
      <AboutUs />
      <Testimonies />
    </>
  );
};

export default Index;
