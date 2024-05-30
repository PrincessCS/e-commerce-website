import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetAllProductsQuery } from '../../features/products/productsApi';
import styles from './Products.module.css';



const Products = () => {
    const {id} = useParams();
    const {data, error, isLoading} = useGetAllProductsQuery(id);

    if(isLoading) return<div>Loading...</div>
    if(error) return<div>Error</div>

    return(
        <div className={styles.products}>
            <img src={data.thumbnail} alt={data.title} />
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <p>{data.price}</p>
        </div>
    );
};

export default Products;