import React, {useState} from 'react';
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
            <BsTelephone className={styles.phone_icon}/>  <h6>(225)- 555-0118</h6>
            <div className={styles.email}>
            <TfiEmail className={styles.email_icon}/> <h6>michelle.rivera@example.com</h6>
            </div>
            </div>
            

            <div className={styles.discount}>
            
            <h6>Follow Us and get a chance to win 80% off</h6>
            </div>


            <div className={styles.social}>
            <h6>Follow Us :  </h6>
            <FaInstagram className={styles.social_btn}/>
            <FaYoutube  className={styles.social_btn}/>
            <FaFacebook  className={styles.social_btn} />
            <FaTwitter  className={styles.social_btn} />

            </div>

        </header>

        <navbar className={styles.navbar}>
            <div className={styles.nav_body}>
            <h3 className={styles.logo}>Bandage</h3>
            <div className={styles.nav_links}>
            <a href="">Home</a>
            <a href="">Shop</a>
            <a href="#about">About</a>
            <a href="">Blog</a>
            <a href="#contact">Contact</a>
            <a href="#pages">Pages</a>
            </div>
            </div>

            <div className={styles.user_link}>
                <a href="" className={styles.login}><FaRegUser className={styles.user_icon}/>Login/Register</a>
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