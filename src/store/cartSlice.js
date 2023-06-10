import { createSlice } from '@reduxjs/toolkit';


function CreateItem(id, name, price, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = 1;
    this.totalPrice = price * this.quantity;
    this.description = description;
}

const initialState = {
    item:[],
};

const cartSlice = createSlice({
    name:'cart item',
    initialState,
    reducers: {
        addItem (state,action) {

            const idx = state.item.findIndex(item => item.id === action.payload.id);
            if(idx !== -1) {
                let item = state.item[idx];
                state.item[idx] = {
                    ...item,
                    quantity: item.quantity + 1,
                    totalPrice: item.price * (state.item[idx].quantity  + 1) ,
                }
            } else {
                const newItem = new CreateItem(action.payload.id, action.payload.title, action.payload.price, action.payload.description);
                state.item.unshift(newItem);
            }
    },
        increaseQuantity (state,action) {
            const idx = state.item.findIndex(item => item.id === action.payload.id);
            let item = state.item[idx];
                state.item[idx] = {
                    ...item,
                    quantity: item.quantity + 1,
                    totalPrice: item.price * (state.item[idx].quantity  + 1) ,
                }

        },
        decreaseQuantity () {},
    }
});


export const cartSliceReducer = cartSlice.reducer;
export const cartSliceActions = cartSlice.actions;
