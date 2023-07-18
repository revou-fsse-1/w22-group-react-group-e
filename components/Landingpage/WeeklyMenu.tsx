import React, { useEffect, useState } from 'react';
import MenuCard from '@/components/MenuCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Menu {
  id: number;
  name: string;
  price: number;
  categoryId: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  calories: string;
  description: string;
  category: {
    name: string;
  };
  ratings: {
    rating: number;
  }[];
  menuImages: {
    img1: string;
    img2: string;
    img3: string;
    img4: string;
  };
}

const WeeklyMenu: React.FC = () => {
  const [menus, setMenus] = useState<Menu[]>([]);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await fetch('https://w17-wareg.onrender.com/menus');
        const data = await response.json();
        setMenus(data.menus.slice(0, 6)); 
      } catch (error) {
        console.error('Error fetching menus:', error);
      }
    };

    fetchMenus();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="p-10">
      <h2 className="text-xl font-bold mb-4">Weekly Menu</h2>
      <Slider {...settings}>
        {menus.map((menu) => (
          <div key={menu.id}>
            <MenuCard
              id={menu.id}
              name={menu.name}
              price={menu.price}
              category={menu.category.name}
              ratings={menu.ratings.map((rating) => rating.rating)}
              menuImages={menu.menuImages}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WeeklyMenu;
