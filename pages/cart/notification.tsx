import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import StarRating from 'react-star-rating-component';
import { getCookie } from '@/libs/cookies';

const sampleOrderItems = [
  {
    id: '1',
    menuId: 1,
    orderId: '123',
    menu: {
      id: 1,
      name: 'Menu 1',
      price: 10,
    },
    quantity: 2,
  },
  {
    id: '2',
    menuId: 2,
    orderId: '123',
    menu: {
      id: 2,
      name: 'Menu 2',
      price: 15,
    },
    quantity: 1,
  },
];

interface Menu {
  id: number;
  name: string;
  menuImage: {
    img1: string;
  };
}
interface RatingsState {
  [menuId: number]: number;
}

const NotificationPage = () => {
  const router = useRouter();
  const [ratings, setRatings] = useState<RatingsState>({});
  const [menus, setMenus] = useState<Menu[]>([]);
  const token = getCookie('token'); 

  useEffect(() => {
    const fetchOrderItems = async () => {
      try {
        const orderId = router.query.id;
        const response = await axios.get(`https://w17-wareg.onrender.com/${orderId}`, {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });
        setMenus(response.data.orderItems); 
      } catch (error) {
        console.error('Failed to fetch order items:', error);
      }
    };

    fetchOrderItems();
  }, [router.query.id, token]);

  useEffect(() => {
    const fetchMenus = async () => {
      const menuIds = sampleOrderItems.map((item) => item.menuId);
      try {
        const response = await axios.get(`https://w17-wareg.onrender.com/menus?ids=${menuIds.join(',')}`);
        setMenus(response.data);
      } catch (error) {
        console.error('Failed to fetch menus:', error);
      }
    };

    fetchMenus();
  }, []); 

  const handleRatingChange = (menuId: number, newRating: number) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [menuId]: newRating,
    }));
  };

  const handleSubmitRatings = async () => {
    try {
      const ratingData = Object.entries(ratings).map(([menuId, rating]) => ({
        menuId,
        rating,
      }));

      const response = await axios.post(
        'https://w17-wareg.onrender.com/api/ratings',
        ratingData,
        {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      setRatings({}); // Reset ratings after sending
      console.log('Ratings have been submitted successfully:', response.data);
    } catch (error) {
      console.error('Failed to submit ratings:', error);
    }
  };

  return (
    <div>
      <h1>Success</h1>
      <p>Item has been added to cart.</p>

      <h2>Rate the Menu</h2>
      {menus.map((menu) => (
        <div key={menu.id}>
          <h3>{menu.name}</h3>
          <img src={menu.menuImage?.img1} alt={menu.name} /> 

          <StarRating
            name={`menu-rating-${menu.id}`}
            value={ratings[menu.id] || 0}
            onStarClick={(newRating) => handleRatingChange(menu.id, newRating)}
          />
        </div>
      ))}

      <button onClick={handleSubmitRatings}>Submit Ratings</button>

      <button
        onClick={() => {
          router.back();
        }}
      >
        Back
      </button>
    </div>
  );
};

export default NotificationPage;









