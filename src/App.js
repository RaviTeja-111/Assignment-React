import { useSelector, useDispatch } from 'react-redux';
import { useEffect, Fragment } from 'react';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './actions/cartActions';

let isInitial = true;

function App() {
  const disp = useSelector(state => state.cartDisplay.showCart);
  const cart = useSelector(state => state.cartUpdate);
  const notification = useSelector(state => state.cartDisplay.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.isChanged) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

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
