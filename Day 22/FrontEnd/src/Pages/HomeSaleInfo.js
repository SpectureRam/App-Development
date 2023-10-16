import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import info from '../Images/home2.jpg'
import { Link } from 'react-router-dom';
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
      <div className="absolute top-[120px] left-[110px] w-[535px] h-[62%] bg-white p-4  border-l-8 border-t-8 border-black  shadow-md">
        <h1 className="mt-6 font-semibold text-black text-[40px] text-center tracking-wide mb-5">
          Sales up to 50% OFF
        </h1>
        <p className="text-start tracking-tight mb-8 ml-5 mr-5">
          Embark on a shopping adventure like never before! Unlock a realm of extraordinary discounts with our exclusive 50% off collection. Delve into a myriad of products, from must-have home essentials to cutting-edge tech gadgets – all at prices that defy imagination. Dont miss out on this golden opportunity to capture remarkable deals. Shop now and embrace a world of savings where every purchase is a discovery!
        </p>

        <Link to="/products"><button className="bg-yellow-600 font-serif brightness-150 py-3 px-8 flex flex-row item-center ml-[150px] items-center justify-center">
          SHOP NOW
        </button>
        </Link>
      </div>
    </div>
  );
}

export default HomeSaleInfo;
