import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import HomeSaleInfo from '../Pages/HomeSaleInfo';
import NewsLetter from '../Pages/NewsLetter';
import Footer from '../Components/Footer';
import heroaa from '../Images/heropixel.jpg';
import { UsersIcon } from '@heroicons/react/outline'
import TrustPage from '../Components/HomeComponents/TrustPage'
import Navbar2 from '../Pages/Navbar'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <>
    <div>
      <Navbar2/>
      <div
        className="h-[600px]"  
        style={{
          backgroundImage: `url(${heroaa})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        
        
        <div className='pt-[100px]  h-[600px]'>
        <div className=' ml-[100px] flex flex-row space-x-4 '>
            <h1 className='mt-[-7px] text-yellow-600 brightness-100'></h1>
            <h2 className='text-yellow-400 brightness-200 font-sans text-xl uppercase tracking-widest font-bold'>Welcome to Essentia</h2>
        </div>
        <div className='mt-[50px] ml-[100px] w-[590px] space-y-5'>
            <h1 className='text-white brightness-200 font-sans font-bold text-4xl tracking-'>Revitalize Your Routine, Redefine Your Essentials with Us!</h1>
        <p className='text-white brightness-100 font-thin'>Dive into the essence of quality with our curated collection, where each item is meticulously selected with your needs and preferences in mind. Whether you are in search of timeless classics or innovative solutions, Essentia is your reliable partner in crafting spaces that authentically embody your unique essence. Explore our handpicked treasures and elevate your surroundings with style and purpose.</p>
        </div>
        
        <div className='mt-[50px] ml-[100px] flex flex-row space-x-4  '>
        <Link to="/products"><button className=' flex flex-row font-serif bg-yellow-600 brightness-150 py-3.5 px-9 hover:bg-white hover:translate-x-2 hover:scale-105 duration-300 ... '>
            SHOP NOW 
        <BsArrowRightShort className='mt-1 ml-2  hover:translate-x-2 hover:scale-105 duration-300 ... '/> 
        </button></Link>
        </div>

      </div>
      </div>
        
      {/*<div className="mx-auto max-w-screen-lg px-8 pt-20 pb-16 text-gray-700 md:pt-24 md:pb-20">
  <div className="flex flex-wrap">
    <div className="w-full max-w-full flex-shrink-0 lg:mt-2 lg:w-1/3 lg:flex-none">
      <h2 className="mb-3 text-xs font-bold uppercase tracking-wide text-gray-500 xl:text-base">Our Clients</h2>
      <h3 className="mb-3 font-bold text-gray-800 sm:text-2xl xl:text-4xl">Trusted by over 300+ clients</h3>
      <p className="">We bring solutions to make life easier for our customers.</p>
    </div>
    <div className="w-full max-w-full py-10 lg:w-2/3 lg:flex-none lg:px-8 lg:py-0">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="w-32 pb-8">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" alt="" />
        </div>
        <div className="w-32">
          <img src="https://brandlogos.net/wp-content/uploads/2022/05/ametek-logo_brandlogos.net_xvf8p-768x768.png" alt=""/>
        </div>
        <div className="w-32">
          <img src="https://brandlogos.net/wp-content/uploads/2022/06/itc-logo_brandlogos.net_1u1qv-768x768.png" alt=""/>
        </div>
        <div className="w-32">
          <img src="https://brandlogos.net/wp-content/uploads/2022/02/larsen__toubro-logo_brandlogos.net_egljc.png" alt=""/>
        </div>
        <div className="w-32">
          <img src="https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/WHITE-Communications-GmbH-900x0.png" alt=""/>
        </div>
        <div className="w-32">
          <img src="https://brandlogos.net/wp-content/uploads/2014/01/asian-paints-vector-logo.png" alt=""/>
        </div>
        <div className="w-32">
          <img src="https://cdn.cookielaw.org/logos/9eb64978-23c0-4924-97a4-03eb6aab1106/83dc1859-114b-46cf-b32e-e3bbebc77feb/ad633653-014e-4c29-b120-efef9829e7a2/GALDERMA_LOGO_BLACK_RGB.jpg" alt=""/>
        </div>
        <div className="w-32">
          <img src="https://brandlogos.net/wp-content/uploads/2022/04/hanwha_group-logo-brandlogos.net_.png" alt=""/>
        </div>
      </div>
    </div>
  </div>
      </div>*/}
      <TrustPage/>
    <div className="relative bg-white">
    <div className="h-56 bg-indigo-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
      <img
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
        alt="Support team"
      />
    </div>
    <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
      <div className="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
        <div>
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
            <UsersIcon className="h-6 w-6" aria-hidden="true" />
          </div>
        </div>
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Deliver what your customers want every time
        </h2>
        <p className="mt-6 text-lg text-gray-500">
        Delivering what our customers want is at the heart of our mission. We strive to understand their needs, exceed expectations, and consistently provide value. It's not just a commitment; it's our passion to ensure every interaction leaves our customers satisfied and delighted.
        </p>
        <div className="mt-8 overflow-hidden">
          <dl className="-mx-8 -mt-8 flex flex-wrap">
            <div className="flex flex-col px-8 pt-8">
              <dt className="order-2 text-base font-medium text-gray-500">Delivery</dt>
              <dd className="order-1 text-2xl font-extrabold text-yellow-500 sm:text-3xl">24/7</dd>
            </div>
            <div className="flex flex-col px-8 pt-8">
              <dt className="order-2 text-base font-medium text-gray-500">Customer Support</dt>
              <dd className="order-1 text-2xl font-extrabold text-yellow-500 sm:text-3xl">99.9%</dd>
            </div>
            <div className="flex flex-col px-8 pt-8">
              <dt className="order-2 text-base font-medium text-gray-500">Orders</dt>
              <dd className="order-1 text-2xl font-extrabold text-yellow-500 sm:text-3xl">100k+</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
  <br/>
      <div>
<HomeSaleInfo/>
      </div>
       <br/>
<NewsLetter/>
<Footer/>
    </div>
    </>
  );
}

export default Home;