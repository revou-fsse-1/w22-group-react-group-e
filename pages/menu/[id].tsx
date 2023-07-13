import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { useState } from 'react';

export default function DetailMenu() {
  const [images, setImages] = useState({
    img1: 'https://www.masakapahariini.com/wp-content/uploads/2021/07/Nasi-Goreng-Spesial-Ayam-Kecombrang.jpg',
    img2: 'https://sweetrip.id/wp-content/uploads/2020/06/miejiwo_101049629_258573461864967_2414588224721876492_n.jpg',
    img3: 'https://awsimages.detik.net.id/community/media/visual/2022/08/07/resep-nasi-goreng-ayam-dan-ebi_43.jpeg?w=1200',
    img4: 'https://global-uploads.webflow.com/643707ac57bf42445298b82e/643f8840b2e0a7512e675eb5_nasi_goreng_special.webp',
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  const [amount, setAmount] = useState(1);

  const [count, setCount] = useState(0);

  const addCountHandler = () => {
    setCount(count + 1);
  };
  const removeCountHandler = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };
  return (
    <div>
      <div className="max-w-5xl mx-auto p-8">
        <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
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
          {/* ABOUT */}
          <div className="flex flex-col gap-4 lg:w-2/4">
            <div>
              <h1 className="text-4xl font-bold">Nasi Goreng Spesial </h1>
            </div>
            <h6 className="text-emerald-600 text-2xl font-semibold">
              Rp. 25.000
            </h6>
            <div className="flex flex-row gap-2">
              <p>Category : </p>
              <p className="font-bold">Makanan</p>
            </div>

            <div className="flex flex-row gap-2">
              <p>Calories :</p>
              <p className="font-bold">257 Calories</p>
            </div>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              nostrum amet at laboriosam laborum voluptatum veniam, reiciendis
              modi minima et consequatur iure iusto totam voluptates dignissimos
              corrupti cupiditate deleniti non.
            </p>

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
            <button className="bg-emerald-600 text-white font-semibold py-3 px-16 rounded-xl h-full">
              Add to Cart
            </button>
          </div>
        </div>
        {/* Deskripsi */}
        <div>
          <div className="py-5">
            <h1 className="text-4xl font-bold">Deskripsi</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maiores
            officia, minus eligendi mollitia, natus architecto, asperiores
            expedita dolore velit laudantium officiis consectetur laborum.
            Similique suscipit laboriosam ratione repellat modi?
          </p>
        </div>

        <div className=" my-5 flex flex-row justify-between">
          <h1 className="text-4xl font-bold">Anda Mungkin Menyukai</h1>

          <button className="bg-emerald-600 text-white font-semibold py-3 px-16 rounded-xl">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}