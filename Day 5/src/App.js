// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Products from "./Features/Products.js";
import Login from "./Login/LoginPage.js";
import SignUp from "./Signup/SignUpPage.js";
export default function App() {
  return (
    <div>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route index path="/home" element={<Products/>} />
        <Route path="/register" element={<SignUp/>} />
        </Routes>
    </BrowserRouter>
    </div>
            
  );
}