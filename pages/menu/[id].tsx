import axios from 'axios';
import { GetServerSideProps, NextComponentType } from 'next';
import React, { useContext, useEffect, useState } from 'react';
import { checkLogin } from '@/libs/checkLogin';
import MenuCard from '@/components/MenuCard';
import StarRating from 'react-star-rating-component';
import Link from 'next/link';
import { getCookie } from '@/libs/cookies';
import Image from 'next/image';
import { CartContext } from '../../context/CartContext';
import { toast } from 'react-toastify';

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
  const { addToCart: incrementCartItems } = useContext(CartContext);

  const images = menuImages?.length
    ? menuImages
    : {
        img1:
          menuImages?.img1 ||
          'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg',
        img2:
          menuImages?.img2 ||
          'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg',
        img3:
          menuImages?.img3 ||
          'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg',
        img4:
          menuImages?.img4 ||
          'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg',
      };

  const [activeImg, setActiveImage] = useState(images.img1);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const [menus, setMenus] = useState<ResGetProps[]>([]);

  const addCountHandler = () => {
    setQuantity(quantity + 1);
  };

  const removeCountHandler = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity(quantity - 1);
  };
  const addToCart = () => {
    checkLogin();
    if (!checkLogin()) {
      toast.error('Please login first!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      // return alert('Please login first!');
    } else {
      const product = {
        id,
        name,
        price,
        menuImages,
      };
      incrementCartItems(product, quantity);
      toast.success('Item added to cart!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      // alert('Item added to cart!');
    }
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVICE_BASE}/menus?q=${category?.name}`,
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
    <div className="max-w-7xl mx-auto p-8">
      <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
        <div className="flex flex-col gap-3 lg:w-2/4">
          <img
            src={activeImg}
            alt=""
            className="lg:w-full lg:h-full  aspect-square object-cover rounded-xl"
          />

          <div className="grid grid-cols-4  gap-4">
            <img
              src={images.img1}
              alt=""
              className="object-fill w-20 h-20 lg:w-36 lg:h-36 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img1)}
            />
            <img
              src={images.img2}
              alt=""
              className="object-fill w-20 h-20 lg:w-36 lg:h-36 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img2)}
            />

            <img
              src={images.img3}
              alt=""
              className="object-fill w-20 h-20 lg:w-36 lg:h-36 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img3)}
            />
            <img
              src={images.img4}
              alt=""
              className="object-fill w-20 h-20 lg:w-36 lg:h-36 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img4)}
            />
          </div>
        </div>
        {/* ABOUT */}
        <div className="flex flex-col gap-4 lg:w-2/4">
          <div>
            <h1 className="text-3xl font-bold">{name || ''}</h1>
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
          </div>

          <h6 className="text-2xl text-emerald-600  font-semibold">
            {' '}
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
          <p className="text-gray-700">{description}</p>
          <div className="flex flex-row items-center gap-12">
            <div className="flex flex-row items-center">
              <button
                onClick={removeCountHandler}
                className="bg-gray-200 py-1 px-2  lg:py-2 lg:px-5 rounded-lg text-emerald-800 lg:text-3xl"
              >
                -
              </button>
              <span className="py-1 px-2 lg:py-4 lg:px-6 rounded-lg">
                {quantity}
              </span>
              <button
                onClick={addCountHandler}
                className="bg-gray-200 py-1 px-2 lg:py-2 lg:px-4 rounded-lg text-emerald-800 lg:text-3xl"
              >
                +
              </button>
            </div>
            <button
              onClick={addToCart}
              className="bg-emerald-600  text-white font-semibold py-1 px-5 lg:py-3 lg:px-16 rounded-xl h-full"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="py-5">
          <h1 className="text-3xl font-bold">Deskripsi</h1>
        </div>
        <p>{description || ''}</p>
      </div>

      <div className="flex flex-row justify-between my-5 ">
        <h1 className="text-lh lg:text-3xl font-bold">Anda Mungkin Menyukai</h1>

        <Link href={'/menu'}>
          <button className="text-sm px-5 py-2 lg:px-16 lg:py-3 lg:text-lg font-semibold text-white bg-emerald-600 rounded-xl">
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

    // <div>
    //   <div className="max-w-5xl py-8 mx-auto">
    //     <div className="flex flex-col justify-between gap-16 lg:flex-row lg:items-center">
    //       <div className="flex flex-col gap-6 lg:w-2/4">
    //         <img
    //           src={activeImg}
    //           alt=""
    //           className="object-cover w-full h-full aspect-square rounded-xl"
    //         />
    //         <div className="flex flex-row justify-between h-24">
    //           <img
    //             src={images.img1}
    //             alt=""
    //             width={500}
    //             height={300}
    //             className="w-24 h-24 rounded-md cursor-pointer"
    //             onClick={() => setActiveImage(images.img1)}
    //           />
    //           <img
    //             src={images.img2}
    //             alt=""
    //             width={500}
    //             height={300}
    //             className="w-24 h-24 rounded-md cursor-pointer"
    //             onClick={() => setActiveImage(images.img2)}
    //           />
    //           <img
    //             src={images.img3}
    //             alt=""
    //             width={500}
    //             height={300}
    //             className="w-24 h-24 rounded-md cursor-pointer"
    //             onClick={() => setActiveImage(images.img3)}
    //           />
    //           <img
    //             src={images.img4}
    //             alt=""
    //             width={500}
    //             height={300}
    //             className="w-24 h-24 rounded-md cursor-pointer"
    //             onClick={() => setActiveImage(images.img4)}
    //           />
    //         </div>
    //       </div>
    //       <div className="flex flex-col gap-4 lg:w-2/4">
    //         <div>
    //           <h1 className="text-4xl font-bold">{name || ''}</h1>
    //         </div>
    //         <div>
    //           <StarRating
    //             name={`rating-${id}`}
    //             value={averageRating}
    //             starCount={5}
    //             starColor="#FFC107"
    //             emptyStarColor="#E2E8F0"
    //             editing={false}
    //           />
    //         </div>

    //         <h6 className="text-2xl font-semibold text-emerald-600">
    //           Rp. {price || ''}
    //         </h6>
    //         <div className="flex flex-row gap-2">
    //           <p>Category : </p>
    //           <p className="font-bold">{category?.name || ''}</p>
    //         </div>

    //         <div className="flex flex-row gap-2">
    //           <p>Calories :</p>
    //           <p className="font-bold">{calories || ''}</p>
    //         </div>
    //         <p className="text-gray-700">{description || ''}</p>

    //         <div className="flex flex-row items-center gap-12">
    //           <div className="flex flex-row items-center">
    //             <button
    //               className="px-4 py-2 text-3xl bg-gray-200 rounded-lg text-emerald-800"
    //               onClick={removeCountHandler}
    //             >
    //               -
    //             </button>
    //             <span className="px-6 py-4 rounded-lg"> {quantity}</span>{' '}
    //             <button
    //               className="px-4 py-2 text-3xl bg-gray-200 rounded-lg text-emerald-600"
    //               onClick={addCountHandler}
    //             >
    //               +
    //             </button>
    //           </div>
    //         </div>
    //         <button
    //           onClick={addToCart}
    //           className="h-full px-16 py-3 font-semibold text-white bg-emerald-600 rounded-xl"
    //         >
    //           Add to Cart
    //         </button>
    //       </div>
    //     </div>
    //     <div>
    //       <div className="py-5">
    //         <h1 className="text-4xl font-bold">Deskripsi</h1>
    //       </div>
    //       <p>{description || ''}</p>
    //     </div>

    //     <div className="flex flex-row justify-between my-5 ">
    //       <h1 className="text-4xl font-bold">Anda Mungkin Menyukai</h1>

    //       <Link href={'/menu'}>
    //         <button className="px-16 py-3 font-semibold text-white bg-emerald-600 rounded-xl">
    //           View More
    //         </button>
    //       </Link>
    //     </div>

    //     <div className="flex flex-wrap justify-center gap-6">
    //       {menus.map((menu) => (
    //         <MenuCard
    //           key={menu.id}
    //           id={menu.id}
    //           name={menu.name}
    //           price={menu.price}
    //           category={menu.category.name}
    //           ratings={menu.ratings.map((rating) => rating.rating)}
    //           menuImages={menu.menuImages}
    //         />
    //       ))}
    //     </div>
    //   </div>
    // </div>
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
