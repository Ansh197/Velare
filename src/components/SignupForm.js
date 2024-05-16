import React, { useState } from "react";
import axios from "axios";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
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
    axios.post('http://localhost:5000/formSubmit',formData);
  }

  return (
    <React.Fragment>
      <div className="formcontainer">
        <h2 className="signupHeading">Create an Account</h2>
        <div className="formDiv">
          <form className="signupForm" method="post" onSubmit={formSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={changeFormData}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={changeFormData}
              required
            />

            <label htmlFor="username">Username: <span>This username is already taken</span></label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={changeFormData}
              required
            />

            <label htmlFor="password">Password: <span>Passwords does'nt match</span></label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={changeFormData}
              required
            />

            <label htmlFor="confirmPassword">Confirm Password: <span>Passwords does'nt match</span></label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={changeFormData}
              required
            />

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
