import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SignupForm() {
  const [errorMessage, setErrorMessage] = useState([]);
  const [passMatch, setPassMatch] = useState("");
  const [userCheck, setUserCheck] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // const [name,setName] = useState('');
  // const [email,setEmail] = useState('');
  // const [username,setUsername] = useState('');
  // const [password,setPassword] = useState('');

  const changeFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function checkPassword() {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    var currentErrors = [];
    var curPassword = formData.password;
    var uppercase = false;
    var symbol = false;
    var lencheck = false;

    if(formData.password!==formData.confirmPassword)
      {
        setPassMatch("Passwords does'nt match");
      }

    if (curPassword.length >= 8) {
      lencheck = true;
    } else {
      currentErrors.push("Password must contain at least 8 characters");
    }
    if (/[A-Z]/.test(curPassword)) {
      uppercase = true;
    } else {
      currentErrors.push(
        "Password must contain at least 1 uppercase character"
      );
    }
    if (specialChars.test(curPassword)) {
      symbol = true;
    } else {
      currentErrors.push("Password must contain at least 1 special character");
    }
    setErrorMessage(currentErrors);
    return uppercase && symbol && lencheck ;
  }

  const formSubmit = (e) => {
    e.preventDefault();
    
    var isok = checkPassword();
    if (isok) {
      axios.post("http://localhost:5000/signup", formData);
      console.log("Form submitted successfully");
    } else {
      console.log("Something wrong in the form");
    }
  };

  return (
    <React.Fragment>
      <div className="formcontainer">
        <h2 className="signupHeading">Create an Account</h2>
        <div className="formDiv">
          <form className="signupForm" method="post" onSubmit={formSubmit}>
            <div className="formInputDiv">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={changeFormData}
                required
              />
            </div>
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
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={changeFormData}
                required
              />
              <div className="errorField">
                
              <ul>
                {errorMessage.map((msg) => (
                    <li>{msg}</li>
                ))}
                </ul>
              </div>
            </div>
            <div className="formInputDiv">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={changeFormData}
                required
              />
              <div className="errorField">
                <ul>
                  <li>{passMatch}</li>
                </ul>
              </div>
            </div>

              <input type="submit" value="Sign Up" />
            <div className="form-bottom">Already have an account ? <Link to='http://localhost:3000/login'><a>Login here</a></Link></div>
          </form>
        </div>
      </div>
      </React.Fragment>
  );
}
