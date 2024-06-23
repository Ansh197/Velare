import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext';

export default function UserList(props) {

    const {userData,setUserData} = useContext(UserContext);
    const [childState,setChildState] = useState(false);
    const [message,setMessage] = useState();
    const [url,setUrl] = useState();

    useEffect(()=>{
      userData.isLoggedIn ? setMessage('Logout') : setMessage('Sign Up');
      userData.isLoggedIn ? setUrl('/login') : setUrl('/signup');
    },[userData])

    function toggleState(){

        if(userData.isLoggedIn)
        {
          setUserData({
            isLoggedIn:false,
            userid: '',
            username:'',
            email:''
          })
        } 
        setChildState(childState^1);
        props.toggle(childState);
        return;
    }

    function myProfile(){
      setChildState(childState^1);
        props.toggle(childState);
        return;
    }

  return (
    <React.Fragment>
        <div className='signup-list'>
              <Link to={url} onClick={toggleState}><p>{message}</p></Link>
              <Link to='/myprofile' onClick={myProfile}> <p>My Profile </p></Link>
              <Link to='/orders' onClick={myProfile}><p>My Orders</p></Link>
        </div>
    </React.Fragment>
  )
}
