import React, { createContext, useState } from 'react';
import axios from 'axios';
import { getCookie } from '@/libs/cookies';

interface Order {
  id: number;
  name: string;
  price: number;
  menuImages: {
    img1: string;
  };
}

interface CartContextProps {
  cartItems: number;
  cartProducts: Order[];
  addToCart: () => void;
  addToCartServer: (product: Order) => void; 
}

export const CartContext = createContext<CartContextProps>({
  cartItems: 0,
  cartProducts: [],
  addToCart: () => {},
  addToCartServer: () => {}, 
});

export const CartProvider: React.FC = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [cartItems, setCartItems] = useState(0);
  const [cartProducts, setCartProducts] = useState<Order[]>([]);

  const addToCart = () => {
    setCartItems((prevCount) => prevCount + 1);
  };

  const addToCartServer = async (product: Order) => {
    // Add this function
    const token = getCookie('token');
    try {
      await axios.post(
        'https://w17-wareg.onrender.com/orders',
        {
          orderItems: [
            {
              menuId: product.id,
              quantity: 1,
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        },
      );

      addToCart();
      setCartProducts((prevProducts) => [...prevProducts, product]);
      alert('Item added to cart!');
    } catch (error) {
      console.error(error);
      alert('Failed to add item to cart.');
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, cartProducts, addToCart, addToCartServer }}
    >
      {children}
    </CartContext.Provider>
  );
};
