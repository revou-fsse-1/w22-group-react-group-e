// import React, { useContext, useEffect, useState } from 'react';
// import axios from 'axios';
// import { CartContext, CartProduct } from '@/context/CartContext';
// import { getCookie } from '@/libs/cookies';
// import { toast } from 'react-toastify';

// interface MenuData {
//   id: number;
//   name: string;
//   price: number;
//   categoryId: string;
//   userId: number;
//   createdAt: string;
//   updatedAt: string;
//   calories: string;
//   description: string;
//   category: {
//     name: string;
//   };
//   ratings: {
//     rating: number;
//   }[];
//   menuImages: {
//     img1: string;
//     img2: string;
//     img3: string;
//     img4: string;
//   };
// }

// const NotificationPage: React.FC = () => {
//   const { cartProducts } = useContext(CartContext);
//   const [ratings, setRatings] = useState<{ [menuId: number]: number }>({});

//   useEffect(() => {
//     const fetchPreviousRatings = async () => {
//       try {
//         const token = getCookie('token');
//         const response = await axios.get('https://w17-wareg.onrender.com/menus', {
//           headers: {
//             'Content-Type': 'application/json; charset=utf-8',
//             Authorization: `Bearer ${token}`,
//           },
//           withCredentials: true,
//         });

//         const menuData: MenuData[] = response.data.menus;
//         const ratingsMap: { [menuId: number]: number } = {};
//         menuData.forEach((menu) => {
//           const { id, ratings } = menu;
//           // Check if the menu has ratings and provide a default value (e.g., 0) if it does not have ratings
//           ratingsMap[id] = ratings.length > 0 ? ratings[0].rating : 0;
//         });

//         setRatings(ratingsMap);
//       } catch (error) {
//         console.error(error);
//         toast.error('Failed to fetch previous ratings.', {
//           position: 'top-center',
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: 'colored',
//         });
//       }
//     };

//     fetchPreviousRatings();
//   }, []);

//   const handleRatingChange = (menuId: number, newRating: number) => {
//     setRatings((prevRatings) => ({ ...prevRatings, [menuId]: newRating }));
//   };

//   const handleSubmitRatings = async () => {
//     try {
//       const token = getCookie('token');
//       const ratingsData = Object.entries(ratings).map(([menuId, rating]) => ({
//         menuId: parseInt(menuId),
//         rating,
//       }));

//       await axios.post(
//         'https://w17-wareg.onrender.com/menus/rating',
//         { ratings: ratingsData },
//         {
//           headers: {
//             'Content-Type': 'application/json; charset=utf-8',
//             Authorization: `Bearer ${token}`,
//           },
//           withCredentials: true,
//         },
//       );

//       setRatings({});
//       toast.success('Ratings submitted successfully!', {
//         position: 'top-center',
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: 'colored',
//       });
//     } catch (error) {
//       console.error(error);
//       toast.error('Failed to submit ratings.', {
//         position: 'top-center',
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: 'colored',
//       });
//     }
//   };

//   return (
//     <div className="container mx-auto mt-8">
//       <h1 className="mb-4 text-3xl font-semibold">Notification Page</h1>
//       <div className="grid grid-cols-2 gap-4">
//         {cartProducts.map((cartProduct: CartProduct) => (
//           <div key={cartProduct.product.id} className="p-4 border">
//             <img
//               src={cartProduct.product.menuImages.img1}
//               alt={cartProduct.product.name}
//               className="object-cover w-32 h-32 mb-4"
//             />
//             <h2 className="mb-2 text-xl font-semibold">
//               {cartProduct.product.name}
//             </h2>
//             <p className="text-gray-500">${cartProduct.product.price}</p>
//             <div className="flex items-center mt-2">
//               <label className="mr-2">Rating:</label>
//               <select
//                 value={ratings[cartProduct.product.id] || 0}
//                 onChange={(e) =>
//                   handleRatingChange(
//                     cartProduct.product.id,
//                     parseInt(e.target.value),
//                   )
//                 }
//               >
//                 <option value={0}>Select rating</option>
//                 <option value={1}>1</option>
//                 <option value={2}>2</option>
//                 <option value={3}>3</option>
//                 <option value={4}>4</option>
//                 <option value={5}>5</option>
//               </select>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button
//         className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
//         onClick={handleSubmitRatings}
//       >
//         Submit Ratings
//       </button>
//     </div>
//   );
// };

// export default NotificationPage;
