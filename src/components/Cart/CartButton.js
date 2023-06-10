import { useSelector } from 'react-redux';

import classes from './CartButton.module.css';

const CartButton = (props) => {

  const numberOfItemsInCart = useSelector(state => state.data.item);
  

  return (
    <button onClick={props.onClick} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}> {numberOfItemsInCart.length} </span>
    </button>
  );
};

export default CartButton;
