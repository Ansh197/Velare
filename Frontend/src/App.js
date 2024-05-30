import React, { useEffect, useState} from 'react';
import './App.css';
import SignupForm from './components/SignupForm';
import axios from 'axios';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Footer from './components/Footer';
import AllProducts from './components/AllProducts';
import Cart from './components/Cart';
import Checkout from './components/Checkout' 
import Profile from './components/Profile';

function App() {
  
  const [userData,setUserData] = useState({
    isLoggedIn:false,
    userid: '',
    username:'',
    email:''
  });
  
  return (
    <React.Fragment>
      <BrowserRouter>
      <Navbar  loginInfo={userData} setLoginInfo={setUserData} />
        <Routes>
          <Route exact path='/' element={<HomePage/>}></Route>
          <Route exact path='/signup' element={<SignupForm/>}></Route>
          <Route exact path='/login' element={<LoginForm setParentUserData={setUserData} />}></Route>
          <Route exact path='/products' element={<AllProducts userData={userData} />}></Route>
          <Route exact path='/cart' element={userData.isLoggedIn ? <Cart userData={userData} /> : <LoginForm setParentUserData={setUserData} />}></Route>
          <Route exact path='/checkout' element={userData.isLoggedIn ? <Checkout userData={userData} /> : <LoginForm setParentUserData={setUserData} />}></Route>
          <Route exact path='/myprofile' element={userData.isLoggedIn ? <Profile userData={userData}/> : <LoginForm setParentUserData={setUserData}/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
