import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Features/CartSlice';
import axios from 'axios';

function ProductListPage() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/products', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  const handleImageError = (e) => {
    e.target.style.display = 'none';
    // Handle image error
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <Navbar />
      <div className="flex align-center justify-center mb-5">
        <div>
          <h2 className="text-2xl font-bold pt-10 text-black mb-4">Available Products</h2>
          {products.length === 0 ? (
            <div className="text-center text-gray-500">No products available</div>
            
          ) : (
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map(product => (
                <div key={product.productId} className="border p-4 rounded-md shadow-md bg-gray-300">
                  <img
                    src={product.productImage}
                    alt={product.productName}
                    className="w-full h-32 object-cover mb-2"
                    onError={handleImageError}
                  />
                  <h3 className="text-xl font-semibold mb-2">{product.productName}</h3>
                  <p className="mb-2">Description: {product.productDescription}</p>
                  {product.productCategory ? (
                    <>
                      <p className="mb-2">Category: {product.productCategory.categoryName}</p>
                    </>
                  ) : (
                    <p className="mb-2">Category: Not specified</p>
                  )}
                  <p className="mb-2">Price: {product.productPrice}</p>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductListPage;
