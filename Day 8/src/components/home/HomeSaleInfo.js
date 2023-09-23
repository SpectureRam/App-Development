import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import info from '../../Images/home/info2.jpg';

function HomeSaleInfo() {
  return (
    <div className="relative h-[580px]">
      {/* Image */}
      <div className="absolute top-0 right-0 w-[1020px] h-full overflow-hidden">
        <img
          src={info}
          alt="Info"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Container */}
      <div className="absolute top-[120px] left-[110px] w-[535px] h-[62%] bg-white p-4  hover:translate-x-1.5  hover:scale-105 duration-500 ...  
      border-gray-600   border-l-8 border-t-8  shadow-gray-400  shadow-md">
        <h1 className="mt-6 font-semibold text-black text-[40px] text-center tracking-wide mb-5">
          Sales up to 50% OFF
        </h1>
        <p className="text-start tracking-tight mb-8 ml-5 mr-5">
          "Discover a treasure trove of products at unbeatable prices! Dive into our exclusive 50% off collection and explore a world of savings on high-quality items. From home essentials to tech gadgets, there's something for everyone. Shop now and seize the opportunity to snag incredible deals!"
        </p>

        <button className="bg-yellow-600 brightness-150 py-3 px-8 flex flex-row item-center ml-[150px]   items-center justify-center hover:translate-x-1.5  hover:scale-105 duration-500">
          SHOP NOW
          <BsArrowRightShort className="mt-1 ml-2 hover:translate-x-2 hover:scale-105 duration-300" />
        </button>
      </div>
    </div>
  );
}

export default HomeSaleInfo;
