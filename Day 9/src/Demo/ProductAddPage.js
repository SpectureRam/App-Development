import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/Product';
import { toast, Toaster } from 'react-hot-toast'; 
import { DefaultSidebar } from './SideB';

function AddProductPage() {
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    id: '',
    name: '',
    description: '',
    category: '',
    price: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (product.id && product.name && product.price && product.imageUrl) {
      dispatch(addProduct(product));

      setProduct({
        id: '',
        name: '',
        description: '',
        category: '',
        price: '',
        imageUrl: '',
      });

      toast.success('Product added successfully!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
      });
    } else {
      toast.error('Please fill in all fields!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  };

  return (
      <div className="flex">
        <DefaultSidebar />
        <div className=" flex-grow pl-[20rem]"> 
    <div className="p-6">
        <Toaster/>
      <h2 className="text-2xl mb-4 font-bold text-blue-700">Add a Product</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg">
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">ID:</label>
          <input
            type="text"
            name="id"
            value={product.id}
            onChange={handleChange}
            className="border border-gray-400 p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Name:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="border border-gray-400 p-2 w-full"
          />
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Description:</label>
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
            className="border border-gray-400 p-2 w-full"
          />
          </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Category:</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            className="border border-gray-400 p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Price:</label>
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="border border-gray-400 p-2 w-full"
            />
            </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">quantity:</label>
          <input
            type="text"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            className="border border-gray-400 p-2 w-full"
            />
            </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            value={product.imageUrl}
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
