import React from 'react';
import styles from './Home.module.css';
import NavBar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/Footer';
import ProductList from '../../features/products/ProductList';
import { RiAlarmLine } from "react-icons/ri";
import { FaChartArea } from "react-icons/fa";
/*import Products from '../products/Products.jsx';*/


function Home(){
    return(

        <>
        <NavBar />
        <div>
            <div className={styles.img_container}>
                <div className={styles.img_div}>
               <img src='images/container.png' alt='furnitures' />
               </div>

            </div>

            <div className={styles.products}>
                <h2>Featured Products</h2>
                <h3>BESTSELLER PRODUCTS</h3>
                <p>problems trying to resolve the conflicts between</p>
            
            </div>

            <div>
                <ProductList />
            </div>

            <div className={styles.feature_div}>
                <div className={styles.feature_header}>
                <h2>Featured Products</h2>
                <h3>THE BEST SERVICES</h3>
                <p>Problems trying to resolve the conflict between</p>
                </div>

                <div className={styles.img_cards}>
                    <img src='images/card.png' alt='easy-wins' />
                    <img src='images/card (1).png' alt='concrete' />
                    <img src='images/card (2).png' alt='hack-growth' />
                </div>

            </div>

            <div className={styles.post_section}>
                <div className={styles.post_header}>
                <h6>Practice Advice</h6>
                <h3>Featured Posts</h3>
                </div>

                <div className={styles.posts}>
                    <div className={styles.card}>
                    <img src='images/fixed-height.png' alt='post-1' />
                    <a href='' className={styles.top_link}><small>Google</small></a>
                    <a href='' className={styles.top_link}><small>Trending</small></a>
                    <a href='' className={styles.top_link}><small>New</small></a>

                    <h4>Loudest a la Madison #1 (L'integral) </h4>
                    <p>We focus on ergonomics and meeting<br/> you where you work. It's only a <br/>
                    keystroke away.</p>

                    <div className={styles.date}>
                   <p> <RiAlarmLine className={styles.clock_icon}/>22nd April 2021</p>
                    <p><FaChartArea className={styles.chart_icon}/>10 comments</p>
                    </div>

                    <a className={styles.learn_more}>Learn More</a>
                    </div>

                    <div className={styles.card}>
                    <img src='images/fixed-height (1).png' alt='post-2' />
                    <a href='' className={styles.top_link}><small>Google</small></a>
                    <a href='' className={styles.top_link}><small>Trending</small></a>
                    <a href='' className={styles.top_link}><small>New</small></a>
                    

                    
                    <h4>Loudest a la Madison #1 (L'integral) </h4>
                    <p>We focus on ergonomics and meeting<br/> you where you work. It's only a <br/>
                    keystroke away.</p>

                    <div className={styles.date}>
                    <p><RiAlarmLine className={styles.clock_icon}/>22nd April 2021</p>
                    <p><FaChartArea className={styles.chart_icon}/>10 comments</p>
                    </div>

                    <a className={styles.learn_more}>Learn More</a>
                    </div>

                    <div className={styles.card}>
                    <img src='images/fixed-height (2).png' alt='post-3' />
                    <a href='' className={styles.top_link}><small>Google</small></a>
                    <a href='' className={styles.top_link}><small>Trending</small></a>
                    <a href='' className={styles.top_link}><small>New</small></a>

                    <h4>Loudest a la Madison #1 (L'integral) </h4>
                    <p>We focus on ergonomics and meeting<br/> you where you work. It's only a <br/>
                    keystroke away.</p>
                    

                    <div className={styles.date}>
                    <p><RiAlarmLine className={styles.clock_icon}/>22nd April 2021</p>
                    <p><FaChartArea className={styles.chart_icon}/>10 comments</p>
                    </div>

                    <a className={styles.learn_more}>Learn More</a>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
        
        </>
    )
}

export default Home;