import React from 'react';
import Navbar from '../components/Navbar';
import herobg from '../Images/hero-bg.jpg';
import {AiOutlineMinus} from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';
import Homefeature from '../components/home/homefeature';
import HomeSaleInfo from '../components/home/HomeSaleInfo';
import NewsLetter from '../components/home/NewsLetter';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <div
        className="relative h-screen bg-cover"
        style={{
          backgroundImage: `url(${herobg})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <Navbar />
        
        <div className='mt-[150px] ml-[100px] flex flex-row space-x-4'>
            <h1 className='mt-[-7px] text-yellow-600 brightness-150 '>____  </h1>
            <h2 className='text-yellow-600 brightness-150 font-sans font-light text-xl'>Welcome to Essentia</h2>
        </div>
        <div className='mt-[50px] ml-[100px] w-[590px] space-y-5'>
            <h1 className='text-white brightness-200 font-sans font-bold text-3xl'>Elevate Your Everyday Essentials with Us!</h1>
        <p className='text-white brightness-200 font-thin'>Explore our handpicked collection and discover a world of quality, where every item is chosen with your needs and preferences in mind. Whether you're seeking timeless classics or innovative solutions, Essentia is your trusted partner in creating spaces that truly reflect your unique essence.</p>
        </div>
        
        <div className='mt-[50px] ml-[100px] flex flex-row space-x-4  '>
        <button className='flex flex-row font-mono  bg-yellow-600 brightness-150 py-3 px-8 hover:bg-white hover:-translate-y-2 hover:translate-x-2 hover:scale-105 duration-300 ... '>
            SHOP NOW 
        <BsArrowRightShort className='mt-1 ml-2  hover:translate-x-2 hover:scale-105 duration-300 ... '/> 
        </button>
        </div>

      </div>


      <div>
<HomeSaleInfo/>
      </div>
      <div>
<Homefeature/>
      </div>
       
       
<NewsLetter/>
<Footer/>
    </div>
  );
}

export default Home;
