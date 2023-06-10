import { useDispatch } from 'react-redux';

import { cartSliceActions } from '../../store/cartSlice';

import classes from './CartItem.module.css';

const CartItem = (props) => {
    const { id, title, quantity, total, price } = props.item;

    const dispatch = useDispatch();

    const itemIncrementHandler = () => {
        dispatch(cartSliceActions.increaseQuantity({ id:id}));
    }

    return (
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${total.toFixed(2)}{' '}
                    <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button>-</button>
                    <button onClick={itemIncrementHandler}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
