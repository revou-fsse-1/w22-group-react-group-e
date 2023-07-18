import Image from 'next/image';
import Link from 'next/link';

export default function Mock() {
  return (
    <div>
      <div className="h-auto mx-auto">
        <div className="relative flex flex-col items-center justify-center min-h-1/2 bg-white bg-cover min-w-screen">
          <div className="flex flex-col items-center justify-center p-10 mx-auto lg:flex-row lg:max-w-7xl lg:p-0 ">
            <div className="relative px-5 rounded-lg md:w-1/3 lg:w-1/4 group xl:px-0">
              <div className="absolute top-0 left-0 w-11/12 -mt-20 opacity-50"></div>
              <div className="relative overflow-hidden group">
                <Image
                  src="https://res.cloudinary.com/djudfrj8s/image/upload/v1689568161/wareg-assets/Screenshot_2023-07-17_122232_iphone13midnight_portrait_xfm6e6.png"
                  className="z-10 object-cover w-full h-full"
                  alt=""
                  width={725}
                  height={402}
                />
              </div>
            </div>

            <div className="container relative z-20 flex flex-col w-full px-5 pb-1 pr-12 mb-20 text-2xl lg:mr-10  lg:w-1/2 sm:px-0 md:px-10 sm:items-center lg:items-start lg:mb-0 ">
              <h1
                style={{ lineHeight: '1.5' }}
                className="relative z-20 text-5xl font-semibold text-bg-emerald-600 xl:text-6xl sm:text-center lg:text-left font-poppins text-dark-green "
              >
                Download Wareg Sekarang
              </h1>

              <p
                style={{ lineHeight: '1.6' }}
                className="relative z-20 block mt-6 text-base text-gray-500 xl:text-xl sm:text-center lg:text-left mb-4 "
              >
                Unduh aplikasi Wareg sekarang, pesan makanan dengan mudah dan
                cepat!
              </p>
              <div className="relative flex mt-4">
                <Link
                  href="#_"
                  className="flex items-center self-start justify-center px-5 py-3 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-emerald-600 border border-transparent rounded-full shadow hover:bg-emerald-500 focus:outline-none focus:shadow-outline-purple md:py-4 md:text-lg xl:text-xl md:px-10 text-white-500"
                >
                  Download
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
