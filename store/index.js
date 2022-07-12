import  basketSlice  from './Slices/basketSlice';
import { configureStore } from '@reduxjs/toolkit';
import  priceSlice  from './Slices/priceSlice';
import personalInfoSlice  from './Slices/personalInfoSlice';
import  purchaseSlice  from './Slices/purchaseSlice';
  
  export const store = configureStore({
    reducer: {
        basket : basketSlice,
        price : priceSlice,
        personal : personalInfoSlice,
        purchase : purchaseSlice,
    },
  });