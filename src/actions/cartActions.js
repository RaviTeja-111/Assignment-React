import { cartDisplayAction } from '../reducers/cartDisplayReducer'
import { cartUpdateActions } from '../reducers/cartUpdateReducer'

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                'https://for-react-78799-default-rtdb.firebaseio.com/cart.json'
            );
            if (!response.ok) {
                throw new Error('Could not fetch cart data!');
            }
            const data = await response.json();
            return data;
        };

        try {
            const cartData = await fetchData();
            dispatch(
                cartUpdateActions.replaceCart({
                    items: cartData.items || [],
                    totalQuantity: cartData.totalQuantity
                })
            );
        } catch (error) {
            dispatch(
                cartDisplayAction.setNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Fetching cart data failed!',
                })
            );
        }
    };
};

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
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity
                })
            });
            if (!response.ok) {
                throw new Error('Sending data failed');
            }
        }
        try {
            await sendRequest();
            dispatch(cartDisplayAction.setNotification({
                status: 'success',
                title: 'Success',
                message: 'Sent data Sucessfully...'
            }));
        } catch (error) {
            dispatch(cartDisplayAction.setNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sent data Sucessfully...'
            }));
        }

    }
}