// src/components/AdminLogin.js

import React, { useState } from 'react';
import adminData from './adminData'; // Import adminData from the separate file
import image from '../data/black.png'
import { Navigate, useNavigate } from 'react-router-dom';
const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => { 
    const isAdmin = adminData.some((admin) => admin.username === username && admin.password === password);

    if (isAdmin) {
      setLoggedIn(true);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
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
            type="text"
            placeholder="Username"
            className="w-full p-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
