import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const token = localStorage.getItem('token');

const Success = () => {
  const navigate = useNavigate();
  const locationHook = useLocation();
  console.log(locationHook.state);
  const { state } = locationHook || {};
  const { productsToUpdate } = state || {};

  useEffect(() => {
    const updateProductQuantities = async () => {
      try {
        if (productsToUpdate) {
          const updateRequests = productsToUpdate.map(async ({ productId, quantity }) => {
            try {
              // Fetch the current quantity in the database
              const response = await axios.get(
                `http://localhost:8080/api/products/${productId}`,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );
              const currentQuantity = response.data.productQuantity;
              console.log(`Product ${productId} - Current Quantity: ${currentQuantity}`);
              
              
              // Calculate the updated quantity by subtracting the cart quantity
              const updatedQuantity = Math.max(0, currentQuantity - quantity);
              console.log(`Product ${productId} - Updated Quantity: ${updatedQuantity}`);

              // Update the product in the database


              const existingProduct = await axios.get(
                `http://localhost:8080/api/products/${productId}`,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );
  const updatedProduct = {
    ...existingProduct.data,  // Copy existing fields
    productQuantity: updatedQuantity,  // Update the quantity field
  };


              await axios.put(
                `http://localhost:8080/api/products/${productId}`,
                  updatedProduct,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );

              console.log(`Product ${productId} quantity updated successfully`);
            } catch (error) {
              console.error(`Error updating product ${productId} quantity:`, error);
            }
          });

          await Promise.all(updateRequests);

          console.log('Product quantities updated successfully');
        } else {
          console.error('No products to update');
        }
      } catch (error) {
        console.error('Error updating product quantities:', error);
      }
    };

    updateProductQuantities();
  }, [productsToUpdate]);
  

  return (
    <>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#f0f0f0' }}>
    <div className="bg-white p-6 md:mx-auto">
      <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
        <path
          fill="currentColor"
          d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
        ></path>
      </svg>
      <div className="text-center">
        <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
          Payment Done!
        </h3>
        <p className="text-gray-600 my-2">Thank you for completing your secure online payment.</p>
        <p>Have a great day!</p>
        <div className="py-10 text-center">
          <a href="/" className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
            GO HOME
          </a>
        </div>
      </div>
    </div>
  </div>
  </>
  );
};

export default Success;