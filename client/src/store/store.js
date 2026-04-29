import { configureStore } from "@reduxjs/toolkit";
import authReducer from 'authSlice';
import productReducer from './productSlice';
import cartReducer from './cartSlice';
import checkoutReducer from './checkoutSlice.js'
export const store = configureStore({
  reducer:{
    auth:authReducer,
    products:productReducer,
    cart:cartReducer,
    store:checkoutReducer
  }
})