import React from 'react'
import product from '../ProductData'
import Card from './Card'
function Shop() {
  return (
   <div>
    <section>
      {
        product.map((product)=>(
          <Card key={product.id} product={product} />
        ))
      }
    </section>
   </div>

  )
}

export default Shop