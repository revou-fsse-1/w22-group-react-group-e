import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import MenuCard from '@/components/MenuCard';

interface Menu {
  id: number;
  name: string;
  price: number;
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

export default function Test() {
  const [menuCards, setMenuCards] = useState<Menu[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const totalCardsPerPage = 3;
  const totalPages = 2; // Hanya ada 2 halaman yang ditampilkan

  useEffect(() => {
    fetch('https://w17-wareg.onrender.com/menus')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const categories = ['Daging', 'Sayur', 'Nasi'];
          const selectedMenus: Menu[] = [];

          categories.forEach((category) => {
            const categoryMenus = data.filter((menu: Menu) => menu.category.name === category);
            const randomIndex = Math.floor(Math.random() * categoryMenus.length);
            const randomMenu = categoryMenus[randomIndex];
            selectedMenus.push(randomMenu);
          });

          setMenuCards(selectedMenus);
        }
      })
      .catch((error) => {
        console.error('Error fetching menus:', error);
      });
  }, []);

  const handleChangePage = (index: number) => {
    setCurrentPage(index);
  };

  return (
    <div>
      <h1>Menu Cards</h1>
      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        onChange={handleChangePage}
        selectedItem={currentPage}
      >
        {menuCards
          .slice(currentPage * totalCardsPerPage, (currentPage + 1) * totalCardsPerPage)
          .map((menuCard) => (
            <MenuCard
              key={menuCard.id}
              id={menuCard.id}
              name={menuCard.name}
              price={menuCard.price}
              category={menuCard.category.name}
              ratings={menuCard.ratings.map((rating) => rating.rating)}
              menuImages={menuCard.menuImages}
            />
          ))}
      </Carousel>
      <div>
        {Array.from(Array(totalPages).keys()).map((index) => (
          <button
            key={index}
            onClick={() => handleChangePage(index)}
            className={`mx-1 px-2 py-1 rounded ${
              currentPage === index ? 'bg-gray-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
