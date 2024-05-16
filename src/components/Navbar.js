import React from 'react'
import userIcon from '../images/usericon.png'

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
              <li>Home</li>
              <li>About</li>
              <li>Products</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className='nav-right'>
            <p>Sign In</p>
            <img src={userIcon} alt='logo'/>
          </div>
        </div>
    </React.Fragment>
  )
}
