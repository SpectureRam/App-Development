import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/solid';
import Navbar from '../Pages/Navbar';
import { Toaster, toast } from 'react-hot-toast';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    rating: 0,
    comment: '',
  });
  const [quantity, setQuantity] = useState(1); // New state for quantity
  
  const addToCart = async () => {
    try {
      toast.success('Item Added to Cart');
      const apiUrl = 'http://localhost:8080/api/users/addToCart';
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('uid');
      const productId = window.location.pathname.split('/').pop();

      // Send a request to add the product to the user's cart
      const response = await axios.post(
        apiUrl,
        {
          userId: userId,
          productId: productId,
          quantity: quantity, // Include quantity in the request
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('Product added to cart:', response.data);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const fetchData = async () => {
    try {
      const productId = window.location.pathname.split('/').pop();
      const productResponse = await axios.get(`http://localhost:8080/api/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setProduct(productResponse.data);
      
      const reviewsResponse = await axios.get(`http://localhost:8080/api/productreviews/byProduct/${productId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setReviews(reviewsResponse.data);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [reviews]); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };
 const calculateAverageRating = () => {
    if (reviews.length === 0) {
      return 0;
    }

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / reviews.length;
    return averageRating;
  };

  const averageRating = calculateAverageRating();
  const handleSubmitReview = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = 'http://localhost:8080/api/productreviews';
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('uid');
      const productId = window.location.pathname.split('/').pop();

      const response = await axios.post(
        apiUrl,
        {
          product: {
            productId: productId,
          },
          user: {
            uid: userId,
          },
          rating: newReview.rating,
          comment: newReview.comment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setNewReview(prevReview => ({
        ...prevReview,
        rating: 0,
        comment: '',
      }));
      fetchData();
      setReviews((prevReviews) => [...prevReviews, response.data]);

      console.log('New Review after submission:', newReview);
    } catch (error) {
    }
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
      <div>
        <Navbar />
        <div className="mx-auto px-4 w-full max-w-7xl bg-white text-gray-700">
          <div className="flex flex-col lg:flex-row">
            <div className="py-8 w-full lg:w-1/2 flex flex-col items-center">
              <span className="self-start ml-10">
                <button className="text-gray-300 hover:text-red-500">
                  <HeartIcon className="w-10 h-10" />
                </button>
              </span>
              <div className="w-auto h-56 sm:h-72 lg:h-full max-h-96 overflow-hidden pr-10">
                <img src={product.productImage} alt={product.productName} className="object-contain w-full h-full" />
              </div>
              <button
              onClick={() => {
                const reviewsSection = document.getElementById('customer-reviews-section');
                if (reviewsSection) {
                  reviewsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-base text-white py-2 px-4 rounded-md"
            >
              Jump to Customer Reviews
            </button>
            </div>
            <div className="lg:py-8 w-full lg:w-1/2 flex flex-col lg:border-l-2 border-gray-200">
              <div className="order-3 lg:order-1 pb-5 sm:px-6 lg:border-b-2 border-gray-200">
                <h1 className="hidden lg:block text-4xl text-gray-700 font-light tracking-wide">Product Name : {product.productName}</h1>
                <p className="mt-10 text-base text-gray-500">Product Description : {product.productDescription}</p>
              </div>
              <div className="order-1 lg:order-2 py-8 sm:px-6 border-b-2 border-gray-200">
                <h1 className="mb-5 block lg:hidden text-3xl sm:text-4xl text-gray-700 font-light tracking-wide">{product.productName}</h1>
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <label htmlFor="quantity" className="sr-only">Select the quantity</label>
                  <input
                    type="number"
                    defaultValue={quantity}
                    min="1"
                    onChange={(e) => setQuantity(e.target.value)}
                    className="form-input py-1 pl-2 w-20 rounded border-2 border-gray-300 bg-gray-100 focus:border-yellow-600 focus:ring-0"
                  />
                </div>
              </div>
              <div className="order-2 lg:order-3 pt-8 sm:px-6 flex flex-wrap lg:flex-nowrap justify-around items-center border-b-2 lg:border-none border-gray-200">
  <span className="m-2.5 text-4xl text-gray-500 font-extrabold">
    <span className="font-normal">₹</span>
    {product.productPrice}
  </span>
  <button type="button" onClick={addToCart} className="m-2.5 py-1.5 px-5 inline-flex items-center rounded-md bg-yellow-500 text-base text-white font-semibold uppercase whitespace-nowrap hover:bg-yellow-600">
    <Toaster position="top-right" reverseOrder={false} />
    <ShoppingBagIcon className="mr-3 w-6 h-6" />
    Add to cart
  </button>
  <div className="flex items-center">
    <p className="mr-2 font-bold text-lg">Average Rating:</p>
    <div className="flex items-center space-x-1">
      {[...Array(Math.floor(averageRating))].map((star, index) => (
        <span key={index} className="flex-shrink-0">
          <svg className="w-4 h-4 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 0.587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
          </svg>
        </span>
      ))}
      {averageRating % 1 !== 0 && (
        <span className="flex-shrink-0">
          <svg className="w-4 h-4 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524v-12.005zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" />
          </svg>
        </span>
      )}
      {[...Array(5 - Math.ceil(averageRating))].map((star, index) => (
        <span key={index} className="flex-shrink-0">
          <svg className="w-4 h-4 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" />
          </svg>
        </span>
      ))}
    </div>
  </div>
</div>
<div className="order-3 lg:order-5 pt-8 sm:px-6 ml-8 mt-8">
  <h2 className="text-2xl font-semibold mb-4">Write a Review</h2>
  <form onSubmit={handleSubmitReview}>
    <div className="mb-4">
      <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
        Rating
      </label>
      <input
        type="number"
        id="rating"
        name="rating"
        min="1"
        max="5"
        value={newReview.rating}
        onChange={handleInputChange}
        className="mt-1 p-2 border border-gray-300 rounded-md w-16"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
        Comment
      </label>
      <textarea
        id="comment"
        name="comment"
        value={newReview.comment}
        onChange={handleInputChange}
        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
      />
    </div>
    <button type="submit" className="py-2 px-4 bg-yellow-500 text-white rounded-md">
      Submit Review
    </button>
  </form>
</div>
   </div>
  </div>
  <div id="customer-reviews-section" className="order-4 pt-8 sm:px-6 bg-white">
    <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
    <div className="flex flex-col">
      {reviews.map(review => (
        <div key={review.reviewId} className="border p-4 rounded-md shadow-md mb-4">
          <p className="text-lg font-semibold mb-2">{`Rating: ${review.rating}`}</p>
          <p>{`User: ${review.firstname}`}</p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
</div>
            </div>
      </div>
    );    
};

export default ProductDetails;
