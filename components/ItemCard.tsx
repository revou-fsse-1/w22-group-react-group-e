import React from 'react';

const ItemCard = ({ item, addToCart }: { item: any; addToCart: any }) => {
  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <div className="item-card">
      <h3>{item.name}</h3>
      <p>Price: {item.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ItemCard;
