import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {removeItem, clearCart} from '../../features/cart/cartSlice';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    return(
        <div className={styles.cart}>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ?(
                <p>Your cart is empty</p>

            ) : (
                <div>
                    {cartItems.map((item) =>(
                        <div key ={item.id}>
                            <h3>{item.title}</h3>
                            <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
                        </div>
                    ))}
                    <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
                </div>
            )}

        </div>
    );
};

export default Cart;
