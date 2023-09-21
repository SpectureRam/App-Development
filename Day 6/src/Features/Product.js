import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    value: [
      { id: '1', name: 'name1', image: 'image_url_1', type: 'type1' },
      // Add more initial data here if needed
    ],
    currentImage: null, // Store the current image in Redux
  },
  reducers: {
    addProduct: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    removeAll: (state) => {
      state.value = [];
    },
    removeProduct: (state, action) => {
      state.value = state.value.filter((product) => product.id !== action.payload);
    },
    editProduct: (state, action) => {
      const updatedProducts = state.value.map((product) =>
        product.id === action.payload.id ? { ...product, ...action.payload.changes } : product
      );
      state.value = updatedProducts;
    },
    setImage: (state, action) => {
      // Set the current image in Redux
      state.currentImage = action.payload;
    },
    clearImage: (state) => {
      // Clear the current image from Redux
      state.currentImage = null;
    },
  },
});

export const { addProduct, removeAll, removeProduct, editProduct, setImage, clearImage } = productSlice.actions;
export default productSlice.reducer;