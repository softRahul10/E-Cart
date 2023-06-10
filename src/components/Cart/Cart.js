import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartItems = useSelector((state) => state.data.item);

    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                {cartItems.length === 0 ? (
                    <h2> is Empty!</h2>
                ) : (
                    cartItems.map((cartItem) => (
                        <CartItem
                            key={cartItem.id}
                            item={{
                                title: cartItem.name,
                                quantity: cartItem.quantity,
                                total: cartItem.totalPrice,
                                price: cartItem.price,
                            }}
                        />
                    ))
                )}
            </ul>
        </Card>
    );
};

export default Cart;
