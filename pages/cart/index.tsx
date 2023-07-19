import React from 'react';

const AddToCartPage = () => {
  // Simulasi data order dari pengguna
  const orderItems = [
    {
      id: '1',
      menuId: 1,
      orderId: '123',
      menu: {
        id: 1,
        name: 'Menu 1',
        price: 10,
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
        price: 15,
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
      <h1 className="mb-8 text-3xl font-bold">Cart</h1>
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





