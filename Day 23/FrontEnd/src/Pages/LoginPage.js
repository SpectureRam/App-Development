import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cover_img from '../Images/login.jpg';
import {login} from '../Features/User';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [phone , usePhone] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
        email,
        password,
      });
  
      if (response.status === 200) {
        const { token, uid, role } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('uid', uid);
        localStorage.setItem('role', role);
        dispatch(login({ name: email }));
  
        toast.success('You are logged in.');
        navigate('/');
      } else if (response.status === 403) {
        toast.error("Invalid Credentials.");
      } else {
        toast.error("This didn't work.");
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  
  
 
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
 
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
    <div className="w-full h-screen flex items-start]">
     
       {isMobile ? (
       <div></div>
      ) : (
        <div className="relative w-full h-full flex flex-col ">
        <img src={Cover_img} className="w-full h-full object-cover" alt="Cover" />
     
      </div>
      )}
     
      <div className="w-full h-full bg-[#e7e6e6] flex flex-col p-5 justify-between items-center">
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
        <h1 className="text-[30px] text-[#0606060] font-serif">ESSENTIA</h1>

        <div className="w-fil flex flex-col w-[55%]">
          <div className="w-flex flex flex-col mb-5">
            <h3 className="text-3xl font-semibold mb-2">Login</h3>
            <p className="text-base mb-2">Welcome Back to Essentia - Your Home, Your Way</p>
          </div>

          <div className="w-full flex flex-col">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
            
          </div>
          
          <div className="w-full flex flex-col my-4">
            <button
              onClick = {handleLogin}
              className="w-full bg-[#060606] my-2 text-white font-semibold border-2 rounded-md p-4 text-center flex items-center justify-center hover:text-black hover:bg-white border-black"
            >
              Login
            </button> 
          </div>
          </div>
          
          <div className="justify-center items-center flex-shrink mb-16 relative">
            <Link to="/register">
              <p className="text-sm font-normal text-[#060606]">Dont have an account? <span className="font-semibold underline ring-offset-2 cursor-pointer">Sign up for free</span></p></Link>
          </div>
          </div>
    </div>
      </div>
  );
}

export default LoginPage;