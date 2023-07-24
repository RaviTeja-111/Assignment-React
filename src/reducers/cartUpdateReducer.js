import { createSlice } from "@reduxjs/toolkit";
import { cartDisplayAction } from "./cartDisplayReducer";

const cartUpdateReducer = createSlice({
    name: 'cartDetails',
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;;
            state.items = action.payload.items;
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }

        }
    }
});

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(cartDisplayAction.setNotification({
            title: 'Sending... ',
            status: 'pending',
            message: 'Sending Data...'
        }));
        const sendRequest = async () => {
            const response = await fetch('https://for-react-78799-default-rtdb.firebaseio.com/cart.json', {
                method: "PUT",
                body: JSON.stringify(cart)
            });
            if (!response.ok) {
                throw new Error('Sending data failed');
            }
        }
        try{
            await sendRequest();
            dispatch(cartDisplayAction.setNotification({
                status: 'success',
                title: 'Success',
                message: 'Sent data Sucessfully...'
            }));
        }catch(error){
            dispatch(cartDisplayAction.setNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sent data Sucessfully...'
            }));
        }
        
    }
}
export const cartUpdateActions = cartUpdateReducer.actions;

export default cartUpdateReducer;
