import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>wareg</title>
        <meta name="description" content="Wareg." />
      </Head>
      <div>
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-white bg-cover min-w-screen">
          <div className="flex flex-col items-center justify-center p-10 mx-auto lg:flex-row lg:max-w-7xl lg:p-0 ">
            <div className="container relative z-20 flex flex-col w-full px-5 pb-1 pr-12 mb-20 text-2xl lg:mr-10  lg:w-1/2 sm:px-0 md:px-10 sm:items-center lg:items-start lg:mb-0 ">
              <h1
                style={{ lineHeight: '1.5' }}
                className="relative z-20 text-5xl font-semibold text-bg-emerald-600 xl:text-6xl sm:text-center lg:text-left font-poppins text-dark-green "
              >
                Makanan Rumah Cepat Saji
              </h1>

              <p
                style={{ lineHeight: '1.6' }}
                className="relative z-20 block mt-6 text-base text-gray-500 xl:text-xl sm:text-center lg:text-left mb-4 "
              >
                Selamat datang di Wareg, tempat kami menyajikan masakan rumahan
                yang lezat dengan harga terjangkau dan segar. Dengan menu yang
                berubah setiap minggu, selalu ada sesuatu yang baru dan menarik
                untuk dicoba.
              </p>
              <div className="relative flex mt-4">
                <Link
                  href="#_"
                  className="flex items-center self-start justify-center px-5 py-3 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-emerald-600 border border-transparent rounded-full shadow hover:bg-emerald-500 focus:outline-none focus:shadow-outline-purple md:py-4 md:text-lg xl:text-xl md:px-10 text-white-500"
                >
                  Lihat Menu
                </Link>
              </div>
            </div>
            <div className="relative w-full px-5 rounded-lg md:w-2/3 lg:w-1/2 group xl:px-0">
              <div className="absolute top-0 left-0 w-11/12 -mt-20 opacity-50"></div>
              <div className="relative overflow-hidden group">
                <div className="absolute flex items-center justify-center w-full h-full"></div>
                <Image
                  src="https://res.cloudinary.com/djudfrj8s/image/upload/v1689347915/wareg-assets/Replace_Image_motme4.png"
                  className="z-10 object-cover w-full h-full"
                  alt=""
                  width={2850}
                  height={1603}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
