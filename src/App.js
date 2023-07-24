import { useSelector, useDispatch } from 'react-redux';
import { useEffect, Fragment } from 'react';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { cartDisplayAction } from './reducers/cartDisplayReducer';

let isInitial = true; 

function App() {
  const disp = useSelector(state => state.cartDisplay.showCart);
  const cart = useSelector(state => state.cartUpdate);
  const notification = useSelector(state => state.cartDisplay.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(cartDisplayAction.setNotification({
        status: 'pending',
        title: 'Sending',
        message: 'Sending the data'
      }));
      const response = await fetch('https://for-react-78799-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      });

      if (!response.ok) {
        throw new Error('Sending Data Failed.')
      };
      dispatch(cartDisplayAction.setNotification({
        title: 'Success',
        status: 'success',
        message: 'Data Sent Successfully.'
      }));
    };
    if(isInitial){
      isInitial = false ;
      return ;
    }
    sendCartData().catch(error =>
      dispatch(cartDisplayAction.setNotification({
        status: 'error',
        title: 'Error',
        message: 'Sending Data Failed!'
      })))
  }, [cart, dispatch])
  return (
    <Fragment>
        {notification && <Notification title={notification.title} status={notification.status} message={notification.message} />}
      <Layout>
        {disp && <Cart />}
        <Products />
      </Layout></Fragment>
  );
}

export default App;
