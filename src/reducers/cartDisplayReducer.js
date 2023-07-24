import { createSlice } from "@reduxjs/toolkit";

const cartDisplayReducer = createSlice({
    name: 'cartDisplay',
    initialState: { showCart: false, notification: null },
    reducers: {
        toggleCart(state) {
            state.showCart = !state.showCart;
        },
        setNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            };
        }
    }
});

export const cartDisplayAction = cartDisplayReducer.actions;
export default cartDisplayReducer;