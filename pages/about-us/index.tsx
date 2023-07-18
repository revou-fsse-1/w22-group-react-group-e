import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <div>
      <div className="relative flex flex-col items-center justify-center min-h-max lg:py-14 bg-white bg-cover min-w-screen">
        <div className="flex flex-col items-center justify-center p-10 mx-auto lg:flex-row lg:max-w-7xl lg:p-0 ">
          <div className="container relative z-20 flex flex-col w-full px-5 pb-1 pr-12 mb-20 text-2xl lg:mr-10  lg:w-1/2 sm:px-0 md:px-10 sm:items-center lg:items-start lg:mb-0 ">
            <h1
              style={{ lineHeight: '1.5' }}
              className="relative z-20 text-5xl font-semibold text-bg-emerald-600 xl:text-4xl sm:text-center lg:text-left font-poppins text-dark-green "
            >
              Affordable Homestyle Cousine
            </h1>

            <p
              style={{ lineHeight: '1.6' }}
              className="relative font-normal z-20 block mt-6 text-base text-gray-500 xl:text-xl sm:text-center lg:text-left mb-4 "
            >
              Nikmati masakan rumahan yang enak dan terjangkau di Wareg. Pesan
              dengan mudah melalui website dan aplikasi kami.
            </p>
            <Image
              src="https://res.cloudinary.com/djudfrj8s/image/upload/v1689582137/wareg-assets/chef-2_gxqugt.png"
              className="z-10 object-cover w-full h-full"
              alt=""
              width={2850}
              height={1603}
            />
          </div>
          <div
            className="relative w-full px-5 rounded-lg md:w-1/3 lg:w-1/4 group xl:px-0"
            style={{ height: '500px' }}
          >
            <div className="absolute top-0 left-0 w-11/12 -mt-20 opacity-50"></div>
            <div className="relative h-full overflow-hidden group">
              <div className="absolute flex items-center justify-center w-full h-full"></div>
              <Image
                src="https://res.cloudinary.com/djudfrj8s/image/upload/v1689582136/wareg-assets/chef-1_kldcob.png"
                className="z-10 object-cover w-full h-full"
                alt=""
                objectFit="cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
