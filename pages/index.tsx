import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Testimonies from '../components/Landingpage/Testimonies';
import AboutUs from '@/components/Landingpage/AboutUs';
import Landingpage from '@/components/Landingpage/Landingpage';
import DownloadPage from '@/components/Landingpage/DownloadPage';
import Features from '@/components/Landingpage/Features';
import Blog from '../pages/blog/index';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wareg</title>
        <meta name="description" content="Wareg." />
      </Head>
      <div
        style={{ backgroundColor: '#FFFEFC' }}
        className="dark:bg-gray-900 font-poppins"
      >
        <Landingpage />
        <AboutUs />
        <Features />
        <Testimonies />
        <DownloadPage />
      </div>
    </>
  );
};

export default Index;
