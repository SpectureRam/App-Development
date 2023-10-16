import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { DefaultSidebar } from './SideB';

const Dashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');

        const usersResponse = await axios.get('http://localhost:8080/api/users', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (usersResponse.status === 200) {
          setTotalUsers(usersResponse.data.length);
        } else {
          console.error('Failed to fetch user data. Please try again.');
        }

        const productsResponse = await axios.get('http://localhost:8080/api/products', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (productsResponse.status === 200) {
          setTotalProducts(productsResponse.data.length);
        } else {
          console.error('Failed to fetch product data. Please try again.');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex bg-grey-500">
      <DefaultSidebar />
      <div className="flex-grow pl-[20rem]">
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="dashboard-card">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Total Users</h2>
              <span className="text-4xl font-bold text-blue-700">{totalUsers}</span>
              <Link to="/users">
                <button className="view-button mt-4">View Users</button>
              </Link>
            </div>
            <div className="dashboard-card">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Total Products</h2>
              <span className="text-4xl font-bold text-blue-700">{totalProducts}</span>
              <Link to="/ViewProducts">
                <button className="view-button mt-4">View Products</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
