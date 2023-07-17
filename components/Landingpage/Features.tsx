import Image from 'next/image';
import Link from 'next/link';

export default function Mock() {
  return (
    <div>
      <section
        className="items-center w-full lg:h-64 lg:mb-14"
        style={{ backgroundColor: '#EEF6F4' }}
      >
        <div className="px-5 pt-6 mx-auto lg:max-w-6xl lg:px-0">
          <dl className="grid grid-cols-1 gap-6 space-y-0 lg:gap-24 lg:grid-cols-3">
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                >
                  <g clip-path="url(#clip0_23_93)"> 
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M27.5745 6.72718C28.277 6.50647 29.0254 6.89706 29.2462 7.59958L30.248 10.7885C30.4212 10.7728 30.5964 10.7635 30.7732 10.761C30.913 10.7591 31.052 10.7614 31.1899 10.7678L31.7927 7.73895C31.9364 7.01674 32.6384 6.54779 33.3606 6.69153C34.0829 6.83527 34.5518 7.53727 34.4081 8.25948L33.7798 11.4164C36.0327 12.4907 37.6038 14.7743 37.6412 17.439L37.7781 27.1975C38.5649 25.3985 40.3157 24.1174 42.3774 24.0071C40.3779 19.4091 41.6944 14.6515 42.6521 12.7361L43.2483 11.5435L44.4409 12.1398C44.737 12.2879 45.1863 12.4682 45.8053 12.7166C45.9847 12.7886 46.1783 12.8663 46.3866 12.9506C47.2716 13.3088 48.3379 13.7549 49.4409 14.3065C51.6136 15.3929 54.0911 16.9652 55.6206 19.2595C56.0601 19.9188 56.3888 20.6165 56.6284 21.3324H58.6669V23.9991V29.3324V31.9991H57.3337V31.9992H58.6668V34.6659V41.322L58.6669 41.3327L58.6668 41.3434V49.3327V55.9992V58.6659H56.0002H8.00016H5.3335V55.9992V49.3327V41.3327V34.6659V31.9992L5.67218 31.9992L5.67222 31.9991H5.3335V29.3324V23.9991V21.3324H8.00016V23.9991V27.6105C8.14712 27.4439 8.29967 27.2814 8.45769 27.1234C9.8 25.7811 11.4632 24.8335 13.267 24.3553L9.60012 19.4661C9.15829 18.8769 9.27768 18.0412 9.86679 17.5994C10.4559 17.1576 11.2916 17.2769 11.7335 17.8661L15.1822 22.4644L15.2301 18.6493C15.2393 17.913 15.8437 17.3236 16.5801 17.3328C17.3164 17.3421 17.9058 17.9465 17.8966 18.6828L17.8279 24.1569C19.9784 24.5309 21.9784 25.5592 23.5426 27.1234C23.7882 27.369 24.0205 27.6253 24.2392 27.8912L24.0952 17.629C24.0584 15.0022 25.5218 12.7037 27.692 11.5496L26.7021 8.39886C26.4814 7.69633 26.872 6.9479 27.5745 6.72718ZM47.9344 30.1723C47.8306 30.8288 47.607 31.4455 47.2867 31.9992H51.0798C50.1719 31.5489 49.2027 31.0076 48.2468 30.3806C48.1428 30.3124 48.0386 30.243 47.9344 30.1723ZM42.6214 34.6659C42.6365 34.666 42.6517 34.6661 42.6668 34.6661C42.6819 34.6661 42.697 34.666 42.7121 34.6659H56.0002V39.9994H41.3335C40.5972 39.9994 40.0002 40.5963 40.0002 41.3327C40.0002 42.0691 40.5972 42.6661 41.3335 42.6661H56.0002V47.9994H22.6668C21.9305 47.9994 21.3335 48.5963 21.3335 49.3327C21.3335 50.0691 21.9305 50.6661 22.6668 50.6661H56.0002V55.9992H8.00016V50.6661H17.3335C18.0699 50.6661 18.6668 50.0691 18.6668 49.3327C18.6668 48.5963 18.0699 47.9994 17.3335 47.9994H8.00016V42.6661H36.0002C36.7365 42.6661 37.3335 42.0691 37.3335 41.3327C37.3335 40.5963 36.7365 39.9994 36.0002 39.9994H8.00016V34.6659L8.00359 34.6659L23.9967 34.6659H24.0002H26.6634H26.6668H29.8864C30.2838 34.7325 30.6927 34.7645 31.1099 34.7587C31.4611 34.7537 31.8058 34.7222 32.1419 34.6659H42.6214ZM42.6989 31.9992H42.6347C41.1767 31.982 40.0001 30.7948 40.0001 29.3327C40.0001 27.86 41.194 26.6661 42.6668 26.6661C44.1395 26.6661 45.3335 27.86 45.3335 29.3327C45.3335 30.7948 44.1568 31.982 42.6989 31.9992ZM38.0468 31.9992H36.4719C36.8665 31.4634 37.1841 30.8677 37.4084 30.2285C37.5158 30.864 37.7357 31.4613 38.0468 31.9992ZM54.4583 26.2886C54.4321 26.5722 54.3982 26.854 54.3581 27.1323L49.1096 19.2596C48.7011 18.6469 47.8733 18.4813 47.2606 18.8898C46.6479 19.2983 46.4823 20.1261 46.8908 20.7388L53.0554 29.9857C52.0332 29.522 50.8601 28.9056 49.7093 28.1508C47.728 26.8512 45.9517 25.2318 45.0372 23.4028C43.5197 20.3678 43.9448 17.0732 44.5749 15.0965C44.6779 15.138 44.7828 15.18 44.889 15.2226L44.8899 15.223L44.8935 15.2244C45.0555 15.2893 45.2205 15.3555 45.3861 15.4225C46.2511 15.7726 47.2403 16.1876 48.2483 16.6916C50.2978 17.7164 52.2646 19.0329 53.4017 20.7386C54.4147 22.2581 54.6479 24.233 54.4583 26.2886ZM27.9027 30.6657H29.3335C30.0698 30.6657 30.6668 30.0688 30.6668 29.3324C30.6668 28.596 30.0698 27.999 29.3335 27.999H26.9077L26.7954 19.9994H30.6668C31.4032 19.9994 32.0001 19.4024 32.0001 18.6661C32.0001 17.9297 31.4032 17.3327 30.6668 17.3327H26.766C26.8694 15.1834 28.6295 13.458 30.8106 13.4274C33.0786 13.3956 34.9429 15.2084 34.9747 17.4764L35.0476 22.6659H34.6669H32.0002C31.2638 22.6659 30.6669 23.2628 30.6669 23.9992C30.6669 24.7356 31.2638 25.3326 32.0002 25.3326H34.6669H35.085L35.1214 27.9281C35.1493 29.9158 33.7603 31.5935 31.8898 31.9992H30.1394C29.2545 31.807 28.4746 31.3291 27.9027 30.6657ZM8.46132 31.9992H23.539C23.1451 30.8857 22.5057 29.8625 21.6546 29.0115C20.1549 27.5118 18.121 26.6693 16.0002 26.6693C13.8793 26.6693 11.8454 27.5118 10.3457 29.0115C9.49464 29.8625 8.85521 30.8857 8.46132 31.9992Z"
                      fill="#295C4B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_23_93">
                      <rect width="64" height="64" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="mt-5 text-lg font-semibold leading-6 text-black">
                  Bahan-Bahan Segar
                </p>
              </div>
              <div className="mt-2 text-base text-gray-600">
                Masakan yang diolah dengan bahan pilihan yang segar.
              </div>
            </div>
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                >
                  <g clip-path="url(#clip0_23_84)">
                    <path
                      d="M9.33325 5.33301L10.3798 8.28649L13.3333 9.33301L10.3798 10.3795L9.33325 13.333L8.28673 10.3795L5.33325 9.33301L8.28673 8.28649L9.33325 5.33301Z"
                      fill="#295C4B"
                    />
                    <path
                      d="M29.7441 12.9221L27.9999 7.99967L26.2557 12.9221L21.3333 14.6663L26.2557 16.4105L27.9999 21.333L29.7441 16.4105L34.6666 14.6663L29.7441 12.9221Z"
                      fill="#295C4B"
                    />
                    <path
                      d="M43.8992 33.4338L38.6666 18.6663L33.434 33.4338L18.6666 38.6663L33.434 43.8989L38.6666 58.6663L43.8992 43.8989L58.6666 38.6663L43.8992 33.4338Z"
                      fill="#295C4B"
                    />
                    <path
                      d="M15.4263 25.5578L13.3333 18.6663L11.2402 25.5578L5.33325 27.9997L11.2402 30.4415L13.3333 37.333L15.4263 30.4415L21.3333 27.9997L15.4263 25.5578Z"
                      fill="#295C4B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_23_84">
                      <rect width="64" height="64" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="mt-5 text-lg font-semibold leading-6 text-black">
                  Rasa Luar Biasa
                </p>
              </div>
              <div className="mt-2 text-base text-gray-600">
                Rasa yang luar biasa yang membuat Anda ingin kembali.
              </div>
            </div>
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                >
                  <g clip-path="url(#clip0_23_65)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M39.9999 15.9997H7.99992V42.6663H10.6666H11.3328C12.5491 41.0473 14.4855 40 16.6664 40C18.8474 40 20.7837 41.0473 22 42.6663H23.9999H39.9999V15.9997ZM23.1997 45.333H23.9999H39.9999H42.6666H42.7999C42.9999 44.3478 43.4172 43.4416 43.9994 42.6663H42.6666V23.9997H50.6666C53.6121 23.9997 55.9999 26.3875 55.9999 29.333V42.6663H54.6671C55.2494 43.4416 55.6666 44.3478 55.8666 45.333H55.9999H58.6666V42.6663V29.333C58.6666 24.9147 55.0849 21.333 50.6666 21.333H42.6666L42.6666 15.9997V13.333H39.9999H7.99992H5.33325V15.9997V42.6663V45.333H7.99992H10.1332C10.0457 45.7639 9.99976 46.2099 9.99976 46.6667C9.99976 50.3486 12.9845 53.3333 16.6664 53.3333C20.3483 53.3333 23.3331 50.3486 23.3331 46.6667C23.3331 46.2099 23.2872 45.7639 23.1997 45.333ZM20.6664 46.6667C20.6664 48.8758 18.8756 50.6667 16.6664 50.6667C14.4573 50.6667 12.6664 48.8758 12.6664 46.6667C12.6664 44.4575 14.4573 42.6667 16.6664 42.6667C18.8756 42.6667 20.6664 44.4575 20.6664 46.6667ZM53.3333 46.6665C53.3333 48.8756 51.5424 50.6665 49.3333 50.6665C47.1241 50.6665 45.3333 48.8756 45.3333 46.6665C45.3333 44.4574 47.1241 42.6665 49.3333 42.6665C51.5424 42.6665 53.3333 44.4574 53.3333 46.6665ZM55.9999 46.6665C55.9999 50.3484 53.0152 53.3332 49.3333 53.3332C45.6514 53.3332 42.6666 50.3484 42.6666 46.6665C42.6666 42.9846 45.6514 39.9998 49.3333 39.9998C53.0152 39.9998 55.9999 42.9846 55.9999 46.6665ZM44.9998 27H50.3331C51.8058 27 52.9998 28.1939 52.9998 29.6667V35H44.9998V27ZM26.4766 22.0192C26.8554 21.3877 26.6507 20.5687 26.0193 20.1898C25.3878 19.811 24.5688 20.0157 24.1899 20.6472L20.1899 27.3138C19.9428 27.7258 19.9363 28.2388 20.173 28.6568C20.4097 29.0748 20.8529 29.3332 21.3333 29.3332H26.4343L20.3209 36.4655C19.8417 37.0246 19.9064 37.8663 20.4655 38.3455C21.0246 38.8247 21.8664 38.76 22.3456 38.2009L30.3456 28.8676C30.6845 28.4722 30.7622 27.9158 30.5446 27.4427C30.327 26.9696 29.854 26.6665 29.3333 26.6665H23.6882L26.4766 22.0192Z"
                      fill="#295C4B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_23_65">
                      <rect width="64" height="64" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="mt-5 text-lg font-semibold leading-6 text-black">
                  Pesan Antar
                </p>
              </div>
              <div className="mt-2 text-base text-gray-600">
                Nikmati masakan Wareg kapan saja, di mana saja.
              </div>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}
