import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        value: [
            { id: '1', name: 'name', description: 'des', category: 'furniture' },
           
        ],
    },

    reducers: {
        addProduct: (state, action) => {
            state.value = [...state.value, action.payload];
        },
        removeAll: (state) => {
            state.value = [];
        },
      
        removeProduct: (state, action) => {
            state.value = state.value.filter(product => product.id !== action.payload);
        },
        editProduct: (state, action) => {
            const updatedProducts = state.value.map(product => 
                product.id === action.payload.id ? { ...product, ...action.payload.changes } : product
            );
            state.value = updatedProducts;
        },
    },
});

export const { addProduct, removeAll,removeProduct,editProduct } = productSlice.actions;
export default productSlice.reducer;
