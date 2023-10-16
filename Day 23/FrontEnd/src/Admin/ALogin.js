import React, { useState } from 'react';
import image from '../Images/black.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/adminlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
      const data = await response.json();
      const { token , uid , role} = data;
      localStorage.setItem('token', token);
      localStorage.setItem('uid',uid);
      localStorage.setItem('role',role);
        setLoggedIn(true);
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('An error occurred. Please try again.');
    }
  };

  if (loggedIn) {
    navigate('/AddProducts');
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        {/* Logo */}
        <div className="mb-4 text-center">
          <img src={image} alt="Logo" className="w-20 h-20 mx-auto mb-2" />
        </div>
        <h1 className="text-lg font-semibold mb-4 text-center">Admin Login</h1>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
