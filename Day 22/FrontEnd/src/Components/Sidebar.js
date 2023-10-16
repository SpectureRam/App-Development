import React from 'react';

function Sidebar() {
  return (
    <div class="flex flex-col w-56  overflow-hidden bg-gray-100">
      <div class="flex items-center justify-center h-20 shadow-md">
        <h1 class="text-3xl uppercase text-indigo-500">ESSENTIA</h1>
      </div>
      <ul class="flex flex-col py-10 ">
        {/* ... Your list items here ... */}
        <li>
        <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-home"></i></span>
          <span class="text-sm font-medium">Products</span>
        </a>
      </li>
      <li>
        <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-music"></i></span>
          <span class="text-sm font-medium">Customers</span>
        </a>
      </li>
      <li>
        <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-drink"></i></span>
          <span class="text-sm font-medium">Orders</span>
        </a>
      </li>
      <li>
        <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-shopping-bag"></i></span>
          <span class="text-sm font-medium">Vouchers</span>
        </a>
      </li>
      {/* <li>
        <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-chat"></i></span>
          <span class="text-sm font-medium">Chat</span>
        </a>
      </li>
      <li>
        <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-user"></i></span>
          <span class="text-sm font-medium">Profile</span>
        </a>
      </li> */}
    
    
      </ul>
    </div>
  );
}

export default Sidebar;
