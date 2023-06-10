import ProductItem from './ProductItem';
import classes from './Products.module.css';

const fakeProducts = [
    {
        id:'p1',
        title:'School Bag',
        price: 25,
        description:"This is just a dummy product description written for testing",
    },
    {
        id:'p2',
        title:'Smartphone',
        price: 500,
        description:"This is just a dummy product description written for testing",
    },
    {
        id:'p3',
        title:'Books',
        price: 12,
        description:"This is just a dummy product description written for testing",
    },
    {
        id:'p4',
        title:'Makeup Products',
        price: 925,
        description:"This is just a dummy product description written for testing",
    }
];

const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                <ProductItem
                    title='Test'
                    price={6}
                    description='This is a first product - amazing!'
                />
            </ul>
        </section>
    );
};

export default Products;
