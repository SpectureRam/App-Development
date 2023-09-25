import React from 'react'
import termsAndConditionsData from '../Data/TermsAndConditionsData'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
function TandCpage() {
  return (
    <div className='mb-20'>
      <Navbar/>
      <div className='"text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl items-center mt-10'>
      <h1 className="items-center text-center ">Terms And Conditions </h1>
      </div>


    <div className='ml-10 mr-10 mt-2'>
      {
        termsAndConditionsData.map((terms) => (

          <div>
            <h1 className='flex font-extrabold font-mono text-2xl pt-10'><img className='flex h-5 mt-1 rounded-tl-md rounded-tr-xl rounded-br-md rounded-bl-xl bg-yellow-400 hover:-translate-y-0.5 hover:scale-105 duration-300 ease-in-out mr-1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAbUlEQVR4nO2VOw7AIAxDfbyW+5+gHMRVVobKsfhk6JPYSJ6IEQCbaQA6ACaXjNOcenujIMt2QTPGFvtvVdDNTB5VQGNknzXHBRSuam2BQm0B/wy4OoMRzs7guEChlqDPfq5H4uOIzdnmV/LUPi8YrtCCO3CgNQAAAABJRU5ErkJggg=="/> {terms.title}</h1>
            <p className='mt-2 text-gray-600  text-lg tracking-wider'>{terms.content}</p>
         </div>

        
        ))
      }

    </div>
    <Footer/>
    </div>
     
  )
}

export default TandCpage