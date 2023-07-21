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
  const [filteredMenus, setFilteredMenus] = useState<Menu[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const calculateCardsPerRow = () => {
    if (window.innerWidth >= 1024) {
      return 3;
    } else if (window.innerWidth >= 768) {
      return 2;
    } else {
      return 1;
    }
  };
  const [cardsPerRow, setCardsPerRow] = useState<number>(3);
  const [currentPage, setCurrentPage] = useState(1);
  const menusPerPage = 2;

  const handleWindowResize = () => {
    setCardsPerRow(calculateCardsPerRow());
  };

  useEffect(() => {
    fetchMenus();
    const calculateCardsPerRow = () => {
      if (window.innerWidth >= 1024) {
        return 3;
      } else if (window.innerWidth >= 768) {
        return 2;
      }
      return 1;
    };
    setCardsPerRow(calculateCardsPerRow());
    const handleResize = () => {
      setCardsPerRow(calculateCardsPerRow());
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const fetchMenus = async () => {
    try {
      const response = await fetch('https://w17-wareg.onrender.com/menus');
      const data = await response.json();
      setMenus(data.menus);
      setFilteredMenus(data.menus);
    } catch (error) {
      console.error('Error fetching menus:', error);
    }
  };

  const handleCategoryChange = (category: string) => {
    const selectedCategories = selectedCategory.includes(category)
      ? selectedCategory.filter((item) => item !== category)
      : [...selectedCategory, category];
    setSelectedCategory(selectedCategories);
    filterMenus(selectedCategories, selectedRating);
  };

  const handleRatingChange = (rating: number | null) => {
    setSelectedRating(rating);
    filterMenus(selectedCategory, rating);
  };

  const handleFilterByQuery = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = menus.filter((menu) =>
      menu.name.toLowerCase().includes(lowerCaseQuery),
    );
    setFilteredMenus(filtered);
    setCurrentPage(1);
  };

  const filterMenus = (categories: string[], rating: number | null) => {
    let filtered = menus;

    if (categories.length > 0) {
      filtered = filtered.filter((menu) =>
        categories.includes(menu.category.name),
      );
    }

    if (rating !== null) {
      filtered = filtered.filter(
        (menu) =>
          menu.ratings.length > 0 &&
          Math.floor(
            menu.ratings.reduce((sum, rating) => sum + rating.rating, 0) /
              menu.ratings.length,
          ) === rating,
      );
    }

    setFilteredMenus(filtered);
  };

  // Calculate pagination
  const totalPages = Math.ceil(
    filteredMenus.length / (menusPerPage * cardsPerRow),
  );

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const currentMenus = filteredMenus.slice(
    (currentPage - 1) * menusPerPage * cardsPerRow,
    currentPage * menusPerPage * cardsPerRow,
  );

  return (
    <>
      <div>
        <div className="bg-[#EEF6F4]">
          <h1 className="text-emerald-950 text-[50px] px-5 pb-[40px] font-bold leading-[80px]">
            Menu
          </h1>
        </div>
        <div className="flex p-8">
          <div className="w-2/5 p-4">
            <div className="bg-[#F6F6F6] p-8 rounded-xl">
              <Filter
                onFilterByQuery={handleFilterByQuery}
                categories={[
                  'Nasi',
                  'Daging',
                  'Sayur',
                  'Minuman',
                  'Cemilan',
                  'Ikan',
                ]}
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
                onRatingChange={handleRatingChange}
                selectedRating={selectedRating}
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center w-4/5 gap-3 p-3">
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
            <div className="flex flex-wrap justify-center gap-8 item-center">
              {filteredMenus.length > menusPerPage && (
                <ul className="justify-center gap-8 p-3 mt-10 rounded-full w-1/9 item-center">
                  <button
                    className="middle none center bg-emerald-600 rounded-l-full hover:bg-emerald-900 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                  <button
                    className="middle none center bg-emerald-600 rounded-r-full hover:bg-emerald-900 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="bg-[url('../public/discount-form.png')] justify-center items-center w-full h-[573px] bg-cover bg-center bg-[#548776] bg-no-repeat">
          <div className="w-full h-[573px] left-0 top-0">
            <div className="w-[100%] h-[100%] flex justify-center items-center">
              <div className="w-[60%] h-[80%] md:w-[540px] flex flex-col justify-between items-center text-center">
                <div className="w-[70%] h-[40%] md:w-[500px] pt-8 text-white relative text-left text-2xl md:text-5xl font-semibold capitalize">
                  Diskon 30% dengan aplikasi Wareg
                </div>
                <div className="w-[70%] h-[50%] md:w-[500px] text-white relative text-left text-base font-normal leading-loose">
                  Nikmati diskon hingga 30% setiap minggunya dengan menu edisi
                  terbatas yang akan menggoda selera makanmu. Jangan sampai
                  terlewatkan kesempatan ini! Download sekarang juga!
                </div>
                <div className="w-[100%] h-[30%] md:w-[900px] justify-between">
                  <button className="item-start md:w-[30%] h-[50%] w-[80%] md:mt-0 mt-6 bg-white md:rounded-3xl rounded-2xl">
                    <p className="items-center justify-center text-base font-semibold text-slate-500">
                      Download Sekarang
                    </p>
                  </button>
                </div>
              </div>
              <div className="w-[15%] md:w-[110px] md:h-[110px] h-[15%] bg-white rounded-full flex justify-center items-center">
                <div className="text-center">
                  <p className="text-sm font-semibold md:text-2xl text-slate-500">
                    up to
                  </p>
                  <p className="text-sm font-semibold text-red-600 md:text-2xl">
                    30%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
