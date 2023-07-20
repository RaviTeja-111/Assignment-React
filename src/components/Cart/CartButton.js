import { useDispatch } from 'react-redux';

import { cartDisplayAction } from '../../reducers/cartDisplayReducer';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const cartDisplayHandler = () => {
    dispatch(cartDisplayAction.toggleCart());
  }
  return (
    <button className={classes.button} onClick={cartDisplayHandler}>
      <span>My Cart</span>
      <span className={classes.badge}></span>
    </button>
  );
};

export default CartButton;
