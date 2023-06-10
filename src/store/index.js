import { configureStore } from '@reduxjs/toolkit';

// Cart state
import { cartShowReducer } from './cartShowSlice';

// Cart Item state
import { cartSliceReducer } from './cartSlice';

const store = configureStore({
    reducer: {
        display: cartShowReducer,
        data: cartSliceReducer
    }    
});

export default store;