import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function UserList(props) {

    const [childState,setChildState] = useState(false);
    const [message,setMessage] = useState();
    const [url,setUrl] = useState();

    useEffect(()=>{
      props.loginInfo.isLoggedIn ? setMessage('Logout') : setMessage('Sign Up');
      props.loginInfo.isLoggedIn ? setUrl('/login') : setUrl('/signup');
    },[props.loginInfo])

    function toggleState(){

        if(props.loginInfo.isLoggedIn)
        {
          props.setLoginInfo({
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

  return (
    <React.Fragment>
        <div className='signup-list'>
              <Link to={url} onClick={toggleState}><p>{message}</p></Link>
              <Link to='myprofile' onClick={toggleState}> <p>My Profile </p></Link>
              <p>My Orders</p>
        </div>
    </React.Fragment>
  )
}
