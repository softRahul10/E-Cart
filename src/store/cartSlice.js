import { createSlice } from '@reduxjs/toolkit';


function CreateItem(id, name, price, totalPrice, quantity=1, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.totalPrice = price * quantity;
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
            const idx = state.item.findIndex(item => item.id === action.id);
            if(idx !== -1) {
                let item = state.item[idx];
                state.item[idx] = {
                    ...item,
                    quantity: item.quantity + 1,
                    totalPrice: item.price * this.quantity ,
                }
            } else {
                const newItem = new CreateItem(...action.payload);
                state.item.unshift(newItem);
            }
    },
        increaseQuantity () {},
        decreaseQuantity () {},
    }
});


export const cartSliceReducer = cartSlice.reducer;
export const cartSliceActions = cartSlice.actions;
