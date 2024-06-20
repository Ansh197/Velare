import React, { useState } from 'react'
import userIcon from '../images/usericon.png'
import axios from 'axios'
import { Link } from 'react-router-dom';
import logo from '../images/png/logo-no-background.png'
import shoppingbag from '../images/cart.png'
import UserList from './UserList';

export default function Navbar(props) {

  const [showUserOptions , setUserOptions] = useState(false); 

  function toggleUserOptions(){
    setUserOptions(showUserOptions^1);
    return;
  };

  return (
    <React.Fragment>
      <div className='discount-tab'>Upto 30% Off. Shop Now. Free Shipping.</div>
        <div className='Navbar'>
          <div className='nav-left'>
            <div className='logo-container'>
            <img src={logo}  alt='logo'/>
            </div>
            <ul>
              <Link to='/'><li>Home</li></Link>
              <Link to='/products'><li>All Products</li></Link>
              <Link to='/homeDecor'><li>Home Decor</li></Link>
              <Link to='/seating'><li>Seating</li></Link>
              <Link to='/bedroom'><li>Bedroom</li></Link>
              <Link to='/office'><li>Office</li></Link>
            </ul>
          </div>
          <div className='nav-right'>
            <Link to='/cart'><img src={shoppingbag} alt='cart'/></Link>
            <div>
              <img src={userIcon} alt='logo' onClick={toggleUserOptions}/>
              {showUserOptions ? <UserList toggle={setUserOptions} loginInfo={props.loginInfo} setLoginInfo={props.setLoginInfo}/> : null}
            </div>
          </div>
        </div>
    </React.Fragment>
  )
}
