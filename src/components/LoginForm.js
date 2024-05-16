import React, { useState } from "react";
import axios from "axios";

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
        <h2 className="signupHeading">Login</h2>
        <div className="formDiv">
          <form className="signupForm" method="post" onSubmit={formSubmit}>

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={changeFormData}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
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
