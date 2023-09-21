import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { Link, Navigate, useNavigate} from 'react-router-dom';
import Cover_img from './image.jpg';
import { useDispatch } from 'react-redux';
import { login } from './User';

const colors = {
  primary: "#060606",
  background: "#E0E0E0",
  disabled: "#D9D9D9"
}

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email.match(emailPattern)) {
      setErrorMessage('Please enter a valid email address.');
    } else {
      dispatch(login({name:email}));
      setErrorMessage('');
      console.log('Email is valid:', email);
      navigate("/home");
    }
  };

  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <img src={Cover_img} className="w-full h-full object-cover hidden md:block" alt="Cover" />
      </div>

      <div className="w-1/2 h-full bg-[#e7e6e6] flex flex-col p-5 justify-between items-center">
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
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
          </div>

          <div className="w-full flex intems-center justify-between">
            <div className="w-full flex">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p className="text-sm">Remember Me</p>
            </div>

            <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline-offset-2">Forgot password?</p>
          </div>

          <div className="w-full flex flex-col my-4">
           <button
              onClick={validateEmail}
              className="w-full bg-[#060606] my-2 text-white font-semibold border-2 rounded-md p-4 text-center flex items-center justify-center hover:text-black hover:bg-white border-black"
            >
              Login
            </button>
            {/* <Link to="/register">
              <button className="w-full bg-white border-2 border-black my-2 text-[#060606] font-semibold rounded-md p-4 text-center flex items-center justify-center hover:bg-[#060606] hover:my-2 hover:text-white">
                Register
              </button>
            </Link> */}
          </div>

          <div className="w-full flex items-center justify-center relative py-2">
            <div className="w-full h-[1px] bg-black"></div>
            <p className="text-lg absolute  text-black/80 bg-[#E0E0E0]"></p>
          </div>
          <div className='flex items-center justify-center mt-[20px]'>
            <GoogleOAuthProvider clientId="888255469108-d8pet2nr7lr10qc04abnad2o8cturr6m.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={credentialResponse => {
                  var decoded = jwt_decode(credentialResponse.credential);
                  dispatch(login({name:decoded.name}));
                  navigate("/home")
                }}
                onError={() => {
                  console.log('Login Failed');
                  navigate("/");
                }}
              />
            </GoogleOAuthProvider>
          </div>
        </div>

        <div className="justify-center items-center">
          <Link to="/register">
            <p className="text-sm font-normal text-[#060606] pb-10">
            Don't have an account? 
            <span className="font-semibold underline ring-offset-2 cursor-pointer">Sign up for free</span></p></Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;