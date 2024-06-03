import React from 'react';
import styles from './ProductCard.module.css';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {

    const navigate = useNavigate();

    const handleSelectedProduct = () => {
        navigate(`/products/${product.id}`);
    }

    return(
        <div className={styles.product_card}>

            <div className={styles.product_img} onClick={handleSelectedProduct}>
            <img src={product.thumbnail} alt={product.title} />
            <div className={styles.product_details}>
            <h5>{product.title}</h5>
            <a href='#'>{product.category}</a>
            <div className={styles.prices}>
            <h4 className={styles.price}>${product.price}</h4>
            <h4 className={styles.discount}>${product.discountPercentage}</h4>
            </div>
           
            </div>
            </div>

        </div>
    )

}

export default ProductCard;