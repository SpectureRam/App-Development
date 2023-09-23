import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {configureStore} from '@reduxjs/toolkit'
import productReducer from './features/Product'
import DefaultSidebar from './components/Sidebar';
import userReducer from './features/User'


const store = configureStore({
  reducer:{
    product:productReducer,
    user: userReducer
  } 
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> 
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
