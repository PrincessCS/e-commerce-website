import React from 'react';
import styles from './Footer.module.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaTwitter} from "react-icons/fa6";


function Footer(){

    return(

        <>
        <div className={styles.top_footer}>
            <div className={styles.logo}>
            <p>Bandage</p>
            </div>
            
            <div className={styles.social}>
                <FaFacebook className={styles.social_btn}/>
                <FaInstagram className={styles.social_btn} />
                <FaTwitter className={styles.social_btn}  />

            </div>
        </div>
        <div className={styles.footer}>
            <div className={styles.flex_one}> 
            <div className={styles.company_info}>
                <h5 className={styles.link_header}>Company Info</h5>
                <a href="#">About Us</a>
                <a href="#">Carrier</a>
                <a href="#">We are Hiring</a>
                <a href="#">Blog</a>
            </div>

            <div className={styles.legal}>
                <h5 className={styles.link_header}>Legal</h5>
                <a href="#">About Us</a>
                <a href="#">Carrier</a>
                <a href="#">We are Hiring</a>
                <a href="#">Blog</a>
                
            </div>
            </div>

            <div className={styles.flex_two}>
            <div className={styles.features}>
                <h5 className={styles.link_header}>Features</h5>
                <a href="#">Business Marketing</a>
                <a href="#">User Analytic</a>
                <a href="#">Live Chat</a>
                <a href="#">Unlimited Support</a>
            </div>

            <div className={styles.resources}>
                <h5 className={styles.link_header}>Resources</h5>
                <a href="#">IOS & Android</a>
                <a href="#">Watch a Demo</a>
                <a href="#">Customers</a>
                <a href="#">API</a>
            </div>
            </div>

            <div className={styles.contact}>
                <p className={styles.link_header}>Get In Touch</p>
                <form>
                    <input type='email' placeholder='Your Email' />
                    <button className={styles.subscribe_btn}>Subscribe</button>
                </form>
            </div>

        </div>

        <div className={styles.bottom_text}>
            <p className={styles.footer_note}>Made With Love By FinLand All Right Reserved</p>
        </div>
        
        
        </>
        

        
        
    );
}

export default Footer;