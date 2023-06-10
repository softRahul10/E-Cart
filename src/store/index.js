import { configureStore } from '@reduxjs/toolkit';

// Cart state
import { cartShowReducer } from './cartShowSlice';

const store = configureStore({
    reducer: cartShowReducer    
});

export default store;