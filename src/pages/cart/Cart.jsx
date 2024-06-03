import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {removeItem, clearCart} from '../../features/cart/cartSlice';
import styles from './Cart.module.css';
import NavBar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/Footer';
import ProductList from '../../features/products/ProductList';


const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    return(
        <>

        <NavBar />

        <div className={styles.cart}>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ?(
                <p>Your cart is empty</p>

            ) : (
                <div>
                    {cartItems.map((item) =>(
                        <div key ={item.id}>
                            <img src={item.thumbnail} alt={item.title} />
                            <h3>{item.title}</h3>
                            <button onClick={() => dispatch(removeItem(item.id))}>-</button>
                        </div>
                    ))}
                    <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
                </div>
            )}

            <div>
                <h2>Order Summary</h2>
            </div>

</div>



            <div className={styles.product_list}>
                <h3>PRODUCTS RELATED TO ITEMS IN YOUR CART</h3>
                <ProductList />
            </div>

            <Footer />

      
        </>
    );
};

export default Cart;
