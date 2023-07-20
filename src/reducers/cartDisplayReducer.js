import { createSlice } from "@reduxjs/toolkit";

const cartDisplayReducer = createSlice({
    name: 'cartDisplay',
    initialState: { showCart: false },
    reducers: {
        toggleCart(state) {
            state.showCart = !state.showCart;
        }
    }
});

export const cartDisplayAction = cartDisplayReducer.actions;
export default cartDisplayReducer;