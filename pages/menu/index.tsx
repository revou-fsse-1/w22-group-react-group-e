import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import MenuCard from '../../components/MenuCard';
import Filter from '../../components/Filter';

interface Menu {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  category: string;
}

const MenuPage: React.FC = () => {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = async () => {
    try {
      const res = await fetch('https://example.com/menus'); // Ganti URL API sesuai kebutuhan Anda
      const data = await res.json();
      setMenus(data);
    } catch (error) {
      console.error('Error fetching menus:', error);
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredMenus = menus.filter((menu) => {
    if (selectedCategory === 'All' || menu.category === selectedCategory) {
      return true;
    }
    return false;
  });

  return (
    <div>
      <Head>
        <title>Menu Page</title>
        <meta name="description" content="Page for displaying menus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Menu Page</h1>
      <Filter
        categories={['All', 'Nasi', 'Daging', 'Sayur', 'Minuman', 'Cemilan', 'Mie', 'Ikan']}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <div className="grid">
        {filteredMenus.map((menu) => (
          <MenuCard
            key={menu.id}
            name={menu.name}
            price={menu.price}
            rating={menu.rating}
            image={menu.image}
            category={menu.category}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;

