import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";

export default function Example() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    console.log('Clicked Category ID:', categoryId);
    navigate(`/api/products/byCategory/${categoryId}`);
  };

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch("http://localhost:8080/api/productcategory", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-white mt-[-4%]">
        <div className="max-w-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Shop by Collection</h2>
          <p className="mt-4 text-base text-gray-500">
            Each season, we collaborate with world-class designers to create a collection inspired by the natural world.
          </p>
          {categories.length === 0 ? (
            <Link to="/login"><button className="mt-8 text-lg font-semibold text-gray-700   bg-transparent hover:bg-yellow-500 text-black font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">Login to view categories</button></Link>
          ) : (
          <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {categories.map(category => (
              <a key={category.categoryId} className="group block" onClick={() => handleCategoryClick(category.categoryId)}>
                <div
                  aria-hidden="true"
                  className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
                >
                  <img
                    src={category.categoryImage}
                    alt={category.categoryName}
                    className="w-[800px] h-[300px] object-center object-cover"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">{category.categoryName}</h3>
                <p className="mt-2 text-sm text-gray-500">{category.categoryDescription}</p>
                <br />
              </a>
            ))}
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
