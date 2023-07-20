import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = useSelector(state => state.cartUpdate.items)

  console.log(cartItems);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((itm) => <CartItem
          key={itm.id}
          item={{ id: itm.id, title: itm.name, quantity: itm.quantity, total: itm.totalPrice, price: itm.price }}
        />)}
      </ul>
    </Card>
  );
};

export default Cart;
