import React from 'react';

interface MenuCardProps {
  name: string;
  price: number;
  rating: number;
  image: string;
  category: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ name, price, rating, image, category }) => {
  const renderRatingStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = Math.ceil(rating - fullStars);
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, index) => (
          <StarIcon key={`full-${index}`} />
        ))}
        {[...Array(halfStars)].map((_, index) => (
          <HalfStarIcon key={`half-${index}`} />
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <EmptyStarIcon key={`empty-${index}`} />
        ))}
      </div>
    );
  };

  return (
    <div className="p-4 mb-4 border">
      <img src={image} alt={name} className="mb-2" />
      <div className="flex justify-between">
        <div>
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-gray-600">Rating: {renderRatingStars(rating)}</p>
          <p className="text-gray-600">Category: {category}</p>
        </div>
        <div>
          <p className="text-lg font-semibold">${price}</p>
          <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const StarIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
    <path
      fillRule="evenodd"
      d="M10 0L3.061 6.69 0 7.772l4.273 4.158-.941 5.484L10 14.468l4.668 2.946-.942-5.484L20 7.772l-3.06-1.082L10 0zm0 1.698l2.539 5.534 5.708.803-4.139 4.033.976 5.693L10 14.055l-4.084 2.714.976-5.693-4.14-4.033 5.708-.803L10 1.697z"
      clipRule="evenodd"
    />
  </svg>
);

const HalfStarIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
    <path
      fillRule="evenodd"
      d="M10 0L7.35 6.607 0 7.772l5.014 4.883L3.452 20 10 15.213 16.548 20l-1.562-7.394L20 7.772l-7.35-1.165L10 0zm0 1.698l2.453 5.315 5.32.75-3.862 3.776.911 5.337L10 14.938l-4.823 3.179.911-5.336-3.862-3.776 5.32-.751L10 1.698z"
      clipRule="evenodd"
    />
  </svg>
);

const EmptyStarIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
    <path
      fillRule="evenodd"
      d="M10 0L7.35 6.607 0 7.772l5.014 4.883L3.452 20 10 15.213 16.548 20l-1.562-7.394L20 7.772l-7.35-1.165L10 0zm0 1.698l2.453 5.315 5.32.75-3.862 3.776.911 5.337L10 14.938l-4.823 3.179.911-5.336-3.862-3.776 5.32-.751L10 1.698z"
      clipRule="evenodd"
    />
  </svg>
);

export default MenuCard;


