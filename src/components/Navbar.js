import React from 'react'
import userIcon from '../images/usericon.png'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <React.Fragment>
        <div className='Navbar'>
          <div className='nav-left'>
            <img src='./none' alt='logo'/>
            <p>Fullsta</p>
          </div>
          <div className='nav-mid'>
            <ul>
              <Link to='/'> <li>Home</li></Link>
              <li>About</li>
              <li>Products</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className='nav-right'>
            <Link to='/signin'> <p>Sign In</p> </Link>
            <img src={userIcon} alt='logo'/>
          </div>
        </div>
    </React.Fragment>
  )
}
