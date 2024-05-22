import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function UserList(params) {

    const [childState,setChildState] = useState(false);

    function toggleState(){
        setChildState(childState^1);
        params.toggle(childState);
        return;
    }

  return (
    <React.Fragment>
        <div className='signup-list'>
              <Link to='/signup' onClick={toggleState}><p>Sign Up</p></Link>
              <p>My Profile</p>
              <p>My Orders</p>
        </div>
    </React.Fragment>
  )
}
