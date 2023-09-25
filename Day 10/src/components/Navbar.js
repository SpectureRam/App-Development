import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/l1.png";
import {BsPerson} from 'react-icons/bs'
import { useSelector ,useDispatch} from 'react-redux';
import { logout } from '../features/User';
import { useNavigate } from 'react-router-dom';
import Cart from "./Cart";
const Navbar = () => {
  const user = useSelector((state)=> state.user.value)
  

  const Dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAuth = () => {  
    Dispatch(logout());
    window.location.reload();
    navigate('/');
  }
  const [open, setOpen] = useState(false);
  const [popen, setpOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  const toggleProfile = () => {
    setpOpen(!popen);
    
  };
  const setprofile = () => {
     
    setpOpen(false);
  }
  
  return (
    <nav className=" drop-shadow-xl shadow-xl bg-black" >
    {/* <nav className="bg-gray-100 drop-shadow-xl"> */}
      <div className="ml-[20px] max-w-7xl px-2 sm:px-6 lg:px-0">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={open}
              onClick={toggleMenu}  
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className={`block h-6 w-6 ${open ? "hidden" : "block"}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`hidden h-6 w-6 ${open ? "block" : "hidden"}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center space-x-5">
              <img className="h-8 w-auto rotate-45" src={Logo} alt="Your Company" />
              <h1 className="font-serif text-blue-50 text-xl font-semibold">Essentia</h1>
            </div>
            <div  className="hidden sm:ml-6 sm:block">
              <div className="ml-[150px] flex space-x-6">
              <Link
                  to="/"
                  className="text-white hover:bg-yellow-300 hover:text-black rounded-md px-3 py-2 text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/shop"
                  className="text-white  hover:bg-yellow-300 hover:text-black rounded-md px-3 py-2 text-sm font-medium"
                >
                  Products
                </Link>
                <Link
                  to="#"
                  className="text-white  hover:bg-yellow-300 hover:text-black rounded-md px-3 py-2 text-sm font-medium"
                >
                  Category
                </Link>
                <Link
                  to="#"
                  className="text-white  hover:bg-yellow-300 hover:text-black rounded-md px-3 py-2 text-sm font-medium"
                >
                  About Us
                </Link>
                <Link
                  to="/ContactUs"
                  className="text-white  hover:bg-yellow-300 hover:text-black rounded-md px-3 py-2 text-sm font-medium"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute  inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          
         

            <div className="relative ">
              
              <div className="flex flex-row space-x-10">
                
                <button
                onClick={toggleProfile}
               
               
             
                  type="button"
                  className="text-white relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 "
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
                </button>

                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg> */}
<Link to={'/cart'}>
 <Cart /></Link>
                
                
              </div>


  {user.name ?
  (
    <div
    className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
    popen ? "block" : "hidden"
    }`}
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="user-menu-button"
    tabIndex="-20"
  >
    <h1  className="block px-4 py-2 text-sm text-gray-700"
      role="menuitem"
      tabIndex="-1"
      id="user-menu-item-0"> Hello <span className="font-bold">{user.name}</span></h1>
    <Link
      to="#"
      className="block px-4 py-2 text-sm text-gray-700"
      role="menuitem"
      tabIndex="-1"
      id="user-menu-item-0"
    >
      Your Profile
    </Link>
 
    <Link
      to="#"
      className="block px-4 py-2 text-sm text-gray-700"
      role="menuitem"
      tabIndex="-1"
      id="user-menu-item-2"
      onClick={handleAuth}
    >
      Sign out
    </Link>
  </div>
  
  ):(

    //not signed in
    <div
    className={`absolute right-0 z-10 mt-2 w-[250px] origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
    popen ? "block" : "hidden"
    }`}
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="user-menu-button"
    tabIndex="-20"
  >
    <h1  className="block px-4 py-2 text-sm text-black font-bold"
      role="menuitem"
      tabIndex="-1"
      
      id="user-menu-item-0"> Welcome </h1>
      <p className="text-s block px-4 py-1 text-sm text-black font-light -tracking-[-1px]]"
      role="definition"
      tabIndex="-1">To access Account and Manage Orders</p>
    <Link
      to="/login"
      className="block px-4 py-2 text-sm text-gray-700"
      role="menuitem"
      tabIndex="-1"
      id="user-menu-item-0"
    ><button className='bg-transparent text-black font-semibold py-2 px-4 border-[3px] hover:bg-gray-100 border-gray-200 hover:transition-border-color hover:transition-timing-function:ease-in-out hover:transition-duration:200ms hover:border-black'>
    Login/SignUp
</button>
    
    </Link>
  </div>
  
  )
  }            

  
  </div>
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${open ? "block" : "hidden"}`} id="mobile-menu">
        <div className="space-y-5 px-2 pb-3 pt-2 ">
        <Link
            to="#"
            className="text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="#"
            className="text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Products
          </Link>
          <Link
            to="#"
            className="text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Category
          </Link>
          <Link
            to="#"
            className="text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            About Us
          </Link>
          <Link
            to="#"
            className="text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
