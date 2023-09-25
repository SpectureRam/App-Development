import React from 'react';

const ProductCategoryList = ({ categories }) => {
  return (
    <div className="fixed top-16 left-0 p-4 bg-white border shadow-lg">
      <ul>
        {categories.map(category => (
          <li key={category.id} className="py-2">
            <a href={`#${category.id}`} className="text-blue-500 hover:text-blue-700">
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCategoryList;
