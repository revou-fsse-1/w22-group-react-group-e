import React, { useContext } from 'react';
import Link from 'next/link';
import StarRating from 'react-star-rating-component';
import axios from 'axios';
import { getCookie } from '@/libs/cookies';
import { CartContext } from '../context/CartContext';

interface MenuCardProps {
  id: number;
  name: string;
  price: number;
  category: string;
  ratings: number[];
  menuImages: {
    img1: string;
    img2: string;
    img3: string;
    img4: string;
  };
}

const MenuCard: React.FC<MenuCardProps> = ({
  id,
  name,
  price,
  category,
  ratings,
  menuImages
}) => {
  const { addToCart: incrementCartItems } = useContext(CartContext);

  const { cartItems } = useContext(CartContext);

  const addToCart = async () => {
    const token = getCookie('token');
    try {
      await axios.post(
        'https://w17-wareg.onrender.com/orders',
        {
          orderItems: [
            {
              menuId: id,
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

      incrementCartItems();
      alert('Item added to cart!');
    } catch (error) {
      console.error(error);
      alert('Failed to add item to cart.');
    }
  };
  const averageRating =
    ratings.length > 0
      ? ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length
      : 0;

  return (
    <div className="p-4 w-[270px] h-[320px] bg-neutral-100 rounded-xl">
      { menuImages && menuImages.img1 ? (
        <img 
          className="w-[270px] h-[160px] rounded-tl-xl rounded-tr-xl"
          src={menuImages.img1}
          alt={name}
        />
      ) : (
        <div className="w-[270px] h-[160px] rounded-tl-xl rounded-tr-xl flex items-center justify-center text-gray-500">
          No Picture
        </div>
      )}
      <div className="">
        <p className="text-[#333333] text-m font-normal leading-loose">
          {category}
        </p>
        <Link href={`/menu/${id}`}>
          <h3 className="text-[#333333] text-l font-bold leading-loose">
            {name}
          </h3>
        </Link>
        <StarRating
          name={`rating-${id}`}
          value={averageRating}
          starCount={5}
          starColor="#FFC107"
          emptyStarColor="#E2E8F0"
          editing={false}
        />
        <div className="flex items-center justify-between">
          <p className="font-normal text-black text-m">
            Price: Rp{price.toLocaleString()}
          </p>
          <button
            onClick={addToCart}
            className="w-[100px] h-[37px] bg-[#548776] text-white rounded-[18.50px]"
          >
            Add to Cart
          </button>
          <div>Cart Items: {cartItems}</div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
