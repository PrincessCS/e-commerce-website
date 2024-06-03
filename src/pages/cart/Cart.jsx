import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, addItem, clearCart } from '../../features/cart/cartSlice';
import styles from './Cart.module.css';
import NavBar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/Footer';
import ProductList from '../../features/products/ProductList';
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";


const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <>
            <NavBar />

            <div className={styles.cart}>

                <div className={styles.shopping_cart}>
                    <div className={styles.cart_title}>
                    <h2>Shopping Cart</h2>
                    </div>

                    <div className={styles.cart_header}>
                    <h3>Item Details</h3>
                    <h3>Quantity</h3>
                    <h3>Price</h3>
                    </div>

                   {cartItems.map((item) =>(
                    <div key={item.id} className={styles.cart_details}>
                        <div className={styles.product_detail}>
                        <img src={item.thumbnail} alt={item.title} className={styles.item_img} />
                        <p className={styles.remove_item}><MdOutlineDeleteOutline onClick={() => dispatch(clearCart())} className={styles.remove_btn} />REMOVE</p>
                        </div>

                        <div className={styles.details}>
                            <p className={styles.item_title}>{item.title}</p>
                            <p className={styles.item_available}>In stock</p>
                            <div className={styles.rating_reviews}>
                            <img src='/images/stars.png' alt="Stars" className={styles.rating} /><h5 className={styles.review}>10 Reviews</h5>
                            </div>
                        </div>

                        <div className={styles.order_quantity}>
                                <CiCircleMinus onClick={() => dispatch(removeItem(item.id))} className={styles.minus} />
                                <input type="text" value={item.quantity} readOnly className={styles.quantity} />
                                <CiCirclePlus onClick={() => dispatch(addItem(item))} className={styles.plus} />
                        </div>

                        <div>
                            <p className={styles.item_price}>${(item.price * item.quantity).toFixed(2)}</p>
                            <p className={styles.item_total}>${item.price} x {item.quantity} item(s)</p>
                        </div>


                    </div>
                   ))}
                </div>

                <div className={styles.order_summary}>
                 <div className={styles.summary}>
                <h3>Order Summary</h3>
                <h3>{cartItems.length} item(s)</h3>
                </div>

                <div className={styles.delivery}>
                <h3 className={styles.charges}>Delivery Charges</h3>
                 <h3 className={styles.delivery_info}>Add your delivery address<br /> to checkout to <br />see delivery charges.</h3>
                </div>
                <hr />

                <div className={styles.subtotal}>
                <h3 className={styles.subtotal_detail}>Subtotal</h3>
                <h3 className={styles.totalprice}>${getTotalPrice()}</h3>
                </div>

                <hr/>

                <div className={styles.total}>
                <h3 className={styles.total_detail}>Total</h3>
                <h3 className={styles.totalprice}>${getTotalPrice()}</h3>
                </div>

                <hr/>

                <div className={styles.note}>
                <h3 className={styles.note_detail}>Excluding Delivery Charges</h3>
        
                </div>

                <div className={styles.checkout}>
                        <button className={styles.checkout_btn}>Proceed To Checkout</button>

                        <div className={styles.payment_options}>
                            <img src='/images/Paystack - png.png' alt='paystack' />
                            <img src='/images/Mastercard - png.png' alt='mastercard' />
                            <img src='/images/Visa Inc. - png.png' alt='visa' />
                        </div>
                    </div>

               </div>

            </div>


         
            <div className={styles.product_list}>
            <h3>PRODUCTS RELATED TO ITEMS IN YOUR CART</h3>
            <ProductList />
            </div>

            <div>
            <Footer />
            </div>

        </>

    );

}

export default Cart;