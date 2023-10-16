import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast'; 
import { DefaultSidebar } from './SideB';
import axios from 'axios';
function AddProductPage() {
  const [product, setProduct] = useState({
    productName: '',
    productPrice: '',
    productImage: '',
    productCategory: {
      categoryId: '',
    },
    productQuantity: '',
    productDescription: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:8080/api/products', product, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        // Clear the form fields
        setProduct({
          productName: '',
          productPrice: '',
          productImage: '',
          productCategory: {
            categoryId: '',
          },
          productQuantity: '',
          productDescription: '',
        });

        // Show success toast
        toast.success('Product added successfully!', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: true,
        });
      } else {
        // Show an error toast
        toast.error('Failed to add product. Please try again.', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    } catch (error) {
      // Log the error and show an error toast
      console.error('Error adding product:', error);
      toast.error('An unexpected error occurred. Please try again later.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  };

  return (
    <div className="flex">
      <DefaultSidebar />
      <div className="flex-grow pl-[20rem]">
        <div className="p-6">
          <Toaster />
          <h2 className="text-2xl mb-4 font-bold text-blue-700">Add a Product</h2>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto bg">
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Name:</label>
              <input
                type="text"
                name="productName"
                value={product.productName}
                onChange={handleChange}
                className="border border-gray-400 p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Price:</label>
              <input
                type="text"
                name="productPrice"
                value={product.productPrice}
                onChange={handleChange}
                className="border border-gray-400 p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Image URL:</label>
              <input
                type="text"
                name="productImage"
                value={product.productImage}
                onChange={handleChange}
                className="border border-gray-400 p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Category ID:</label>
              <input
  type="text"
  name="productCategory"
  value={product.productCategory.categoryId}
  onChange={(e) =>
    setProduct({
      ...product,
      productCategory: { categoryId: e.target.value },
    })
  }
  className="border border-gray-400 p-2 w-full"
/>

              
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Quantity:</label>
              <input
                type="text"
                name="productQuantity"
                value={product.productQuantity}
                onChange={handleChange}
                className="border border-gray-400 p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Description:</label>
              <input
                type="text"
                name="productDescription"
                value={product.productDescription}
                onChange={handleChange}
                className="border border-gray-400 p-2 w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProductPage;