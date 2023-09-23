import React, { useState } from 'react';
import image from './image.svg'
const AdminPanel = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`flex h-screen ${isSidebarOpen ? 'overflow-hidden' : ''}`}>
      {/* Sidebar */}
      <nav className={`bg-gray-800 text-white w-64 p-4 ${isSidebarOpen ? 'block' : 'hidden'}`}>
        {/* Sidebar content */}
        <div className="text-2xl font-bold mb-4">E-commerce Admin</div>
        <ul>
          <li className="mb-2">
            <a href="#" className="block py-2 px-4 hover:bg-gray-700">Dashboard</a>
          </li>
          <li className="mb-2">
            <a href="#" className="block py-2 px-4 hover:bg-gray-700">Products</a>
          </li>
          <li className="mb-2">
            <a href="#" className="block py-2 px-4 hover:bg-gray-700">Orders</a>
          </li>
          {/* Add more sidebar links as needed */}
        </ul>
      </nav>

      {/* Content */}
      <div className="flex-1 p-4">
        <button
          className="bg-gray-800 text-white px-3 py-1 rounded-md mb-4"
          onClick={toggleSidebar}
        >
        {isSidebarOpen ? (
            <span className="material-icons">close</span>
          ) : (
            <span className="material-icons">menu</span>
          )}
        </button>
        <div className="bg-white p-4 rounded shadow-lg">
          {/* Admin panel content */}
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          {/* Add your e-commerce admin content here */}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;