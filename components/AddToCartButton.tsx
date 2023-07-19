import React from 'react';

interface AddToCartButtonProps {
  menuId: number;
  quantity: number;
  addToCart: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  menuId,
  quantity,
  addToCart,
}) => {
  const handleClick = () => {
    if (quantity === 0) {
      alert('Quantity must be greater than 0.');
      return;
    }

    addToCart();
  };

  return (
    <button
      className="h-full px-16 py-3 font-semibold text-white bg-emerald-600 rounded-xl"
      onClick={handleClick}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
