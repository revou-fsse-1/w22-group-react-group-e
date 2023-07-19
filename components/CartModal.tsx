import Link from 'next/link';
import React, { useState } from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import { GoTrash } from 'react-icons/go';

interface Order {
  id: number;
  name: string;
  price: number;
  menuImages: {
    img1: string;
  };
}

const CartModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [count, setCount] = useState(0);
  const [order, setOrder] = useState<Order>();

  const openModal = () => {
    getOrder();
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const addCountHandler = () => {
    setCount(count + 1);
  };
  const removeCountHandler = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  const getOrder = async () => {
    try {
      const response = await fetch(
        `https://w17-wareg.onrender.com/orders/7145d802-b729-4459-b863-620765d06320`,

        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={openModal}>
        <HiShoppingCart size={30} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-[500px] p-4 rounded shadow">
            <div className="col text-right">
              <button onClick={closeModal} className="">
                X
              </button>
            </div>
            <p className="text-lg font-bold mb-2">Your Cart</p>
            <div>
              <hr />
            </div>

            <div className="flex justify-between p-5">
              <img
                className="p-2"
                width={156}
                height={160}
                src="https://awsimages.detik.net.id/community/media/visual/2021/04/22/5-makanan-enak-dari-indonesia-dan-malaysia-yang-terkenal-enak-5.jpeg?w=600&q=90"
                alt=""
              />
              <div className="p-4">
                <p>{order?.name}</p>

                <div className="flex flex-row items-center gap-12">
                  <div className="flex flex-row items-center">
                    <button
                      className="bg-gray-200 px-2 rounded-lg text-emerald-800 "
                      onClick={removeCountHandler}
                    >
                      -
                    </button>
                    <span className="py-4 px-3 rounded-lg"> {count}</span>

                    <button
                      className="bg-gray-200 px-2  rounded-lg text-emerald-800"
                      onClick={addCountHandler}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <button>
                  <GoTrash className="text-red-600" />
                </button>

                <p>Rp. 2000</p>
              </div>
            </div>
            <hr />

            <div className="p-3 flex justify-between">
              <p>Total</p>
              <p>Rp. 2000</p>
            </div>

            <button
              className="bg-emerald-600  w-full text-white font-bold py-2 px-4 rounded mt-4"
              onClick={closeModal}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
