import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <div>
      <div className="mx-auto h-1/2">
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-white bg-cover min-w-screen">
          <div className="flex flex-col items-center justify-center p-10 mx-auto lg:flex-row lg:max-w-7xl lg:p-0 ">
            <div className="relative px-5 rounded-lg md:w-2/3 lg:w-1/2 group xl:px-0">
              <div className="absolute top-0 left-0 w-11/12 -mt-20 opacity-50"></div>
              <div className="relative overflow-hidden group">
                <div className="absolute flex items-center justify-center w-full h-full"></div>
                <Image
                  src="https://res.cloudinary.com/djudfrj8s/image/upload/v1689410662/wareg-assets/Replace_Image_czohdt.png"
                  className="z-10 object-cover w-full h-full"
                  alt=""
                  width={2850}
                  height={1603}
                  priority
                />
              </div>
            </div>

            <div className="container relative z-20 flex flex-col w-full px-5 pb-1 pr-12 mb-20 text-2xl lg:mr-10 lg:w-1/2 sm:px-0 md:px-10 sm:items-center lg:items-start lg:mb-0 ">
              <h2 className="text-lg font-poppins text-emerald-600 ">
                Tentang Kami
              </h2>
              <h1
                style={{ lineHeight: '1.5' }}
                className="relative z-20 text-5xl font-semibold text-bg-emerald-600 xl:text-6xl sm:text-center lg:text-left font-poppins text-dark-green "
              >
                Antar Makanan Ke Rumahmu
              </h1>

              <p
                style={{ lineHeight: '1.6' }}
                className="relative z-20 block mt-6 mb-4 text-base text-gray-500 xl:text-xl sm:text-center lg:text-left "
              >
                Wareg adalah sebuah restoran yang menyajikan masakan rumahan
                dengan harga terjangkau. Kami bertekad untuk memberikan
                pengalaman makan yang luar biasa bagi setiap pelanggan kami.
              </p>
              <div className="relative flex mt-4">
                <Link
                  href="#_"
                  className="flex items-center self-start justify-center px-5 py-3 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out border border-transparent rounded-full shadow bg-emerald-600 hover:bg-emerald-500 focus:outline-none focus:shadow-outline-purple md:py-4 md:text-lg xl:text-xl md:px-10 text-white-500"
                >
                  Selengkapnya
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="8"
                    viewBox="0 0 33 8"
                    fill="none"
                    className="ml-2"
                  >
                    <path
                      d="M32.3536 4.35306C32.5488 4.1578 32.5488 3.84122 32.3536 3.64596L29.1716 0.463975C28.9763 0.268713 28.6597 0.268713 28.4645 0.463975C28.2692 0.659238 28.2692 0.97582 28.4645 1.17108L31.2929 3.99951L28.4645 6.82794C28.2692 7.0232 28.2692 7.33978 28.4645 7.53504C28.6597 7.73031 28.9763 7.73031 29.1716 7.53504L32.3536 4.35306ZM4.37114e-08 4.49951L32 4.49951L32 3.49951L-4.37114e-08 3.49951L4.37114e-08 4.49951Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
