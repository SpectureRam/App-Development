
import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import nlimg from '../../Images/news.jpg'
import { Toaster, toast } from 'react-hot-toast'; 
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useSelector } from 'react-redux';


function NewsLetter() {
  
  const user = useSelector((state)=> state.user.value)

  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);


  useEffect(() => {
    if (isSuccessVisible) {
      const timeout = setTimeout(() => {
        setIsSuccessVisible(false);
        setSuccessMessage('');
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [isSuccessVisible]);

  function sendEmail(e) {
    e.preventDefault();
    
      if(email===''){
        toast.error('Please enter email');
      }
      else{
    emailjs
    .sendForm('service_3eevvvm', 'template_hqow6fn', e.target, 'ub-T53FxKv8542maZ')
    .then(
      (result) => {
        console.log('Email sent successfully', result);
        setSuccessMessage('Message sent successfully!');
        setIsSuccessVisible(true);
        setEmail('');
        toast.success('Thankyou for subscribing! You will receive our latest updates soon.');
        
        
        // toast.t('Message sent successfully!');
      },
      (error) => { 
        toast.error('Network error');
console.error('Error sending email:', error);
      }
    );}}
  return (
    
    <div className='w-full flex item-start flex-row  '>
      <div><Toaster/></div>
        <div className='relative w-1/2 auto flex-col' >
            <img className='h-[360px] w-[800px] '  src={nlimg}/> 
        </div>

        <div className='relative w-1/2 mt-10 flex-col pl-[55px] space-y-10'>
               
                    
                <div className='flex space-x-3'>
                <div className='bg-yellow-400 h-[2px] w-[40px] mt-3 flex '>
                </div>
                <p className='flex text-yellow-500'>
                    SUBSCRIBE TO OUR NEWSLETTER
                </p>
                </div>
                <h1 className='flex flex-row text-4xl font-bold w-[500px]' >See The Latest Collection & Get Special Offer</h1>

                <div className='flex space-x-2 w-[500px]'>
                  <form onSubmit={sendEmail} className='flex space-x-1'>
                    <input className='border-yellow-700  border-2 text-center w-[400px] h-[50px]'
                    type='email' 
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email address'></input>

                    <button className="bg-yellow-600 brightness-150 py-3 px-8 flex flex-row hover:text-white hover:translate-x-1.5  hover:scale-105 duration-500"
                    type='submit'
                    >
                    SUBSCRIBE</button> 
                    </form>
                </div>

            
        
       
        </div>
        
    </div>
  )
}

export default NewsLetter