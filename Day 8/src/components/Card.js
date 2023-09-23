import React from 'react'
 
const Cards = ({product}) => {
  const {id,name,description,price,image,rating} =product;
  return(

    <div >
      <div>
        <img src={image} alt='product' />
      </div>
        <div>

        </div>
    </div>
  );
  
}

export default Cards;
 