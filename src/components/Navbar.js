import React from 'react'
import userIcon from '../images/usericon.png'
import axios from 'axios'
import { Link } from 'react-router-dom';
import logo from '../images/png/logo-no-background.png'
import shoppingbag from '../images/cart.png'

export default function Navbar() {
  return (
    <React.Fragment>
      <div className='discount-tab'>Upto 30% Off. Shop Now. Free Shipping.</div>
        <div className='Navbar'>
          <div className='nav-left'>
            <div className='logo-container'>
            <img src={logo}  alt='logo'/>
            {/* <p>Velaré</p>  */}
            </div>
            <ul>
              <li>All Products</li>
              <li>Home Decor</li>
              <li>Seating</li>
              <li>Bedroom</li>
              <li>Office</li>
            </ul>
          </div>
          <div className='nav-right'>
            <img src={shoppingbag} alt='cart'/>
            <img src={userIcon} alt='logo'/>
          </div>
        </div>
    </React.Fragment>
  )
}
