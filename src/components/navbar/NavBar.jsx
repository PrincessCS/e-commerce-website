import React from 'react';
import styles from './NavBar.module.css';
import { BsTelephone } from "react-icons/bs";
import { FaInstagram, FaRegUser, FaTwitter} from "react-icons/fa6";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { CiSearch, CiHeart} from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { BsCart } from "react-icons/bs";

function NavBar(){
    return(
        <>
        <div>
        <header className={styles.header}>
            <div  className={styles.name}>   
            <BsTelephone />  <p>(225)- 555-0118</p>
            <div className={styles.email}>
            <TfiEmail /> <p>michelle.rivera@example.com</p>
            </div>
            </div>
            

            <div className={styles.discount}>
            
            <p>Follow Us and get a chance to win 80% off</p>
            </div>


            <div className={styles.social}>
            <p>Follow Us :  </p>
            <FaInstagram className={styles.social_btn}/>
            <FaYoutube  className={styles.social_btn}/>
            <FaFacebook  className={styles.social_btn} />
            <FaTwitter  className={styles.social_btn} />

            </div>

        </header>

        <navbar className={styles.navbar}>
            <div className={styles.nav_body}>
            <h1 className={styles.logo}>Bandage</h1>
            <div className={styles.nav_links}>
            <a href="">Home</a>
            <a href="">Shop</a>
            <a href="">About</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
            <a href="">Pages</a>
            </div>
            </div>

            <div className={styles.user_link}>
                <a href=""><FaRegUser />Login/Register</a>
                <a href=""><CiSearch /></a>
                <a href=""><BsCart /></a>
                <a href=""><CiHeart /></a>
            </div>

        </navbar>

        </div>
        
        
        </>
    )
}


export default NavBar;