import  basketSlice  from './Slices/basketSlice';
import { configureStore } from '@reduxjs/toolkit';
  
  export const store = configureStore({
    reducer: {
        basket : basketSlice,
    },
  });