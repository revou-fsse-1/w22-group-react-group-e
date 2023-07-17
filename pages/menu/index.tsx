import React, { useEffect, useState } from 'react';
import Filter from '@/components/Filter';
import MenuCard from '@/components/MenuCard';

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

const MenuPage: React.FC = () => {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const menusPerPage = 10;

  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = async () => {
    try {
      const response = await fetch('https://w17-wareg.onrender.com/menus');
      const data = await response.json();
      setMenus(data.menus);
    } catch (error) {
      console.error('Error fetching menus:', error);
    }
  };

  const handleCategoryChange = (category: string) => {
    const selectedCategories = selectedCategory.includes(category)
      ? selectedCategory.filter((item) => item !== category)
      : [...selectedCategory, category];
    setSelectedCategory(selectedCategories);
  };

  const handleRatingChange = (rating: number | null) => {
    setSelectedRating(rating);
  };

  const filteredMenus = menus.filter((menu) => {
    const categoryMatch =
      selectedCategory.length === 0 || selectedCategory.includes(menu.category.name);
    const ratingMatch =
      selectedRating === null ||
      (menu.ratings.length > 0 &&
        Math.floor(
          menu.ratings.reduce((sum, rating) => sum + rating.rating, 0) / menu.ratings.length
        ) === selectedRating);

    return categoryMatch && ratingMatch;
  });

  // Calculate pagination
  const indexOfLastMenu = currentPage * menusPerPage;
  const indexOfFirstMenu = indexOfLastMenu - menusPerPage;
  const currentMenus = filteredMenus.slice(indexOfFirstMenu, indexOfLastMenu);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex">
      <div className="w-1/5 p-4">
        <Filter
          categories={['Nasi', 'Daging', 'Sayur', 'Minuman', 'Cemilan', 'Ikan']}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          onRatingChange={handleRatingChange}
          selectedRating={selectedRating}
        />
      </div>
      <div className="flex flex-wrap justify-center w-4/5 gap-5 p-5 ">
        {currentMenus.map((menu) => (
          <MenuCard
            key={menu.id}
            id={menu.id}
            name={menu.name}
            price={menu.price}
            category={menu.category.name}
            ratings={menu.ratings.map((rating) => rating.rating)}
            menuImages={menu.menuImages}
          />
        ))}
      </div>
      <div className="flex items-center justify-center mt-5">
        {filteredMenus.length > menusPerPage && (
          <ul className="pagination">
            {Array(Math.ceil(filteredMenus.length / menusPerPage))
              .fill(null)
              .map((_, index) => (
                <li
                  key={index}
                  className={`pagination-item ${index + 1 === currentPage ? 'active' : ''}`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MenuPage;



