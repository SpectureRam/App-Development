import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast, Toaster } from 'react-hot-toast';
import { removeProduct, editProduct } from '../features/Product'; // Import editProduct action
import { DefaultSidebar } from './SideB';

function ProductListPage() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({});

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
    toast.success('Product removed successfully!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: true,
    });
  };

  const handleImageError = (e) => {
    e.target.style.display = 'none';
    toast.error('Image not found!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: true,
    });
  };

  const handleEditClick = (product) => {
    setIsEditing(true);
    setEditedProduct(product);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    dispatch(editProduct(editedProduct));
    setIsEditing(false);
    setEditedProduct({});
    toast.success('Product edited successfully!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: true,
    });
  };

  return (
    <div className="flex">
      <DefaultSidebar />
      <div className=" flex-grow pl-[20rem]"> 
        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Available Products</h2>
          {products.length === 0 ? (
            <div className="text-center text-gray-500">No products available</div>
          ) : (
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map(product => (
                <div key={product.id} className="border p-4 rounded-md shadow-md bg-gray-300">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-32 object-cover mb-2"
                    onError={handleImageError}
                  />
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="mb-2">Description: {product.description}</p>
                  <p className="mb-2">Category: {product.category}</p>
                  <p className="mb-2">Price: {product.price}</p>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                    onClick={() => handleRemoveProduct(product.id)}
                  >
                    Remove
                  </button>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={() => handleEditClick(product)}
                  >
                    Edit
                  </button>
                </div>
              ))}
            </div>
          )}
          <Toaster />
        </div>
        {isEditing && (
          <form onSubmit={handleEditSubmit}>
            <input
              type="text"
              value={editedProduct.name}
              onChange={(e) => setEditedProduct({ ...editedProduct, name: e.target.value })}
              placeholder="Name"
              required
            />
            <input
              type="text"
              value={editedProduct.description}
              onChange={(e) => setEditedProduct({ ...editedProduct, description: e.target.value })}
              placeholder="Description"
              required
            />
            <input
              type="text"
              value={editedProduct.category}
              onChange={(e) => setEditedProduct({ ...editedProduct, category: e.target.value })}
              placeholder="Category"
              required
            />
            <input
              type="number"
              value={editedProduct.price}
              onChange={(e) => setEditedProduct({ ...editedProduct, price: e.target.value })}
              placeholder="Price"
              required
            />
            <input
              type="number"
              value={editedProduct.quantity}
              onChange={(e) => setEditedProduct({ ...editedProduct, quantity: e.target.value })}
              placeholder="Price"
              required
            />
            <button type="submit">Save Changes</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ProductListPage;
