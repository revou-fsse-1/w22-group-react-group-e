import React from 'react';

const AddToCartPage = () => {
  const orderItems = [
    {
      id: '1',
      menuId: 1,
      orderId: '123',
      menu: {
        id: 1,
        name: 'Menu 1',
        price: 10000,
        menuImages: {
          img1: 'img1',
        },
      },
      quantity: 2,
    },
    {
      id: '2',
      menuId: 2,
      orderId: '123',
      menu: {
        id: 2,
        name: 'Menu 2',
        price: 15000,
        menuImages: {
          img1: 'img1',
        },
      },
      quantity: 1,
    },
  ];

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    orderItems.forEach((item) => {
      totalPrice += item.menu.price * item.quantity;
    });
    return totalPrice;
  };

  return (
    <div className="max-w-5xl p-8 mx-auto">
     <div className="grid items-center grid-cols-2 px-4 pt-4 border-b border-gray-400">
  <h1 className="mb-2 text-3xl font-bold">Your Cart</h1>
  <div className="flex justify-end">
    <button className="flex items-center justify-center w-8 h-8 mb-2 text-white bg-red-500 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 011.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </div>
</div>
<div className="w-full h-[190px] relative">
    <div className="w-full h-[0px] left-0 top-[190px] absolute border border-zinc-400"></div>
    <div className="left-[699px] top-[98px] absolute text-slate-900 text-lg font-semibold capitalize">Rp. 1000</div>
    <div className="w-6 h-6 left-[725px] top-[37px] absolute opacity-60"></div>
    <div className="w-[135px] h-[30px] px-[7px] left-[186px] top-[98px] absolute border border-neutral-300 justify-center items-center gap-[18px] inline-flex">
        <div className="relative w-6 h-6"></div>
        <div><span className="text-xl font-medium capitalize text-slate-900">1 </span><span className="text-sm font-normal capitalize text-zinc-400">pcs</span></div>
        <div className="relative w-6 h-6"></div>
    </div>
    <div className="left-[186px] top-[32px] absolute text-slate-900 text-[15px] font-medium capitalize">Tumis Kangkung</div>
    <div className="w-[156px] h-40 left-0 top-0 absolute bg-stone-300"></div>
</div>
      <div className="space-y-4">
        {orderItems.map((item) => (
          <div key={item.id} className="p-4 bg-white rounded-lg">
            <p className="text-xl font-semibold">{item.menu.name}</p>
            <p className="text-gray-600">Price: {item.menu.price}</p>
            <p className="text-gray-600">Quantity: {item.quantity}</p>
          </div>
        ))}
        <hr className="my-4" />
        <h3 className="text-2xl font-semibold">
          Total Price: {calculateTotalPrice()}
        </h3>
      </div>
    </div>
  );
};

export default AddToCartPage;
