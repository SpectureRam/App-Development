import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  customers: [], // Initial customers array
};

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      state.customers.push(action.payload);
    },
    removeCustomer: (state, action) => {
      state.customers = state.customers.filter(customer => customer.id !== action.payload);
    },
  },
});

export const { addCustomer, removeCustomer } = customersSlice.actions;
export default customersSlice.reducer;
