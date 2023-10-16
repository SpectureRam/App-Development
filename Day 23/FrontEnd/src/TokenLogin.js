import React from "react";

const TokenLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'ramphilo@gmail.com',
          password: '12345',
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        localStorage.setItem('authToken', token);
      } else {
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  };
