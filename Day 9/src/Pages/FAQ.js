import React, { useState } from 'react';
import faqs from '../Data/FaqData';
import Faqs from '../components/FAQ/Faqs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function FAQ() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
       <Navbar/>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-10"> 
        <div class="max-w-2xl mx-auto text-center">
            
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Check out this section to get answers for all the frequently asked questions.</p>
        </div>
    
    {   faqs.map((faqs)=>(
        <Faqs key={faqs.id} faqs={faqs} />

     
))}
     
        <p class="text-center text-gray-600 textbase mt-9">Didn’t find the answer you are looking for? <a href="#" title="" class="font-medium text-yellow-500 transition-all duration-200 hover:text-yelllow-800 focus:text-yellow-700 hover:underline">Contact our support</a></p>
     
      </section>
      <Footer/>   
    </div>
  );
}

export default FAQ;
