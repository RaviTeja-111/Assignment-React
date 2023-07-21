import { useDispatch, useSelector } from 'react-redux'

import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartUpdateActions } from '../../reducers/cartUpdateReducer';


const ProductItem = (props) => {
  const { title, price, description, id } = props;

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartDisplay);

  const addToCartHandler = () => {

    const dumTotalQuantity = cart.totalQuantity+1;  // add dummy cartquant to transefer to server 
    const updatedItems = cart.items.slice(); //copy of items to avoid mutation
1
    const existingItem = updatedItems.find(itm=>itm.id===id); new object + copy existing properties to avoid state mutation

    if(existingItem){
      const updatedItem = {...existingItem}
    }
    dispatch(cartUpdateActions.addItemToCart({
      id,
      title,
      price
    }));
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
