import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({product}) => {

    return(
        <div className={styles.product_card}>

            <div className={styles.product_img}>
            <img src={product.thumbnail} alt={product.title} />
            <div className={styles.product_details}>
            <p>{product.title}</p>
            <p>{product.category}</p>
            <p>{product.discountPercentage}</p>
            <p>{product.price}</p>
            </div>
            </div>

        </div>
    )

}

export default ProductCard;