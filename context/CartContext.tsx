import React, { createContext, useState } from 'react';
import axios from 'axios';
import { getCookie } from '@/libs/cookies';
import router from 'next/router';

interface Order {
  id: number;
  name: string;
  price: number;
  menuImages: {
    img1: string;
  };
}

interface CartProduct {
  product: Order;
  quantity: number;
}

interface CartContextProps {
  cartItems: number;
  cartProducts: CartProduct[];
  addToCart: (product: Order) => void;
  removeFromCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  addToCartServer: (product: Order) => void;
}

export const CartContext = createContext<CartContextProps>({
  cartItems: 0,
  cartProducts: [],
  addToCart: () => {},
  removeFromCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  addToCartServer: () => {},
});

export const CartProvider: React.FC = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [cartItems, setCartItems] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  const addToCart = (product: Order) => {
    setCartItems((prevCount) => prevCount + 1);
    setCartProducts((prevProducts) => [
      ...prevProducts,
      { product, quantity: 1 },
    ]);
  };

  const increaseQuantity = (productId: number) => {
    setCartProducts((prevProducts) =>
      prevProducts.map((cartProduct) =>
        cartProduct.product.id === productId
          ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
          : cartProduct,
      ),
    );
  };

  const decreaseQuantity = (productId: number) => {
    setCartProducts((prevProducts) =>
      prevProducts.map((cartProduct) =>
        cartProduct.product.id === productId && cartProduct.quantity > 1
          ? { ...cartProduct, quantity: cartProduct.quantity - 1 }
          : cartProduct,
      ),
    );
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevCount) => prevCount - 1);
    setCartProducts((prevProducts) =>
      prevProducts.filter(
        (cartProduct) => cartProduct.product.id !== productId,
      ),
    );
  };

  const addToCartServer = async (product: Order) => {
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

      addToCart(product);
      alert('Item added to cart!');
    } catch (error) {
      console.error(error);
      alert('Failed to add item to cart.');
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartProducts,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        addToCartServer,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
