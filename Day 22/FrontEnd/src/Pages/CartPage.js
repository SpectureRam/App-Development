import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Navbar2 from "../Pages/Navbar"
import RazorpayComponent from './RazorPayComponent';
import Checkout from './Checkout'
function ExampleCart() {
  const showToast = (message) => {
    toast(message, {
      icon: '🗑️',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };
  
  const uid = localStorage.getItem('uid');
  const userId = uid;
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [, forceUpdate] = useState();
  const [showRazorpay, setShowRazorpay] = useState(false);
  const [checkoutStarted, setCheckoutStarted] = useState(false);
  const navigate = useNavigate();
  

  const handleQuantityChange = (productId, newQuantity) => {
    // Implement the logic to handle quantity change and update the state
    const updatedCartItems = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  // Function to trigger re-render
  const triggerRender = () => forceUpdate(Date.now());

  

  useEffect(() => {
    const fetchData = async () => {
      const bearerToken = localStorage.getItem('token');
  
      try {
        const response = await fetch(`http://localhost:8080/api/users/${userId}/cart`, {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
  
        // Assuming data is an object with a 'cartItems' property
        const cartItemsArray = Array.isArray(data.cartItems) ? data.cartItems : [];
        setCartItems(cartItemsArray);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [userId, cartItems]); // Include cartItems as a dependency
  

  const handleCheckout = () => {
    console.log('Cart Items:', cartItems);
  const totalCost = cartItems.reduce(
    (total, item) => {
      console.log('Item:', item);
      console.log('Subtotal:', item.productPrice * item.quantity);
      return total + item.productPrice * item.quantity;
    },
    0
  );
    console.log('Total Cost before navigating:', totalCost);
    setShowRazorpay(true);
    setCheckoutStarted(true);
    navigate("/checkout", { state: { cartItems , totalCost} });
  }

  const removeFromCart = (itemId) => {
    const bearerToken = localStorage.getItem('token');
    const apiUrl = `http://localhost:8080/api/users/${userId}/cart/${itemId}`;

    fetch(apiUrl, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        showToast('Item Removed from Cart');
        return response.json();
      })
      .then((data) => {
        setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
        triggerRender();
      })
      .catch((error) => {
        console.error('Error removing item from cart:', error);
      });
  };

  const decreaseQuantity = (productId) => {
    const bearerToken = localStorage.getItem('token');
    const apiUrl = `http://localhost:8080/api/users/${userId}/cart/${productId}/decrease`;
  
    fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${bearerToken}`,
      },
      body: JSON.stringify({ quantity: 1 }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCartItems((prevCartItems) => {
          const updatedCartItems = prevCartItems.map((item) =>
            item.id === productId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
          );
          return updatedCartItems;
        });
        triggerRender();
      })
      .catch((error) => {
        console.error('Error decreasing quantity:', error);
      });
  };
  
  
  const increaseQuantity = (productId) => {
    const bearerToken = localStorage.getItem('token');
    const apiUrl = `http://localhost:8080/api/users/${userId}/cart/${productId}/increase`;
  
    fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${bearerToken}`,
      },
      body: JSON.stringify({ quantity: 1 }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const updatedCartItems = cartItems.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedCartItems);
        triggerRender();
      })
      .catch((error) => {
        console.error('Error increasing quantity:', error);
      });
  };
  
  return (
    <div>
      <Navbar2 />
      <Toaster position="top-right" reverseOrder={false} />
      <div className="absolute ml-[70%] mt-6">
    <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
      <li className="flex items-center space-x-3 text-left sm:space-x-4">
        <a className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" href="#"
          ><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg
        ></a>
        <span className="font-semibold text-gray-900">Shop</span>
      </li>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="" strokeLinejoin="" d="M9 5l7 7-7 7" />
      </svg>
      <li className="flex items-center space-x-3 text-left sm:space-x-4">
        <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring-gray-600" href="#">2</a>
        <span className="font-semibold text-gray-900">Shipping</span>
      </li>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
      <li className="flex items-center space-x-3 text-left sm:space-x-4">
        <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" href="#">3</a>
        <span className="font-semibold text-gray-500">Payment</span>
      </li>
    </ul>
  </div>
      <div className="mb-40">
        {loading ? (
          // Loading state
          <p>Loading...</p>
        ) : cartItems.length === 0 ? (
          // Empty cart state
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0  mt-12 mb-16 ">
            <div>
              <h1 className='flex justify-center items-center text-3xl font-bold mb-4 uppercase tracking-wider indent-4'>Nothing in the bag</h1>
              <div className='flex justify-center items-center '>
                <img className='w-[300px]   bg-yellow-400 p-5 rounded-full' src="https://assets.1mg.com/pwa-app/production/dweb/2.0.0/static/images/illustrations/empty-cart.svg" alt="empty cart"></img>
              </div>
              <div className='mt-10 space-y-5'>
                <p>Looks like you have not added anything to your cart. Go ahead & explore top categories</p>
              </div>
              <div className='flex justify-center items-center mt-5'>
                <Link to={'/products'} className="inline-flex overflow-hidden text-white bg-gray-900 rounded group">
                  <span className="px-3.5 py-2 text-white bg-yellow-500 group-hover:bg-yellow-600 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                    </svg>
                  </span>
                  <span className="pl-4 pr-5 py-2.5">Shop Something</span>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          // Cart items state
          <>
            <h2  className="flex font-normal pt-5 text-4xl mt-3 tracking-wider justify-center mb-5">My Cart</h2>
            <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
              <div className="rounded-lg md:w-2/3">
                {cartItems.map((item) => (
                  <div
                    key={item.productId}
                    className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                  >
                    <img
                      src={item.productImage} 
                      alt="product-image"
                      className="w-full rounded-lg sm:w-40"
                    />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">{item.productName}</h2>
                        <p className="mt-1 text-xs text-gray-700">{item.productDescription}</p>
                      </div>
                      <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center border-gray-100">
                          <span
                            onClick={() => decreaseQuantity(item.productId)}
                            className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                          >
                            -
                          </span>
                          <input
                            className="h-8 w-8 border bg-white text-center text-xs outline-none"
                            type="text"
                            value={item.quantity}
                            min="1"
                            onChange={(e) => handleQuantityChange(item.productId, e.target.value)}
                          />
                          <span
                            onClick={() => increaseQuantity(item.productId)}
                            className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                          >
                            +
                          </span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <p className="font-bold">₹ {item.productPrice}</p>
                          <svg
                            onClick={() => removeFromCart(item.productId)}
                            className="h-5 w-15 cursor-pointer text-xl text:bg-red-500"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{cursor:'pointer'}}> 
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                <div className="mb-2 flex justify-between">
                  <p className="text-gray-700">Subtotal</p>
                  <p className="text-gray-700">
                    {cartItems.reduce((total, item) => total + item.productPrice * item.quantity, 0).toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Shipping</p>
                  <p className="text-gray-700">0.00</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-lg font-bold">Total</p>
                  <div>
                    <p className="mb-1 text-lg font-bold">
                      {cartItems.reduce((total, item) => total + item.productPrice * item.quantity, 0).toFixed(2)}
                    </p>
                  </div>
                </div>
                <button
                  className="mt-6 w-full rounded-md bg-yellow-500 py-1.5 font-medium text-blue-50 hover:bg-yellow-600"
                  onClick={handleCheckout}>
                  Check out
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ExampleCart;