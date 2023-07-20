import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const disp = useSelector(state => state.cartDisplay.showCart);
  return (
    <Layout>
      {disp && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
