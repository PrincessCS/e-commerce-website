import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {removeItem, clearCart} from '../../features/cart/cartSlice';
import styles from './Cart.module.css';
import NavBar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/Footer';
import ProductList from '../../features/products/ProductList';
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md"

const Cart = () => {

    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };
  

    return(
        <>

        <NavBar />

        <div className={styles.cart}>
            <div className={styles.shopping_cart}>
                <h6>Shopping Cart</h6>

            <table>
                <thead>
                <tr className={styles.table_head}>
                    <th>Item Details</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                </thead>
                
                <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td className={styles.product_detail}>
                                    <div className={styles.remove}>
                                        <img src={item.thumbnail} alt={item.title} className={styles.item_img}/>
                                        <p className={styles.remove_item}><MdOutlineDeleteOutline onClick={() => dispatch(clearCart())} className={styles.remove_btn} />REMOVE</p>
                                      </div>
                                        <div className={styles.details}>
                                            <p className={styles.item_title}>{item.title}</p>
                                            <p className={styles.item_available}>In stock</p>
                                            <img src='/images/stars.png' alt="Stars" className={styles.rating}/><p className={styles.review}>10 Reviews</p>
                                        </div>
                                    </td>
                                    <td className={styles.order_quantity}>
                                        <CiCircleMinus onClick={() => dispatch(removeItem(item.id))} />
                                        <input type="text" value={item.quantity} className={styles.quantity} />
                                        <CiCirclePlus onClick={() => dispatch(addItem(item))} />
                                    </td>
                                    <td>
                                        <p className={styles.item_price}>${(item.price * item.quantity).toFixed(2)}</p>
                                        <p className={styles.item_total}>${item.price} x {item.quantity} item(s)</p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
            </table>
            </div>

            <div className={styles.order_summary}>

            <table className={styles.summary_table}>
                        <thead>
                            <tr>
                                <th className={styles.summary}>Order Summary</th>
                                <th className={styles.summary_quantity}>{cartItems.length} item(s)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={styles.charges}>Delivery Charges</td>
                                <td className={styles.delivery_info}>Add your delivery address<br/> to checkout to <br/>see delivery charges.</td>
                            </tr>
                            <tr>
                                <td className={styles.subtotal}>Subtotal</td>
                                <td className={styles.totalprice}>${getTotalPrice()}</td>
                            </tr>
                            <tr>
                                <td className={styles.total}>Total</td>
                                <td className={styles.totalprice}>${getTotalPrice()}</td>
                            </tr>
                            <tr>
                                <td className={styles.note}>Note</td>
                                <td className={styles.note_info}>Excluding delivery charges</td>
                            </tr>
                        </tbody>
                    </table>
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

            <Footer />

      
        </>
    );
};

export default Cart;
