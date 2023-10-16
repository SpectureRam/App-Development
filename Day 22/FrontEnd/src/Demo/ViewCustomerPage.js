import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DefaultSidebar } from './SideB';

const ViewCustomerPage = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:8080/api/users', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex">
      <DefaultSidebar />
      <div className="flex-grow pl-[20rem]">
        <div className="p-8">
          <h1 className="text-2xl mb-4 font-bold">View Users</h1>
          <div className="overflow-x-auto">
            <table className="min-w-full border rounded text-grey">
              <thead>
                <tr className="bg-yellow-100">
                  <th className="p-4">First Name</th>
                  <th className="p-4">Last Name</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Phone Number</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.uid} className="">
                    <td className="p-4">{user.firstName}</td>
                    <td className="p-4">{user.lastName}</td>
                    <td className="p-4">{user.email}</td>
                    <td className="p-4">{user.phoneNumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCustomerPage;