//import Footer from '@/components/Footer';
//import Header from '@/components/Header';
import React from 'react';

export default function Contact() {
  return (
    <div>
      <div className=" bg-[#EEF6F4]">
        <h1 className="p-5 text-3xl font-bold">Hubungi kami</h1>
      </div>

      <div className="flex justify-center max-w-full m-5 mx-auto">
        <div>
          <img
            className="object-fit: cover"
            src="contact.jpg"
            width={552.15}
            height={824.22}
            alt=""
          />
        </div>

        <div className="flex-col px-8">
          <h1 className="block mb-2 text-2xl font-bold ">Contact</h1>
          <p>Hallo@wareg.com</p>
          <p>Pesan Dalam Jumlah Banyak? Isi disini</p>
          <p>Kami Akan Segera Menghubungi anda</p>
          <div>
            <form className="mt-8" action="">
              <label htmlFor="name" className="block mb-3 text-sm">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Jhon doe"
                required
                className="mb-5 block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />

              <label htmlFor="email" className="block mb-3 text-sm">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="jhondoe@example.com"
                required
                className="mb-5 block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />

              <label htmlFor="phoneNumber" className="block mb-3 text-sm">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                placeholder="081234567890"
                required
                className="mb-5 block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />

              <label htmlFor="message" className="block mb-3 text-sm">
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                name="message"
                className="mb-5 block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your message..."
              ></textarea>
            </form>
            <div className="text-right col card-header">
              <button className="middle none center rounded-lg bg-emerald-600 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Kirim
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
