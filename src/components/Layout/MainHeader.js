import { useDispatch } from 'react-redux';

import { cartShowActions } from '../../store/cartShowSlice';

import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';



const MainHeader = (props) => {

    const dispatch = useDispatch();

    const toggleCartHandler = () => {
        dispatch(cartShowActions.toggle());
    }

    return (
        <header className={classes.header}>
            <h1>ReduxCart</h1>
            <nav>
                <ul>
                    <li>
                        <CartButton onClick={toggleCartHandler} />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;
