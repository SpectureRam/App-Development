import React from 'react'
import termsAndConditionsData from '../Data/TermsAndConditionsData'
import Navbar from '../Pages/Navbar'
import Footer from '../Components/Footer'
function TandCpage() {
  return (
    <div className=''>
    <div className='pb-14'>
      <Navbar/>
      <div className='"text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl items-center mt-10'>
      <h1 className="items-center text-center pb-3 pt-5">Terms And Conditions </h1>
      </div>


    <div className='ml-10 mr-8 mt-3'>
      {
        termsAndConditionsData.map((terms) => (

          <div>
            <h1 className='flex font-extrabold font-mono text-2xl pt-10'><img className='flex h-5 mt-1 rounded-tl-md rounded-tr-xl rounded-br-md rounded-bl-xl mr-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAbUlEQVR4nO2VOw7AIAxDfbyW+5+gHMRVVobKsfhk6JPYSJ6IEQCbaQA6ACaXjNOcenujIMt2QTPGFvtvVdDNTB5VQGNknzXHBRSuam2BQm0B/wy4OoMRzs7guEChlqDPfq5H4uOIzdnmV/LUPi8YrtCCO3CgNQAAAABJRU5ErkJggg=="/> {terms.title}</h1>
            <p className='mt-2 text-gray-600  text-lg tracking-wider'>{terms.content}</p>
         </div>

        
        ))
      }

    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default TandCpage