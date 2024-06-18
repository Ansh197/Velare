import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SignupForm(props) {

  const initialRender = useRef(true);
  const [error,setError] =useState('');
  const [userData,setUserData] = useState({
    isLoggedIn:false,
    userid: '',
    username:'',
    email:''
});

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  useEffect(()=>{
    console.log(userData);
    props.setParentUserData(userData);
    if(initialRender.current)
    {
      initialRender.current=false;
    }
    else
    {
      userData.isLoggedIn==true ? setError('') : setError('You have entered wrong email or password');
    }
  },[userData])

  const changeFormData = (e)=>{
    const {name,value} = e.target;
    setFormData(prevState=>({
      ...prevState,
      [name]: value,
    }));
  };

  async function formSubmit(e){
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/auth/login',formData,{withCredentials:true});
    setUserData(response.data);
  }

  return (
    <React.Fragment>
      <div className="formcontainer">
        <h2 className="signupHeading">Sign In to your Account</h2>
        <div className="formDiv">
          <form className="signupForm" method="post" onSubmit={formSubmit}>

            <div className="formInputDiv">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={changeFormData}
                required
              />
            </div>

            <div className="formInputDiv">
              <label htmlFor="password"><span>Password</span> <a>Forgot Password?</a></label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={changeFormData}
                required
              />
            </div>

            <div className="LoginError">{error}</div>

            <input type="submit" value="Submit" />
            <div className="form-bottom">Don't have an account yet ? <Link to='http://localhost:3000/signup'><a>Sign Up here</a></Link></div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
