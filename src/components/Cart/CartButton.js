import { useDispatch, useSelector } from 'react-redux';

import { cartDisplayAction } from '../../reducers/cartDisplayReducer';
import classes from './CartButton.module.scss';

const CartButton = (props) => {
  const cartQuantity = useSelector(state => state.cartUpdate.totalQuantity);
  const dispatch = useDispatch()
  const cartDisplayHandler = () => {
    dispatch(cartDisplayAction.toggleCart());
  }
  return (
    <button className={classes.button} onClick={cartDisplayHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
