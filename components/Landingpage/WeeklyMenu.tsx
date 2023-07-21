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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      style={{ backgroundColor: '#EEF6F4' }}
      className="dark:bg-gray-900"
    >
      <div className="container items-center px-6 py-10 mx-auto">
        <div className="w-full mx-auto lg:max-w-6xl lg:px-0 sm:w-11/12 md:w-3/4 lg:w-1/2">
          <h2 className="mb-4 text-xl font-bold">Menu Minggu Ini</h2>
          <Slider
            {...settings}
            className="md:mx-[-8rem] justify-center item-center grid md:grid-cols-1 md:gap-6 space-y-0 lg:gap-24 lg:grid-cols-3"
          >
            {menus.map((menu) => (
              <div key={menu.id} className="p-1 md:mx-4">
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
