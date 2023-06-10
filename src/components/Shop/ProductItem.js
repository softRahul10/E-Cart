import classes from './ProductItem.module.css';
import Card from '../UI/Card';

const ProductItem = (props) => {
    console.log(props);
    const { id, title, price, description } = props;

    return (
        <li className={classes.item} id={id}>
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className={classes.price}>${price.toFixed(2)}</div>
                </header>
                <p>{description}</p>
                <div className={classes.actions}>
                    <button>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
};

export default ProductItem;
