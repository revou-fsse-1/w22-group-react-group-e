import Image from 'next/image';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: 'Makanan Enak dengan Suasana Nyaman',
    image:
      'https://res.cloudinary.com/djudfrj8s/image/upload/v1689564751/wareg-assets/pexels-danu-hidayatur-rahman-2802430_iujgjb.jpg',
    name: 'Yoga & Dilla',
    position: 'Pasangan',
    description:
      'Kami sangat terkesan dengan kelezatan masakan di sini. Rasa yang enak dan suasana yang nyaman benar-benar menciptakan pengalaman makan yang menyenangkan. Tanpa ragu, Kami berencana untuk kembali lagi ke Wareg di masa mendatang untuk menikmati hidangan yang tak terlupakan.',
  },
  {
    quote: 'Pelayanan yang Autentik dan Harga Terjangkau',
    image:
      'https://res.cloudinary.com/djudfrj8s/image/upload/v1689563048/wareg-assets/gusti-ayu-putu-devy-savitri-yyOX0AHKeWs-unsplash_cj2hr7.jpg',
    name: 'Gusti Ayu Putu Devy',
    position: 'Model',
    description:
      'Saya sangat terkesan dengan pelayanan di Wareg. Selain harga yang terjangkau, makanan yang disajikan benar-benar autentik dan lezat. Rasanya seperti makan di rumah sendiri. Tidak heran jika saya selalu merekomendasikan Wareg kepada teman-teman saya. Terima kasih atas pengalaman makan yang luar biasa!',
  },
  {
    quote: 'Pilihan Tepat untuk Makan Lezat',
    image:
      'https://res.cloudinary.com/djudfrj8s/image/upload/v1689562969/wareg-assets/priscilla_lezhzd.png',
    name: 'Priscilla',
    position: 'Mahasiswa',
    description:
      'Wareg adalah pilihan tepat untuk makan siang atau makan malam yang lezat. Mereka menawarkan variasi menu yang beragam dan kualitas bahan makanan yang terjamin. Suasana restoran yang hangat dan ramah membuat saya merasa betah dan rileks. Saya pasti akan kembali lagi dan lagi. Sangat direkomendasikan!',
  },
];

export default function Testimonies() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section
      style={{ backgroundColor: '#FFFEFC' }}
      className="dark:bg-gray-900"
    >
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center lg:flex-row-reverse">
          <div className="relative lg:w-2/5 lg:mx-6 w-full h-80 rounded-lg lg:h-[30rem]">
            <Image
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={testimonials[current].image}
              alt=""
              layout="fill"
            />
          </div>

          <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
            <p className="text-l font-semibold text-emerald-600 ">
              Testimonial
            </p>

            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
              {testimonials[current].quote}
            </h1>

            <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
              {testimonials[current].description}
            </p>

            <h3 className="mt-6 text-lg font-medium text-emerald-600">
              {testimonials[current].name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {testimonials[current].position}
            </p>

            <div className="flex items-center justify-between mt-12 lg:justify-start">
              <button
                title="left arrow"
                className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
                onClick={() =>
                  setCurrent(
                    current === 0 ? testimonials.length - 1 : current - 1,
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                title="right arrow"
                className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100"
                onClick={() => setCurrent((current + 1) % testimonials.length)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
