import Image from 'next/image';
import Link from 'next/link';
import { getCookie } from '@/libs/cookies';
import axios from 'axios';
import { useState, useEffect } from 'react';

type Order = {
  id: string;
};

export default function Orders() {
  const [orders, setOrders] = useState([]); 

  useEffect(() => {
    fetchOrders().then((data) => setOrders(data));
  }, []);

  const fetchOrders = async () => {
    const token = getCookie('token');
    const userId = getCookie('userId');
    try {
      const response = await axios.get(
        `https://w17-wareg.onrender.com/orders/user/${userId}`,
        {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        },
      );
      return response.data;
    } catch (error) {
      console.error(error);

    }
  };

  return orders.map((order: Order) => (
    <div
      className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto"
      key={order.id}
    >
      <div className="flex justify-start item-start space-y-2 flex-col">
        <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
          Order #{order.id}
        </h1>
        <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">
          21st Mart 2021 at 10:34 PM
        </p>
      </div>
      <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
            <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
              Customer’s Cart
            </p>
            <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
              {/* <div className="pb-4 md:pb-8 w-full md:w-40">
                <Image
                  className="w-full hidden md:block"
                  src="https://i.ibb.co/84qQR4p/Rectangle-10.png"
                  alt="dress"
                />
                <Image
                  className="w-full md:hidden"
                  src="https://i.ibb.co/L039qbN/Rectangle-10.png"
                  alt="dress"
                />
              </div> */}
              <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                <div className="w-full flex flex-col justify-start items-start space-y-8">
                  <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                    Premium Quaility Dress
                  </h3>
                </div>
                <div className="flex justify-between space-x-8 items-start w-full">
                  <p className="text-base dark:text-white xl:text-lg leading-6">
                    $36.00{' '}
                  </p>
                  <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
                    01
                  </p>
                  <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                    $36.00
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
              <div className="w-full md:w-40">
                {/* <Image
                  className="w-full hidden md:block"
                  src="https://i.ibb.co/s6snNx0/Rectangle-17.png"
                  alt="dress"
                />
                <Image
                  className="w-full md:hidden"
                  src="https://i.ibb.co/BwYWJbJ/Rectangle-10.png"
                  alt="dress"
                /> */}
              </div>
              <div className="flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
                <div className="w-full flex flex-col justify-start items-start space-y-8">
                  <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                    High Quaility Italic Dress
                  </h3>
                </div>
                <div className="flex justify-between space-x-8 items-start w-full">
                  <p className="text-base dark:text-white xl:text-lg leading-6">
                    $20.00{' '}
                  </p>
                  <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
                    01
                  </p>
                  <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                    $20.00
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-col md:flex-row items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
            <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
              <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
                Summary
              </h3>
              <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                <div className="flex justify-between w-full">
                  <p className="text-base dark:text-white leading-4 text-gray-800">
                    Subtotal
                  </p>
                  <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                    $56.00
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">
                  Total
                </p>
                <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
                  $36.00
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
          <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
            Customer
          </h3>
          <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
            <div className="flex flex-col justify-start items-start flex-shrink-0">
              <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                <div className="flex justify-start items-start flex-col space-y-2">
                  <p className="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">
                    David Kent
                  </p>
                </div>
              </div>

              <div className="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 7L12 13L21 7"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="cursor-pointer text-sm leading-5 ">
                  david89@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
}
