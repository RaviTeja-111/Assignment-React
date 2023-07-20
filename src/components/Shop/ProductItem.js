import { useDispatch } from 'react-redux'

import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartUpdateActions } from '../../reducers/cartUpdateReducer';


const ProductItem = (props) => {
  const { id, title, price, description } = props;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartUpdateActions.addItemToCart(
      id,
      title,
      price
    ));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>₹{price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
