import Link from 'next/link';
import React, { useContext, useState } from 'react'; 
import { HiShoppingCart } from 'react-icons/hi';
import { GoTrash } from 'react-icons/go';
import axios from 'axios';
import Image from 'next/image';
import { CartContext } from '../context/CartContext'; 



const CartModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, cartProducts } = useContext(CartContext); 

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };


  

  const total = cartProducts.reduce((sum, product) => sum + product.price, 0);

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

      
            {cartProducts.map((product) => (
              <div key={product.id}>{}</div>
            ))}

            <div className="p-3 flex justify-between">
              <p>Total</p>
              <p>Rp. {total}</p> {}
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
