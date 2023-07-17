import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div>
      <div className="flex w-full bg-white">
        <footer className="w-full text-gray-700 bg-[#F7FBF9] body-font">
          <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
            <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
              <div className="flex flex-row">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46"
                    height="41"
                    viewBox="0 0 46 41"
                    fill="none"
                  >
                    <path
                      d="M20.5897 1.52081L0.906135 20.9794C-0.302045 22.1738 -0.302045 24.1102 0.906135 25.3047C2.11356 26.4976 4.07232 26.4976 5.2805 25.3047L22.7765 8.0065L40.2724 25.3047C41.4806 26.4976 43.4394 26.4976 44.6468 25.3047C45.855 24.1102 45.855 22.1738 44.6468 20.9794L24.9633 1.52081C23.7558 0.326396 21.7971 0.326396 20.5897 1.52081Z"
                      fill="#548776"
                    />
                    <path
                      d="M34.8394 25.4301C34.5034 23.9699 32.8338 23.3981 31.4678 24.0431C30.1018 24.688 29.5868 26.3259 29.6586 27.8204C29.6714 28.0757 29.6691 28.331 29.6518 28.5878C29.5755 29.7509 29.1979 30.8751 28.5561 31.8531C27.9143 32.8295 27.0293 33.6283 25.9865 34.1717C24.9436 34.7152 23.777 34.9839 22.5983 34.9541C21.4195 34.9242 20.2687 34.5942 19.2554 34C18.242 33.4043 17.4001 32.5607 16.8103 31.5515C16.2206 30.5422 15.9027 29.4015 15.8868 28.2355C15.8838 27.9787 15.8944 27.7234 15.92 27.4695C16.0703 25.9795 15.6414 24.3178 14.3109 23.6041C12.9804 22.8904 11.2837 23.3757 10.8714 24.8164C10.6773 25.4958 10.5429 26.19 10.4696 26.8917C10.4206 27.3605 10.3994 27.8338 10.4055 28.3086C10.4341 30.4003 11.005 32.4518 12.0644 34.2628C13.1231 36.0753 14.6348 37.5878 16.4539 38.6582C18.2737 39.7273 20.3405 40.317 22.4563 40.3707C24.5721 40.426 26.6676 39.9422 28.5402 38.9673C30.4137 37.9924 32.0017 36.5576 33.1547 34.8033C34.307 33.0475 34.9844 31.0289 35.1218 28.9402C35.2003 27.7577 35.1037 26.5752 34.8394 25.4301Z"
                      fill="#548776"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="px-3 text-3xl font-bold">WAREG</h1>
                </div>
              </div>

              <p className="mt-2 text-sm font-normal not-italic leading-6 text-[#005B33] ">
                Wareg adalah sebuah restoran yang menyajikan masakan rumahan
                dengan harga terjangkau. Kami selalu menyajikan menu yang segar
                dan berganti setiap minggunya
              </p>
            </div>
            <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3  text-sm font-bold tracking-widest text-[#005B33] uppercase title-font">
                  About
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    {' '}
                    <Link
                      className="text-[#005B33] cursor-pointer hover:text-gray-900"
                      href={''}
                    >
                      Feature
                    </Link>
                  </li>

                  <li className="mt-3">
                    <Link
                      className="text-[#005B33] cursor-pointer hover:text-gray-900"
                      href={''}
                    >
                      FAQ'S
                    </Link>
                  </li>

                  <li className="mt-3">
                    <Link
                      className="text-[#005B33] cursor-pointer hover:text-gray-900"
                      href={''}
                    >
                      News
                    </Link>
                  </li>

                  <li className="mt-3">
                    <Link
                      className="text-[#005B33] cursor-pointer hover:text-gray-900"
                      href={''}
                    >
                      Pricing
                    </Link>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-bold tracking-widest text-[#005B33] uppercase title-font">
                  Company
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <Link
                      className="text-[#005B33] cursor-pointer hover:text-gray-900"
                      href={''}
                    >
                      Care Values
                    </Link>
                  </li>

                  <li className="mt-3">
                    <Link
                      className="text-[#005B33] cursor-pointer hover:text-gray-900"
                      href={''}
                    >
                      Partner
                    </Link>
                  </li>

                  <li className="mt-3">
                    <Link
                      className="text-[#005B33] cursor-pointer hover:text-gray-900"
                      href={''}
                    >
                      Blog
                    </Link>
                  </li>

                  <li className="mt-3">
                    <Link
                      className="text-[#005B33] cursor-pointer hover:text-gray-900"
                      href={''}
                    >
                      Contact
                    </Link>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-bold tracking-widest  text-[#005B33] uppercase title-font">
                  Support
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <Link
                      className="text-[#005B33] cursor-pointer hover:text-gray-900"
                      href={''}
                    >
                      Support Center
                    </Link>
                  </li>

                  <li className="mt-3">
                    <Link
                      className="text-[#005B33] cursor-pointer hover:text-gray-900"
                      href={''}
                    >
                      Feedback
                    </Link>
                  </li>

                  <li className="mt-3">
                    <Link
                      className="text-[#005B33] cursor-pointer hover:text-gray-900"
                      href={''}
                    >
                      Accessibility
                    </Link>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-bold tracking-widest text-[#005B33] uppercase title-font">
                  Get in Touch
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email hare..."
                      required
                      className="mb-5 block p-2.5 w-full text-sm bg-gray-50 rounded-full border border-[#005B33] "
                    />
                  </li>
                  <li className="mt-3">
                    <button className="middle none center w-full rounded-full bg-[#FABB3D] border-white py-3 px-6 font-sans text-xs font-bold uppercase text-[#005B33] shadow-md  transition-all hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none ">
                      Contact Us
                    </button>
                  </li>
                </nav>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
