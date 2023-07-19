import axios from 'axios';
import { GetServerSideProps, NextComponentType } from 'next';
import React, { useEffect, useState } from 'react';
import { checkLogin } from '@/libs/checkLogin';
import MenuCard from '@/components/MenuCard';
import StarRating from 'react-star-rating-component';
import Link from 'next/link';
import { getCookie } from '@/libs/cookies';

interface ResGetProps {
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

const DetailMenu: NextComponentType<any, any, ResGetProps> = (props: any) => {
  const {
    id,
    name,
    price,
    calories,
    description,
    category,
    ratings,
    menuImages,
  } = props;

  const images = menuImages?.lenght
    ? menuImages
    : {
        img1:
          menuImages?.img1 ||
          'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930',
        img2:
          menuImages?.img2 ||
          'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930',
        img3:
          menuImages?.img3 ||
          'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930',
        img4:
          menuImages?.img4 ||
          'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930',
      };

  const [activeImg, setActiveImage] = useState(images.img1);
  const [quantity, setQuantity] = useState(1);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const [menus, setMenus] = useState<ResGetProps[]>([]);

  const addCountHandler = () => {
    setCount(count + 1);
  };
  const removeCountHandler = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  const addToCart = async () => {
    const token = getCookie('token');
    console.log('Token:', token); 

    checkLogin();
    if (!checkLogin()) {
      return alert('Please login first!');
    } else {
      try {
        console.log('Request Headers:', {
          
          'Content-Type': 'application/json; charset=utf-8',
          Authorization: `Bearer ${token}`,
        });

        const response = await axios.post(
          'https://w17-wareg.onrender.com/orders',
          {
            orderItems: [
              {
                menuId: id,
                quantity: quantity,
              },
            ],
          },
          {
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          },
        );

        console.log('Response:', response); 
      } catch (error: any) {
        console.error('Axios error:', error);
        if (error instanceof Error) {
          console.error('Error message:', error.message);
        }
        if (error.response) {
          console.error(
            'Server responded with status code',
            error.response.status,
          );
          console.error('Response data:', error.response.data);
        } else if (error.request) {
          console.error('No response received, request was:', error.request);
        }
      }
    }
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = async () => {
    try {
      const response = await fetch(
        `https://w17-wareg.onrender.com/menus?q=${category?.name}`,
      );
      const data = await response.json();
      setMenus(data.menus.slice(0, 3));
    } catch (error) {
      console.error('Error fetching menus:', error);
    }
  };

  const averageRating =
    ratings.length > 0
      ? ratings.reduce((sum: number, value: any) => sum + value.rating, 0) /
        ratings.length
      : 0;

  return (
    <div>
      <div className="max-w-5xl py-8 mx-auto">
        <div className="flex flex-col justify-between gap-16 lg:flex-row lg:items-center">
          <div className="flex flex-col gap-6 lg:w-2/4">
            <img
              src={activeImg}
              alt=""
              className="w-full h-full aspect-square object-cover rounded-xl"
            />
            <div className="flex flex-row justify-between h-24">
              <img
                src={images.img1}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(images.img1)}
              />
              <img
                src={images.img2}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(images.img2)}
              />
              <img
                src={images.img3}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(images.img3)}
              />
              <img
                src={images.img4}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(images.img4)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:w-2/4">
            <div>
              <h1 className="text-4xl font-bold">{name || ''}</h1>
            </div>

            <div>
              <StarRating
                name={`rating-${id}`}
                value={averageRating}
                starCount={5}
                starColor="#FFC107"
                emptyStarColor="#E2E8F0"
                editing={false}
              />
            </div>

            <h6 className="text-2xl font-semibold text-emerald-600">
              Rp. {price || ''}
            </h6>
            <div className="flex flex-row gap-2">
              <p>Category : </p>
              <p className="font-bold">{category?.name || ''}</p>
            </div>

            <div className="flex flex-row gap-2">
              <p>Calories :</p>
              <p className="font-bold">{calories || ''}</p>
            </div>
            <p className="text-gray-700">{description || ''}</p>

            <div className="flex flex-row items-center gap-12">
              <div className="flex flex-row items-center">
                <button
                  className="bg-gray-200 py-2 px-4 rounded-lg text-emerald-800 text-3xl"
                  onClick={removeCountHandler}
                >
                  -
                </button>
                <span className="py-4 px-6 rounded-lg"> {count}</span>

                <button
                  className="bg-gray-200 py-2 px-4 rounded-lg text-emerald-600 text-3xl"
                  onClick={addCountHandler}
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={addToCart}
              className="bg-emerald-600 text-white font-semibold py-3 px-16 rounded-xl h-full"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div>
          <div className="py-5">
            <h1 className="text-4xl font-bold">Deskripsi</h1>
          </div>
          <p>{description || ''}</p>
        </div>

        <div className=" my-5 flex flex-row justify-between">
          <h1 className="text-4xl font-bold">Anda Mungkin Menyukai</h1>

          <Link href={'/menu'}>
            <button className="px-16 py-3 font-semibold text-white bg-emerald-600 rounded-xl">
              View More
            </button>
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {menus.map((menu) => (
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
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  ctx: any,
): Promise<any> => {
  const { id } = ctx.query || {};
  let resDataDetail: any;
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVICE_BASE}/menus/${Number(id)}`,
    );
    resDataDetail = data;
  } catch (error) {
    console.error('Error during fetch: ', error);
    return {
      notFound: true,
    };
  }
  return {
    props: resDataDetail,
  };
};

export default DetailMenu;
