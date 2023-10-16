import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RazorpayComponent = ({ totalAmount, productsToUpdate }) => {
  const [orderId, setOrderId] = useState('');
  const [razorpayKey, setRazorpayKey] = useState('');
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    const createRazorpayOrder = async () => {
      try {
        const bearerToken = token;
        const response = await axios.post(
          'http://localhost:8080/pg/createOrder',
          {
            customerName: 'John Doe',
            email: 'john@example.com',
            phoneNumber: '9999999999',
            amount: totalAmount,
            productsToUpdate: productsToUpdate, // Include the updated items
          },
          {
            headers: {
              Authorization: `Bearer ${bearerToken}`,
              'Content-Type': 'application/json',
            },
          }
        );
        console.log('Products to update:', productsToUpdate);
        const { razorpayOrderId, secretKey } = response.data;
        setOrderId(razorpayOrderId);
        setRazorpayKey(secretKey);

        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        script.onload = loadRazorpay;
        document.body.appendChild(script);
      } catch (error) {
        console.error('Error creating Razorpay order:', error);
      }
    };

    createRazorpayOrder();
  }, []);

  const loadRazorpay = () => {
    const options = {
      key: "rzp_test_60QGs0N7xyVBaj",
      amount: totalAmount * 100,
      currency: 'INR',
      name: 'ESSENTIA',
      description: 'Purchase Description',
      order_id: orderId,
      handler: function (response) {
        console.log(response);
        if (response.razorpay_payment_id) {
          console.log('Payment successful!');
          navigate('/success', { state: { productsToUpdate } }); // Pass productsToUpdate to the success page
        } else {
          console.log('Payment failed!');
          navigate('/fail');
        }
      },
      prefill: {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#F37254',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return <div></div>;
};

export default RazorpayComponent;
