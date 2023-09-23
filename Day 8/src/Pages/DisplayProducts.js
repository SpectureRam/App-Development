import React from 'react'
import { addProduct, removeProduct, editProduct, removeALl} from '../features/Product';

import { useDispatch, useSelector } from 'react-redux';


function DisplayProducts() {

    const product = useSelector((state) => state.product.value);
    const dispatch = useDispatch();
    
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
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Product List</h2>
      <div className="grid grid-cols-4 gap-4">
        {product.map((product) => (
          <div key={product.id} className="border p-4 bg-white">
            <div className="mb-2">Product ID: {product.id}</div>
            <div className="mb-2">Name: {product.name}</div>
            <div className="mb-2">Description: {product.description}</div>
            <div>Category: {product.category}</div>
            <button
              onClick={() => handleRemove(product.id)}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayProducts;