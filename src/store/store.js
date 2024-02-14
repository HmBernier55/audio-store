import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import checkoutReducer from './checkoutSlice';
import navReducer from './navSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    checkout: checkoutReducer,
    nav: navReducer,
  }
})

export default store;