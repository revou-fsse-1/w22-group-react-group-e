import React, { useContext } from 'react';
import Link from 'next/link';
import StarRating from 'react-star-rating-component';
import { CartContext } from '../context/CartContext';
import { Toast } from 'react-toastify/dist/components';
import { toast } from 'react-toastify';
import { checkLogin } from '@/libs/checkLogin';

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
  menuImages,
}) => {
  const { addToCartServer } = useContext(CartContext);
  const averageRating =
    ratings.length > 0
      ? ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length
      : 0;
  return (
    <div className="w-[270px] h-[320px] bg-neutral-100 rounded-xl overflow-hidden transition shadow hover:shadow-lg">
      {menuImages && menuImages.img1 ? (
        <img
          className="object-cover w-full h-[160px] rounded-tl-xl rounded-tr-xl"
          src={menuImages.img1}
          alt={name}
        />
      ) : (
        <div className="object-cover w-full h-[160px] rounded-tl-xl rounded-tr-xl flex items-center justify-center text-gray-500">
          No Picture
        </div>
      )}
      <div className="">
        <p className="text-[#333333] mx-3 mt-2 text-sm font-normal leading-loose">
          {category}
        </p>
        <Link href={`/menu/${id}`}>
          <h3 className="text-[#333333] mx-3 text-l font-bold leading-loose">
            {name}
          </h3>
        </Link>
        <div className="mx-3">
          <StarRating
            name={`rating-${id}`}
            value={averageRating}
            starCount={5}
            starColor="#FFC107"
            emptyStarColor="#E2E8F0"
            editing={false}
          />
        </div>
        <div className="flex items-center justify-center">
          <p className="mr-3 font-bold text-black text-m">
            Price: Rp{price.toLocaleString()}
          </p>
          <button
            onClick={() => addToCartServer({ id, name, price, menuImages })}
            className="ml-3 w-[100px] h-[37px] text-sm bg-emerald-600 hover:bg-emerald-900 text-white rounded-[18.50px] overflow-hidden transition shadow hover:shadow-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
