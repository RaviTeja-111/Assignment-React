import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const disp = useSelector(state => state.cartDisplay.showCart);
  const cart = useSelector(state => state.cartUpdate);

  useEffect(() => {
    fetch('https://for-react-78799-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cart)
    })
  }, [cart])
  return (
    <Layout>
      {disp && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
