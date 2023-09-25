import React from 'react'
import icon1 from '../../Images/home/ico1.png'
import icon2 from '../../Images/home/ico2.png'
import icon3 from '../../Images/home/ico3.png'
import icon4 from '../../Images/home/ico4.png'
import {CiDiscount1 } from 'react-icons/ci'
import {LiaShippingFastSolid} from 'react-icons/lia'
import {RiSecurePaymentFill} from 'react-icons/ri'
function Homefeature() {
  return (
    <div className='m-10 h-auto mb-[120px] mt-[100px]'>
    <div className='flex  space-x-2'>
        <div className='bg-yellow-200 h-[2px] w-[80px] mt-3 flex'>
        </div>
        <div className='flex'>
        <p className='flex text-yellow-400'>
             IF YOU WONDER
        </p>
        </div>
    </div>
        <div className='mt-[40px]'>
            <h1 className='font-bold , text-black text-5xl'>Why Choose Us</h1>
        </div> 

        <div className='bg-gray-300 h-[1px] w-full mt-5 drop-shadow-2xl shadow-2xl'></div>

        <div className='grid grid-cols-1 md:grid-cols-4  gap-8 mt-10 '>
            <div className='justify-start items-start l-0'>
                {/* <img src={icon1} alt='icon1' className='h-[80px] w-[130px]'></img> */}
                {/* <img className='text-black brightness-150' width="64" height="64" src="https://img.icons8.com/cotton/64/discount--v2.png" alt="discount--v2"/> */}
                <CiDiscount1 className=' text-gray-700 h-[100px] w-[100px] hover:translate-x-1.5  hover:scale-105 duration-500 '/>
                <h1 className='font-bold pt-3'>Big Discounts</h1>
                <p className='font-light pt-2'>
                "Discover unbeatable deals on a wide range of products, with discounts that make every purchase a win. Shop smart and save big!
                "</p>
            </div>

            
            <div className=''>
                {/* <img src={icon2} alt='icon1' className='h-[100px] w-[100px]'></img> */}
                <LiaShippingFastSolid className=' text-gray-700 h-[100px] w-[100px] hover:translate-x-1.5  hover:scale-105 duration-500'/>

                <h1 className='font-bold pt-3'>Free Shipping</h1>
                <p className='font-light pt-2'> 
                "Enjoy the convenience of free shipping on all orders, so you can focus on finding the perfect items. No hidden fees, just straightforward savings!"
                </p>
            </div>

            <div className=''>
                {/* <img src={icon3} alt='icon1' className='h-[100px] w-[100px]'></img> */}
                <RiSecurePaymentFill  className=' text-gray-700 h-[100px] w-[100px] hover:translate-x-1.5  hover:scale-105 duration-500'/>
                <h1 className='font-bold pt-3'>Secure Payments</h1>
                <p className='font-light pt-2'>"Shop confidently with our secure payment process, ensuring your transactions are protected at every turn. Your peace of mind is our priority."
                </p>
            </div>

            <div className=''>
                {/* <img src={icon4} alt='icon1' className='h-[100px] w-[100px]'></img> */}
                <img src="https://img.icons8.com/ios/100/order-on-the-way.png" alt="order-on-the-way"  className=' text-gray-700 h-[100px] w-[100px] ml-[-10px] hover:translate-x-1.5  hover:scale-105 duration-500'/>     
                <h1 className='font-bold pt-3'>Order Tracking</h1>
                <p className='font-light pt-2'>"Track your orders in real-time, from packing to delivery, so you're always in the know. Stay connected with your purchases every step of the way!"
                </p>
                
            </div>


        </div>
        
    </div>
  )
}

export default Homefeature