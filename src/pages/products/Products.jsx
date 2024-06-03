import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartSlice';
import { useGetProductByIdQuery } from '../../features/products/productsApi';
import NavBar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/Footer';
import ProductList from '../../features/products/ProductList';
import styles from './Products.module.css';
import { BsCart, BsEyeFill } from "react-icons/bs";
import { CiHeart} from "react-icons/ci";



const Products = () => {
    const {id} = useParams();
    const {data, error, isLoading} = useGetProductByIdQuery(id);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = () =>{
        dispatch (addItem(data));
        navigate(`/cart/${data.id}`);

    }

    if(isLoading) return<div>Loading...</div>
    if(error) return<div>Error</div>

    return(
        <>
        <NavBar />
        <div className={styles.products}>
            <div className={styles.product_details}>
                <div className={styles.selected_product}>
            <img src={data.thumbnail} alt={data.title} />
            </div>
        

        <div className={styles.selectedproduct_detail}>
            <h4>{data.title}</h4>
            <h5>{data.rating}</h5>
            <h5>${data.price}</h5>
            <h6>Availability: {data.stock}</h6>

            <hr></hr>
            <div className={styles.colors}>
            <img src='/images/product-colors.png' alt='' />
            </div>
            
            <div className={styles.select}>
            <div>
                <button className={styles.select_btn} onClick={handleAddToCart}>Select Options</button>
            </div>

            <div className={styles.select_icons}>
                <BsCart className={styles.select_icon}/>
                <CiHeart className={styles.select_icon} />
                <BsEyeFill className={styles.select_icon}/>
            </div>
            </div>
        </div>

        </div>

       

        <div className={styles.middle}>
            <div className={styles.middle_links}>
                <a href="#">Description</a>
                <a href="#">Additional Information</a>
                <a href="#">Reviews <span>(0)</span></a>
            </div>

            <div className={styles.product_description}>
                <div className={styles.description}>
                    <h5 className={styles.description_header}>the quick fox jumps over</h5>
                    <h6 className={styles.description_one}>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. <br/>
                    RELIT official consequent door ENIM RELIT Mollie. Excitation venial<br/>
                    consequent sent nostrum met</h6>

                    <h5 className={styles.description_two}>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. <br/>
                    RELIT official consequent door ENIM RELIT Mollie. Excitation venial<br/>
                    consequent sent nostrum met</h5>

                </div>
                
                <div className={styles.description_img}>
                    <img src='/images/unsplash_QANOF9iJlFs.png' alt='description-img' />
                </div>

            </div>

        </div>

        <div className={styles.bestseller}>
            <h3>BESTSELLER PRODUCTS</h3>
            <ProductList />
        </div>

        <div className={styles.clients}>
            <div>
            <img src="/images/col-md-2.png" alt="client-logo" />
            </div>
            <div>
            <img src="/images/col-md-2 (1).png" alt="client-logo" />
            </div>
            <div>
            <img src="/images/col-md-2 (2).png" alt="client-logo" />
            </div>
            <div>
            <img src="/images/col-md-2 (3).png" alt="client-logo" />
            </div>
            <div>
            <img src="/images/col-md-2 (4).png" alt="client-logo" />
            </div>
            <div>
            <img src="/images/col-md-2 (5).png" alt="client-logo" />
            </div>
           
        </div>

        <div>
            <Footer />
        </div>
        </div>


        </>
    );
};

export default Products;