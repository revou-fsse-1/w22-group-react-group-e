import React, { createContext, useState } from 'react';
import axios from 'axios';
import { getCookie } from '@/libs/cookies';
import router from 'next/router';
import { toast } from 'react-toastify';

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
  addToCart: (product: Order, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  addToCartServer: (product: Order) => Promise<void>;
  checkout: () => Promise<void>;
}

export const CartContext = createContext<CartContextProps>({
  cartItems: 0,
  cartProducts: [],
  addToCart: (product: Order, quantity: number) => {},
  removeFromCart: (productId: number) => {},
  increaseQuantity: (productId: number) => {},
  decreaseQuantity: (productId: number) => {},
  addToCartServer: async (product: Order) => {},
  checkout: async () => {},
});

export const CartProvider: React.FC = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [cartItems, setCartItems] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  const addToCart = (product: Order, quantity: number) => {
    setCartItems((prevCount) => prevCount + quantity);
    setCartProducts((prevProducts) => [...prevProducts, { product, quantity }]);
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

  const checkout = async () => {
    const token = getCookie('token');

    const orderItems = cartProducts.map(({ product, quantity }) => ({
      menuId: product.id,
      quantity,
    }));

    try {
      await axios.post(
        'https://w17-wareg.onrender.com/orders',
        { orderItems },
        {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        },
      );
      toast.success('Order placed successfully!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      // alert('Order placed successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to place order.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      // alert('Failed to place order.');
    }

    setCartItems(0);
    setCartProducts([]);
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

      addToCart(product, 1);
      toast.success('Item added to cart!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      // alert('Item added to cart!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to add item to cart.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      // alert('Failed to add item to cart.');
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
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
