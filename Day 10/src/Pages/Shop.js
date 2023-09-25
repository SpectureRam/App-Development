import React from 'react'
import product from '../ProductData'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSelector , useDispatch } from 'react-redux';

function Shop() {
  const products = useSelector(state => state.products.products);

  return (
   <div>
    <Navbar />
    <section id="Projects"
    class="w-fit mx-6 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
 {
        products.map((products)=>(
          <Card key={products.id} products={products} />
        ))
      }
    </section> 
    <Footer/>
   </div>

  )
}

export default Shop