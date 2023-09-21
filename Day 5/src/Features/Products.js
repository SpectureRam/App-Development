import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct, editProduct, removeAll } from './Product';
import DisplayProducts from './DisplayProducts';
import { setImage } from './Product';
import Navbar from '../Navbar/Navbar.jsx';

const Products = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: '', // Added id field
    name: '',
    type: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(formData));
    setFormData({
      id: '',
      name: '',
      type: '',
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    dispatch(setImage(file)); // Store the selected image in Redux
  };

  const handleEdit = (id) => {
    const editedProduct = prompt('Enter new details for the product (format: name,type)');
    if (editedProduct) {
      const [name, type] = editedProduct.split(',');
      dispatch(editProduct({ id, name, type }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };

  // Replace this with your product list rendering code
  const productList = useSelector((state) => state.product.value);

  return (
    <>
    <Navbar/>
    <div className='float-right mr-20'>
    <DisplayProducts />
    </div>
    <div className="container mx-auto mt-8">
      {/* ... Rest of your code ... */}
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={() => console.log('Add Product Clicked')}
      >
        Add Product
      </button>
      <form onSubmit={handleSubmit} className="max-w-md mx-15 bg-white p-10 rounded shadow-md-5">
        <div className="mb-4">
          <label htmlFor="id" className="block text-gray-700 text-sm font-bold mb-2">Product ID</label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block text-gray-700 text-sm font-bold mb-2">Product Type</label>
          <input
            type="text"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Product Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>

      <div className='flex flex-col w-[250px] gap-[30px]'>
        <button onClick={() => dispatch(removeAll())}
          className='bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-10 border-blue-900 rounded-full h-[70px]'>
          Remove All</button>
      </div>

    </div>
    </>
  );
};

export default Products;
