import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DefaultSidebar } from './SideB';
import EditProductModal from './EditProductModal';
function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [editedProduct, setEditedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/products', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  const handleRemoveProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/products/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      setProducts(products.filter(product => product.productId !== id));
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.error(`Product with ID ${id} not found.`);
      } else {
        console.error('Error removing product:', error);
      }
    }
  };

  const handleImageError = (e) => {
    e.target.style.display = 'none';
  };

  const handleEditClick = (product) => {
    setEditedProduct(product);
    setIsModalOpen(true);
  };

  const handleEditSubmit = async (editedFields) => {
    try {
      const response = await axios.put(`http://localhost:8080/api/products/${editedProduct.productId}`, editedFields, {
        headers: {
            'Authorization': `Bearer ${token}`,
          },
      });

      // Update the products array
      setProducts(products.map(p => (p.productId === editedProduct.productId ? response.data : p)));

      setIsModalOpen(false);
      setEditedProduct(null);
    } catch (error) {
      console.error('Error editing product:', error);
    }
  };

  return (
    <div className="flex mr-8">
      <DefaultSidebar />
      <div className="flex-grow pl-[20rem]">
        <div>
          <h2 className="text-2xl font-bold pt-10 text-yellow-700 mb-4">Available Products</h2>
          {products.length === 0 ? (
            <div className="text-center text-gray-500">No products available</div>
          ) : (
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map(product => (
                <div key={product.productId} className="border p-4 rounded-md shadow-md">
                  <img
                    src={product.productImage}
                    alt={product.productName}
                    className="w-full h-32 object-cover mb-2"
                    onError={handleImageError}
                  />
                  <h3 className="text-xl font-semibold mb-2">{product.productName}</h3>
                  <p className="mb-2">Description: {product.productDescription}</p>
                  {product.productCategory ? (
                    <>
                      <p className="mb-2">Category: {product.productCategory.categoryName}</p>
                    </>
                  ) : (
                    <p className="mb-2">Category: Not specified</p>
                  )}
                  <p className="mb-2">Price: {product.productPrice}</p>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                    onClick={() => handleRemoveProduct(product.productId)}
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
        </div>
        {editedProduct && (
          <EditProductModal
            isOpen={isModalOpen}
            editedProduct={editedProduct}
            onSubmit={handleEditSubmit}
            onClose={() => {
              setIsModalOpen(false);
              setEditedProduct(null);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default ProductListPage;