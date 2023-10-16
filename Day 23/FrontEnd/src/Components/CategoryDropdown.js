// CategoryDropdown.js
import React from "react";

const CategoryDropdown = ({ categories, handleCategoryClick }) => {
  return (
    <div className="absolute z-20 mt-2 w-48 origin-top-right bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      {categories.map((category) => (
        <div
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
          className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default CategoryDropdown;
