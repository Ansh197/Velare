import React from 'react'
import logo from '../images/png/velar-high-resolution-logo-transparent.png'
import insta from '../images/icons8-instagram-48.png'
import facebook from '../images/icons8-facebook-50.png'
import youtube from '../images/icons8-youtube-24.png'
import twitter from '../images/icons8-twitter-50.png'

export default function Footer() {
  return (
    <React.Fragment>
        <div className='footerContainer'>
            <div className='footer-list-container'>
              <div className='footerLogo'><img src={logo} alt='logo' /><h3>Transforming Spaces, Elevating Lives</h3></div>
              <div className='footerProducts'>
                <h2>Our Shop</h2>
                <ul>
                  <li>All Products</li>
                  <li>Home Decor</li>
                  <li>Seating</li>
                  <li>Bedroom</li>
                  <li>Office</li>
                </ul>
              </div>
              <div className='footerProducts'>
              <h2>Social Handles</h2>
                <ul>
                  <li><img src={insta}  alt='Instagram' />Instagram</li>
                  <li><img src={youtube}  alt='Youtube' />Youtube</li>
                  <li><img src={facebook}  alt='Facebook' />Facebook</li>
                  <li><img src={twitter}  alt='Twitter' />Twitter</li>
                </ul>
              </div>
              <div className='footerProducts'>
              <h2>Contact Us</h2>
                <ul>
                  <li>Email : sharma.16ansh@gmail.com</li>
                  <li>Phone : +91 9319754197</li>
                </ul>
              </div>
            </div>
            <div className='footer-allrights'>
              <h3>All rights reserved © Velare</h3>
              <h2>Made by Ansh Sharma</h2>
            </div>
        </div>
    </React.Fragment>
  )
}
