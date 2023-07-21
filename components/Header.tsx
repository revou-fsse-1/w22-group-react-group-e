import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import LoginModal from './LoginRegisterModal';
import { checkLogin } from '@/libs/checkLogin';
import CartModal from './CartModal';

export default function Header() {
  const [loginAuth, setLoginAuth] = useState(false);
  useEffect(() => {
    const check: boolean = checkLogin();
    setLoginAuth(check);
    return () => {};
  }, []);

  const router = useRouter();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="bg-[#EEF6F4] py-0">
      <div className="flex items-center justify-between h-24 px-5 mx-auto">
        <div className="flex flex-row mx-7">
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
        <div className="items-center hidden gap-5 font-normal md:flex font-poppins">
          <ul className="flex items-center gap-5">
            <li>
              <Link
                href="/"
                className={`transition-colors hover:border-b-2 hover:border-current hover:opacity-60 ${
                  router.pathname === '/'
                    ? 'opacity-100 font-medium'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className={`transition-colors hover:border-b-2 hover:border-current hover:opacity-60 ${
                  router.pathname === '/menu'
                    ? 'opacity-100 font-medium'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`transition-colors hover:border-b-2 hover:border-current hover:opacity-60 ${
                  router.pathname === '/contact'
                    ? 'opacity-100 font-medium'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`transition-colors hover:border-b-2 hover:border-current hover:opacity-60 ${
                  router.pathname === '/blog'
                    ? 'opacity-100 font-medium'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className={`transition-colors hover:border-b-2 hover:border-current hover:opacity-60 ${
                  router.pathname === '/about-us'
                    ? 'opacity-100 font-medium'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                About Us
              </Link>
            </li>
          </ul>
          {loginAuth ? <CartModal /> : ''}
          <LoginModal loginAuthCheck={loginAuth} />
        </div>
        {/* Hamburger menu icon for mobile and tablet */}
        <div
          className="z-40 cursor-pointer md:hidden"
          onClick={handleMenuToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="black"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 5H21V7H3V5ZM3 11H21V13H3V11ZM3 17H21V19H3V17Z"
              fill="black"
            />
          </svg>
        </div>
        {/* Slider menu */}
        <div
          className={`${
            isMenuOpen ? 'fixed' : 'hidden'
          } top-0 right-0 bottom-0 w-64 bg-white z-50 p-6 shadow-lg`}
        >
          <div className="flex justify-end">
            <button className="text-xl font-bold" onClick={handleCloseMenu}>
              &times;
            </button>
          </div>
          <div>
            <ul className="flex flex-col gap-5 mt-8">
              <li>
                <Link href="/" className="text-xl font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-xl font-medium">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-xl font-medium">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-xl font-medium">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-xl font-medium">
                  About Us
                </Link>
              </li>
            </ul>
            {loginAuth && <CartModal />}
            <LoginModal loginAuthCheck={loginAuth} />
          </div>
        </div>
      </div>
      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-50"
          onClick={handleCloseMenu}
        />
      )}
    </div>
  );
}
