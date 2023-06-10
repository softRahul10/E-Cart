import { createSlice } from "@reduxjs/toolkit";

const cartShowSlice = createSlice({
    name:'cartShowOrHide',
    initialState: {
        show: false
    },
    reducers: {
        toggle(state) {
            state.show = !state.show;
        }
    }
});

export const cartShowActions = cartShowSlice.actions;
export const cartShowReducer = cartShowSlice.reducer;