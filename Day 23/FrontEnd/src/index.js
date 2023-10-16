import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './Features/Product';
import DefaultSidebar from './Components/Sidebar';
import { applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react'; 
import userReducer from './Features/User';
import cartReducer from './Features/CartSlice';
import customerReducer from './Features/CustomersSlice';
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
  cart: cartReducer,
  customers: customerReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store without providing a type
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false, // Disable serializable check
  }),
});

const persistor = persistStore(store);

Kommunicate.init("4f5af027d93d86d8eaef89b8e78e591f", {
  automaticChatOpenOnNavigation: true,
  popupWidget: true
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

reportWebVitals();
