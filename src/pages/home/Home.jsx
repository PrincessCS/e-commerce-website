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
                    <div className={styles.card_content}>
                    <img src='images/bx_bxs-book-reader.png' alt='easy-wins' />
                    <h3>Easy Wins</h3>
                    <p>Get your best looking smile<br/> now!</p>
                    </div>
                    <div className={styles.card_content}>
                    <img src='images/carbon_book.png' alt='concrete' />
                    <h3>Concrete</h3>
                    <p>Defalcate is most focused in <br/>helping you discover your most<br/>
                     beautiful smile</p>
                    </div>
                    <div className={styles.card_content}>
                    <img src='images/uil_arrow-growth.png' alt='hack-growth' />
                    <h3>Hack Growth</h3>
                    <p>Overcame any hurdle or any<br/> other problem.</p>
                    </div>
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

        <div className={styles.testimonials}>
            <div className={styles.user_testimonial}>
                <h6 className={styles.testimonial_header}>What they say about us</h6>
                <div>
                <img src='images/media circle-box xs-circle.png' alt='user' className={styles.user} />
                </div>
                <div>
                <img src='images/stars.png' alt='rating' className={styles.rating}/>
                </div>
                <h6 className={styles.testimonial_body}>Slate helps you see how many more days you need to work to <br />
                  reach your financial goal.</h6>
                  <a href="" className={styles.user_link}>Regina Miles</a>
                  <h6 className={styles.user_profession}>Designer</h6>
           
            </div>

            <div className={styles.users_img}>
                <img src='images/Frame 5.png' alt='users' />

            </div>
            
        </div>

        <div className={styles.cta}>
            <div className={styles.cta_relative}>
            <img src="images/unsplash_XEmaJaM-4nE.png" alt=''/>
            <div className={styles.cta_absolute}>
                <h2 className={styles.cta_textheader}>Designing Better Experience</h2>
                <h2 className={styles.cta_texttitle}>Problems trying to resolve<br/>
                 the conflict between</h2>

                <p>Problems trying to resolve the conflict between the two major<br/>
                 classes of classical physics</p>

                 <h5>$16.48</h5>
                 <button className={styles.cta_btn}>ADD YOUR CALL TO ACTION</button>
            </div>
            </div>
        </div>

        <Footer />
        
        </>
    )
}

export default Home;