import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  // const [name,setName] = useState('');
  // const [email,setEmail] = useState('');
  // const [username,setUsername] = useState('');
  // const [password,setPassword] = useState('');

  const changeFormData = (e)=>{
    const {name,value} = e.target;
    setFormData(prevState=>({
      ...prevState,
      [name]: value,
    }));
  };

  const formSubmit = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:5000/login',formData)
    .then((res)=>{
        console.log(res.data);
    })
    .catch((err)=>{
        console.log(err);
    });
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

            <input type="submit" value="Submit" />
            <div className="form-bottom">Don't have an account yet ? <Link to='http://localhost:3000/signup'><a>Sign Up here</a></Link></div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
