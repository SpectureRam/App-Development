import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [], // Initial products array
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    editProduct: (state, action) => {
      const editedProduct = action.payload;
      state.products = state.products.map(product => {
        if (product.id === editedProduct.id) {
          return editedProduct;
        }
        return product;
      });
    },
  },
});

export const { addProduct, removeProduct, editProduct } = productsSlice.actions;
export default productsSlice.reducer;
