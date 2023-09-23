import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct, editProduct, removeAll} from '../features/Product';
import DisplayProducts from './DisplayProducts'; 
import DefaultSidebar from '../components/Sidebar';
import Sidebar from '../components/Sidebar';

const Products = () => {
  const product = useSelector((state) => state.product.value);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
    category: '',
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
      description: '',
      category: '',
    });
  };

  const handleEdit = (id) => {
    const editedProduct = prompt('Enter new details for the product (format: name,description,category)');
    if (editedProduct) {
      const [name, description, category] = editedProduct.split(',');
      dispatch(editProduct({ id, name, description, category }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <div className='flex '>
      <Sidebar/>
     
      <div className='flex-1  bg-gray-200 pl-[100px]'>

    
    <div className="container mx-auto mt-8">
   
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={() => console.log('Add Product Clicked')}
      >
        Add Product
      </button>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="productId" className="block text-gray-700 text-sm font-bold mb-2">Product ID</label>
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
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
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
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
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
    {/* <button onClick={()=>dispatch(addProduct({id:'1',name:'sofa',description:'des',category:'furniture'}))}
     className='bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-10 border-blue-900 rounded-full h-[70px]'>
      Show Products</button> */}
    <button onClick={()=>dispatch(removeAll())}
     className='bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-10 border-blue-900 , rounded-full h-[70px]'>
      Remove All</button>

      </div>

      <DisplayProducts />
    </div>
    </div>

</div>
  );
};

export default Products;
