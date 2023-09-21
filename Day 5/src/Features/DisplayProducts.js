import React from 'react';
import { editProduct, removeProduct } from './Product';
import { useDispatch, useSelector } from 'react-redux';

function DisplayProducts() {
  const products = useSelector((state) => state.product.value);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <div className=''>
    <div className="mt-8">
      <h1 className="text-xl font-bold mb-4">Product List</h1>
      <div className="max-w-md mx-auto"> {/* Add max width and center the content */}
        <table className="w-full border border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Product ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Image</th>
              <th className="border p-2">Type</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border p-2">{product.id}</td>
                <td className="border p-2">{product.name}</td>
                <td className="border p-2">
                  <img src={product.image} alt={product.name} style={{ width: '100px' }} />
                </td>
                <td className="border p-2">{product.type}</td>
                <td className="border p-2">
                  <button onClick={() => handleRemove(product.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  
  );
}

export default DisplayProducts;
