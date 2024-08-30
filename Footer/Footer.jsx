import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
 

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Experience the convenience and delight of gourmet meals delivered right to your doorstep. 
                With our easy-to-use app, browse menus, place orders, and track deliveries in real-time,
                ensuring high-quality meals are just a few taps away.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>

            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home </li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>


                </ul>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+11 54 63 897</li>
                    <li>contact@tomato.com</li>
                </ul>

            </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved.</p>
      
    </div>
  )
}

export default Footer
