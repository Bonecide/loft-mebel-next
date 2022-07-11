import  basketSlice  from './Slices/basketSlice';
import { configureStore } from '@reduxjs/toolkit';
import  priceSlice  from './Slices/priceSlice';
  
  export const store = configureStore({
    reducer: {
        basket : basketSlice,
        price : priceSlice,
    },
  });