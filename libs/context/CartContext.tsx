import React, { createContext, useState } from 'react';

interface CartContextProps {
  cartItems: number;
  addToCart: () => void;
}

export const CartContext = createContext<CartContextProps>({
  cartItems: 0,
  addToCart: () => {},
});

export const CartProvider: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    setCartItems((prevCount) => prevCount + 1);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
