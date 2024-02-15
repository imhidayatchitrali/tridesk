'use client'
// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import authSlices from './slices/authSlices';
// import counterReducer from '../slices/counterSlice.js';

const store = configureStore({
  reducer: {
    // counter: counterSlice,
    auth:authSlices
    // add other reducers here
  },
});

export default store;
