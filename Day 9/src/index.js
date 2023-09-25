import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/Product';
import DefaultSidebar from './components/Sidebar';
import {applyMiddleware, combineReducers} from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react'; 
import userReducer from './features/User';
import cartReducer from './features/CartSlice';
import customerReducer from './features/CustomersSlice';
const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
  cart: cartReducer,
  customers :customerReducer,


});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
 
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
 
);

reportWebVitals();
