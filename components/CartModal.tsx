import React, { useContext, useState } from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import { GoTrash } from 'react-icons/go';
import Image from 'next/image';
import { CartContext } from '../context/CartContext';

const CartModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    cartProducts,
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    checkout,
  } = useContext(CartContext);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const total = cartProducts.reduce(
    (sum, { product, quantity }) => sum + product.price * quantity,
    0,
  );

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

            {cartProducts.map(({ product, quantity }) => (
              <div key={product.id}>
                {/* <Image
                  className="p-2"
                  width={156}
                  height={160}
                  src={product.menuImages?.img1 ?? ''}
                  alt={product.name}
                /> */}

                <div className="p-4">
                  <p>{product.name}</p>
                  <div className="flex flex-row items-center gap-12">
                    <div className="flex flex-row items-center">
                      <button
                        className="bg-gray-200 px-2 rounded-lg text-emerald-800"
                        onClick={() => decreaseQuantity(product.id)}
                      >
                        -
                      </button>
                      <span className="py-4 px-3 rounded-lg">{quantity}</span>
                      <button
                        className="bg-gray-200 px-2 rounded-lg text-emerald-800"
                        onClick={() => increaseQuantity(product.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div>
                    <button onClick={() => removeFromCart(product.id)}>
                      <GoTrash className="text-red-600" />
                    </button>
                  </div>
                  <p>Rp. {product.price}</p>
                </div>
              </div>
            ))}

            <div className="p-3 flex justify-between">
              <p>Total</p>
              <p>Rp. {total}</p>
            </div>

            <button
              className="bg-emerald-600  w-full text-white font-bold py-2 px-4 rounded mt-4"
              onClick={checkout}
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
