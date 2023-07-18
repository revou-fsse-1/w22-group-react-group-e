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

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function NextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow text-green-500`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      &gt;
    </div>
  );
}

function PrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow text-green-500`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      &lt;
    </div>
  );
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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section
      className="flex items-center w-full h-64 py-10 lg:py-60 lg:h-64 lg:mb-14"
      style={{ backgroundColor: '#EEF6F4' }}
    >
      <div className="px-5 pt-6 mx-auto lg:max-w-6xl lg:px-0">
        <div className="lg:max-w-6xl lg:px-0 ">
          <h2 className="text-xl font-bold mb-4">Menu Minggu Ini</h2>
          <Slider
            {...settings}
            className="grid grid-cols-1 gap-6 space-y-0 lg:gap-24 lg:grid-cols-3"
          >
            {menus.map((menu) => (
              <div key={menu.id} className="p-1 mx-auto">
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
      </div>
    </section>
  );
};

export default WeeklyMenu;
